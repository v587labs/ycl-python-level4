const visuals = {
  intro: {
    src: '/course-visuals/python-intro.png',
    alt: '孩子围着电脑学习第一句 Python 输出代码',
    caption: 'Python 入门：让电脑听懂清楚指令'
  },
  variables: {
    src: '/course-visuals/variables-boxes.png',
    alt: '用有名字的小盒子解释变量保存内容',
    caption: '变量像有名字的小盒子'
  },
  dataTypes: {
    src: '/course-visuals/data-types.png',
    alt: '整数、小数、字符串、布尔和运算符积木',
    caption: '数据类型和运算符工具箱'
  },
  controlFlow: {
    src: '/course-visuals/control-flow.png',
    alt: 'if else 分岔路和 for while 循环路线图',
    caption: '程序结构：选择和循环'
  },
  functions: {
    src: '/course-visuals/functions-modules.png',
    alt: '函数工厂和 import 工具箱',
    caption: '函数工厂与模块工具箱'
  },
  turtle: {
    src: '/course-visuals/turtle-creative.png',
    alt: '代码小画笔绘制正方形、星星和房子',
    caption: 'Turtle 创作：把代码变成图画'
  },
  algorithm: {
    src: '/course-visuals/algorithm-challenge.png',
    alt: '孩子用路径、集合、循环和积木解决算法挑战',
    caption: '综合挑战：把问题拆成步骤'
  }
};

const lessonVisualKeys = {
  0: 'intro',
  1: 'variables',
  2: 'dataTypes',
  3: 'dataTypes',
  4: 'dataTypes',
  5: 'controlFlow',
  6: 'controlFlow',
  7: 'controlFlow',
  8: 'controlFlow',
  9: 'functions',
  10: 'functions',
  12: 'algorithm',
  13: 'turtle',
  14: 'turtle',
  15: 'turtle',
  16: 'turtle',
  17: 'controlFlow',
  18: 'functions',
  19: 'functions',
  20: 'algorithm',
  21: 'algorithm',
  22: 'turtle',
  23: 'turtle',
  24: 'algorithm',
  25: 'algorithm',
  26: 'algorithm',
  27: 'algorithm',
  28: 'algorithm'
};

export function withLessonVisual(lesson) {
  const key = lessonVisualKeys[lesson.id];
  if (!key) return lesson;

  return {
    ...lesson,
    visual: {
      key,
      ...visuals[key]
    }
  };
}

export default visuals;
