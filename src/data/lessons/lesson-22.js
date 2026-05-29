/**
 * YCL Python 四级互动教学课件 - Turtle复习：正方形指令
 * 拓展挑战：复习第13-16课的Turtle动作，并迁移到项目指令清单。
 */

const lesson22 = {
  id: 22,
  title: "Turtle复习：正方形指令",
  chapter: "Turtle复习与项目创作",
  type: "extended",
  examTopics: ["turtle基础", "forward前进", "right转弯", "for循环画图"],
  difficulty: 2,
  teacher: {
    objectives: [
      "孩子能说出：Turtle像一支会走路的小画笔",
      "孩子能理解forward负责前进画线，right/left负责转方向",
      "孩子能用for循环描述正方形的四次重复",
      "孩子能把画图动作先写成指令清单",
      "孩子能把指令清单迁移到turtle代码"
    ],
    concepts: [
      {
        name: "会走路的小画笔",
        definition: "Turtle会按照代码前进、转弯，并在画布上留下线条。",
        example: "t.forward(100)",
        teacherSay: "小海龟走到哪里，笔迹就留到哪里。",
        kidQuestion: "小海龟前进时会不会画线？"
      },
      {
        name: "forward 前进",
        definition: "forward(步数)让小海龟向当前方向前进。",
        example: "t.forward(80)",
        teacherSay: "步数越大，线越长；这就像走80步和走120步的区别。",
        kidQuestion: "forward(50)和forward(100)，哪条线更长？"
      },
      {
        name: "right/left 转弯",
        definition: "right和left只改变方向，不会自己画线。",
        example: "t.right(90)",
        teacherSay: "转弯像原地转身，真正画线还要再forward。",
        kidQuestion: "right(90)会画出一条线吗？"
      },
      {
        name: "正方形规律",
        definition: "正方形要重复4次：前进一条边，再转90度。",
        example: "for i in range(4):\n    t.forward(100)\n    t.right(90)",
        teacherSay: "正方形有4条边，所以同样的动作重复4次。",
        kidQuestion: "画正方形要重复几次？"
      },
      {
        name: "先写指令清单",
        definition: "初学画图时，可以先用文字指令描述动作，再换成turtle代码。",
        example: "前进100\n右转90",
        teacherSay: "低龄孩子先说动作，再写代码，会比直接敲turtle更稳。",
        kidQuestion: "前进100对应哪句turtle代码？"
      }
    ],
    commonMistakes: [
      {
        mistake: "只前进不转弯",
        wrongCode: "for i in range(4):\n    t.forward(100)",
        correctCode: "for i in range(4):\n    t.forward(100)\n    t.right(90)",
        explanation: "不转弯只会画一条直线，不会变成正方形。"
      },
      {
        mistake: "把转弯写到循环外面",
        wrongCode: "for i in range(4):\n    t.forward(100)\nt.right(90)",
        correctCode: "for i in range(4):\n    t.forward(100)\n    t.right(90)",
        explanation: "每画一条边都要转一次，所以转弯也要在循环里。"
      },
      {
        mistake: "把90度写成9度",
        wrongCode: "t.right(9)",
        correctCode: "t.right(90)",
        explanation: "正方形每个角是90度，少一个0会转得太小。"
      }
    ],
    teachingTips: "这是第13-16课后的复习迁移课。学生端练习先让孩子输出“海龟指令清单”，这样可判题、可复盘；教师演示时再把清单替换成真实turtle代码。",
    handsOn: {
      title: "身体画正方形",
      steps: [
        "请一个孩子站起来当小海龟",
        "全班发出口令：前进、右转90度，重复4次",
        "老师在白板把动作写成指令清单",
        "最后展示对应turtle代码"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "t.forward(100)会让小海龟做什么？",
        options: ["前进100步", "右转100度", "换颜色", "停止程序"],
        answer: 0,
        explanation: "forward表示前进。",
        points: 10
      },
      {
        type: "choice",
        question: "画正方形时，每次通常转多少度？",
        options: ["90度", "45度", "144度", "10度"],
        answer: 0,
        explanation: "正方形每个角是90度。",
        points: 10
      },
      {
        type: "choice",
        question: "正方形有4条边，所以循环应该重复几次？",
        options: ["4次", "3次", "5次", "1次"],
        answer: 0,
        explanation: "画4条边，重复4次。",
        points: 10
      },
      {
        type: "choice",
        question: "right(90)本身会画线吗？",
        options: ["不会，只是转方向", "会，画一条直线", "会，画圆", "会输出文字"],
        answer: 0,
        explanation: "转弯只改变方向，forward才会前进画线。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "for",
      title: "复习题：写出海龟正方形指令",
      description: "先不用真正打开画布，我们先写“海龟指令清单”。\n\n输入一个边长side。\n请输出画正方形需要的8行动作：\n前进side\n右转90\n重复4次。\n\n例如输入：\n50\n\n输出：\n前进50\n右转90\n前进50\n右转90\n前进50\n右转90\n前进50\n右转90",
      hint: "输入边长后，用for循环重复4次：\n\nside = int(input())\nfor i in range(4):\n    print(f\"前进{side}\")\n    print(\"右转90\")\n\n真实turtle里，可以把print换成：\nt.forward(side)\nt.right(90)",
      starterCode: "# Turtle复习：正方形指令清单\n\nside = int(input())\n\nfor i in range(4):\n    print(f\"前进{side}\")\n    print(\"右转90\")\n",
      testCases: [
        { label: "边长50", input: "50", expected: "前进50\n右转90\n前进50\n右转90\n前进50\n右转90\n前进50\n右转90" },
        { label: "边长30", input: "30", expected: "前进30\n右转90\n前进30\n右转90\n前进30\n右转90\n前进30\n右转90" }
      ],
      points: 60,
      badge: "海龟指挥官"
    }
  }
};

export default lesson22;
