/**
 * YCL Python 四级互动教学课件 - 变量与常量
 * 低龄版：承接第0课“清楚指令”，进入“把信息保存起来”。
 */

// ==================== 第1章 第1节 变量与常量（课时1）====================
const lesson01 = {
  id: 1,
  title: "变量与常量",
  chapter: "第1章 Python语言基本语法",
  type: "main",
  examTopics: ["变量概念", "变量命名规则", "变量赋值", "input输入", "print输出"],
  difficulty: 1,
  teacher: {
    objectives: [
      "孩子能接上第0课：程序是给电脑的清楚指令",
      "孩子能说出：变量像一个有名字的小盒子，可以保存信息",
      "孩子能看懂：name = \"小明\" 是把“小明”放进 name 盒子",
      "孩子能使用：print(name) 显示变量盒子里的内容",
      "孩子能使用：input() 让电脑等同学输入一句话，再保存起来"
    ],
    ageAdaptation: {
      target: "7-8岁，一二年级，刚完成第一行print输出",
      pace: "先复习print，再用实物盒子演示变量，最后加入input",
      language: "变量=有名字的小盒子；等号=放进去；input=电脑的小耳朵；print=电脑的小喇叭",
      notes: [
        "不要一上来讲“内存地址、引用、对象”。孩子只需要理解“名字对应一个内容”。",
        "低龄孩子容易把变量名和文字混淆，必须反复对比 print(name) 和 print(\"name\")。",
        "变量命名规则只讲三条：不能数字开头、不能有空格、建议用英文小写。"
      ]
    },
    lessonFlow: [
      {
        time: "0-5分钟",
        phase: "复习第0课：print让电脑说话",
        teacher: "先让孩子齐读 print(\"Hello\")，回忆print像小喇叭。再问：如果我想让电脑记住你的名字，只会说话够不够？",
        student: "回答print能显示文字，但还不能保存名字。"
      },
      {
        time: "5-12分钟",
        phase: "实物演示：变量是有名字的小盒子",
        teacher: "拿一个真实盒子或在黑板画盒子，贴上name标签，把写着“小明”的纸条放进去。",
        student: "说出：name盒子里面放着小明。"
      },
      {
        time: "12-20分钟",
        phase: "认识赋值：等号是放进去",
        teacher: "展示 name = \"小明\"，解释左边是盒子名，右边是要放进去的内容，中间等号表示放进去。",
        student: "用手势表示：右边的内容放进左边的盒子。"
      },
      {
        time: "20-28分钟",
        phase: "显示变量：print(name)",
        teacher: "对比 print(\"name\") 和 print(name)。强调有引号就原样说name，没有引号就打开盒子看里面。",
        student: "判断两行代码输出分别是什么。"
      },
      {
        time: "28-38分钟",
        phase: "电脑的小耳朵：input()",
        teacher: "展示 name = input()。解释电脑会停下来听你输入，再把听到的话放进name盒子。",
        student: "输入自己的名字，再运行 print(\"我叫\" + name + \"！\")。"
      },
      {
        time: "38-45分钟",
        phase: "收口：输入、保存、输出",
        teacher: "把流程画成 input -> name盒子 -> print。让孩子用自己的话复述一遍。",
        student: "完成口头流程复述，再进入练习。"
      }
    ],
    teacherScript: [
      {
        when: "开场复习",
        title: "把第0课接回来",
        say: "上节课我们让电脑说了一句话。今天我们要让电脑更聪明一点：不只是说固定的话，还能记住同学输入的名字。",
        check: "孩子能说出print是显示内容。"
      },
      {
        when: "讲变量",
        title: "盒子比喻",
        say: "变量不是很难的词。你可以把变量想成一个贴了名字的小盒子。盒子有名字，盒子里面也有东西。",
        check: "孩子能分清盒子名name和盒子里的“小明”。"
      },
      {
        when: "讲等号",
        title: "不要说数学等于",
        say: "在Python里，这里的等号先不要读成数学里的等于。我们先把它想成‘放进去’：把右边的内容放进左边的盒子。",
        check: "孩子能说出右边放进左边。"
      },
      {
        when: "讲input",
        title: "耳朵和盒子",
        say: "input像电脑的小耳朵，它会等你说话。你说完以后，我们要用一个盒子把这句话保存起来。",
        check: "孩子知道input输入后要存到变量里。"
      }
    ],
    demoSlides: [
      {
        kicker: "复习",
        title: "上节课电脑会说话",
        body: "print像小喇叭，可以让电脑把文字显示出来。",
        code: "print(\"Hello\")",
        prompt: "这行代码会让电脑说什么？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "上节课我们学会了一件很重要的事：电脑不会猜，但是它会照着清楚指令做。",
              "print就是我们学到的第一个指令，它像小喇叭，会把文字显示出来。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "让孩子齐读代码：print、左括号、引号、Hello、引号、右括号。",
              "问：引号里面是什么，屏幕上就会显示什么？",
              "确认孩子还记得括号和引号要成双。"
            ]
          },
          {
            title: "过渡",
            lines: [
              "说：如果每次都只能说固定的话，电脑还不够聪明。今天我们要让电脑记住一个人的名字。"
            ]
          }
        ],
        check: "孩子能说出print会显示Hello。"
      },
      {
        kicker: "第1步",
        title: "变量像有名字的小盒子",
        body: "盒子外面有名字，盒子里面可以放内容。",
        prompt: "如果盒子叫name，里面放“小明”，我们叫盒子名字会想到谁？",
        teacherNote: [
          {
            title: "实物演示",
            lines: [
              "拿一个盒子，贴上name标签；把写着“小明”的纸条放进去。",
              "告诉孩子：name是盒子的名字，小明是盒子里的内容。",
              "再换一张纸条“小红”，让孩子发现盒子名不变，里面内容可以变。"
            ]
          },
          {
            title: "你可以照着这样讲",
            lines: [
              "变量就是一个有名字的小盒子。我们以后想用里面的东西，就叫盒子的名字。",
              "变量最厉害的地方是：它可以先保存，后面再拿出来用。"
            ]
          },
          {
            title: "孩子容易混淆",
            lines: [
              "如果孩子说name就是小明，你就纠正：name是盒子名，小明是盒子里的东西。"
            ]
          }
        ],
        check: "孩子能说出name是盒子名，小明是内容。"
      },
      {
        kicker: "第2步",
        title: "等号表示放进去",
        body: "把右边的内容，放进左边的变量盒子。",
        code: "name = \"小明\"",
        prompt: "这行代码是把谁放进哪个盒子？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "这一行代码左边是name盒子，右边是文字“小明”。",
              "中间的等号，我们今天先读成‘放进去’：把“小明”放进name盒子。"
            ]
          },
          {
            title: "课堂动作",
            lines: [
              "让孩子右手拿“内容”，左手比“盒子”。",
              "全班一起说：右边放进左边。",
              "再问：name盒子现在装着什么？"
            ]
          },
          {
            title: "新手老师注意",
            lines: [
              "不要展开讲赋值语句的严格定义。低龄孩子先形成方向感最重要。",
              "强调文字“小明”要在引号里，因为它是要保存的一段文字。"
            ]
          }
        ],
        check: "孩子能说出：把“小明”放进name。"
      },
      {
        kicker: "第3步",
        title: "打开盒子给电脑看",
        body: "print(name) 会显示name盒子里的内容。",
        code: "name = \"小明\"\nprint(name)",
        prompt: "第二行会显示name，还是显示小明？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "第一行先把“小明”放进name盒子。",
              "第二行print(name)，没有引号，意思是：打开name盒子，把里面的内容显示出来。"
            ]
          },
          {
            title: "重点对比",
            lines: [
              "print(name)：没有引号，打开盒子，显示小明。",
              "print(\"name\")：有引号，不打开盒子，直接显示name这四个字母。",
              "这一组对比是本课最重要的地方，可以多问几遍。"
            ]
          },
          {
            title: "孩子回答错时",
            lines: [
              "不要直接说错，问：这里有没有引号？没有引号时，我们是不是要打开盒子？"
            ]
          }
        ],
        check: "孩子能区分print(name)和print(\"name\")。"
      },
      {
        kicker: "第4步",
        title: "input像电脑的小耳朵",
        body: "input() 会等同学输入，再把输入保存到变量里。",
        code: "name = input()",
        prompt: "电脑听到的名字，要放进哪个盒子？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "input像电脑的小耳朵。程序运行到这里时，电脑会停下来等你输入。",
              "但是听完以后，要把听到的话保存起来，所以左边要有name盒子。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "先让老师输入一次名字，孩子观察屏幕停下来等待输入。",
              "输入后告诉孩子：刚才输入的内容已经进了name盒子。",
              "再运行print(name)，证明盒子里真的有刚才输入的名字。"
            ]
          },
          {
            title: "常见卡点",
            lines: [
              "孩子会以为input自己就能显示内容。提醒：input负责听，print负责说。",
              "孩子忘记左边name时，提醒：听到的话要有盒子保存。"
            ]
          }
        ],
        check: "孩子能说出input负责听，print负责说。"
      },
      {
        kicker: "第5步",
        title: "把名字放进一句话",
        body: "用加号把文字和变量连成一句完整的话。",
        code: "name = input()\nprint(\"我叫\" + name + \"！\")",
        prompt: "如果输入“小红”，电脑会说什么？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "这一句有三段：第一段文字“我叫”，中间是name盒子，最后一段文字“！”。",
              "加号像胶水，把三段粘成一句话。"
            ]
          },
          {
            title: "课堂拆句",
            lines: [
              "先遮住name，问孩子第一段是什么。",
              "再指着name，问盒子里会是谁的名字。",
              "最后指着感叹号，告诉孩子这也是一段文字，也要在引号里。"
            ]
          },
          {
            title: "如果孩子看不懂加号",
            lines: [
              "拿三张纸条排成一行：我叫 / 小红 / ！",
              "告诉孩子：加号就是把纸条按顺序粘起来。"
            ]
          }
        ],
        check: "孩子能预测输入小红后输出“我叫小红！”。"
      },
      {
        kicker: "最后",
        title: "今天的流程",
        bullets: [
          "input负责听同学输入。",
          "变量负责把输入保存起来。",
          "print负责把结果显示出来。"
        ],
        prompt: "请按顺序说：先听，保存到盒子，再说出来。",
        teacherNote: [
          {
            title: "收口话术",
            lines: [
              "今天我们让电脑从“只会说固定话”，升级成“能听名字再回答”。",
              "这就是很多程序的开始：先输入，保存，再输出。"
            ]
          },
          {
            title: "课后练习衔接",
            lines: [
              "接下来学生练习会让电脑问名字，再输出“我叫XXX！”。",
              "提醒孩子：先把名字放进name盒子，再让print把句子说出来。"
            ]
          }
        ],
        check: "孩子能说出input -> 变量 -> print的顺序。"
      }
    ],
    concepts: [
      {
        name: "变量（Variable）",
        definition: "变量就像一个有名字的小盒子。盒子名不变，里面的内容可以根据需要改变。",
        example: "name = \"小明\"",
        teacherSay: "把“小明”放进name盒子，以后叫name，就能找到盒子里的“小明”。",
        kidQuestion: "name是盒子名，还是盒子里的内容？"
      },
      {
        name: "赋值（=）",
        definition: "在Python里，等号可以先理解成“放进去”：把右边的内容放进左边的变量。",
        example: "age = 8",
        teacherSay: "低龄孩子先读成“把8放进age盒子”，暂时不要强调数学里的相等。",
        kidQuestion: "这行代码是把8放进哪个盒子？"
      },
      {
        name: "print（小喇叭）",
        definition: "print负责把内容显示出来。它可以显示固定文字，也可以显示变量里的内容。",
        example: "print(\"你好\")\nprint(name)",
        teacherSay: "有引号就照着文字说；没有引号就去找变量盒子。",
        kidQuestion: "print(\"name\") 和 print(name) 一样吗？"
      },
      {
        name: "input（小耳朵）",
        definition: "input负责等待同学输入。输入后的内容通常要保存到变量里。",
        example: "name = input()",
        teacherSay: "input是听，name是保存，print是说。三个角色分清楚，程序就顺了。",
        kidQuestion: "电脑听到你的名字以后，要放进哪个盒子？"
      },
      {
        name: "字符串拼接（+号）",
        definition: "加号可以把几段文字按顺序粘起来，变成一句完整的话。",
        example: "print(\"我叫\" + name + \"！\")",
        teacherSay: "这里的加号像胶水，不是做数学加法，而是把文字贴在一起。",
        kidQuestion: "如果name盒子里是小红，最后会显示什么？"
      },
      {
        name: "变量命名规则",
        definition: "变量名要让电脑看得懂：不能数字开头，不能有空格，建议用英文小写和下划线。",
        example: "my_name ✅\n2name ❌\nmy name ❌",
        teacherSay: "给盒子贴标签要清楚，标签不能乱写。电脑看到不合规则的名字会看不懂。",
        kidQuestion: "my_name 和 2name，哪个更适合当盒子名字？"
      }
    ],
    commonMistakes: [
      {
        mistake: "把变量名加了引号",
        wrongCode: "name = \"小明\"\nprint(\"name\")",
        correctCode: "name = \"小明\"\nprint(name)",
        explanation: "有引号时电脑会原样显示name；没有引号时电脑才会打开name盒子。"
      },
      {
        mistake: "字符串忘记加引号",
        wrongCode: "name = 小明",
        correctCode: "name = \"小明\"",
        explanation: "文字要住在引号小房子里。没有引号，电脑会以为小明也是一个变量名。"
      },
      {
        mistake: "input听到了，但没有保存",
        wrongCode: "input()\nprint(name)",
        correctCode: "name = input()\nprint(name)",
        explanation: "input只是电脑的小耳朵，听完要放进name盒子，后面才能拿出来用。"
      },
      {
        mistake: "变量名有空格或数字开头",
        wrongCode: "my name = \"小明\"\n2name = \"小红\"",
        correctCode: "my_name = \"小明\"\nname2 = \"小红\"",
        explanation: "变量名像盒子标签，不能有空格，也不能用数字开头。"
      }
    ],
    teachingTips: "这节课不要追求孩子一次写很长代码。核心是让孩子理解 input -> 变量 -> print 的顺序，并能区分 print(name) 和 print(\"name\")。",
    handsOn: {
      title: "跟做练习：让电脑记住我的名字",
      steps: [
        "第一步：复习 print(\"Hello\")，确认电脑会显示固定文字。",
        "第二步：写 name = \"小明\"，说出这是把“小明”放进name盒子。",
        "第三步：运行 print(name)，观察屏幕显示小明。",
        "第四步：改成 name = input()，输入自己的名字。",
        "第五步：运行 print(\"我叫\" + name + \"！\")，让电脑说出自己的名字。",
        "第六步：同桌互查：input负责听，name负责保存，print负责说。"
      ]
    },
    boardPlan: [
      "复习：print = 小喇叭，负责显示",
      "变量 = 有名字的小盒子",
      "name = \"小明\" 读作：把“小明”放进name盒子",
      "input = 小耳朵，负责等待输入",
      "流程：input听 -> name保存 -> print说"
    ],
    parentNote: "今天孩子学习了变量。可以让孩子在家解释：name是盒子名，输入的名字是盒子里的内容。家长只需要听孩子演示一遍 name = input() 和 print(name)。"
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "变量最像下面哪一种东西？",
        options: ["有名字的小盒子", "一把尺子", "一个按钮", "一首歌"],
        answer: 0,
        explanation: "变量像有名字的小盒子，可以把内容保存起来，后面再用。",
        points: 10
      },
      {
        type: "choice",
        question: "name = \"小红\" 这行代码表示什么？",
        options: ["把“小红”放进name盒子", "让电脑显示小红", "删除小红", "打开网页"],
        answer: 0,
        explanation: "等号可以理解成“放进去”：把右边的“小红”放进左边的name盒子。",
        points: 10
      },
      {
        type: "choice",
        question: "如果 name = \"小红\"，print(name) 会显示什么？",
        options: ["name", "小红", "\"小红\"", "没有输出"],
        answer: 1,
        explanation: "print(name) 没有引号，会打开name盒子，显示里面的“小红”。",
        points: 10
      },
      {
        type: "choice",
        question: "input() 在程序里像什么？",
        options: ["小耳朵，等你输入", "小喇叭，说出文字", "橡皮擦", "计算器"],
        answer: 0,
        explanation: "input() 像电脑的小耳朵，会停下来等你输入内容。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "string",
      title: "让电脑记住我的名字",
      description: "请写一个程序：\n\n1. 先让电脑等待输入一个名字。\n2. 把输入的名字保存到 name 盒子里。\n3. 输出：我叫XXX！\n\n例如输入：小明\n输出：我叫小明！",
      hint: "先让电脑听，再保存到name盒子，最后让电脑说出来。\n\nname = input()\nprint(\"我叫\" + name + \"！\")",
      starterCode: "# 变量与输入：让电脑记住我的名字\n\nname = input()\nprint(\"我叫\" + name + \"！\")\n",
      testCases: [
        { label: "名字测试", input: "小明", expected: "我叫小明！" },
        { label: "换个名字", input: "小红", expected: "我叫小红！" }
      ],
      points: 50,
      badge: "变量小管家"
    }
  }
};

export default lesson01;
