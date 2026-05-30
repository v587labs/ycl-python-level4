/**
 * YCL Python 四级互动教学课件 - 课程数据
 * 严格对齐《人工智能编程水平测试(四级Python)》教材 PRD v1.0
 * 30课时体系：2节序章 + 12节四级主线 + 16节拓展挑战
 */

import lesson00 from './lessons/lesson-00.js';
import lesson01Editor from './lessons/lesson-01-editor.js';
import lesson01 from './lessons/lesson-01.js';
import lesson02 from './lessons/lesson-02.js';
import lesson03 from './lessons/lesson-03.js';
import lesson04 from './lessons/lesson-04.js';
import lesson05 from './lessons/lesson-05.js';
import lesson06 from './lessons/lesson-06.js';
import lesson07 from './lessons/lesson-07.js';
import lesson08 from './lessons/lesson-08.js';
import lesson09 from './lessons/lesson-09.js';
import lesson10 from './lessons/lesson-10.js';
import lesson11 from './lessons/lesson-11.js';
import lesson12 from './lessons/lesson-12.js';
import lesson13 from './lessons/lesson-13.js';
import lesson14 from './lessons/lesson-14.js';
import lesson15 from './lessons/lesson-15.js';
import lesson16 from './lessons/lesson-16.js';
import lesson17 from './lessons/lesson-17.js';
import lesson18 from './lessons/lesson-18.js';
import lesson19 from './lessons/lesson-19.js';
import lesson20 from './lessons/lesson-20.js';
import lesson21 from './lessons/lesson-21.js';
import lesson22 from './lessons/lesson-22.js';
import lesson23 from './lessons/lesson-23.js';
import lesson24 from './lessons/lesson-24.js';
import lesson25 from './lessons/lesson-25.js';
import lesson26 from './lessons/lesson-26.js';
import lesson27 from './lessons/lesson-27.js';
import lesson28 from './lessons/lesson-28.js';
import { withTeachingExtensions } from './lessonTeachingExtensions.js';
import { withLessonVisual } from './lessonVisuals.js';

const baseLessons = [
  lesson00,
  lesson01Editor,
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  lesson17,
  lesson18,
  lesson19,
  lesson20,
  lesson21,
  lesson22,
  lesson23,
  lesson24,
  lesson25,
  lesson26,
  lesson27,
  lesson28
];

const lessons = baseLessons
  .map((lesson, index) => ({
    ...lesson,
    sourceId: lesson.sourceId ?? lesson.id,
    id: index
  }))
  .map(lesson => withTeachingExtensions(withLessonVisual(lesson)));

export default lessons;
