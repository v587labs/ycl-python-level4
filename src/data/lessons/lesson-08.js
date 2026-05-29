/**
 * YCL Python 四级互动教学课件 - 循环结构 while 循环
 */

// ==================== 第3章 第4节 循环结构 while 循环（课时8）====================
const lesson08 = {
  id: 8,
  title: "循环结构 while 循环",
  chapter: "第3章 Python程序结构",
  type: "main",
  examTopics: ["while循环", "条件循环", "break退出", "continue跳过"],
  difficulty: 2,
  teacher: {
    objectives: [
      "孩子能说出：while是'当...的时候'一直做",
      "孩子能写出：while条件循环",
      "孩子能说出：break是退出循环，continue是跳过本次"
    ],
    concepts: [
      {
        name: "while 当...时",
        definition: "while就像'当...的时候'。只要条件是对的，就一直做下去！注意：一定要有结束的时候，不然会停不下来！",
        example: "i = 0\nwhile i < 3:\n    print(i)\n    i = i + 1",
        illustration: "一个跑道，选手一直跑，只要没到终点就一直跑"
      },
      {
        name: "while vs for",
        definition: "for知道要循环几次，while不知道要循环几次，只要条件对就一直做！",
        example: "# for：知道要做5次\nfor i in range(5):\n    print(i)\n\n# while：不知道要做几次，只到条件不对才停\ni = 0\nwhile i < 5:\n    print(i)\n    i = i + 1",
        illustration: "两个人跑步：一个（for）知道自己要跑5圈；一个（while）只知道跑到累为止"
      },
      {
        name: "break 退出循环",
        definition: "break就是'突然停止'！不管循环有没有做完，直接跳出循环！",
        example: "for i in range(10):\n    if i == 3:\n        break\n    print(i)   # 只打印0, 1, 2，然后 break",
        illustration: "一个人跑着跑着突然看到STOP标志，就停下来不跑了"
      },
      {
        name: "continue 跳过本次",
        definition: "continue就是'跳过这一个'！这次后面的代码不执行，直接去执行下一次循环！",
        example: "for i in range(5):\n    if i == 2:\n        continue\n    print(i)   # 打印0, 1, 3, 4，跳过了2",
        illustration: "一个人跳过第2个台阶，继续跳到第3个"
      }
    ],
    commonMistakes: [
      {
        mistake: "while忘记让条件变成False",
        wrongCode: "while True:（永远停不下来！）\n    print(1)",
        correctCode: "i = 0\nwhile i < 5:\n    print(i)\n    i = i + 1",
        explanation: "while循环里一定要改变条件变量，不然会变成永远转下去的陀螺！"
      },
      {
        mistake: "while条件写错导致死循环",
        wrongCode: "i = 1\nwhile i > 0:\n    print(i)\n    i = i + 1   # i永远大于0，死循环！",
        correctCode: "设置正确的退出条件，或者用break退出",
        explanation: "死循环会让程序卡住！一定要确保条件会变成False！"
      }
    ],
    teachingTips: "建议先让小朋友在纸上画流程：开始 → 条件对吗？→ 做事情 → 改变条件 → 再问条件对吗？",
    handsOn: {
      title: "跟做练习：数到停下来",
      steps: [
        "第一步：设一个计数器 i = 0",
        "第二步：while i < 5：只要i小于5就继续",
        "第三步：每次打印i，然后 i = i + 1",
        "第四步：运行看看数到几停下来！"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "while循环什么时候会停下来？",
        options: ["永远不会停", "当条件变成False的时候", "电脑关机的时候", "打印完一次就停"],
        answer: 1,
        explanation: "while会一直转，直到条件变成False才停！",
        points: 10
      },
      {
        type: "choice",
        question: "break的作用是什么？",
        options: ["跳过本次循环", "继续下一次循环", "直接退出整个循环", "暂停一下"],
        answer: 2,
        explanation: "break是直接退出整个循环，不管循环有没有做完！",
        points: 10
      },
      {
        type: "choice",
        question: "continue的作用是什么？",
        options: ["退出整个循环", "跳过这次循环，继续下一次", "停止程序", "重新开始"],
        answer: 1,
        explanation: "continue是跳过这一次循环的后面部分，直接去执行下一次！",
        points: 10
      },
      {
        type: "choice",
        question: "下面哪个会变成死循环？",
        options: ["while i < 5: i = i + 1", "while i > 0: i = i - 1", "while True: break", "while True: i = i + 1"],
        answer: 3,
        explanation: "while True: i = i + 1 条件永远是True且i一直在增加，会死循环！",
        points: 10
      }
    ],
    codingChallenge: {
      type: "while",
      title: "编程题：数到5就停！",
      description: "用while循环，从1开始数，每次加1。\n当数到5的时候停止（不打印5）。\n\n输出：\n1\n2\n3\n4",
      hint: "模板：\ni = 1\nwhile i < 5:\n    print(i)\n    i = i + 1",
      starterCode: "# while循环：数到5就停\n\ni = 1\nwhile i < 5:\n    print(i)\n    i = i + 1\n",
      testCases: [
        { label: "数到4", input: "", expected: "1\n2\n3\n4" },
        { label: "再次检查", input: "", expected: "1\n2\n3\n4" }
      ],
      points: 50,
      badge: "while小能手"
    }
  }
};

export default lesson08;
