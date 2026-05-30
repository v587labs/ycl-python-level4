/**
 * YCL Python 四级互动教学课件 - 算法综合应用
 */

// ==================== 第6章 综合应用（课时12）====================
const lesson12 = {
  id: 12,
  title: "算法综合应用",
  chapter: "第6章 综合应用",
  type: "main",
  examTopics: ["全部知识点回顾", "综合应用", "应试技巧"],
  difficulty: 4,
  teacher: {
    objectives: [
      "孩子能回顾序章到第11课的四级主线知识点",
      "孩子能说出应试技巧和常见错误",
      "孩子能独立完成一道综合编程题"
    ],
    concepts: [
      {
        name: "知识点大盘点",
        definition: "课时0认识Python和print；第1课认识Python安装和IDLE编辑器；第2课变量/input；第3课数据类型和运算符；第4课数字运算；第5课字符串；第6课顺序结构；第7课if选择；第8课for循环；第9课while循环；第10课函数；第11课作用域和模块；第12课文件和异常。",
        illustration: "一个大地图，上面标记着0-13课的知识点宝藏"
      },
      {
        name: "考试易错点提醒",
        definition: "1. 变量名不能数字开头  2. if/for后面要加冒号  3. ==是判断，=是赋值  4. range从0开始数  5. input()返回字符串，要计算先int()转换！",
        illustration: "一个红色警告牌，上面写着各种易错点"
      }
    ],
    commonMistakes: [
      {
        mistake: "考前最后提醒：一定要先读懂题再动手！",
        wrongCode: "不读题就开始写",
        correctCode: "先读3遍题，想好用什么工具，再动手",
        explanation: "磨刀不误砍柴工！"
      },
      {
        mistake: "忘记把分数转成整数",
        wrongCode: "score = input()\nif score >= 90:",
        correctCode: "score = int(input())\nif score >= 90:",
        explanation: "input听到的是文字，和90比较前要先int()。"
      },
      {
        mistake: "if/elif顺序写反",
        wrongCode: "if score >= 60:\n    grade = \"C\"\nelif score >= 90:\n    grade = \"A\"",
        correctCode: "if score >= 90:\n    grade = \"A\"\nelif score >= 60:\n    grade = \"C\"",
        explanation: "分数等级要从高到低判断，否则95会先被>=60接走。"
      }
    ],
    teachingTips: "建议做限时模拟题，训练考试节奏感！",
    handsOn: {
      title: "最后的练习：全真模拟",
      steps: [
        "第一步：限时10分钟，独立完成一道编程题",
        "第二步：自己检查代码有没有低级错误",
        "第三步：用示例输入运行验证",
        "第四步：加油！你已经学会Python啦！"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "以下哪一组最符合四级主线的学习顺序？",
        options: ["变量和类型 -> 程序结构 -> 函数模块 -> 文件异常 -> 综合应用", "文件异常 -> print输出 -> 变量 -> 顺序结构", "Turtle画图 -> 递归 -> set集合 -> print输出", "先背答案 -> 再读题 -> 最后猜输出"],
        answer: 0,
        explanation: "四级主线先打好变量和类型基础，再学习结构、函数模块、文件异常，最后做综合题。",
        points: 10
      },
      {
        type: "choice",
        question: "综合题开始前，第一步最好做什么？",
        options: ["先读题找输入和输出", "马上乱敲代码", "只看最后一行", "关闭编辑器"],
        answer: 0,
        explanation: "综合题先找输入、处理、输出，再写代码。",
        points: 10
      },
      {
        type: "choice",
        question: "score = input()后要比较分数，通常需要先做什么？",
        options: ["int(score)", "upper(score)", "break", "import turtle"],
        answer: 0,
        explanation: "input得到的是字符串，要比较数字大小需要转成int。",
        points: 10
      },
      {
        type: "choice",
        question: "判断等级时，为什么要先判断>=90？",
        options: ["避免高分先被低等级条件接走", "因为90最小", "因为不能写60", "因为print只能写一次"],
        answer: 0,
        explanation: "如果先判断>=60，95也会满足，就拿不到A等。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "comprehensive",
      title: "主线综合挑战：Python小冠军",
      description: "欢迎来到四级主线综合关！\n\n请写一个完整的程序：\n输入你的姓名和你考试的分数（0-100），\n程序会：\n1. 判断等级（>=90:A, >=80:B, >=60:C, <60:D）\n2. 输出「姓名：你考了XX分，获得X等！」\n\n例如输入「明明」「95」\n输出「明明：你考了95分，获得A等！」",
      hint: "综合题需要用到input、变量、if-elif-else、print～\n\nname = input()\nscore = int(input())\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 60:\n    grade = \"C\"\nelse:\n    grade = \"D\"\nprint(name + \"：你考了\" + str(score) + \"分，获得\" + grade + \"等！\")",
      starterCode: "# 综合应用：Python小冠军挑战\n\nname = input()\nscore = int(input())\n\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 60:\n    grade = \"C\"\nelse:\n    grade = \"D\"\n\nprint(name + \"：你考了\" + str(score) + \"分，获得\" + grade + \"等！\")\n",
      testCases: [
        { label: "A等生", input: "明明\n95", expected: "明明：你考了95分，获得A等！" },
        { label: "C等生", input: "小红\n70", expected: "小红：你考了70分，获得C等！" }
      ],
      points: 100,
      badge: "Python小冠军"
    }
  }
};

export default lesson12;
