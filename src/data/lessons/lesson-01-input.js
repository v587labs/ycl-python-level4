/**
 * YCL Python 四级互动教学课件 - input输入与变量
 * 低龄版：承接“变量盒子”，单独讲电脑听输入、保存输入、输出输入。
 */

// ==================== 第1章 第2节 input输入与变量 ====================
const lesson01Input = {
  id: 'input',
  sourceId: 'input',
  title: "input输入与变量",
  chapter: "第1章 Python语言基本语法",
  type: "main",
  visualKey: "input",
  examTopics: ["input输入", "输入保存到变量", "print输出输入结果", "字符串拼接", "input默认文本"],
  difficulty: 1,
  teacher: {
    objectives: [
      "孩子能接上上一课：变量盒子可以保存写好的值",
      "孩子能说出：input() 像电脑的小耳朵，会停下来等同学输入",
      "孩子能写出：name = input()，把输入保存到name变量",
      "孩子能用 print(name) 验证输入真的进入了变量盒子",
      "孩子能用多个 input() 收集姓名、年龄、性别、身高",
      "孩子能用字符串拼接输出一行完整介绍",
      "孩子知道：input() 听到的内容先按文字保存，下一课再学习怎么把年龄变成数字"
    ],
    ageAdaptation: {
      target: "7-8岁，一二年级，已经理解变量名、赋值和值",
      pace: "先复习固定赋值，再把固定值换成input，最后做个人介绍卡",
      language: "input=小耳朵；变量=保存听到内容的小盒子；print=小喇叭；+号=胶水",
      notes: [
        "这节课只讲input听、变量存、print说，不急着讲int(input())。",
        "让孩子先观察程序运行到input时会停下来等待输入，这是input最直观的特点。",
        "多个input要强调顺序：第一个输入进name，第二个输入进age，不要把盒子放混。"
      ]
    },
    lessonFlow: [
      {
        time: "0-5分钟",
        phase: "复习：固定值放进变量",
        teacher: "展示 name = \"Bob\" 和 print(name)，问：Bob是老师提前放进盒子的，如果想让同学自己告诉电脑名字，怎么办？",
        student: "说出上一课的变量盒子、赋值和输出。"
      },
      {
        time: "5-12分钟",
        phase: "认识input：电脑的小耳朵",
        teacher: "展示 name = input()。运行后让孩子观察屏幕停下来，输入Bob后再继续。",
        student: "观察程序等待输入，并输入一个名字。"
      },
      {
        time: "12-20分钟",
        phase: "保存输入：听完要放进盒子",
        teacher: "强调 input() 听到内容以后，要用左边的变量盒子保存，所以要写 name = input()。",
        student: "说出输入的内容进入了哪个变量。"
      },
      {
        time: "20-28分钟",
        phase: "输出输入结果",
        teacher: "运行 name = input(); print(name)，证明刚才输入的名字真的被保存起来了。",
        student: "预测并运行 print(name)。"
      },
      {
        time: "28-36分钟",
        phase: "多个input按顺序听",
        teacher: "展示 name = input(); age = input(); sex = input(); height = input()，说明程序会按代码顺序听四次。",
        student: "依次输入姓名、年龄、性别、身高。"
      },
      {
        time: "36-43分钟",
        phase: "拼成一行个人介绍",
        teacher: "用 + 把固定文字和输入变量拼成一句话，提醒空格和标点也要写进字符串里。",
        student: "运行个人介绍卡，检查输出是否自然。"
      },
      {
        time: "43-45分钟",
        phase: "收口：input先是文字",
        teacher: "告诉孩子：今天年龄虽然输入了8，但input先把它当文字保存。下一课我们会让文字8变成可以计算的数字8。",
        student: "说出 input -> 变量 -> print 的顺序。"
      }
    ],
    teacherScript: [
      {
        when: "开场",
        title: "从固定变量变成同学输入",
        say: "上一课我们是老师提前写好 name = \"Bob\"。今天电脑要升级：它不只会用老师写好的值，还会停下来听同学输入，再把听到的内容放进变量盒子。",
        check: "孩子能说出变量盒子里原来可以保存固定值。"
      },
      {
        when: "讲input",
        title: "小耳朵比喻",
        say: "input像电脑的小耳朵。程序运行到 input() 时，会停下来等你说话。你输入完按回车，程序才继续往下走。",
        check: "孩子能观察到程序会等待输入。"
      },
      {
        when: "讲保存",
        title: "听完要装进盒子",
        say: "只写 input() 就像听到了但没有记下来。我们要在左边放一个变量盒子，比如 name = input()，这样听到的名字才会被保存。",
        check: "孩子知道input输入后要存到变量里。"
      },
      {
        when: "讲多个输入",
        title: "按顺序听",
        say: "程序会一行一行往下走，所以第一个input听到的内容放进name，第二个input听到的内容放进age。顺序不能乱。",
        check: "孩子知道多个input按代码顺序执行。"
      }
    ],
    demoSlides: [
      {
        kicker: "复习",
        title: "上一课：老师提前放好值",
        body: "上一课我们把Bob提前放进name盒子。",
        code: "name = \"Bob\"\nprint(name)",
        prompt: "如果每个同学名字不一样，老师每次都改代码方便吗？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "固定赋值适合老师提前准备好的内容。",
              "但如果每个同学要输入自己的名字，我们需要让电脑停下来听。"
            ]
          }
        ],
        check: "孩子能回忆变量保存固定值。"
      },
      {
        kicker: "第1步",
        title: "input像电脑的小耳朵",
        body: "input() 会让程序停下来，等待同学输入。",
        code: "input()",
        prompt: "程序停下来时，电脑在等什么？",
        teacherNote: [
          {
            title: "课堂操作",
            lines: [
              "运行只有 input() 的代码，让孩子看到程序会等待输入。",
              "输入Bob并按回车，观察程序继续结束。"
            ]
          },
          {
            title: "你可以照着这样讲",
            lines: [
              "电脑不是自己猜名字，而是通过input听我们输入。",
              "input的小耳朵听完以后，程序才会继续往下走。"
            ]
          }
        ],
        check: "孩子能说出input负责等待输入。"
      },
      {
        kicker: "第2步",
        title: "听到以后要保存",
        body: "输入的内容要放进变量盒子，后面才能拿出来用。",
        code: "name = input()",
        prompt: "电脑听到的名字，要放进哪个盒子？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "input负责听，name负责保存。",
              "左边的name盒子，会装进刚才输入的内容。"
            ]
          },
          {
            title: "常见卡点",
            lines: [
              "孩子会写 input() 但忘记左边变量。",
              "提醒：听完不保存，后面就找不到刚才听到的内容。"
            ]
          }
        ],
        check: "孩子知道输入内容要保存到变量。"
      },
      {
        kicker: "第3步",
        title: "用print证明盒子里有内容",
        body: "print(name) 会显示刚才输入到name盒子里的内容。",
        code: "name = input()\nprint(name)",
        prompt: "如果输入Cici，第二行会显示什么？",
        teacherNote: [
          {
            title: "课堂操作",
            lines: [
              "老师先输入一次Bob，孩子预测输出Bob。",
              "再请孩子输入自己的名字，观察输出是否跟输入一样。"
            ]
          }
        ],
        check: "孩子能预测print(name)会显示输入内容。"
      },
      {
        kicker: "第4步",
        title: "把输入放进一句话",
        body: "用 + 把固定文字和变量拼成一句完整的话。",
        code: "name = input()\nprint(\"Hello \" + name)",
        prompt: "如果输入Willi，电脑会说什么？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "固定文字住在引号里，变量name不用引号。",
              "+ 像胶水，把Hello空格和name盒子里的内容粘起来。"
            ]
          },
          {
            title: "提醒空格",
            lines: [
              "Hello后面的空格也要写进引号里。",
              "否则输出会变成HelloWilli。"
            ]
          }
        ],
        check: "孩子知道固定文字和变量可以拼接输出。"
      },
      {
        kicker: "第5步",
        title: "多个input按顺序听",
        body: "每个input都会停下来听一次，程序从上到下执行。",
        code: "name = input()\nage = input()\nsex = input()\nheight = input()",
        prompt: "程序会停下来听几次？第2次输入进哪个盒子？",
        teacherNote: [
          {
            title: "课堂操作",
            lines: [
              "让孩子伸出四根手指：姓名、年龄、性别、身高。",
              "每运行到一个input就收起一根手指，帮助孩子感受顺序。"
            ]
          }
        ],
        check: "孩子知道4个input会听4次。"
      },
      {
        kicker: "最后",
        title: "个人介绍卡",
        body: "输入四条信息，再输出一行完整介绍。",
        code: "name = input()\nage = input()\nsex = input()\nheight = input()\nprint(\"Hello, I'm \" + name + \". \" + age + \" years old, I'm a \" + sex + \". \" + height + \"CM\")",
        prompt: "这段程序的顺序是先输入，还是先输出？",
        teacherNote: [
          {
            title: "收口话术",
            lines: [
              "今天我们完成了 input -> 变量 -> print。",
              "下一课会研究：为什么输入的年龄8，电脑一开始会把它当文字。"
            ]
          }
        ],
        check: "孩子能说出input、变量、print的顺序。"
      }
    ],
    concepts: [
      {
        name: "input（小耳朵）",
        definition: "input()会让程序停下来，等待同学输入内容。",
        example: "input()",
        teacherSay: "input像电脑的小耳朵，它会等你输入完再继续。",
        kidQuestion: "程序停下来时，电脑在等什么？"
      },
      {
        name: "保存输入",
        definition: "输入后的内容要保存到变量里，后面才能继续使用。",
        example: "name = input()",
        teacherSay: "input负责听，name盒子负责保存听到的内容。",
        kidQuestion: "电脑听到你的名字以后，要放进哪个盒子？"
      },
      {
        name: "输出输入结果",
        definition: "print可以把刚才输入并保存到变量里的内容显示出来。",
        example: "name = input()\nprint(name)",
        teacherSay: "先听，保存到name盒子，再用小喇叭说出来。",
        kidQuestion: "如果输入Bob，print(name)会显示什么？"
      },
      {
        name: "多个input",
        definition: "多个input会按代码顺序一次一次等待输入。",
        example: "name = input()\nage = input()",
        teacherSay: "程序从上往下走，第一个答案进name，第二个答案进age。",
        kidQuestion: "两个input会让电脑听几次？"
      },
      {
        name: "input听到的先是文字",
        definition: "input()听到的内容先按文字保存。输入8时，电脑先把它当作文字\"8\"。",
        example: "age = input()",
        teacherSay: "今天先把年龄当文字拼到句子里，下一课再学怎么把文字8变成数字8。",
        kidQuestion: "如果要算明年几岁，只保存age够不够？"
      }
    ],
    commonMistakes: [
      {
        mistake: "input听到了，但没有保存",
        wrongCode: "input()\nprint(name)",
        correctCode: "name = input()\nprint(name)",
        explanation: "只写input()就像听到了但没记下来，后面print(name)找不到name盒子里的内容。"
      },
      {
        mistake: "把变量名加了引号",
        wrongCode: "name = input()\nprint(\"name\")",
        correctCode: "name = input()\nprint(name)",
        explanation: "有引号会原样显示name；没有引号才会打开name盒子。"
      },
      {
        mistake: "多个input顺序放混",
        wrongCode: "age = input()\nname = input()",
        correctCode: "name = input()\nage = input()",
        explanation: "程序从上到下听输入。题目先要姓名，就先写name = input()。"
      },
      {
        mistake: "拼接时忘记空格和标点",
        wrongCode: "print(\"Hello\" + name)",
        correctCode: "print(\"Hello \" + name)",
        explanation: "+ 会直接粘起来，想要空格或标点，就要写进字符串里。"
      }
    ],
    teachingTips: "这一课只把input讲成“听、存、说”的流程。年龄先作为文字参与拼接，不在本课展开int()转换。",
    handsOn: {
      title: "跟做练习：输入个人介绍卡",
      steps: [
        "第一步：复习 name = \"Bob\" 是老师提前放好值。",
        "第二步：改成 name = input()，让电脑等待输入名字。",
        "第三步：运行 print(name)，证明输入内容已经保存。",
        "第四步：写4个input，依次输入姓名、年龄、性别、身高。",
        "第五步：用 + 拼接输出一行个人介绍。",
        "第六步：同桌互查：input负责听，变量负责存，print负责说。"
      ]
    },
    boardPlan: [
      "input() = 小耳朵，等待输入",
      "name = input() = 听到的内容放进name盒子",
      "print(name) = 输出name盒子里的内容",
      "多个input按顺序听",
      "input -> 变量 -> print",
      "input听到的内容先是文字，下一课再学int()"
    ],
    parentNote: "今天孩子单独学习了input。可以让孩子在家演示：name = input() 会让电脑等待输入，输入后再用 print(name) 显示出来。年龄输入后本课先当文字使用，下一课再学习 int() 做计算。"
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "input() 在程序里像什么？",
        options: ["小耳朵，等你输入", "小喇叭，说出文字", "橡皮擦", "画笔"],
        answer: 0,
        explanation: "input() 像电脑的小耳朵，会停下来等你输入内容。",
        points: 10
      },
      {
        type: "choice",
        question: "name = input() 表示什么？",
        options: ["把输入内容保存到name变量", "直接显示name", "删除name", "输出input"],
        answer: 0,
        explanation: "input听到的内容会被保存到左边的name变量里。",
        points: 10
      },
      {
        type: "choice",
        question: "如果输入Bob，下面代码会显示什么？\nname = input()\nprint(name)",
        options: ["Bob", "name", "input", "没有输出"],
        answer: 0,
        explanation: "输入Bob后，Bob被保存到name里，print(name)会显示Bob。",
        points: 10
      },
      {
        type: "choice",
        question: "两个input()会让程序听几次输入？",
        options: ["1次", "2次", "0次", "看变量名"],
        answer: 1,
        explanation: "每个input都会停下来听一次，所以两个input会听两次。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "string",
      title: "输入个人介绍卡",
      description: "请写一个程序：\n\n1. 依次输入姓名、年龄、性别、身高。\n2. 把它们保存到变量里。\n3. 输出一行英文介绍。\n\n例如输入：\nWilli\n8\nboy\n120\n\n输出：\nHello, I'm Willi. 8 years old, I'm a boy. 120CM",
      hint: "每个input听一次。年龄本课先当文字拼接，不做计算。\n\nname = input()\nage = input()\nsex = input()\nheight = input()\nprint(\"Hello, I'm \" + name + \". \" + age + \" years old, I'm a \" + sex + \". \" + height + \"CM\")",
      starterCode: "# 输入个人介绍卡\n# 依次输入：姓名、年龄、性别、身高数字。\n\nname = input()\nage = input()\nsex = input()\nheight = input()\n\nprint(\"Hello, I'm \" + name + \". \" + age + \" years old, I'm a \" + sex + \". \" + height + \"CM\")\n",
      testCases: [
        { label: "Willi的信息卡", input: "Willi\n8\nboy\n120", expected: "Hello, I'm Willi. 8 years old, I'm a boy. 120CM" },
        { label: "Cici的信息卡", input: "Cici\n7\ngirl\n118", expected: "Hello, I'm Cici. 7 years old, I'm a girl. 118CM" }
      ],
      points: 50,
      badge: "输入小管家"
    }
  }
};

export default lesson01Input;
