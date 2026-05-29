/**
 * YCL Python 四级互动教学课件 - 初识函数
 * 对齐儿童教材目录风格：第19课 初识函数。
 */

const lesson18 = {
  id: 18,
  title: "初识函数",
  chapter: "函数小工厂",
  type: "extended",
  examTopics: ["def定义函数", "函数调用", "参数", "缩进"],
  difficulty: 2,
  teacher: {
    objectives: [
      "孩子能说出：函数像可以反复使用的小工厂",
      "孩子能看懂：def是在建函数，不是立刻运行",
      "孩子能说出：函数名加括号才是调用函数",
      "孩子能理解：参数像放进工厂的原料",
      "孩子能写出一个带名字参数的问好函数"
    ],
    concepts: [
      {
        name: "函数小工厂",
        definition: "函数把几行代码装成一个小工厂，想用时叫它的名字。",
        example: "def say_hello():\n    print(\"你好\")",
        teacherSay: "def像是在盖工厂，缩进里的代码就是工厂里的机器。",
        kidQuestion: "工厂建好了，会不会自己开工？"
      },
      {
        name: "调用函数",
        definition: "写函数名加括号，才会让函数真正开始工作。",
        example: "say_hello()",
        teacherSay: "函数名后面的小括号，像按下工厂的开工按钮。",
        kidQuestion: "只写def和写say_hello()，哪一个会让电脑输出？"
      },
      {
        name: "参数",
        definition: "参数是送进函数的小原料，不同原料会做出不同结果。",
        example: "def say_hello(name):",
        teacherSay: "name像入口处的小篮子，谁的名字放进去，函数就问候谁。",
        kidQuestion: "如果name里放小红，问候语应该给谁？"
      },
      {
        name: "函数缩进",
        definition: "缩进表示这些代码属于函数里面。",
        example: "def say_hello(name):\n    print(name)",
        teacherSay: "缩进像把代码推进工厂房间里，不缩进就站在工厂外面。",
        kidQuestion: "print这一行要不要缩进到函数里面？"
      },
      {
        name: "先定义，后调用",
        definition: "Python通常要先认识函数，再让函数工作。",
        example: "def say_hello(name):\n    print(name)\n\nsay_hello(\"小明\")",
        teacherSay: "先告诉电脑工厂怎么建，再按按钮开工。",
        kidQuestion: "调用函数应该写在def前面还是后面？"
      }
    ],
    commonMistakes: [
      {
        mistake: "定义了函数但忘记调用",
        wrongCode: "def say_hello(name):\n    print(\"你好，\" + name)",
        correctCode: "def say_hello(name):\n    print(\"你好，\" + name)\n\nsay_hello(\"小明\")",
        explanation: "def只是建工厂，函数名加括号才会让工厂开工。"
      },
      {
        mistake: "函数里的代码没有缩进",
        wrongCode: "def say_hello(name):\nprint(name)",
        correctCode: "def say_hello(name):\n    print(name)",
        explanation: "函数里面的代码要向右缩进。"
      },
      {
        mistake: "调用时忘记放参数",
        wrongCode: "def say_hello(name):\n    print(name)\n\nsay_hello()",
        correctCode: "def say_hello(name):\n    print(name)\n\nsay_hello(\"小明\")",
        explanation: "函数需要name这个原料，调用时要把名字放进去。"
      }
    ],
    teachingTips: "这一课不要先讲“封装、抽象”。用小工厂比喻：def建工厂，参数是原料，函数名加括号是按开工按钮。",
    handsOn: {
      title: "问好小工厂",
      steps: [
        "在黑板画一个工厂，入口写name",
        "让孩子把自己的名字卡片送进工厂",
        "工厂输出“你好，某某！”",
        "再把这个流程翻译成def、参数和调用"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "def say_hello(name): 是在做什么？",
        options: ["定义一个函数小工厂", "马上输出一句话", "输入一个数字", "结束循环"],
        answer: 0,
        explanation: "def是在定义函数，也就是建一个可以反复用的小工厂。",
        points: 10
      },
      {
        type: "choice",
        question: "怎样让函数真正开始工作？",
        options: ["写函数名加括号调用", "只写def", "写一行注释", "把代码放进引号"],
        answer: 0,
        explanation: "函数名加括号才是调用，比如 say_hello(\"小明\")。",
        points: 10
      },
      {
        type: "choice",
        question: "函数里的代码通常有什么特点？",
        options: ["要缩进", "必须全是大写", "不能有print", "不能换行"],
        answer: 0,
        explanation: "缩进表示这些代码属于函数里面。",
        points: 10
      },
      {
        type: "choice",
        question: "参数name最像什么？",
        options: ["送进函数的原料", "停止按钮", "画笔颜色", "文件名字"],
        answer: 0,
        explanation: "参数是函数工作时需要的原料。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "function",
      title: "问好小工厂",
      description: "请建一个问好函数！\n\n程序会输入一个名字。\n你要定义函数say_hello(name)，并调用它。\n输出格式：\n你好，名字！欢迎来到Python小队！\n\n例如输入「小明」\n输出「你好，小明！欢迎来到Python小队！」",
      hint: "先定义函数，再读取名字，最后调用函数：\n\ndef say_hello(name):\n    print(\"你好，\" + name + \"！欢迎来到Python小队！\")\n\nname = input()\nsay_hello(name)",
      starterCode: "# 初识函数：问好小工厂\n\ndef say_hello(name):\n    print(\"你好，\" + name + \"！欢迎来到Python小队！\")\n\nname = input()\nsay_hello(name)\n",
      testCases: [
        { label: "小明", input: "小明", expected: "你好，小明！欢迎来到Python小队！" },
        { label: "Lily", input: "Lily", expected: "你好，Lily！欢迎来到Python小队！" }
      ],
      points: 60,
      badge: "函数小工厂主"
    }
  }
};

export default lesson18;
