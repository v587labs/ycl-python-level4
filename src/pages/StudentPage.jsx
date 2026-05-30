import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AceEditor from 'react-ace';
import Quiz from '../components/Quiz';
import CodeEditor from '../components/CodeEditor';
import ResultPanel from '../components/ResultPanel';
import usePyodide from '../hooks/usePyodide';
import { useApp } from '../context/AppContext';
import { judge } from '../utils/judge';

import 'ace-builds/src-min-noconflict/mode-python';
import 'ace-builds/src-min-noconflict/theme-github_light_default';

const isLikelyPythonLine = (line) => {
  const trimmed = line.trim();
  if (!trimmed) return false;

  return /^(#|>>>|print\(|input\(|import\s|from\s|def\s|class\s|if\s|elif\s|else:|for\s|while\s|try:|except\b|with\s|return\b|break\b|continue\b|pass\b)/.test(trimmed)
    || /^[A-Za-z_]\w*\s*=/.test(trimmed)
    || /^[A-Za-z_]\w*\s*\(/.test(trimmed)
    || /^[A-Za-z_]\w*\.[A-Za-z_]\w*\(/.test(trimmed);
};

const parseHintBlocks = (hint) => {
  const lines = hint.split('\n');
  const blocks = [];
  let current = null;

  const pushCurrent = () => {
    if (!current) return;
    if (current.type === 'code') {
      current.lines = current.lines.join('\n').replace(/\n+$/g, '').split('\n');
    }
    if (current.lines.some(line => line.trim())) {
      blocks.push(current);
    }
    current = null;
  };

  lines.forEach((line, index) => {
    const nextCode = lines.slice(index + 1).find(nextLine => nextLine.trim()) || '';
    const isCode = isLikelyPythonLine(line);
    const isBlankInsideCode = !line.trim() && current?.type === 'code' && isLikelyPythonLine(nextCode);

    if (isCode || isBlankInsideCode) {
      if (current?.type !== 'code') {
        pushCurrent();
        current = { type: 'code', lines: [] };
      }
      current.lines.push(line);
      return;
    }

    if (!line.trim()) {
      pushCurrent();
      return;
    }

    if (current?.type !== 'text') {
      pushCurrent();
      current = { type: 'text', lines: [] };
    }
    current.lines.push(line);
  });

  pushCurrent();
  return blocks;
};

function ChallengeDescription({ description }) {
  const blocks = description
    .split(/\n{2,}/)
    .map(block => block.trim())
    .filter(Boolean);

  return (
    <div className="challenge-copy">
      {blocks.map((block, index) => (
        <p key={index}>{block}</p>
      ))}
    </div>
  );
}

function ChallengeHint({ hint }) {
  const blocks = parseHintBlocks(hint);

  return (
    <div className="challenge-hint">
      <strong>提示</strong>
      <div className="challenge-hint-content">
        {blocks.map((block, index) => (
          block.type === 'code' ? (
            <ReadOnlyHintCode key={index} code={block.lines.join('\n')} index={index} />
          ) : (
            <p key={index} className="hint-text">
              {block.lines.join('\n')}
            </p>
          )
        ))}
      </div>
    </div>
  );
}

function ReadOnlyHintCode({ code, index }) {
  const lineCount = Math.max(code.split('\n').length, 2);
  const editorHeight = Math.min(Math.max(lineCount * 22 + 18, 86), 220);

  return (
    <div className="hint-code-editor" aria-label="提示代码，只读">
      <AceEditor
        value={code}
        mode="python"
        theme="github_light_default"
        name={`hint-code-preview-${index}`}
        width="100%"
        height={`${editorHeight}px`}
        fontSize={13}
        lineHeight={22}
        readOnly
        showPrintMargin={false}
        showGutter
        highlightActiveLine={false}
        wrapEnabled
        className="hint-ace-editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          displayIndentGuides: false,
          highlightGutterLine: false,
          showFoldWidgets: false,
          showLineNumbers: true,
          tabSize: 4,
          useSoftTabs: true,
          useWorker: false
        }}
      />
    </div>
  );
}

/**
 * 学生页组件
 * 绿色学生色调 + 双栏布局 + 精致进度追踪
 */
function StudentPage({ lesson, onComplete }) {
  const { student } = lesson;
  const { updateProgress, getProgress } = useApp();

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [codingCompleted, setCodingCompleted] = useState(false);
  const [codingResults, setCodingResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const { runCode, isLoading } = usePyodide();
  const lessonProgress = getProgress(lesson.id);

  // 从 localStorage 恢复进度状态
  useEffect(() => {
    const lessonProgress = getProgress(lesson.id);
    if (lessonProgress) {
      if (lessonProgress.quizScore !== undefined) {
        setQuizScore(lessonProgress.quizScore);
      }
      if (lessonProgress.quizCompleted) {
        setQuizCompleted(true);
      }
      if (lessonProgress.codingPassed) {
        setCodingCompleted(true);
      }
    }
  }, [lesson.id, lessonProgress]);

  // 编程题模板代码
  const getTemplateCode = () => {
    const challenge = student.codingChallenge;
    if (challenge.starterCode) {
      return challenge.starterCode;
    }

    const testCases = student.codingChallenge.testCases || [];
    const hasInput = testCases.some(tc => tc.input && tc.input.trim());

    switch (challenge.type) {
      case 'string':
        if (hasInput) {
          return `# 字符串处理练习
# 请根据题目要求编写代码

# 获取输入
name = input()

# 输出格式：我叫xxx
print("Hello, World!")
`;
        }
        return `# 字符串处理练习
# 请根据题目要求编写代码

print("Hello, World!")
`;
      case 'math':
        return `# 数学计算练习
# 请根据题目要求编写代码

import math

# 获取输入
r = float(input())

# 计算圆面积并保留2位小数
area = math.pi * r * r
print(round(area, 2))
`;
      case 'for':
        return `# for 循环练习
# 请根据题目要求编写代码

# 获取输入
n = int(input())

# 计算 1 到 n 之间所有奇数的和
total = 0
for i in range(1, n + 1):
    if i % 2 == 1:
        total += i

print(total)
`;
      case 'if':
        return `# if 分支练习
# 请根据题目要求编写代码

# 获取输入
score = int(input())

# 根据分数输出等级
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 60:
    print("C")
else:
    print("D")
`;
      case 'comprehensive':
        return `# 综合应用练习
# 请根据题目要求编写代码

# 获取输入
s = input()

# 统计字母数量
letters = sum(1 for c in s if c.isalpha())
digits = sum(1 for c in s if c.isdigit())
others = len(s) - letters - digits

# 输出结果
print(f"letters: {letters}")
print(f"digits: {digits}")
print(f"others: {others}")
`;
      default:
        return '# 请编写代码\n\n';
    }
  };

  const templateCode = getTemplateCode();
  const initialDraftCode = useMemo(() => {
    const savedProgress = getProgress(lesson.id);
    return typeof savedProgress?.draftCode === 'string' ? savedProgress.draftCode : '';
  }, [lesson.id]);

  const handleCodeChange = (code) => {
    updateProgress(lesson.id, {
      draftCode: code,
      draftUpdatedAt: new Date().toISOString()
    });
  };

  // 处理选择题完成
  const handleQuizComplete = (score, earnedPoints = 0, quizAnswers = []) => {
    setQuizScore(score);
    setQuizCompleted(true);

    updateProgress(lesson.id, {
      quizScore: score,
      quizCompleted: true,
      quizEarnedPoints: earnedPoints,
      quizAnswers
    });

    if (onComplete) {
      onComplete({ quizScore: score });
    }
  };

  // 处理代码运行（只看输出，不判题）
  const handleCodeRun = async (result) => {
    const runRecord = {
      success: result.success,
      output: result.success ? result.output : null,
      error: result.success ? null : (result.error || '运行失败'),
      code: result.code || '',
      ranAt: new Date().toISOString()
    };

    setCodingResults([{
      label: '运行',
      passed: runRecord.success,
      expected: null,
      actual: runRecord.output,
      error: runRecord.error
    }]);
    setShowResults(true);
    setCodingCompleted(false);

    updateProgress(lesson.id, {
      lastRun: runRecord,
      codingCompleted: false
    });
  };

  // 处理交卷（进行判题）
  const handleSubmit = async (result) => {
    const testCases = student.codingChallenge.testCases || [];

    const { results, allPassed } = await judge(
      async (code, inputs) => {
        return await runCode(code, inputs || []);
      },
      result.code || '',
      testCases
    );

    setCodingResults(results);
    setShowResults(true);
    setCodingCompleted(allPassed);

    if (allPassed) {
      updateProgress(lesson.id, {
        codingPassed: true,
        codingCompleted: true,
        codingResults: results,
        submittedCode: result.code || '',
        codingSubmittedAt: new Date().toISOString(),
        completed: true,
      });

      if (onComplete) {
        onComplete({
          quizScore,
          codingPassed: true
        });
      }
    } else {
      updateProgress(lesson.id, {
        codingPassed: false,
        codingCompleted: true,
        codingResults: results,
        submittedCode: result.code || '',
        codingSubmittedAt: new Date().toISOString()
      });
    }
  };

  // 计算最终得分
  const finalScore = quizCompleted
    ? Math.round(quizScore * 0.4 + (codingCompleted ? 100 : 0) * 0.6)
    : null;

  return (
    <div className="student-shell animate-fade-up">
      {/* 学习目标 */}
      <div className="student-objectives">
        <div>
          <span className="section-kicker">Lesson Goal</span>
          <h3>本课目标</h3>
        </div>
        <ul>
          {lesson.teacher.objectives.slice(0, 2).map((obj, i) => (
            <li key={i}>
              <span>{i + 1}</span>
              {obj}
            </li>
          ))}
        </ul>
      </div>

      {/* 完成状态 */}
      {quizCompleted && codingCompleted && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="completion-card"
        >
          <h2 className="text-2xl font-bold mb-2">恭喜完成本课学习！</h2>
          <p>
            选择题得分：{quizScore}% · 编程题：全部通过
          </p>
          <div className="completion-stats">
            <div>
              <strong>{quizScore}%</strong>
              <span>选择题</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>编程题</span>
            </div>
            <div>
              <strong>{finalScore}%</strong>
              <span>综合得分</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* 内容区域 */}
      <div className="student-workspace">

        {/* 选择题 */}
        <section className="student-section quiz-section">
          <div className="section-heading">
            <h2>
              <span className="section-dot teal"/>
              选择题
            </h2>
            {quizCompleted && (
              <span className="status-pill success">已完成 {quizScore}%</span>
            )}
          </div>

          <Quiz
            quizzes={student.quizzes}
            onComplete={handleQuizComplete}
          />
        </section>

        {/* 编程题 */}
        <section className="student-section coding-section">
          <div className="section-heading">
            <h2>
              <span className="section-dot blue"/>
              编程题
            </h2>
            {codingCompleted && (
              <span className="status-pill success">已通过</span>
            )}
          </div>

          <div className="coding-layout">
            {/* 左侧：题目与提示 */}
            <div className="coding-brief">
              {lesson.visual && (
                <figure className="lesson-visual-hero">
                  <img src={lesson.visual.src} alt={lesson.visual.alt} loading="lazy" decoding="async" />
                  <figcaption>{lesson.visual.caption}</figcaption>
                </figure>
              )}
              <h3>
                <span/>
                {student.codingChallenge.title}
              </h3>
              <ChallengeDescription description={student.codingChallenge.description} />
              {student.codingChallenge.hint && (
                <ChallengeHint hint={student.codingChallenge.hint} />
              )}
            </div>

            {/* 右侧：编辑器 */}
            <div className="coding-editor-pane">
              <CodeEditor
                template={templateCode}
                initialCode={initialDraftCode}
                onCodeChange={handleCodeChange}
                onRun={handleCodeRun}
                onSubmit={handleSubmit}
                language="python"
                compact
              />

              {showResults && (
                <ResultPanel
                  results={codingResults}
                  allPassed={codingCompleted}
                />
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Pyodide 加载提示 */}
      {isLoading && (
        <div className="fixed bottom-24 right-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-sm z-50 border border-gray-700">
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          <span>Pyodide 加载中，请稍候...</span>
        </div>
      )}
    </div>
  );
}

export default StudentPage;
