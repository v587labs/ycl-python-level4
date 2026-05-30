/**
 * YCL Python 四级互动教学课件 - Python安装与IDLE编辑器
 * 低龄版：承接第0课“Python是什么”，让孩子认识真实的 Python 编写环境。
 */

const lesson01Editor = {
  id: 1,
  sourceId: 'editor',
  visualKey: 'editor',
  title: "Python安装与IDLE编辑器",
  chapter: "序章",
  type: "main",
  examTopics: ["Python安装", "IDLE Shell", "IDLE编辑器", "保存.py文件", "运行程序"],
  difficulty: 1,
  teacher: {
    objectives: [
      "孩子能说出：Python需要先安装到电脑里，电脑才认识Python代码",
      "孩子能认识：IDLE是Python自带的入门编辑器",
      "孩子能区分：Shell适合试一行，编辑器窗口适合写完整程序",
      "孩子能知道：代码文件要保存成.py，再点击Run Module或按F5运行",
      "孩子能在编辑器里写出并运行一个两行print程序"
    ],
    ageAdaptation: {
      target: "7-8岁，一二年级，已经在第0课写过第一行print",
      pace: "先看安装入口，再认识IDLE两个窗口，最后一定让孩子亲手写两行代码",
      language: "安装=把Python请到电脑里；IDLE=写代码的小本子；Shell=电脑回答的地方；F5=开始运行",
      notes: [
        "课堂上可以由老师演示安装，孩子重点掌握打开IDLE、写代码、保存和运行。",
        "不要展开讲环境变量、PATH、解释器版本差异，只让孩子形成“安装-打开-写-保存-运行”的流程。",
        "如果教室电脑已经装好Python，也要讲一遍安装界面里的Add Python to PATH勾选位置，避免家里安装卡住。"
      ]
    },
    lessonFlow: [
      {
        time: "0-5分钟",
        phase: "从第0课接过来：代码要写在哪里",
        teacher: "先复习第0课的 print(\"Hello, World!\")：代码是给电脑的清楚指令。再问：如果今天不用网页练习区，真实电脑里要在哪里写这些指令？",
        student: "回答需要一个专门写代码的地方，知道今天要解决“在哪里写、怎么保存、怎么运行”。"
      },
      {
        time: "5-12分钟",
        phase: "安装Python：把工具请进电脑",
        teacher: "投屏展示 python.org 下载页或安装包界面，强调版本、Install Now，以及Add Python to PATH要勾选。",
        student: "说出安装的意思：让电脑认识Python。"
      },
      {
        time: "12-20分钟",
        phase: "认识IDLE Shell",
        teacher: "打开IDLE，展示带 >>> 的Shell窗口。说明这里像对话框，适合试一行代码，回车后马上看到回答。",
        student: "在Shell里试一行 print(\"Hello\")。"
      },
      {
        time: "20-32分钟",
        phase: "认识编辑器窗口",
        teacher: "点击 File -> New File，展示新的编辑器窗口。说明完整程序写在这里，可以写很多行。",
        student: "在编辑器里写两行print，并保存成 hello.py。"
      },
      {
        time: "32-40分钟",
        phase: "运行程序：Run Module / F5",
        teacher: "点击 Run -> Run Module 或按 F5，让孩子观察输出回到Shell里出现。",
        student: "运行自己的两行程序，并读出Shell里的输出。"
      },
      {
        time: "40-45分钟",
        phase: "收口：五步口诀，连接下一课",
        teacher: "带孩子复述：安装Python、打开IDLE、新建文件、保存.py、F5运行。最后告诉孩子：工具会用了，下一课就要让电脑记住我们的名字。",
        student: "完成口头复述，再做练习，并知道下一课会写更像小程序的代码。"
      }
    ],
    teacherScript: [
      {
        when: "开场",
        title: "为什么要讲编辑器",
        say: "上节课我们知道了：代码是给电脑的清楚指令。网页练习区像课堂上的练习纸，今天我们要认识真实电脑里的Python小本子：IDLE。以后写代码、保存代码、运行代码，都要从这里开始。",
        check: "孩子知道今天不是只听介绍，而是要自己写代码。"
      },
      {
        when: "讲安装",
        title: "安装不要讲太深",
        say: "安装就像把铅笔放进文具盒。电脑装好Python以后，才知道Python代码是什么意思。",
        check: "孩子能说出安装是让电脑认识Python。"
      },
      {
        when: "讲Shell",
        title: "Shell像聊天窗口",
        say: "看到三个大于号 >>>，就像电脑在问：你想让我做什么？这里适合试一行小命令。",
        check: "孩子能找到>>>提示符。"
      },
      {
        when: "讲编辑器",
        title: "编辑器像作文本",
        say: "Shell适合试一句话，编辑器适合写一整篇小作文。我们的完整程序要写在新文件里，保存以后再运行。",
        check: "孩子能说出Shell和编辑器的区别。"
      }
    ],
    demoSlides: [
      {
        kicker: "复习",
        title: "代码要写在哪里？",
        body: "第0课解决“代码是什么”。今天解决“代码写在哪里、怎么跑起来”。",
        code: "print(\"Hello, World!\")",
        prompt: "如果不用网页编辑器，电脑里还可以在哪里写Python？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "上节课我们已经知道：代码是给电脑的清楚指令。",
              "今天往前走一步：清楚指令不能只停在纸上，还要写进一个工具里，让电脑真的跑起来。"
            ]
          },
          {
            title: "过渡",
            lines: [
              "告诉孩子：今天的目标不是背安装步骤，而是学会一条真实路线：打开IDLE、写代码、保存、运行。",
              "这节课像给后面的所有编程课准备铅笔和本子。"
            ]
          }
        ],
        check: "孩子知道今天要亲手写代码。"
      },
      {
        kicker: "第1步",
        title: "安装Python",
        body: "安装Python，就是把Python工具请到电脑里。",
        bullets: [
          "去 python.org 下载Python。",
          "安装时勾选 Add Python to PATH。",
          "点击 Install Now。"
        ],
        prompt: "安装Python是为了让电脑认识什么？",
        teacherNote: [
          {
            title: "课堂提示",
            lines: [
              "这页适合老师投屏演示，不建议低龄孩子在课堂上独立下载安装。",
              "强调Add Python to PATH只需要记住“安装时要勾选”，不要解释环境变量。"
            ]
          },
          {
            title: "安全提醒",
            lines: [
              "让孩子知道下载安装到家里电脑时，要请家长一起操作。",
              "下载来源说清楚：官方网站 python.org。"
            ]
          }
        ],
        check: "孩子知道安装后电脑才认识Python。"
      },
      {
        kicker: "第2步",
        title: "IDLE Shell像聊天窗口",
        body: "打开IDLE后，看到 >>> 的地方，电脑正在等你输入一行代码。",
        code: ">>> print(\"Hello\")\nHello",
        prompt: ">>> 后面适合试一行，还是写很多行完整程序？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "Shell像电脑的聊天窗口。你写一行，它马上回答一行。",
              "它很适合测试小命令，比如print、简单加法。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "让孩子只输入 print(\"Hello\")，按回车。",
              "指出上面那行是指令，下面那行是电脑回答。"
            ]
          }
        ],
        check: "孩子能找到Shell里的>>>。"
      },
      {
        kicker: "第3步",
        title: "编辑器窗口写完整程序",
        body: "File -> New File 会打开新文件。完整程序写在这里。",
        code: "print(\"我会打开IDLE\")\nprint(\"我会运行Python\")",
        prompt: "如果程序有两行、三行，要写在Shell里还是新文件里？",
        teacherNote: [
          {
            title: "你可以照着这样讲",
            lines: [
              "新文件像代码作文本。我们可以在里面写很多行，慢慢检查。",
              "写完以后要保存，文件名后面通常是.py。"
            ]
          },
          {
            title: "课堂操作",
            lines: [
              "示范 File -> New File。",
              "输入两行print。",
              "保存为 hello.py，提醒文件名不要用中文标点。"
            ]
          }
        ],
        check: "孩子知道完整程序写在New File里。"
      },
      {
        kicker: "第4步",
        title: "按F5运行",
        body: "保存好.py文件后，点击 Run Module，或者按 F5，让程序跑起来。",
        bullets: [
          "先保存文件。",
          "再按 F5 或 Run Module。",
          "输出会显示在Shell窗口。"
        ],
        prompt: "运行以后，结果会出现在哪里？",
        teacherNote: [
          {
            title: "常见卡点",
            lines: [
              "没有保存就运行，IDLE会先提醒保存。",
              "孩子找不到输出时，提醒他看Shell窗口。",
              "如果没有输出，先检查print拼写、括号和引号。"
            ]
          }
        ],
        check: "孩子知道F5是运行，输出在Shell。"
      },
      {
        kicker: "最后",
        title: "五步口诀",
        bullets: [
          "安装Python。",
          "打开IDLE。",
          "File -> New File。",
          "保存成.py。",
          "按F5运行。"
        ],
        prompt: "请你按顺序说出这五步。",
        teacherNote: [
          {
            title: "收尾方式",
            lines: [
              "全班一起读五步口诀。",
              "然后让孩子进入练习区，必须亲手写两行print。",
              "告诉孩子：会打开工具，才是真正开始写程序。",
              "自然带到下一课：下次我们会让电脑不只说固定话，还能记住同学输入的名字。"
            ]
          }
        ],
        check: "孩子能说出基本流程。"
      }
    ],
    concepts: [
      {
        name: "安装Python",
        definition: "安装Python就是把Python工具放进电脑里，让电脑能够运行Python代码。",
        example: "从 python.org 下载Python，安装时点击 Install Now。",
        teacherSay: "安装不是今天最难的内容，只要孩子知道：电脑要先装工具，才能运行Python。",
        kidQuestion: "如果电脑没有安装Python，它能直接运行Python代码吗？"
      },
      {
        name: "IDLE",
        definition: "IDLE是Python自带的入门编辑器。安装Python以后，电脑里通常就会有IDLE。",
        example: "开始菜单或应用程序里搜索 IDLE。",
        teacherSay: "把IDLE说成Python送给新手的小本子，孩子会更容易接受。",
        kidQuestion: "IDLE是游戏，还是写Python代码的工具？"
      },
      {
        name: "Shell",
        definition: "Shell像电脑的聊天窗口，看到>>>时，可以输入一行Python代码试一试。",
        example: ">>> print(\"Hello\")",
        teacherSay: "Shell适合快速试一行，不适合写很长的完整程序。",
        kidQuestion: "Shell里的>>>表示电脑在等什么？"
      },
      {
        name: "编辑器窗口",
        definition: "编辑器窗口是写完整程序的地方，可以写多行代码，再保存成.py文件。",
        example: "File -> New File",
        teacherSay: "Shell像聊天，编辑器像作文本。完整程序写在作文本里。",
        kidQuestion: "两行以上的程序，更适合写在哪里？"
      },
      {
        name: ".py文件",
        definition: ".py是Python代码文件常用的后缀，表示这个文件里写的是Python程序。",
        example: "hello.py",
        teacherSay: "文件名可以像给作业本起名字，.py表示这是Python作业本。",
        kidQuestion: "hello.py后面的.py告诉电脑什么？"
      },
      {
        name: "运行程序",
        definition: "运行就是让电脑照着代码做事。在IDLE里可以点击Run Module，或按F5。",
        example: "Run -> Run Module",
        teacherSay: "F5可以叫开始按钮。孩子记住保存后按F5，就能看到结果。",
        kidQuestion: "写完代码后，按什么可以让程序跑起来？"
      }
    ],
    classroomGames: [
      {
        name: "窗口分类",
        how: "老师展示Shell和编辑器截图，让孩子举牌判断：试一行还是写完整程序。",
        goal: "区分Shell和编辑器窗口。"
      },
      {
        name: "五步接龙",
        how: "五个孩子分别说：安装、打开IDLE、新建文件、保存、运行。",
        goal: "记住真实写Python的流程。"
      },
      {
        name: "F5启动员",
        how: "全班一起检查代码符号，确认无误后由一名孩子喊“F5启动”。",
        goal: "强化写完代码必须运行。"
      }
    ],
    commonMistakes: [
      {
        mistake: "把代码写在Shell提示符后，忘记新建文件",
        wrongCode: ">>> print(\"第一行\")\n>>> print(\"第二行\")",
        correctCode: "print(\"第一行\")\nprint(\"第二行\")",
        explanation: "完整程序要写在New File编辑器窗口里，不要把>>>也复制进去。"
      },
      {
        mistake: "文件没有保存就找不到运行结果",
        wrongCode: "写完代码后直接关窗口",
        correctCode: "先保存为 hello.py，再按F5运行",
        explanation: "IDLE运行完整程序前需要保存文件，这样电脑知道要运行哪份代码。"
      },
      {
        mistake: "复制了中文引号",
        wrongCode: "print(“Hello”)",
        correctCode: "print(\"Hello\")",
        explanation: "Python代码里要使用英文引号。中文引号看起来漂亮，但电脑不认识。"
      },
      {
        mistake: "按F5后看错窗口",
        wrongCode: "只盯着编辑器窗口找输出",
        correctCode: "运行后到Shell窗口看输出",
        explanation: "IDLE的输出通常显示在Shell窗口里，不在编辑器代码下面。"
      }
    ],
    teachingTips: "这节课一定要让孩子亲手写代码。安装流程可以老师演示，但IDLE里的New File、保存和F5运行要让孩子至少完成一次。",
    handsOn: {
      title: "跟做练习：在IDLE里运行两行代码",
      steps: [
        "第一步：打开IDLE。",
        "第二步：点击 File -> New File。",
        "第三步：输入两行 print。",
        "第四步：保存为 hello.py。",
        "第五步：按 F5 或点击 Run -> Run Module。",
        "第六步：回到Shell窗口读出输出结果。"
      ]
    },
    boardPlan: [
      "安装Python = 让电脑认识Python",
      "IDLE = Python自带的新手编辑器",
      "Shell = 试一行，看回答",
      "New File = 写完整程序",
      "保存.py -> F5运行 -> Shell看输出"
    ],
    parentNote: "这节课孩子认识真实Python工具。家长在家协助安装时，请从 python.org 下载，安装时勾选 Add Python to PATH；课堂重点仍然是孩子能打开IDLE、写两行print、保存并运行。"
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "安装Python主要是为了什么？",
        options: ["让电脑能运行Python代码", "让电脑变成画板", "让键盘发光", "让电脑自动关机"],
        answer: 0,
        explanation: "安装Python以后，电脑才知道怎么运行Python代码。",
        points: 10
      },
      {
        type: "choice",
        question: "IDLE是什么？",
        options: ["Python自带的入门编辑器", "一种零食", "一张图片", "一个鼠标品牌"],
        answer: 0,
        explanation: "IDLE是Python自带的写代码工具，适合刚开始学习。",
        points: 10
      },
      {
        type: "choice",
        question: "在IDLE里，写完整程序通常先点击哪一个？",
        options: ["File -> New File", "Close Window", "Delete File", "Turn Off"],
        answer: 0,
        explanation: "完整程序要写在新文件里，所以先 File -> New File。",
        points: 10
      },
      {
        type: "choice",
        question: "在IDLE里运行当前.py文件，可以按哪个键？",
        options: ["F5", "A", "Esc", "空格"],
        answer: 0,
        explanation: "IDLE里常用F5或Run Module来运行程序。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "string",
      title: "编辑器练习：输出两句话",
      description: "请写两行代码，分别输出：\n我会打开IDLE\n我会运行Python\n\n注意每一行都要使用print。",
      hint: "可以照着这样写：\n\nprint(\"我会打开IDLE\")\nprint(\"我会运行Python\")\n\n如果在IDLE里练习，记得保存成.py后按F5运行。",
      starterCode: "print(\"我会打开IDLE\")\nprint(\"我会运行Python\")\n",
      testCases: [
        { label: "两行输出", input: "", expected: "我会打开IDLE\n我会运行Python" },
        { label: "再次检查", input: "", expected: "我会打开IDLE\n我会运行Python" }
      ],
      points: 50,
      badge: "会用编辑器"
    }
  }
};

export default lesson01Editor;
