/**
 * YCL Python 四级互动教学课件 - Turtle小画家
 */

const lesson13 = {
  id: 13,
  title: "Turtle小画家",
  chapter: "Turtle趣味拓展",
  type: "extended",
  examTopics: ["turtle画布", "前进后退", "左右转向"],
  difficulty: 1,
  teacher: {
    objectives: [
      "孩子能说出：turtle是小海龟，能在画布上画画",
      "孩子能写出：forward(100) 让海龟前进100步",
      "孩子能写出：left(90) 让海龟左转90度",
      "孩子能区分：前进会画线，转弯只改变方向"
    ],
    concepts: [
      {
        name: "Turtle是什么",
        definition: "Turtle是Python里的小海龟画笔。你让它走，它就在画布上留下轨迹。",
        example: "import turtle\nt = turtle.Turtle()\nt.forward(100)",
        teacherSay: "小海龟不是动物园里的海龟，是一支会听代码的小画笔。",
        kidQuestion: "小海龟听到forward会做什么？"
      },
      {
        name: "forward() 前进",
        definition: "forward就是前进。括号里的数字越大，线越长。",
        example: "t.forward(100)\nt.forward(50)",
        teacherSay: "100步比50步长，所以画出来的线也更长。",
        kidQuestion: "forward(30)和forward(80)，哪条线更长？"
      },
      {
        name: "left() right() 转弯",
        definition: "left是左转，right是右转。转弯只改变方向，不会自己画线。",
        example: "t.forward(100)\nt.left(90)\nt.forward(100)",
        teacherSay: "转弯像原地转身，下一次前进时方向才改变。",
        kidQuestion: "left(90)会不会自己画出一条线？"
      }
    ],
    commonMistakes: [
      {
        mistake: "忘记 import turtle",
        wrongCode: "t = Turtle()",
        correctCode: "import turtle\nt = turtle.Turtle()",
        explanation: "用turtle要先导入，就像先打开画布工具箱。"
      },
      {
        mistake: "把转弯当成画线",
        wrongCode: "t.left(90)  # 以为会画线",
        correctCode: "t.left(90)\nt.forward(100)",
        explanation: "转弯只换方向，forward才会前进画线。"
      }
    ],
    teachingTips: "让孩子先用身体当海龟：向前走、左转、右转。学生端先输出指令清单，教师端再演示真实turtle代码。",
    handsOn: {
      title: "跟做练习：画一条线",
      steps: [
        "第一步：用身体演示前进和转弯",
        "第二步：在黑板写出“前进100”指令",
        "第三步：展示t.forward(100)",
        "第四步：让孩子修改步数，观察线变长或变短"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "如何让小海龟左转90度？",
        options: ["t.left(90)", "t.turn(90)", "t.go_left(90)", "t.left-turn(90)"],
        answer: 0,
        explanation: "用 t.left(角度) 就可以左转，right()是右转。",
        points: 10
      },
      {
        type: "choice",
        question: "t.forward(100)里的100表示什么？",
        options: ["前进100步", "左转100度", "颜色编号", "重复100次"],
        answer: 0,
        explanation: "forward括号里的数字表示前进多少步。",
        points: 10
      },
      {
        type: "choice",
        question: "转弯指令left/right会自己画线吗？",
        options: ["不会，只改变方向", "会，画一条线", "会，画星星", "会输出文字"],
        answer: 0,
        explanation: "转弯只是换方向，真正画线要forward。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "string",
      title: "第一道Turtle题：直线指令",
      description: "先写一张小海龟指令卡！\n\n输入一个数字step，表示小海龟要前进多少步。\n输出：前进step\n\n例如输入：\n100\n\n输出：\n前进100",
      hint: "先读取步数，再输出指令：\n\nstep = int(input())\nprint(f\"前进{step}\")\n\n真实turtle里可以换成：\nt.forward(step)",
      starterCode: "# Turtle小画家：直线指令\n\nstep = int(input())\nprint(f\"前进{step}\")\n",
      testCases: [
        { label: "100步", input: "100", expected: "前进100" },
        { label: "60步", input: "60", expected: "前进60" }
      ],
      points: 40,
      badge: "小画家"
    }
  }
};

export default lesson13;
