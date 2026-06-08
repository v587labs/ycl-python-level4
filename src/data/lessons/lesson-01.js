/**
 * YCL Python 四级互动教学课件 - 变量与常量
 * 低龄版：只讲注释、变量盒子、赋值、命名规则和 print 输出变量。
 */

// ==================== 第1章 第1节 变量与常量 ====================
const lesson01 = {
  id: 1,
  title: "变量与常量",
  chapter: "第1章 Python语言基本语法",
  type: "main",
  examTopics: ["注释", "变量概念", "变量命名规则", "变量赋值", "print输出变量", "字符串拼接"],
  difficulty: 1,
  teacher: {
    objectives: [
      "孩子能接上前两课：代码可以在IDLE里写、保存、运行",
      "孩子能使用 # 写一行注释，说明代码在做什么",
      "孩子能说出：变量像一个有名字的小盒子，可以保存一个值",
      "孩子能拆解：name = \"Bob\" 里 name 是变量名，= 是赋值，\"Bob\" 是值",
      "孩子能判断常见变量名是否合法，并知道名字要有意义",
      "孩子能使用 print(name) 输出变量里的值",
      "孩子能用逗号或 + 把固定文字和变量放在同一行输出"
    ],
    ageAdaptation: {
      target: "7-8岁，一二年级，已经能运行print，但还没必要进入input",
      pace: "先讲注释，再讲变量盒子和赋值，最后讲命名规则与同一行输出",
      language: "注释=给人看的解释；变量=有名字的小盒子；等号=放进去；print=小喇叭",
      notes: [
        "这一课不讲 input，把课堂时间留给变量命名、赋值方向和输出变量。",
        "低龄孩子容易把变量名和变量值混淆，要反复问：盒子名是谁？盒子里装了谁？",
        "命名规则先讲三条硬规则：字母数字下划线、不能数字开头、不能有空格；再讲名字要有意义。"
      ]
    },
    lessonFlow: [
      {
        time: "0-5分钟",
        phase: "复习：print会让电脑显示文字",
        teacher: "先让孩子运行 print(\"Hello\")，确认电脑会把引号里的内容显示到屏幕上。",
        student: "读出代码和屏幕结果。"
      },
      {
        time: "5-10分钟",
        phase: "认识注释：给代码写解释",
        teacher: "展示 # 在屏幕上输出Hello。说明井号后面的内容是给人看的解释，电脑运行时会跳过。",
        student: "说出注释是给谁看的。"
      },
      {
        time: "10-18分钟",
        phase: "变量盒子：name保存Bob",
        teacher: "展示 name = \"Bob\"。把 name 画成盒子标签，把 \"Bob\" 画成放进去的纸条。",
        student: "指出变量名、赋值符号和值。"
      },
      {
        time: "18-28分钟",
        phase: "变量命名规则",
        teacher: "带孩子判断 name、myName、age1、my name、1name、_name、my_name 是否有效，再解释蛇形命名和驼峰命名。",
        student: "举手判断有效/无效，并说出原因。"
      },
      {
        time: "28-36分钟",
        phase: "使用变量：print(name)",
        teacher: "对比 print(\"name\") 和 print(name)。强调有引号就原样说name，没有引号就打开变量盒子。",
        student: "预测两行代码分别输出什么。"
      },
      {
        time: "36-43分钟",
        phase: "同一行输出：逗号和加号",
        teacher: "展示 print(\"Hello\", name) 和 print(\"Hello \" + name)。说明逗号会自动隔开，+ 是把文字粘起来。",
        student: "运行两种输出方式，观察有没有空格。"
      },
      {
        time: "43-45分钟",
        phase: "收口：变量信息卡",
        teacher: "用 name、age、sex、height 做一张个人信息卡，提醒下一课才让电脑自己询问输入。",
        student: "说出：今天是先把值写进变量，下一课再让电脑听我们输入。"
      }
    ],
    teacherScript: [
      {
        when: "开场复习",
        title: "从print接到变量",
        say: "前面电脑已经会显示固定文字了。今天我们先不让电脑提问，而是先学会把信息保存起来：名字、年龄、性别、身高，都可以先放进变量盒子。",
        check: "孩子能说出print负责显示。"
      },
      {
        when: "讲注释",
        title: "井号后面是解释",
        say: "井号后面的文字叫注释。注释不是给电脑执行的，是写给自己、老师、同学看的解释。它能告诉别人：这段代码是干什么用的。",
        check: "孩子知道 # 后面的内容不会被当作代码运行。"
      },
      {
        when: "讲变量",
        title: "盒子比喻",
        say: "变量不是很难的词。你可以把变量想成一个贴了名字的小盒子。盒子外面的标签叫变量名，盒子里面放着一个值。",
        check: "孩子能分清变量名name和值\"Bob\"。"
      },
      {
        when: "讲等号",
        title: "不要说数学等于",
        say: "在Python里，这里的等号先不要读成数学里的等于。我们今天把它读成‘赋值’，也就是把右边的值放进左边的变量盒子。",
        check: "孩子能说出右边放进左边。"
      },
      {
        when: "讲命名",
        title: "能运行还不够，要看得懂",
        say: "有些名字电脑能接受，但是人看不懂。比如 willicicibob_123 能运行，但读起来很累。变量名最好能说明盒子里放的是什么。",
        check: "孩子能说出变量名要有意义。"
      }
    ],
    demoSlides: [
      {
        kicker: "复习",
        title: "print会输出到屏幕",
        body: "print像小喇叭，会把内容显示到屏幕上。",
        code: "print(\"Hello\")",
        prompt: "这行代码会让电脑显示什么？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "前面我们已经知道，print负责把文字显示出来。",
              "今天我们继续用print，但内容不一定永远写死在引号里。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "让孩子齐读代码：print、左括号、引号、Hello、引号、右括号。",
              "确认孩子能看到屏幕上的Hello。"
            ]
          }
        ],
        check: "孩子能说出print会显示Hello。"
      },
      {
        kicker: "第1步",
        title: "井号表示注释",
        body: "注释是给代码写解释，说明这段代码是干什么用的。",
        code: "# 在屏幕上输出Hello。\nprint(\"Hello\")",
        prompt: "# 后面的文字会显示到屏幕上吗？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "井号后面的内容叫注释。",
              "注释是写给人看的，电脑运行时会跳过它。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "先运行有注释的代码，让孩子观察屏幕只显示Hello。",
              "再把注释换成“这是小喇叭”，告诉孩子注释可以帮助我们看懂代码。"
            ]
          }
        ],
        check: "孩子知道注释不会被执行。"
      },
      {
        kicker: "第2步",
        title: "变量像有名字的小盒子",
        body: "变量可以保存一个值，后面想用它时直接叫变量名。",
        code: "name = \"Bob\"",
        prompt: "name是盒子名，还是盒子里的内容？",
        teacherNote: [
          {
            title: "实物演示",
            lines: [
              "画一个盒子，盒子外面写name。",
              "把写着Bob的纸条放进去。",
              "告诉孩子：name是变量名，Bob是值。"
            ]
          },
          {
            title: "你可以照着这样讲",
            lines: [
              "变量就是一个有名字的小盒子。",
              "盒子名让我们找到它，盒子里的值才是真正保存的内容。"
            ]
          }
        ],
        check: "孩子能分清变量名和值。"
      },
      {
        kicker: "第3步",
        title: "拆开 name = \"Bob\"",
        body: "一行赋值代码可以拆成三部分。",
        bullets: [
          "name：变量名",
          "=：赋值符号",
          "\"Bob\"：值"
        ],
        prompt: "这行代码是把谁放进哪个盒子？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "等号在这里不是数学里的等于。",
              "我们先把它读成赋值：把右边的值，通过赋值的方式，放进左边的变量盒子。"
            ]
          },
          {
            title: "课堂动作",
            lines: [
              "让孩子右手拿值Bob，左手比盒子name。",
              "全班一起说：右边放进左边。"
            ]
          }
        ],
        check: "孩子能说出右边放进左边。"
      },
      {
        kicker: "第4步",
        title: "变量名不能乱取",
        body: "变量名只能使用字母、数字、下划线，并且不能以数字开头。",
        code: "name      # 有效\nmy_name   # 有效\nage1      # 有效\nmy name   # 无效：有空格\n1name     # 无效：数字开头",
        prompt: "my name 和 1name 为什么不能当变量名？",
        teacherNote: [
          {
            title: "判断练习",
            lines: [
              "让孩子逐个判断：name、myName、age1、my name、1name、_name、my_name。",
              "不要只问对错，要追问原因：是不是有空格？是不是数字开头？"
            ]
          },
          {
            title: "补充提醒",
            lines: [
              "_name 可以运行，但低龄孩子暂时只要知道下划线可以使用。",
              "变量名最好能看出盒子里放的是什么。"
            ]
          }
        ],
        check: "孩子能判断常见变量名是否有效。"
      },
      {
        kicker: "第5步",
        title: "好名字更容易看懂",
        body: "长变量名要把单词分开，常见方法有蛇形命名法和驼峰命名法。",
        code: "zhe_shi_yi_ge_ming_zi  # snake case\nzheShiYiGeMingZi       # camelCase",
        prompt: "你觉得哪种名字更容易看懂？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "电脑只看规则，人还要看懂意思。",
              "用下划线把单词隔开，叫蛇形命名法；用大写字母隔开，叫驼峰命名法。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "对比 willicicibob_123 和 student_name。",
              "告诉孩子：能运行不代表好读，好变量名应该有意义。"
            ]
          }
        ],
        check: "孩子知道变量名要有意义。"
      },
      {
        kicker: "第6步",
        title: "使用变量时直接写变量名",
        body: "print(name) 会打开name盒子，显示里面的值。",
        code: "name = \"Bob\"\nprint(name)",
        prompt: "第二行会显示name，还是显示Bob？",
        teacherNote: [
          {
            title: "重点对比",
            lines: [
              "print(name)：没有引号，打开变量盒子，显示Bob。",
              "print(\"name\")：有引号，直接显示name这四个字母。"
            ]
          },
          {
            title: "孩子回答错时",
            lines: [
              "先问：这里有没有引号？",
              "没有引号时，我们是不是要去找变量盒子？"
            ]
          }
        ],
        check: "孩子能区分print(name)和print(\"name\")。"
      },
      {
        kicker: "第7步",
        title: "同一行输出：逗号",
        body: "print支持同时输出多个内容，多个内容之间用逗号隔开。",
        code: "name = \"Bob\"\nprint(\"Hello\", name)",
        prompt: "这行代码中间会不会自动有一个空格？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "逗号像把几个东西一起递给print。",
              "print会把它们放在同一行，中间自动隔开一个空格。"
            ]
          }
        ],
        check: "孩子知道多个输出内容用逗号隔开。"
      },
      {
        kicker: "第8步",
        title: "同一行输出：加号拼接",
        body: "加号可以把多个字符串直接拼成一个大的字符串。",
        code: "name = \"Bob\"\nprint(\"Hello\" + name)\nprint(\"Hello \" + name)\nprint(\"Hello\" + \" \" + name)",
        prompt: "为什么第一行Hello和Bob粘在一起了？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "+ 像胶水，会把字符串紧紧粘起来。",
              "如果想中间有空格，空格也要写进字符串里。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "先运行没有空格的版本，让孩子发现不好看。",
              "再加上\"Hello \"或\" \"，让孩子观察输出变清楚。"
            ]
          }
        ],
        check: "孩子知道拼接时空格也要自己写。"
      },
      {
        kicker: "最后",
        title: "变量信息卡",
        body: "先把姓名、年龄、性别、身高保存到变量，再输出一张信息卡。",
        code: "name = \"Willi\"\nage = 8\nsex = \"boy\"\nheight = \"120CM\"\nprint(\"Hello, I'm\", name + \".\", age, \"years old, I'm a\", sex + \".\", height)",
        prompt: "这段代码里有几个变量盒子？",
        teacherNote: [
          {
            title: "收口话术",
            lines: [
              "今天我们是先把值写进变量盒子，再让print输出。",
              "下一课我们再让电脑自己问同学，把同学输入的内容放进变量盒子。"
            ]
          }
        ],
        check: "孩子能说出name、age、sex、height四个变量。"
      }
    ],
    concepts: [
      {
        name: "注释（#）",
        definition: "井号后面的内容是注释，用来给代码写解释，电脑运行时会跳过。",
        example: "# 在屏幕上输出Hello。\nprint(\"Hello\")",
        teacherSay: "注释是给人看的说明，不是给电脑执行的命令。",
        kidQuestion: "# 后面的文字会不会显示到屏幕上？"
      },
      {
        name: "变量（Variable）",
        definition: "变量就像一个有名字的小盒子。盒子名不变，里面可以保存一个值。",
        example: "name = \"Bob\"",
        teacherSay: "把\"Bob\"放进name盒子，以后叫name，就能找到盒子里的\"Bob\"。",
        kidQuestion: "name是盒子名，还是盒子里的内容？"
      },
      {
        name: "赋值（=）",
        definition: "在Python里，等号可以先理解成赋值：把右边的值放进左边的变量。",
        example: "age = 8",
        teacherSay: "低龄孩子先读成“把8放进age盒子”，暂时不要强调数学里的相等。",
        kidQuestion: "这行代码是把8放进哪个盒子？"
      },
      {
        name: "变量命名规则",
        definition: "变量名只能使用字母、数字、下划线，并且不能以数字开头，不能有空格。",
        example: "name ✅\nage1 ✅\nmy_name ✅\nmy name ❌\n1name ❌",
        teacherSay: "给盒子贴标签要清楚，标签不能乱写。电脑看到不合规则的名字会看不懂。",
        kidQuestion: "my_name 和 1name，哪个更适合当盒子名字？"
      },
      {
        name: "蛇形命名法和驼峰命名法",
        definition: "长变量名要把单词隔开。用下划线隔开叫蛇形命名法；用大写字母隔开叫驼峰命名法。",
        example: "student_name\nstudentName",
        teacherSay: "变量名不只是能运行，还要让人看得懂。",
        kidQuestion: "student_name 和 zheshiyigeminzi，哪个更容易看懂？"
      },
      {
        name: "print输出变量",
        definition: "print可以输出固定文字，也可以输出变量里的值。变量使用时直接写变量名。",
        example: "name = \"Bob\"\nprint(name)",
        teacherSay: "有引号就照着文字说；没有引号就去找变量盒子。",
        kidQuestion: "print(\"name\") 和 print(name) 一样吗？"
      },
      {
        name: "同一行输出",
        definition: "同一行输出可以用逗号，也可以用 + 拼接字符串。逗号会自动隔开，+ 拼接需要自己写空格。",
        example: "print(\"Hello\", name)\nprint(\"Hello \" + name)",
        teacherSay: "逗号像分开放到同一行，+ 像胶水把字符串粘起来。",
        kidQuestion: "为什么\"Hello\" + name中间没有空格？"
      }
    ],
    commonMistakes: [
      {
        mistake: "把注释当作会运行的代码",
        wrongCode: "# print(\"Hello\")",
        correctCode: "print(\"Hello\")",
        explanation: "# 后面的内容是注释，电脑运行时会跳过。真正要执行的代码不能写在 # 后面。"
      },
      {
        mistake: "把变量名加了引号",
        wrongCode: "name = \"Bob\"\nprint(\"name\")",
        correctCode: "name = \"Bob\"\nprint(name)",
        explanation: "有引号时电脑会原样显示name；没有引号时电脑才会打开name盒子。"
      },
      {
        mistake: "字符串忘记加引号",
        wrongCode: "name = Bob",
        correctCode: "name = \"Bob\"",
        explanation: "文字要住在引号小房子里。没有引号，电脑会以为Bob也是一个变量名。"
      },
      {
        mistake: "变量名有空格或数字开头",
        wrongCode: "my name = \"Bob\"\n1name = \"Cici\"",
        correctCode: "my_name = \"Bob\"\nname1 = \"Cici\"",
        explanation: "变量名像盒子标签，不能有空格，也不能用数字开头。"
      },
      {
        mistake: "用 + 拼接时忘记空格",
        wrongCode: "print(\"Hello\" + name)",
        correctCode: "print(\"Hello \" + name)",
        explanation: "+ 会直接粘起来，如果想要空格，空格也要写在字符串里。"
      }
    ],
    teachingTips: "这节课不要进入input。课堂目标是让孩子真正分清变量名、赋值符号和值，并能判断变量名是否合法。最后用个人信息卡收口即可。",
    handsOn: {
      title: "跟做练习：变量信息卡",
      steps: [
        "第一步：运行 print(\"Hello\")，复习输出。",
        "第二步：在代码前写一行注释，说明这行代码做什么。",
        "第三步：写 name = \"Bob\"，拆出变量名、赋值符号和值。",
        "第四步：判断一组变量名是否有效：name、myName、age1、my name、1name、_name、my_name。",
        "第五步：写 name、age、sex、height 四个变量。",
        "第六步：用 print(name) 输出变量，再用逗号或 + 把多段内容输出到同一行。"
      ]
    },
    boardPlan: [
      "# = 注释，给人看的解释",
      "变量 = 有名字的小盒子",
      "name = \"Bob\"",
      "name 是变量名，= 是赋值，\"Bob\" 是值",
      "变量名：字母/数字/下划线，不能数字开头，不能有空格",
      "snake_case / camelCase",
      "print(name) = 输出变量里的值",
      "同一行输出：print(\"Hello\", name) 或 print(\"Hello \" + name)"
    ],
    parentNote: "今天孩子学习了变量基础，但还没有进入input。可以让孩子在家解释：# 是注释，name = \"Bob\" 中 name 是变量名，= 是赋值，\"Bob\" 是值；再演示 print(name) 会输出变量里的内容。"
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "# 在屏幕上输出Hello 这一行更像什么？",
        options: ["注释，给人看的解释", "会输出到屏幕的代码", "变量名", "赋值符号"],
        answer: 0,
        explanation: "# 后面的内容是注释，用来解释代码，电脑运行时会跳过。",
        points: 10
      },
      {
        type: "choice",
        question: "name = \"Bob\" 这行代码中，name 是什么？",
        options: ["变量名", "值", "注释", "输出命令"],
        answer: 0,
        explanation: "name 是变量名，像盒子外面的标签。",
        points: 10
      },
      {
        type: "choice",
        question: "下面哪个变量名无效？",
        options: ["my_name", "age1", "1name", "_name"],
        answer: 2,
        explanation: "变量名不能以数字开头，所以1name无效。",
        points: 10
      },
      {
        type: "choice",
        question: "如果 name = \"Bob\"，print(name) 会显示什么？",
        options: ["name", "Bob", "\"Bob\"", "没有输出"],
        answer: 1,
        explanation: "print(name) 没有引号，会打开name盒子，显示里面的Bob。",
        points: 10
      },
      {
        type: "choice",
        question: "print(\"Hello\" + name) 没有空格时，输出更可能是什么？",
        options: ["Hello Bob", "HelloBob", "Hello + Bob", "name"],
        answer: 1,
        explanation: "+ 会直接把字符串粘起来，想要空格要写成 \"Hello \" + name。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "string",
      title: "制作变量信息卡",
      description: "请写一个程序：\n\n1. 用变量保存姓名、年龄、性别和身高。\n2. 输出一行英文介绍。\n\n默认示例要求输出：\nHello, I'm Willi. 8 years old, I'm a boy. 120CM\n\n完成后，你也可以把变量值改成自己的信息。",
      hint: "先把信息放进变量盒子，再用print输出。\n\nname = \"Willi\"\nage = 8\nsex = \"boy\"\nheight = \"120CM\"\nprint(\"Hello, I'm\", name + \".\", age, \"years old, I'm a\", sex + \".\", height)",
      starterCode: "# 变量信息卡\n# 先把信息保存到变量里，再输出到屏幕。\n\nname = \"Willi\"\nage = 8\nsex = \"boy\"\nheight = \"120CM\"\n\nprint(\"Hello, I'm\", name + \".\", age, \"years old, I'm a\", sex + \".\", height)\n",
      testCases: [
        { label: "默认信息卡", input: "", expected: "Hello, I'm Willi. 8 years old, I'm a boy. 120CM" },
        { label: "再次检查", input: "", expected: "Hello, I'm Willi. 8 years old, I'm a boy. 120CM" }
      ],
      points: 50,
      badge: "变量小管家"
    }
  }
};

export default lesson01;
