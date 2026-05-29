/**
 * YCL Python 四级互动教学课件 - 函数定义与调用
 */

// ==================== 第4章 第1节 函数定义与调用（课时9）====================
const lesson09 = {
  id: 9,
  title: "函数定义与调用",
  chapter: "第4章 函数与模块",
  type: "main",
  examTopics: ["函数定义def", "函数参数", "函数返回值return", "函数调用"],
  difficulty: 3,
  teacher: {
    objectives: [
      "孩子能说出：函数就像一个可以重复使用的做菜机器",
      "孩子能写出：def make_cake() 造一个蛋糕机器",
      "孩子能做：给函数传参数，让它做出不同的东西"
    ],
    concepts: [
      {
        name: "函数是什么",
        definition: "函数就像一个小工厂！你给它放原料，它就会按照说明书加工，然后产出产品！可以重复使用！",
        example: "def say_hello():\n    print(\"你好！\")\n\nsay_hello()   # 叫工厂开工！",
        illustration: "一个小工厂，门口写着def，上面有原料入口和产品出口"
      },
      {
        name: "参数：给函数的原料",
        definition: "参数就是给函数的原料！def add(a, b)就是告诉工厂，它需要两个原料a和b。",
        example: "def add(a, b):\n    return a + b\n\nresult = add(3, 5)   # 给工厂3和5，得到8",
        illustration: "一个加法工厂，有两个原料入口和一个产品出口"
      },
      {
        name: "return 产出产品",
        definition: "return就是函数产出产品！return后面的东西会被送出来，给别人用。",
        example: "def double(x):\n    return x * 2\n\nprint(double(5))   # 10",
        illustration: "一个小窗口，return的东西从窗口送出来"
      },
      {
        name: "函数的调用",
        definition: "调用函数就是让函数开始工作！函数名后面加括号就是调用！",
        example: "def greet():\n    print(\"Hello!\")\n\ngreet()   # 调用，打印Hello!",
        illustration: "按工厂的启动按钮，工厂就开始工作了"
      }
    ],
    commonMistakes: [
      {
        mistake: "调用函数忘记加括号",
        wrongCode: "say_hello   ❌（只是说了名字，没开工）",
        correctCode: "say_hello()   ✅（这才叫工厂开工！）",
        explanation: "say_hello只是念名字，say_hello()才是真正执行！"
      },
      {
        mistake: "函数里忘记return",
        wrongCode: "def double(x):\n    x * 2   ❌（产品没送出来！）",
        correctCode: "def double(x):\n    return x * 2   ✅",
        explanation: "没有return，函数就不知道产出什么！"
      }
    ],
    teachingTips: "建议让小朋友扮演函数：def add(a, b) = 一个小朋友扮演的加法机器人！",
    handsOn: {
      title: "跟做练习：建造我的第一个工厂",
      steps: [
        "第一步：想一个简单的功能，比如\"打印Hello\"",
        "第二步：用def定义这个工厂：def say_hello():",
        "第三步：在工厂里写上要做什么：print(\"Hello\")",
        "第四步：调用工厂：say_hello()"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "下面哪个是正确的函数定义？",
        options: ["function add():", "def add():", "func add():", "make add():"],
        answer: 1,
        explanation: "Python里定义函数要用 def 这个关键字！",
        points: 10
      },
      {
        type: "choice",
        question: "add(3, 5)里的3和5是什么？",
        options: ["两个函数", "两个参数", "两个结果", "两个名字"],
        answer: 1,
        explanation: "3和5是给函数的原料，叫做参数！",
        points: 10
      },
      {
        type: "choice",
        question: "return的作用是什么？",
        options: ["结束函数", "把结果送出来", "开始函数", "打印结果"],
        answer: 1,
        explanation: "return把函数算出来的结果送出来给别人用！",
        points: 10
      },
      {
        type: "choice",
        question: "say_hello 和 say_hello() 有什么区别？",
        options: ["没有区别", "前者是念名字，后者是执行", "前者是执行，后者是念名字", "都执行"],
        answer: 1,
        explanation: "say_hello只是说这台机器，say_hello()才是真正让它工作！",
        points: 10
      }
    ],
    codingChallenge: {
      type: "for",
      title: "编程题：建造乘法工厂！",
      description: "建造一个乘法工厂，给它两个数字，它会返回它们的乘积。\n\n主程序会输入两个数字，调用你的工厂，输出结果。\n\n例如：输入「3」和「4」，输出「12」",
      hint: "模板：\ndef multiply(a, b):\n    return a * b\n\nx = int(input())\ny = int(input())\nprint(multiply(x, y))",
      starterCode: "# 函数定义与调用：乘法工厂\n\ndef multiply(a, b):\n    return a * b\n\nx = int(input())\ny = int(input())\nprint(multiply(x, y))\n",
      testCases: [
        { label: "3乘4", input: "3\n4", expected: "12" },
        { label: "6乘7", input: "6\n7", expected: "42" }
      ],
      points: 50,
      badge: "函数小厂长"
    }
  }
};

export default lesson09;
