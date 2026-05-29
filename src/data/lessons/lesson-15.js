/**
 * YCL Python 四级互动教学课件 - Turtle画五角星
 */

const lesson15 = {
  id: 15,
  title: "Turtle画五角星",
  chapter: "Turtle趣味拓展",
  type: "extended",
  examTopics: ["for循环", "五角星角度", "综合画图"],
  difficulty: 2,
  teacher: {
    objectives: [
      "孩子能说出：画五角星要转144度",
      "孩子能用for循环重复5次画星星",
      "孩子能区分：五角星144度，正方形90度",
      "孩子能先写五角星指令清单，再迁移到turtle代码"
    ],
    concepts: [
      {
        name: "五角星的秘密",
        definition: "五角星需要走5条线，每走一条线就右转144度。",
        example: "前进100 -> 右转144，重复5次",
        teacherSay: "144度先当作画五角星的小秘诀，不要求孩子推公式。",
        kidQuestion: "五角星要走几条线？"
      },
      {
        name: "重复5次",
        definition: "for i in range(5)会让海龟走5条线。",
        example: "for i in range(5):\n    t.forward(100)\n    t.right(144)",
        teacherSay: "每一次循环画一条星星边，5次刚好连成五角星。",
        kidQuestion: "range(5)会重复几次？"
      },
      {
        name: "角度不同，图形不同",
        definition: "同样是重复前进和转弯，转角不同，图形就不同。",
        example: "正方形转90度，五角星转144度。",
        teacherSay: "角度像方向盘，方向盘打得不同，路线就不同。",
        kidQuestion: "把144改成90，还会是五角星吗？"
      }
    ],
    commonMistakes: [
      {
        mistake: "转错角度画成五边形",
        wrongCode: "t.right(72)",
        correctCode: "t.right(144)",
        explanation: "五角星要转144度，转72度更像五边形路线。"
      },
      {
        mistake: "重复次数写成4次",
        wrongCode: "for i in range(4):",
        correctCode: "for i in range(5):",
        explanation: "五角星有5条线，所以要重复5次。"
      }
    ],
    teachingTips: "让孩子先数五角星有几条线，再告诉他们144是这节课的“星星密码”。",
    handsOn: {
      title: "跟做练习：画五角星",
      steps: [
        "第一步：数一数五角星有5条线",
        "第二步：写for i in range(5)",
        "第三步：循环里前进side步",
        "第四步：循环里右转144度",
        "第五步：把指令清单换成turtle代码"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "画五角星，每次要转多少度？",
        options: ["72度", "108度", "144度", "180度"],
        answer: 2,
        explanation: "五角星这节课记住144度。",
        points: 10
      },
      {
        type: "choice",
        question: "画五角星要重复几次？",
        options: ["5次", "4次", "3次", "10次"],
        answer: 0,
        explanation: "五角星有5条线，所以重复5次。",
        points: 10
      },
      {
        type: "choice",
        question: "正方形和五角星最明显的区别是什么？",
        options: ["转角不同", "都不能用循环", "都只能画一条线", "都不用forward"],
        answer: 0,
        explanation: "正方形常转90度，五角星转144度。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "for",
      title: "编程题：五角星指令清单",
      description: "输入一个边长side，输出画五角星的指令清单。\n\n每次输出：\n前进side\n右转144\n\n重复5次。\n\n例如输入100，就输出5组前进100和右转144。",
      hint: "用for循环重复5次：\n\nside = int(input())\nfor i in range(5):\n    print(f\"前进{side}\")\n    print(\"右转144\")",
      starterCode: "# Turtle画五角星：指令清单\n\nside = int(input())\n\nfor i in range(5):\n    print(f\"前进{side}\")\n    print(\"右转144\")\n",
      testCases: [
        { label: "边长100", input: "100", expected: "前进100\n右转144\n前进100\n右转144\n前进100\n右转144\n前进100\n右转144\n前进100\n右转144" },
        { label: "边长60", input: "60", expected: "前进60\n右转144\n前进60\n右转144\n前进60\n右转144\n前进60\n右转144\n前进60\n右转144" }
      ],
      points: 60,
      badge: "星星画家"
    }
  }
};

export default lesson15;
