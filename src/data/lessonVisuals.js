const visuals = {
  intro: {
    src: '/course-visuals/python-intro.png',
    alt: '孩子围着电脑学习第一句 Python 输出代码',
    caption: 'Python 入门：让电脑听懂清楚指令'
  },
  editor: {
    src: '/course-visuals/python-idle-workflow.png',
    alt: 'Python 安装、打开 IDLE、新建文件、保存并按 F5 运行的流程图',
    caption: 'Python 编辑器流程：安装、保存、运行'
  },
  variables: {
    src: '/course-visuals/variables-boxes.png',
    alt: '用有名字的小盒子解释变量保存内容',
    caption: '变量像有名字的小盒子'
  },
  input: {
    src: '/course-visuals/variables-boxes.png',
    alt: '用输入箭头把同学说的话放进变量盒子',
    caption: 'input输入：听到内容，再放进变量盒子'
  },
  dataTypes: {
    src: '/course-visuals/data-types.png',
    alt: '整数、小数、字符串、布尔和运算符积木',
    caption: '数据类型和运算符工具箱'
  },
  numberTools: {
    src: '/course-visuals/number-tools.png',
    alt: '用分糖果解释整除、余数、round 和 abs 的数字工具图',
    caption: '数字工具箱：整除、余数和常用函数'
  },
  stringBeads: {
    src: '/course-visuals/string-beads.png',
    alt: '把 Python 单词画成带编号的珠子串解释字符串索引和切片',
    caption: '字符串像一串有编号的珠子'
  },
  sequence: {
    src: '/course-visuals/sequence-steps.png',
    alt: '起床、刷牙、上学三个步骤串起来解释顺序结构',
    caption: '顺序结构：电脑一行一行往下做'
  },
  ifRoad: {
    src: '/course-visuals/if-road.png',
    alt: 'if else 路口图，分数条件成立走通过路线，否则走加油路线',
    caption: 'if / else 路口：条件决定走哪条路'
  },
  forLoop: {
    src: '/course-visuals/for-loop-stamps.png',
    alt: '盖章机重复输出星星解释 for 循环和 range',
    caption: 'for 循环：知道次数就重复做'
  },
  whileLoop: {
    src: '/course-visuals/while-stop-loop.png',
    alt: 'while 条件循环图，强调循环里要有变化并最终停止',
    caption: 'while 循环：条件还成立就继续'
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
  modulesScope: {
    src: '/course-visuals/modules-scope.png',
    alt: '函数房间和 random math 工具箱解释变量作用域与模块导入',
    caption: '函数房间和模块工具箱'
  },
  filesExceptions: {
    src: '/course-visuals/files-exceptions.png',
    alt: '文件本子和 try except 保护罩解释文件操作与异常处理',
    caption: '文件像本子，异常处理像保护罩'
  },
  turtle: {
    src: '/course-visuals/turtle-creative.png',
    alt: '代码小画笔绘制正方形、星星和房子',
    caption: 'Turtle 创作：把代码变成图画'
  },
  turtleSquare: {
    src: '/course-visuals/turtle-square.png',
    alt: 'Turtle 画正方形的路径和 for 循环代码提示',
    caption: 'Turtle 正方形：重复4次前进和转弯'
  },
  turtleStar: {
    src: '/course-visuals/turtle-star.png',
    alt: 'Turtle 画五角星的路径和 144 度转角提示',
    caption: 'Turtle 五角星：5条线和144度'
  },
  turtleFish: {
    src: '/course-visuals/turtle-fish-project.png',
    alt: '海底小鱼项目图，展示用函数和循环画多条鱼',
    caption: 'Turtle 项目：拆步骤画多条小鱼'
  },
  breakLoop: {
    src: '/course-visuals/break-loop-train.png',
    alt: '小火车遇到 0 停车解释 break 跳出循环',
    caption: 'break 是循环刹车'
  },
  returnCard: {
    src: '/course-visuals/return-card-generator.png',
    alt: '采访卡片生成器解释 input、函数返回值和 print 的关系',
    caption: '函数返回值：把结果交回来再显示'
  },
  passwordDoor: {
    src: '/course-visuals/password-door.png',
    alt: '密码门图解释字符串比较、strip、lower 和双等号',
    caption: '密码门：字符串比较要用 =='
  },
  primeFactors: {
    src: '/course-visuals/prime-factor-blocks.png',
    alt: '把 12 拆成 2、2、3 的积木图解释分解质因数',
    caption: '分解质因数：把大数字拆成小因数'
  },
  algorithm: {
    src: '/course-visuals/algorithm-challenge.png',
    alt: '孩子用路径、集合、循环和积木解决算法挑战',
    caption: '综合挑战：把问题拆成步骤'
  },
  setStickers: {
    src: '/course-visuals/set-sticker-box.png',
    alt: '重复贴纸进入 set 盒子后只保留不同种类',
    caption: '集合 set：重复内容只保留一份'
  },
  candyProcessor: {
    src: '/course-visuals/candy-processor.png',
    alt: '糖果加工机先加一再经过奇数筛子',
    caption: '批量处理：先加工，再筛选'
  },
  slidingWindow: {
    src: '/course-visuals/sliding-window-water.png',
    alt: '一排数字上滑动连续窗口计算总和和差距',
    caption: '滑动窗口：连续一段向右滑'
  },
  elevator: {
    src: '/course-visuals/elevator-simulation.png',
    alt: '电梯按楼层顺序移动并更新当前位置 current',
    caption: '电梯模拟：每到一站更新当前位置'
  },
  recursion: {
    src: '/course-visuals/recursion-blocks.png',
    alt: '拆积木递归树展示 ways(n-1)、ways(n-2) 和出口',
    caption: '递归拆积木：函数请自己帮忙'
  }
};

const lessonVisualKeys = {
  0: 'intro',
  1: 'variables',
  input: 'input',
  2: 'dataTypes',
  3: 'numberTools',
  4: 'stringBeads',
  5: 'sequence',
  6: 'ifRoad',
  7: 'forLoop',
  8: 'whileLoop',
  9: 'functions',
  10: 'modulesScope',
  11: 'filesExceptions',
  12: 'algorithm',
  13: 'turtle',
  14: 'turtleSquare',
  15: 'turtleStar',
  16: 'turtle',
  17: 'breakLoop',
  18: 'functions',
  19: 'returnCard',
  20: 'passwordDoor',
  21: 'primeFactors',
  22: 'turtleSquare',
  23: 'turtleFish',
  24: 'setStickers',
  25: 'candyProcessor',
  26: 'slidingWindow',
  27: 'elevator',
  28: 'recursion'
};

export function withLessonVisual(lesson) {
  const key = lesson.visualKey || lessonVisualKeys[lesson.sourceId ?? lesson.id];
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
