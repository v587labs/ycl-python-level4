/**
 * YCL Python 四级互动教学课件 - 顺序结构
 */

// ==================== 第3章 第1节 顺序结构（课时5）====================
const lesson05 = {
  id: 5,
  title: "顺序结构",
  chapter: "第3章 Python程序结构",
  type: "main",
  examTopics: ["顺序执行", "语句顺序", "从上到下"],
  difficulty: 1,
  teacher: {
    objectives: [
      "孩子能说出：顺序结构就是从上往下一步一步执行",
      "孩子能写出：先做什么、再做什么、最后做什么的程序",
      "孩子能判断两段代码交换顺序后，输出会不会变化",
      "孩子能用生活步骤解释程序执行顺序"
    ],
    concepts: [
      {
        name: "顺序结构是什么",
        definition: "顺序结构就像做事情的步骤清单！电脑会按照写好的顺序，一条一条往下执行，就像我们做事一样！",
        example: "第一步：起床\n第二步：刷牙\n第三步：吃早饭\n\n代码也是一样：\nprint(\"起床\")\nprint(\"刷牙\")\nprint(\"吃早饭\")",
        illustration: "一张步骤清单，1、2、3按顺序打勾"
      },
      {
        name: "程序的执行顺序",
        definition: "代码是从上往下一行一行执行的！上面先执行，下面后执行！",
        example: "print(\"第一步：先洗脸\")\nprint(\"第二步：再吃早饭\")\nprint(\"完成！\")",
        illustration: "一条河流从上往下流，水车按顺序转动"
      },
      {
        name: "顺序不能乱",
        definition: "有些任务必须按正确顺序做，顺序乱了，故事就会变奇怪。",
        example: "正确：穿袜子 -> 穿鞋\n奇怪：穿鞋 -> 穿袜子",
        illustration: "两张卡片交换位置后，孩子判断哪一个更合理"
      }
    ],
    commonMistakes: [
      {
        mistake: "以为电脑会同时执行多条语句",
        wrongCode: "以为所有print会一起显示",
        correctCode: "程序会按顺序一行一行执行，每行等待上一行完成",
        explanation: "电脑很乖，会老老实实按顺序执行！"
      },
      {
        mistake: "把输出顺序写反",
        wrongCode: "print(\"吃早饭\")\nprint(\"刷牙\")\nprint(\"起床\")",
        correctCode: "print(\"起床\")\nprint(\"刷牙\")\nprint(\"吃早饭\")",
        explanation: "题目要求什么顺序，print就要按什么顺序写。"
      },
      {
        mistake: "漏写其中一步",
        wrongCode: "print(\"起床\")\nprint(\"吃早饭\")",
        correctCode: "print(\"起床\")\nprint(\"刷牙\")\nprint(\"吃早饭\")",
        explanation: "顺序题要一边读要求，一边检查每一步有没有漏掉。"
      }
    ],
    teachingTips: "建议让小朋友画流程图：先做什么 → 再做什么 → 最后做什么！",
    handsOn: {
      title: "跟做练习：一天的顺序",
      steps: [
        "第一步：想一件你每天要做的事，比如做作业",
        "第二步：把这件事分成3步",
        "第三步：按顺序写在代码里",
        "第四步：运行看结果！"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "顺序结构是什么？",
        options: ["想做什么就做什么", "从上往下按顺序执行", "随机执行", "跳着执行"],
        answer: 1,
        explanation: "顺序结构就是按顺序执行！像步骤清单一样！",
        points: 10
      },
      {
        type: "choice",
        question: "如果代码有三行，哪行先执行？",
        options: ["最下面", "最上面", "随机", "中间"],
        answer: 1,
        explanation: "最上面的先执行，然后往下依次执行！",
        points: 10
      },
      {
        type: "choice",
        question: "下面哪组生活步骤顺序更合理？",
        options: ["穿鞋 -> 穿袜子", "起床 -> 刷牙 -> 吃早饭", "吃饭 -> 洗手 -> 拿筷子", "上学 -> 背书包 -> 起床"],
        answer: 1,
        explanation: "顺序结构就像生活步骤，要按合理顺序一步一步做。",
        points: 10
      },
      {
        type: "choice",
        question: "print(\"A\")在print(\"B\")上面，会先显示什么？",
        options: ["A", "B", "AB同时显示", "不显示"],
        answer: 0,
        explanation: "上面的代码先执行，所以先显示A。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "string",
      title: "编程题：我的早晨",
      description: "写一个程序，按顺序输出你早晨的三件事！\n\n要求：\n1. 第一行输出「起床」\n2. 第二行输出「刷牙」\n3. 第三行输出「吃早饭」",
      hint: "直接用三个print按顺序写：\n\nprint(\"起床\")\nprint(\"刷牙\")\nprint(\"吃早饭\")",
      starterCode: "# 顺序结构：我的早晨\n# 请按题目要求，一行一行输出\n\nprint(\"起床\")\nprint(\"刷牙\")\nprint(\"吃早饭\")\n",
      testCases: [
        { label: "标准顺序", input: "", expected: "起床\n刷牙\n吃早饭" },
        { label: "再次检查", input: "", expected: "起床\n刷牙\n吃早饭" }
      ],
      points: 30,
      badge: "乖宝宝"
    }
  }
};

export default lesson05;
