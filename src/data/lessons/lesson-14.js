/**
 * YCL Python 四级互动教学课件 - Turtle画正方形
 */

const lesson14 = {
  id: 14,
  title: "Turtle画正方形",
  chapter: "Turtle趣味拓展",
  type: "extended",
  examTopics: ["for循环画图", "重复执行", "角度计算"],
  difficulty: 2,
  teacher: {
    objectives: [
      "孩子能用for循环让海龟重复走4次画正方形",
      "孩子能说出：正方形每个角是90度，所以转90度",
      "孩子能判断前进和转弯都要放进循环里面",
      "孩子能先写正方形指令清单，再迁移到turtle代码"
    ],
    concepts: [
      {
        name: "画正方形的秘诀",
        definition: "正方形有4条边，每条边一样长，每个角都是90度。",
        example: "走100 -> 转90度，重复4次",
        teacherSay: "画正方形不是四行魔法，而是一个动作重复4次。",
        kidQuestion: "正方形有几条边？"
      },
      {
        name: "for循环帮忙重复",
        definition: "for i in range(4)会让循环里的动作重复4次。",
        example: "for i in range(4):\n    t.forward(100)\n    t.left(90)",
        teacherSay: "如果不用循环，就要把同样的两行动作写4遍。",
        kidQuestion: "range(4)会重复几次？"
      },
      {
        name: "循环里的两步",
        definition: "每一次循环都要先前进，再转弯。",
        example: "前进100\n左转90",
        teacherSay: "只前进不转弯会变成直线，只转一次也围不成方形。",
        kidQuestion: "前进和转弯，哪一步可以放到循环外面？"
      }
    ],
    commonMistakes: [
      {
        mistake: "转错角度",
        wrongCode: "t.left(45)",
        correctCode: "t.left(90)",
        explanation: "正方形每个角90度，转错角度就不是正方形了。"
      },
      {
        mistake: "把转弯写到循环外面",
        wrongCode: "for i in range(4):\n    t.forward(100)\nt.left(90)",
        correctCode: "for i in range(4):\n    t.forward(100)\n    t.left(90)",
        explanation: "每画一条边都要转一次，所以转弯也要缩进到循环里。"
      }
    ],
    teachingTips: "画之前先让孩子站起来走正方形：走一步，转90度，重复4次。",
    handsOn: {
      title: "跟做练习：画正方形",
      steps: [
        "第一步：说出正方形有4条边",
        "第二步：用for i in range(4)重复4次",
        "第三步：循环里前进side步",
        "第四步：循环里左转90度",
        "第五步：把指令清单换成turtle代码"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "画正方形，海龟需要转几次弯？",
        options: ["3次", "4次", "5次", "6次"],
        answer: 1,
        explanation: "正方形有4条边，所以要转4次弯。",
        points: 10
      },
      {
        type: "choice",
        question: "正方形每次通常转多少度？",
        options: ["90度", "144度", "45度", "180度"],
        answer: 0,
        explanation: "正方形每个角是90度。",
        points: 10
      },
      {
        type: "choice",
        question: "for i in range(4)会重复几次？",
        options: ["4次", "3次", "5次", "一直重复"],
        answer: 0,
        explanation: "range(4)重复4次。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "for",
      title: "编程题：正方形指令清单",
      description: "输入一个边长side，输出画正方形的指令清单。\n\n每次输出：\n前进side\n左转90\n\n重复4次。\n\n例如输入50，输出4组前进50和左转90。",
      hint: "用for循环重复4次：\n\nside = int(input())\nfor i in range(4):\n    print(f\"前进{side}\")\n    print(\"左转90\")",
      starterCode: "# Turtle画正方形：指令清单\n\nside = int(input())\n\nfor i in range(4):\n    print(f\"前进{side}\")\n    print(\"左转90\")\n",
      testCases: [
        { label: "边长50", input: "50", expected: "前进50\n左转90\n前进50\n左转90\n前进50\n左转90\n前进50\n左转90" },
        { label: "边长20", input: "20", expected: "前进20\n左转90\n前进20\n左转90\n前进20\n左转90\n前进20\n左转90" }
      ],
      points: 50,
      badge: "方形画家"
    }
  }
};

export default lesson14;
