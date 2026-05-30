import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import lessons from '../src/data/lessons.js';

const outputDir = path.resolve('docs/book');
const outputFile = path.join(outputDir, 'ycl-python-level4-book.md');

const typeLabels = {
  main: '主线课',
  extended: '拓展挑战'
};

const clean = (value = '') => String(value ?? '').replace(/\r\n/g, '\n').trim();
const inline = (value = '') => clean(value).replace(/\n+/g, ' ');
const hasText = value => clean(value).length > 0;
const list = items => (items || []).filter(hasText).map(item => `- ${inline(item)}`).join('\n');
const stars = value => '★'.repeat(Math.max(1, Number(value) || 1));
const bookImagePath = src => (src ? `../../public${src}` : '');

function codeBlock(code = '', language = '') {
  const safeCode = clean(code).replace(/```/g, '`\\u200b``');
  return `\`\`\`${language}\n${safeCode}\n\`\`\``;
}

function escapeCell(value = '') {
  return inline(value).replace(/\|/g, '\\|');
}

function markdownTable(headers, rows) {
  if (!rows.length) return '';

  return [
    `| ${headers.map(escapeCell).join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map(row => `| ${row.map(escapeCell).join(' | ')} |`)
  ].join('\n');
}

function pushHeading(lines, level, title) {
  lines.push(`${'#'.repeat(level)} ${title}`);
  lines.push('');
}

function pushParagraph(lines, value) {
  if (!hasText(value)) return;
  lines.push(clean(value));
  lines.push('');
}

function pushList(lines, items) {
  const content = list(items);
  if (!content) return;
  lines.push(content);
  lines.push('');
}

function pushCode(lines, code, language = 'python') {
  if (!hasText(code)) return;
  lines.push(codeBlock(code, language));
  lines.push('');
}

function pushImage(lines, visual) {
  if (!visual?.src) return;
  lines.push(`![${visual.alt || visual.caption || '课程配图'}](${bookImagePath(visual.src)})`);
  if (visual.caption) {
    lines.push('');
    lines.push(`图示：${visual.caption}`);
  }
  lines.push('');
}

function groupByChapter(allLessons) {
  const groups = [];
  const indexByChapter = new Map();

  for (const lesson of allLessons) {
    if (!indexByChapter.has(lesson.chapter)) {
      indexByChapter.set(lesson.chapter, groups.length);
      groups.push({ chapter: lesson.chapter, lessons: [] });
    }
    groups[indexByChapter.get(lesson.chapter)].lessons.push(lesson);
  }

  return groups;
}

function pushCourseMap(lines, groups) {
  pushHeading(lines, 2, '课程地图');
  const rows = groups.flatMap(group =>
    group.lessons.map(lesson => [
      `第 ${lesson.id} 课`,
      lesson.chapter,
      lesson.title,
      typeLabels[lesson.type] || lesson.type || '',
      stars(lesson.difficulty),
      (lesson.examTopics || []).join('、')
    ])
  );

  lines.push(markdownTable(['课时', '章节', '标题', '类型', '难度', '关键词'], rows));
  lines.push('');
}

function pushAgeAdaptation(lines, ageAdaptation) {
  if (!ageAdaptation) return;
  pushHeading(lines, 4, '低龄课堂设计');
  const rows = [
    ['适合对象', ageAdaptation.target],
    ['节奏安排', ageAdaptation.pace],
    ['统一语言', ageAdaptation.language]
  ].filter(([, value]) => hasText(value));

  if (rows.length) {
    lines.push(markdownTable(['项目', '内容'], rows));
    lines.push('');
  }

  if (ageAdaptation.notes?.length) {
    pushList(lines, ageAdaptation.notes);
  }
}

function pushLessonFlow(lines, lessonFlow) {
  if (!lessonFlow?.length) return;
  pushHeading(lines, 4, '课堂流程');
  lines.push(markdownTable(
    ['时间', '环节', '老师做什么', '学生做什么'],
    lessonFlow.map(item => [item.time, item.phase, item.teacher, item.student])
  ));
  lines.push('');
}

function pushTeacherScript(lines, teacherScript) {
  if (!teacherScript?.length) return;
  pushHeading(lines, 4, '老师话术');

  teacherScript.forEach((script, index) => {
    pushHeading(lines, 5, `${index + 1}. ${script.when || '课堂节点'}：${script.title || ''}`.trim());
    pushParagraph(lines, script.say);
    if (script.check) {
      lines.push(`检查点：${inline(script.check)}`);
      lines.push('');
    }
  });
}

function pushDemoSlides(lines, demoSlides) {
  if (!demoSlides?.length) return;
  pushHeading(lines, 4, '课堂演示稿');

  demoSlides.forEach((slide, index) => {
    const titleParts = [`演示 ${index + 1}`];
    if (slide.kicker) titleParts.push(slide.kicker);
    if (slide.title) titleParts.push(slide.title);
    pushHeading(lines, 5, titleParts.join('：'));

    pushParagraph(lines, slide.body);
    if (slide.bullets?.length) {
      pushList(lines, slide.bullets);
    }
    pushCode(lines, slide.code);
    if (slide.prompt) {
      lines.push(`课堂提问：${inline(slide.prompt)}`);
      lines.push('');
    }
    if (slide.check) {
      lines.push(`检查点：${inline(slide.check)}`);
      lines.push('');
    }

    if (slide.teacherNote?.length) {
      lines.push('老师提示：');
      lines.push('');
      slide.teacherNote.forEach(note => {
        lines.push(`- ${inline(note.title)}`);
        (note.lines || []).forEach(noteLine => {
          lines.push(`  - ${inline(noteLine)}`);
        });
      });
      lines.push('');
    }
  });
}

function pushConcepts(lines, concepts) {
  if (!concepts?.length) return;
  pushHeading(lines, 4, '概念讲解');

  concepts.forEach((concept, index) => {
    pushHeading(lines, 5, `${index + 1}. ${concept.name}`);
    pushParagraph(lines, concept.definition);

    if (concept.example) {
      lines.push('例子：');
      lines.push('');
      pushCode(lines, concept.example);
    }
    if (concept.illustration) {
      lines.push(`图像化理解：${inline(concept.illustration)}`);
      lines.push('');
    }
    if (concept.teacherSay) {
      lines.push(`老师可以这样说：${inline(concept.teacherSay)}`);
      lines.push('');
    }
    if (concept.kidQuestion) {
      lines.push(`问孩子：${inline(concept.kidQuestion)}`);
      lines.push('');
    }
  });
}

function pushCommonMistakes(lines, commonMistakes) {
  if (!commonMistakes?.length) return;
  pushHeading(lines, 4, '典型错误');

  commonMistakes.forEach((mistake, index) => {
    pushHeading(lines, 5, `${index + 1}. ${mistake.mistake}`);
    if (mistake.wrongCode) {
      lines.push('错误写法：');
      lines.push('');
      pushCode(lines, mistake.wrongCode);
    }
    if (mistake.correctCode) {
      lines.push('改正写法：');
      lines.push('');
      pushCode(lines, mistake.correctCode);
    }
    pushParagraph(lines, mistake.explanation);
  });
}

function pushHandsOn(lines, handsOn) {
  if (!handsOn) return;
  pushHeading(lines, 4, `课堂实操：${handsOn.title || '动手练习'}`);
  pushList(lines, handsOn.steps || []);
}

function pushClassroomGames(lines, classroomGames) {
  if (!classroomGames?.length) return;
  pushHeading(lines, 4, '课堂小游戏');
  lines.push(markdownTable(
    ['游戏', '怎么玩', '目标'],
    classroomGames.map(game => [game.name, game.how, game.goal])
  ));
  lines.push('');
}

function pushBoardAndParent(lines, teacher) {
  if (!teacher?.boardPlan?.length && !teacher?.parentNote) return;
  pushHeading(lines, 4, '板书与课后沟通');

  if (teacher.boardPlan?.length) {
    lines.push('板书建议：');
    lines.push('');
    pushList(lines, teacher.boardPlan);
  }

  if (teacher.parentNote) {
    lines.push('家长沟通：');
    lines.push('');
    pushParagraph(lines, teacher.parentNote);
  }
}

function answerLabel(answer, options = []) {
  if (typeof answer === 'number') {
    return `${String.fromCharCode(65 + answer)}. ${options[answer] ?? ''}`.trim();
  }
  return String(answer ?? '');
}

function pushQuizzes(lines, quizzes) {
  if (!quizzes?.length) return;
  pushHeading(lines, 4, '学生练习');

  quizzes.forEach((quiz, index) => {
    pushHeading(lines, 5, `${index + 1}. ${quiz.question}`);
    if (quiz.options?.length) {
      quiz.options.forEach((option, optionIndex) => {
        lines.push(`${String.fromCharCode(65 + optionIndex)}. ${inline(option)}`);
      });
      lines.push('');
    }
    lines.push(`答案：${answerLabel(quiz.answer, quiz.options)}`);
    if (quiz.points) lines.push(`分值：${quiz.points}`);
    if (quiz.explanation) lines.push(`解析：${inline(quiz.explanation)}`);
    lines.push('');
  });
}

function pushCodingChallenge(lines, challenge) {
  if (!challenge) return;
  pushHeading(lines, 4, `编程挑战：${challenge.title}`);
  if (challenge.badge) {
    lines.push(`通关徽章：${challenge.badge}`);
    lines.push('');
  }
  if (challenge.points) {
    lines.push(`分值：${challenge.points}`);
    lines.push('');
  }
  pushParagraph(lines, challenge.description);

  if (challenge.hint) {
    lines.push('提示：');
    lines.push('');
    pushCode(lines, challenge.hint);
  }

  if (challenge.starterCode) {
    lines.push('起始代码：');
    lines.push('');
    pushCode(lines, challenge.starterCode);
  }

  if (challenge.testCases?.length) {
    lines.push('测试样例：');
    lines.push('');
    lines.push(markdownTable(
      ['样例', '输入', '期望输出'],
      challenge.testCases.map(testCase => [
        testCase.label,
        clean(testCase.input).replace(/\n/g, '<br>'),
        clean(testCase.expected).replace(/\n/g, '<br>')
      ])
    ));
    lines.push('');
  }
}

function pushLesson(lines, lesson) {
  const teacher = lesson.teacher || {};
  const student = lesson.student || {};

  pushHeading(lines, 2, `第 ${lesson.id} 课：${lesson.title}`);
  lines.push(`章节：${lesson.chapter}`);
  lines.push(`课型：${typeLabels[lesson.type] || lesson.type || '课程'}`);
  lines.push(`难度：${stars(lesson.difficulty)}`);
  lines.push(`考点：${(lesson.examTopics || []).join('、')}`);
  lines.push('');

  pushImage(lines, lesson.visual);

  if (teacher.objectives?.length) {
    pushHeading(lines, 4, '学习目标');
    pushList(lines, teacher.objectives);
  }

  pushAgeAdaptation(lines, teacher.ageAdaptation);
  pushLessonFlow(lines, teacher.lessonFlow);
  pushTeacherScript(lines, teacher.teacherScript);
  pushDemoSlides(lines, teacher.demoSlides);
  pushConcepts(lines, teacher.concepts);
  pushCommonMistakes(lines, teacher.commonMistakes);
  pushHandsOn(lines, teacher.handsOn);
  pushClassroomGames(lines, teacher.classroomGames);

  if (teacher.teachingTips) {
    pushHeading(lines, 4, '教学提醒');
    pushParagraph(lines, teacher.teachingTips);
  }

  pushBoardAndParent(lines, teacher);
  pushQuizzes(lines, student.quizzes);
  pushCodingChallenge(lines, student.codingChallenge);
}

function buildBook() {
  const groups = groupByChapter(lessons);
  const lines = [];

  pushHeading(lines, 1, 'YCL Python 四级互动教学书');
  lines.push('面向 7-8 岁低龄课堂的 Python 四级课程书稿。');
  lines.push('');
  lines.push(`内容来源：${lessons.length} 节互动课件数据、教师讲义、学生练习、编程挑战和课程配图。`);
  lines.push('生成方式：运行 `npm run book:generate` 可重新生成本书。');
  lines.push('');

  pushHeading(lines, 2, '使用方式');
  pushList(lines, [
    '老师备课时先看每课的学习目标、低龄课堂设计和课堂流程。',
    '正式上课时可以按“老师话术”和“课堂演示稿”推进。',
    '学生课后复习时重点看概念讲解、典型错误、学生练习和编程挑战。',
    '家长沟通可以直接使用每课末尾的“家长沟通”文字。'
  ]);

  pushCourseMap(lines, groups);

  groups.forEach(group => {
    pushHeading(lines, 1, group.chapter);
    group.lessons.forEach(lesson => pushLesson(lines, lesson));
  });

  pushHeading(lines, 1, '附录：课程配图索引');
  lines.push(markdownTable(
    ['课时', '标题', '配图', '说明'],
    lessons.map(lesson => [
      `第 ${lesson.id} 课`,
      lesson.title,
      lesson.visual?.src || '',
      lesson.visual?.caption || ''
    ])
  ));
  lines.push('');

  return `${lines.join('\n').replace(/\n{3,}/g, '\n\n').trim()}\n`;
}

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, buildBook(), 'utf8');

console.log(`Generated ${path.relative(process.cwd(), outputFile)}`);
