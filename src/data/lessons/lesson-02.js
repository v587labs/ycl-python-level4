/**
 * YCL Python 四级互动教学课件 - 数据类型与运算符
 * 低龄版：承接“input输入与变量”，进入“盒子里的东西有种类”。
 */

// ==================== 第1章 第3节 数据类型与运算符 ====================
const lesson02 = {
  id: 2,
  title: "数据类型与运算符",
  chapter: "第1章 Python语言基本语法",
  type: "main",
  examTopics: ["int整数", "float小数", "str字符串", "bool布尔", "类型转换", "算术运算符"],
  difficulty: 1,
  teacher: {
    objectives: [
      "孩子能接上上一课：input输入会先保存到变量里",
      "孩子能说出：不同盒子里可能装文字、整数、小数、真假",
      "孩子能区分：\"8\"是文字，8是数字",
      "孩子能理解：input()听到的内容默认是文字",
      "孩子能使用：int() 把文字数字变成真正能计算的数字"
    ],
    ageAdaptation: {
      target: "7-8岁，已经理解变量像盒子，但还容易把文字数字和数字混在一起",
      pace: "先做分类游戏，再看代码，再做简单计算",
      language: "数据类型=盒子里东西的种类；str=文字卡；int=整数积木；float=小数尺；bool=真假灯",
      notes: [
        "这一课不要追求一次讲完所有运算符，重点是“文字数字不能直接当数字算”。",
        "bool可以轻讲，只作为真假灯引入，不急着进入复杂判断。",
        "所有例子都要围绕前两课的name/age盒子展开，上下文会更顺。"
      ]
    },
    lessonFlow: [
      {
        time: "0-6分钟",
        phase: "复习上一课：input听到的内容进变量",
        teacher: "展示 name = input() 和 age = input()。问孩子：两个盒子都能保存输入，但名字和年龄适合做同一件事吗？",
        student: "回答name装名字，age装年龄；名字适合拼句子，年龄可能要计算。"
      },
      {
        time: "6-14分钟",
        phase: "分类游戏：文字、整数、小数、真假",
        teacher: "拿出卡片：小明、8、3.5、True，让孩子把卡片分到四个篮子：文字、整数、小数、真假。",
        student: "举手判断每张卡属于哪一种。"
      },
      {
        time: "14-22分钟",
        phase: "认识str和int：\"8\"和8不一样",
        teacher: "展示 \"8\" + \"1\" 和 8 + 1。说明穿着引号的8是文字卡，没引号的8是数字积木。",
        student: "预测两个表达式的结果分别是什么。"
      },
      {
        time: "22-32分钟",
        phase: "input听到的都是文字",
        teacher: "展示 age = input()。强调input听到的是文字，即使你输入8，电脑先当成\"8\"保存。",
        student: "说出：要计算年龄，先要把文字8变成数字8。"
      },
      {
        time: "32-40分钟",
        phase: "int()变身术",
        teacher: "展示 age = int(input())，解释int像变身机器，把\"8\"变成8，才能做加减法。",
        student: "输入年龄，计算明年几岁。"
      },
      {
        time: "40-45分钟",
        phase: "收口：看类型再操作",
        teacher: "复盘：文字用来拼句子，数字用来计算。做题前先想盒子里装的是什么类型。",
        student: "完成口头判断：\"10\"、10、3.14、True分别是什么。"
      }
    ],
    teacherScript: [
      {
        when: "开场",
        title: "从变量盒子接入",
        say: "上节课我们认识了变量盒子。今天我们要打开盒子看一看：盒子里的东西也有不同种类。",
        check: "孩子能说出变量是盒子。"
      },
      {
        when: "讲类型",
        title: "分类不是背单词",
        say: "类型就是分类。像文具有铅笔、橡皮、尺子；数据也有文字、整数、小数、真假。",
        check: "孩子能把小明归到文字，把8归到整数。"
      },
      {
        when: "讲int",
        title: "文字数字变真数字",
        say: "穿着引号的数字像写在纸上的数字，可以看，但不能直接拿来计算。int()像变身机器，让它变成真正的数字。",
        check: "孩子能区分\"8\"和8。"
      },
      {
        when: "讲运算",
        title: "计算前先检查类型",
        say: "如果要做数学，盒子里要是真数字。如果盒子里是文字数字，要先用int()变身。",
        check: "孩子知道input来的年龄要int转换。"
      }
    ],
    demoSlides: [
      {
        kicker: "复习",
        title: "变量盒子里装了什么？",
        body: "上节课我们学会了：input听到的内容可以保存到变量盒子。",
        code: "name = input()\nage = input()",
        prompt: "name盒子和age盒子，里面装的是同一种东西吗？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "上节课我们学了input。name盒子可以保存输入的名字，age盒子可以保存输入的年龄。",
              "今天我们要再看细一点：盒子里的东西，也有自己的种类。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "先问：name里面是什么？孩子答“小明”。",
              "再问：age里面是什么？孩子答“8”。",
              "追问：名字和年龄能不能做同一件事？比如名字能拿来加1岁吗？"
            ]
          },
          {
            title: "过渡",
            lines: [
              "说：所以电脑不只要知道盒子名字，还要知道盒子里的东西是什么类型。"
            ]
          }
        ],
        check: "孩子能说出盒子里可能装不同种类的内容。"
      },
      {
        kicker: "第1步",
        title: "数据类型就是分类",
        body: "电脑会把内容分成不同种类：文字、整数、小数、真假。",
        bullets: [
          "str：文字",
          "int：整数",
          "float：小数",
          "bool：真假"
        ],
        prompt: "“小明”、8、3.5、True分别像哪一类？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "类型这个词听起来难，其实就是分类。",
              "文具可以分成铅笔、橡皮、尺子；电脑里的数据也可以分类。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "准备四张卡片：小明、8、3.5、True。",
              "让孩子判断：小明是文字，8是整数，3.5是小数，True是真。",
              "不要求孩子立刻背英文名，先把中文分类说清楚。"
            ]
          },
          {
            title: "新手老师注意",
            lines: [
              "bool这一页只讲“真/假开关”，不要展开if判断，后面选择结构再讲。"
            ]
          }
        ],
        check: "孩子能完成中文分类：文字、整数、小数、真假。"
      },
      {
        kicker: "第2步",
        title: "穿引号的数字是文字",
        body: "\"8\"看起来像数字，但它穿着引号，电脑先把它当文字。",
        code: "\"8\"\n8",
        prompt: "上面两个8，哪个是文字？哪个是真数字？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "引号像文字的小房子。只要住在引号里面，电脑就先把它当文字。",
              "所以\"8\"是文字8，8才是可以计算的数字8。"
            ]
          },
          {
            title: "课堂比喻",
            lines: [
              "把\"8\"说成写在姓名贴上的8，只能看。",
              "把8说成真正的8块积木，可以拿来加减。"
            ]
          },
          {
            title: "孩子常见误解",
            lines: [
              "孩子会说它们长得一样。你可以回应：长得像，不代表电脑认为它们一样；电脑会看有没有引号。"
            ]
          }
        ],
        check: "孩子能说出\"8\"是文字，8是数字。"
      },
      {
        kicker: "第3步",
        title: "文字相加和数字相加不一样",
        body: "文字用加号会粘起来，数字用加号会做计算。",
        code: "print(\"8\" + \"1\")\nprint(8 + 1)",
        prompt: "第一行和第二行的结果一样吗？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "同样是加号，遇到文字和遇到数字，做的事情不一样。",
              "文字加文字：像胶水，粘起来。数字加数字：像数学，算出来。"
            ]
          },
          {
            title: "课堂预测",
            lines: [
              "先让孩子猜第一行：\"8\" + \"1\" 会变成什么？",
              "再让孩子猜第二行：8 + 1 会变成什么？",
              "运行后对比：81 和 9。"
            ]
          },
          {
            title: "强调重点",
            lines: [
              "这不是电脑算错了，而是我们给的数据类型不同。"
            ]
          }
        ],
        check: "孩子能解释：文字粘起来，数字算出来。"
      },
      {
        kicker: "第4步",
        title: "input听到的先是文字",
        body: "就算你输入8，input()也会先把它当成文字\"8\"。",
        code: "age = input()",
        prompt: "如果要算明年几岁，能直接用age + 1吗？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "input是电脑的小耳朵。它听到什么，就先把听到的内容当文字保存。",
              "所以你输入8，电脑先保存的是文字\"8\"，不是数字8。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "问孩子：年龄要不要做计算？",
              "如果要算明年几岁，就必须把文字8变成数字8。",
              "这时引出int()。"
            ]
          },
          {
            title: "不要急着讲",
            lines: [
              "不要讲input返回字符串这个专业说法。用“听到的先是文字”就够了。"
            ]
          }
        ],
        check: "孩子知道input输入的年龄要先变成数字。"
      },
      {
        kicker: "第5步",
        title: "int()是变身机器",
        body: "int() 可以把文字数字变成真正的整数。",
        code: "age = int(input())\nprint(age + 1)",
        prompt: "如果输入8，电脑会输出几？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "int像一台变身机器。文字\"8\"进去，数字8出来。",
              "变成数字以后，才可以做age + 1这样的计算。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "让孩子输入自己的年龄。",
              "运行后观察输出是不是明年的年龄。",
              "如果孩子输入中文数字“八”，会报错。告诉孩子：int机器只认识阿拉伯数字8。"
            ]
          },
          {
            title: "新手老师救场",
            lines: [
              "如果报错，先检查输入是不是数字。",
              "再检查int和input的括号有没有成对。"
            ]
          }
        ],
        check: "孩子能说出int()把文字数字变成整数。"
      },
      {
        kicker: "第6步",
        title: "小数和真假也有类型",
        body: "3.5是小数float，True和False是真假bool。",
        code: "height = 1.25\nis_student = True",
        prompt: "1.25像整数还是小数？True像开还是关？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "整数是没有小数点的数字，小数是带小数点的数字。",
              "True和False像开关，一个表示真，一个表示假。"
            ]
          },
          {
            title: "轻讲即可",
            lines: [
              "这页是认识，不需要大量计算。",
              "告诉孩子后面判断题、选择结构会经常看到True和False。"
            ]
          }
        ],
        check: "孩子能把3.5归为小数，把True归为真。"
      },
      {
        kicker: "最后",
        title: "今天记住一件事",
        body: "计算前，先看盒子里装的是文字还是数字。",
        bullets: [
          "文字适合拼句子。",
          "数字适合做计算。",
          "input听到的内容，默认先是文字。"
        ],
        prompt: "如果要计算年龄，要先用什么变身？",
        teacherNote: [
          {
            title: "收口话术",
            lines: [
              "上节课我们学会了把内容放进变量盒子。",
              "今天我们知道了：盒子里的东西有种类。类型不一样，电脑做的事情也不一样。"
            ]
          },
          {
            title: "衔接下一课",
            lines: [
              "下一节会继续做数字运算，比如整除和余数。",
              "所以今天的int()非常重要，它能帮我们把输入变成能计算的数字。"
            ]
          }
        ],
        check: "孩子能回答：用int()把文字数字变成数字。"
      }
    ],
    concepts: [
      {
        name: "str 文字类型",
        definition: "str就是文字类型。只要内容住在引号里面，电脑通常先把它当文字。",
        example: "name = \"小明\"\nage = \"8\"",
        teacherSay: "文字可以是汉字、英文，也可以是穿着引号的数字。",
        kidQuestion: "\"8\"为什么不是可以直接计算的数字？"
      },
      {
        name: "int 整数类型",
        definition: "int就是整数，没有小数点，可以做加减乘除。",
        example: "age = 8\nprint(age + 1)",
        teacherSay: "整数像真正的数字积木，可以拿来计算。",
        kidQuestion: "8 + 1 等于几？"
      },
      {
        name: "float 小数类型",
        definition: "float就是小数，带小数点，比如3.5、1.25。",
        example: "height = 1.25",
        teacherSay: "只要看到小数点，就可以先把它归到小数float。",
        kidQuestion: "3.5是整数还是小数？"
      },
      {
        name: "bool 真假类型",
        definition: "bool只有两个值：True表示真，False表示假。",
        example: "is_student = True",
        teacherSay: "bool像一盏真假灯，只有开和关两种状态。",
        kidQuestion: "True表示真还是假？"
      },
      {
        name: "int() 变身术",
        definition: "int()可以把文字数字变成真正的整数，变完以后才能计算。",
        example: "age = int(input())\nprint(age + 1)",
        teacherSay: "input听到的是文字，int负责把文字数字变成真数字。",
        kidQuestion: "如果输入8，age + 1会输出几？"
      },
      {
        name: "算术运算符",
        definition: "+、-、*、/可以做加减乘除。注意乘号写*，除号写/。",
        example: "print(8 + 1)\nprint(6 * 2)\nprint(10 / 2)",
        teacherSay: "键盘里没有数学书上的×和÷，Python用*和/来表示乘除。",
        kidQuestion: "在Python里，乘法用哪个符号？"
      }
    ],
    commonMistakes: [
      {
        mistake: "把文字数字直接拿去计算",
        wrongCode: "age = input()\nprint(age + 1)",
        correctCode: "age = int(input())\nprint(age + 1)",
        explanation: "input听到的是文字。要做年龄计算，先用int()把文字数字变成真正的整数。"
      },
      {
        mistake: "\"8\" + \"1\" 以为等于9",
        wrongCode: "print(\"8\" + \"1\")  # 输出81",
        correctCode: "print(8 + 1)  # 输出9",
        explanation: "文字加文字会粘起来；数字加数字才会做数学计算。"
      },
      {
        mistake: "中文数字不能直接给int()",
        wrongCode: "int(\"八\")",
        correctCode: "int(\"8\")",
        explanation: "int()这台变身机器认识阿拉伯数字8，不认识中文数字“八”。"
      },
      {
        mistake: "乘除符号写成数学书里的样子",
        wrongCode: "print(6 × 2)\nprint(10 ÷ 2)",
        correctCode: "print(6 * 2)\nprint(10 / 2)",
        explanation: "Python里乘法用星号*，除法用斜杠/。"
      }
    ],
    teachingTips: "这一课最重要的不是让孩子背int/float/str/bool英文，而是建立“类型不同，电脑做法不同”的感觉。尤其要讲清楚 input() 输入来的年龄为什么要用 int()。",
    handsOn: {
      title: "跟做练习：计算明年几岁",
      steps: [
        "第一步：复习 name = input()，知道input听到的是文字。",
        "第二步：输入年龄8，观察它先像文字\"8\"。",
        "第三步：写 age = int(input())，把输入变成整数。",
        "第四步：运行 print(age + 1)，输出明年的年龄。",
        "第五步：换不同年龄测试，比如7、8、9。",
        "第六步：同桌互问：为什么这里要用int()？"
      ]
    },
    boardPlan: [
      "变量盒子保存内容",
      "input听到的内容会先保存到变量",
      "str = 文字，int = 整数，float = 小数，bool = 真假",
      "\"8\" 是文字8，8 是数字8",
      "input()听到的先是文字；int()把文字数字变成整数"
    ],
    parentNote: "今天孩子学习了数据类型。核心不是背英文，而是知道：\"8\"和8在电脑眼里不同。可以让孩子解释为什么输入年龄后要写 int(input())。"
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "\"8\" 是什么类型？",
        options: ["文字 str", "整数 int", "小数 float", "真假 bool"],
        answer: 0,
        explanation: "\"8\"穿着引号，所以电脑先把它当文字。",
        points: 10
      },
      {
        type: "choice",
        question: "8 + 1 的结果是？",
        options: ["81", "9", "\"81\"", "报错"],
        answer: 1,
        explanation: "8和1都是真数字，所以会做数学计算，结果是9。",
        points: 10
      },
      {
        type: "choice",
        question: "\"8\" + \"1\" 的结果更像什么？",
        options: ["9", "81", "17", "报错"],
        answer: 1,
        explanation: "文字加文字会粘起来，所以\"8\" + \"1\"变成\"81\"。",
        points: 10
      },
      {
        type: "choice",
        question: "想把 input() 输入的年龄拿来计算，通常要用什么？",
        options: ["print()", "int()", "name", "True"],
        answer: 1,
        explanation: "input()听到的先是文字，int()能把文字数字变成整数。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "math",
      title: "计算明年几岁",
      description: "请写一个程序：\n\n1. 输入你的年龄。\n2. 把输入的年龄变成整数。\n3. 输出明年的年龄。\n\n例如输入：8\n输出：9",
      hint: "input听到的是文字，要先用int()变成整数。\n\nage = int(input())\nprint(age + 1)",
      starterCode: "# 数据类型与运算：计算明年几岁\n\nage = int(input())\nprint(age + 1)\n",
      testCases: [
        { label: "8岁测试", input: "8", expected: "9" },
        { label: "7岁测试", input: "7", expected: "8" },
        { label: "9岁测试", input: "9", expected: "10" }
      ],
      points: 50,
      badge: "类型小侦探"
    }
  }
};

export default lesson02;
