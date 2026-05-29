/**
 * YCL Python 四级互动教学课件 - Turtle综合创作
 */

const lesson16 = {
  id: 16,
  title: "Turtle综合创作",
  chapter: "Turtle趣味拓展",
  type: "extended",
  examTopics: ["创意画图", "综合运用", "颜色填充"],
  difficulty: 3,
  teacher: {
    objectives: [
      "孩子能独立创作：用turtle画一个房子或树",
      "孩子能用不同的颜色和粗细画画",
      "孩子能把复杂图形拆成墙、屋顶、门窗等小部分",
      "孩子能理解penup/pendown可以帮助移动位置"
    ],
    concepts: [
      {
        name: "画房子",
        definition: "房子可以拆成正方形墙、三角形屋顶、长方形门和小窗户。",
        example: "墙：重复4次前进和左转\n屋顶：重复3次前进和左转120度",
        teacherSay: "复杂图形不是一口气画出来的，是像搭积木一样拼出来的。",
        kidQuestion: "一座房子可以拆成哪些小图形？"
      },
      {
        name: "颜色和粗细",
        definition: "pencolor改变线条颜色，pensize改变线条粗细。",
        example: "t.pencolor('red')\nt.pensize(5)",
        teacherSay: "颜色和粗细是装饰工具，让作品更像自己的。",
        kidQuestion: "想让线变粗，应该用pencolor还是pensize？"
      },
      {
        name: "抬笔换位置",
        definition: "penup抬起笔移动，pendown放下笔继续画。",
        example: "t.penup()\nt.goto(0, 100)\nt.pendown()",
        teacherSay: "抬笔走路不会留下线，放下笔才继续画。",
        kidQuestion: "如果移动位置不抬笔，会发生什么？"
      }
    ],
    commonMistakes: [
      {
        mistake: "画完忘记抬笔换位置",
        wrongCode: "画完墙直接走到屋顶，路上留下乱线",
        correctCode: "t.penup()\nt.goto(0, 100)\nt.pendown()",
        explanation: "换位置前要抬笔，到了新位置再放笔。"
      },
      {
        mistake: "想一次画完整个房子",
        wrongCode: "一边想墙，一边想屋顶，一边想门",
        correctCode: "先画墙，再画屋顶，最后画门窗",
        explanation: "综合创作要先拆小图形，再按顺序组合。"
      }
    ],
    teachingTips: "鼓励孩子自由创作，但要先画草图。先说清楚“我先画什么，再画什么”，再写代码。",
    handsOn: {
      title: "跟做练习：画一个房子",
      steps: [
        "第一步：把房子拆成墙、屋顶、门",
        "第二步：画正方形的墙",
        "第三步：抬笔移动到屋顶开始的位置",
        "第四步：放笔画三角形屋顶",
        "第五步：添加门和颜色"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "要换位置画画，应该先？",
        options: ["直接走", "penup()然后走", "关掉画布", "倒着走"],
        answer: 1,
        explanation: "先penup()抬笔，移动后再pendown()放笔。",
        points: 10
      },
      {
        type: "choice",
        question: "复杂图形最好怎么画？",
        options: ["拆成小图形一步步画", "一口气乱画", "只写一行代码", "不需要顺序"],
        answer: 0,
        explanation: "先拆小图形，再组合，最适合低龄孩子理解。",
        points: 10
      },
      {
        type: "choice",
        question: "pensize(5)可以做什么？",
        options: ["让线条变粗", "让小海龟停止", "把字母变小写", "读取输入"],
        answer: 0,
        explanation: "pensize控制画笔粗细。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "comprehensive",
      title: "综合创作：房子步骤清单",
      description: "先写出画房子的步骤清单。\n\n程序会输入门的颜色color。\n请输出：\n画正方形墙\n移动到屋顶\n画三角形屋顶\n画color门\n\n例如输入：\n红色\n\n输出：\n画正方形墙\n移动到屋顶\n画三角形屋顶\n画红色门",
      hint: "先输入颜色，再按顺序输出4步：\n\ncolor = input()\nprint(\"画正方形墙\")\nprint(\"移动到屋顶\")\nprint(\"画三角形屋顶\")\nprint(\"画\" + color + \"门\")",
      starterCode: "# Turtle综合创作：房子步骤清单\n\ncolor = input()\n\nprint(\"画正方形墙\")\nprint(\"移动到屋顶\")\nprint(\"画三角形屋顶\")\nprint(\"画\" + color + \"门\")\n",
      testCases: [
        { label: "红色门", input: "红色", expected: "画正方形墙\n移动到屋顶\n画三角形屋顶\n画红色门" },
        { label: "蓝色门", input: "蓝色", expected: "画正方形墙\n移动到屋顶\n画三角形屋顶\n画蓝色门" }
      ],
      points: 70,
      badge: "建筑大师"
    }
  }
};

export default lesson16;
