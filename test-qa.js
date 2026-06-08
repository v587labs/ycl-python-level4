/**
 * YCL Python 四级教学课件 - QA 测试
 * 验证课程结构、内容边界、判题工具和每课 starter code。
 */

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import lessons from './src/data/lessons.js';
import * as judgeModule from './src/utils/judge.js';
import { buildProgressExport } from './src/utils/exportData.js';

const EXPECTED_TOTAL = 31;
const EXPECTED_MAIN = 15;
const EXPECTED_EXTENDED = 16;

const failures = [];

function check(name, passed, detail = '') {
  const mark = passed ? 'PASS' : 'FAIL';
  console.log(`[${mark}] ${name}${detail ? ` - ${detail}` : ''}`);
  if (!passed) failures.push(`${name}${detail ? `: ${detail}` : ''}`);
}

function normalize(value) {
  return String(value ?? '').trim();
}

function validateCourseShape() {
  check('课时总数', lessons.length === EXPECTED_TOTAL, `${lessons.length}/${EXPECTED_TOTAL}`);

  const mainCount = lessons.filter(lesson => lesson.type === 'main').length;
  const extendedCount = lessons.filter(lesson => lesson.type === 'extended').length;
  check('主线课时数量', mainCount === EXPECTED_MAIN, `${mainCount}/${EXPECTED_MAIN}`);
  check('拓展课时数量', extendedCount === EXPECTED_EXTENDED, `${extendedCount}/${EXPECTED_EXTENDED}`);

  const ids = lessons.map(lesson => lesson.id);
  const sequential = ids.every((id, index) => id === index);
  check('课时 id 连续', sequential, ids.join(', '));

  const structureIssues = [];
  lessons.forEach((lesson) => {
    const prefix = `#${lesson.id} ${lesson.title || '(无标题)'}`;
    if (!lesson.title) structureIssues.push(`${prefix}: 缺少 title`);
    if (!lesson.chapter) structureIssues.push(`${prefix}: 缺少 chapter`);
    if (!['main', 'extended'].includes(lesson.type)) structureIssues.push(`${prefix}: type 应为 main/extended`);
    if (!Array.isArray(lesson.examTopics) || lesson.examTopics.length === 0) structureIssues.push(`${prefix}: 缺少 examTopics`);
    if (!Array.isArray(lesson.teacher?.objectives) || lesson.teacher.objectives.length === 0) structureIssues.push(`${prefix}: 缺少 teacher.objectives`);
    if (!Array.isArray(lesson.teacher?.concepts) || lesson.teacher.concepts.length === 0) structureIssues.push(`${prefix}: 缺少 teacher.concepts`);
    if (!Array.isArray(lesson.teacher?.commonMistakes) || lesson.teacher.commonMistakes.length === 0) structureIssues.push(`${prefix}: 缺少 teacher.commonMistakes`);
    if (!Array.isArray(lesson.student?.quizzes) || lesson.student.quizzes.length === 0) structureIssues.push(`${prefix}: 缺少 student.quizzes`);

    lesson.student?.quizzes?.forEach((quiz, index) => {
      if (!Array.isArray(quiz.options) || quiz.options.length < 2) {
        structureIssues.push(`${prefix}: 第${index + 1}题选项不足`);
      }
      if (!Number.isInteger(quiz.answer) || quiz.answer < 0 || quiz.answer >= (quiz.options?.length ?? 0)) {
        structureIssues.push(`${prefix}: 第${index + 1}题答案索引无效`);
      }
    });

    const challenge = lesson.student?.codingChallenge;
    if (!challenge) {
      structureIssues.push(`${prefix}: 缺少 codingChallenge`);
      return;
    }
    if (!challenge.starterCode) structureIssues.push(`${prefix}: 编程题缺少 starterCode`);
    if (!Array.isArray(challenge.testCases) || challenge.testCases.length === 0) structureIssues.push(`${prefix}: 编程题缺少 testCases`);
  });

  check('课程数据结构完整', structureIssues.length === 0, structureIssues.slice(0, 5).join(' | '));
}

function validateContentBoundaries() {
  const content = JSON.stringify(lessons);
  const stalePatterns = [
    { pattern: /七级/, label: '拓展课不应直接标成七级范围' },
    { pattern: /孩子能能做/, label: '文案不应出现“孩子能能做”' },
    { pattern: /全部12课/, label: '不应继续使用“全部12课”表述' },
    { pattern: /恭喜你完成了全部12课/, label: '第12课不应使用奖励型诊断题' }
  ];

  stalePatterns.forEach(({ pattern, label }) => {
    check(label, !pattern.test(content));
  });
}

function validateVisualAssets() {
  const visualLessons = lessons.filter(lesson => lesson.visual);
  check('全部课时已配置图片', visualLessons.length === lessons.length, `${visualLessons.length}/${lessons.length}`);

  const uniqueVisualCount = new Set(visualLessons.map(lesson => lesson.visual.src)).size;
  check('课程图片足够丰富', uniqueVisualCount >= 20, `${uniqueVisualCount} 张不同图片`);

  const missingAssets = visualLessons
    .map(lesson => lesson.visual.src)
    .filter((src, index, all) => all.indexOf(src) === index)
    .filter(src => !existsSync(`public${src}`));

  check('课程图片文件存在', missingAssets.length === 0, missingAssets.join(', '));
}

function validateJudgeExports() {
  const requiredExports = [
    'runTestCases',
    'judge',
    'generateErrorReport',
    'calculateScore',
    'normalizeOutput',
    'compareOutput'
  ];

  const missing = requiredExports.filter(name => typeof judgeModule[name] !== 'function');
  check('judge.js 导出完整', missing.length === 0, missing.join(', '));
  check('compareOutput 会 trim 首尾空白', judgeModule.compareOutput('Hello', '  Hello  ') === true);
  check('normalizeOutput 处理空值', judgeModule.normalizeOutput(null) === '');
}

function validateProgressExport() {
  const exportData = buildProgressExport({
    userId: 'qa-user',
    lessons: {
      2: {
        draftCode: 'name = input()',
        draftUpdatedAt: '2026-05-30T00:00:00.000Z'
      }
    }
  }, lessons);

  const lessonRecord = exportData.lessonRecords.find(record => record.lessonId === 2);
  const codingRecord = exportData.codingRecords.find(record => record.lessonId === 2);

  check('导出 JSON 包含代码草稿', lessonRecord?.coding?.draftCode === 'name = input()');
  check('草稿未交卷也进入 codingRecords', codingRecord?.draftCode === 'name = input()');
}

function runStarterCode() {
  const starterIssues = [];

  lessons.forEach((lesson) => {
    const challenge = lesson.student?.codingChallenge;
    if (!challenge?.starterCode || !challenge?.testCases?.length) return;

    challenge.testCases.forEach((testCase) => {
      const result = spawnSync('python3', ['-c', challenge.starterCode], {
        input: testCase.input ?? '',
        encoding: 'utf8',
        timeout: 4000,
        maxBuffer: 1024 * 1024
      });

      if (result.error) {
        starterIssues.push(`#${lesson.id} ${lesson.title} [${testCase.label}]: ${result.error.message}`);
        return;
      }

      if (result.status !== 0) {
        const stderr = normalize(result.stderr).split('\n').slice(-3).join(' | ');
        starterIssues.push(`#${lesson.id} ${lesson.title} [${testCase.label}]: exit ${result.status} ${stderr}`);
        return;
      }

      const actual = normalize(result.stdout);
      const expected = normalize(testCase.expected);
      if (actual !== expected) {
        starterIssues.push(`#${lesson.id} ${lesson.title} [${testCase.label}]: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
      }
    });
  });

  check('starter code 通过全部测试用例', starterIssues.length === 0, starterIssues.slice(0, 5).join(' | '));
}

console.log('====================================');
console.log('YCL Python 四级教学课件 - QA 测试');
console.log('====================================');

validateCourseShape();
validateContentBoundaries();
validateVisualAssets();
validateJudgeExports();
validateProgressExport();
runStarterCode();

console.log('====================================');

if (failures.length > 0) {
  console.error(`QA 失败：${failures.length} 个问题`);
  failures.forEach((failure, index) => console.error(`${index + 1}. ${failure}`));
  process.exit(1);
}

console.log('QA 通过：课程结构、内容边界、判题工具和 starter code 均正常');
