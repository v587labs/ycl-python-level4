/**
 * 题库改造课 - 递归拆积木
 * 来源方向：进阶编程题中的拆积木塔方式计数。
 */

const lesson28 = {
  id: 28,
  title: "递归拆积木",
  chapter: "题库改造挑战",
  type: "extended",
  examTopics: ["递归", "递归出口", "函数调用自身", "计数问题"],
  difficulty: 4,
  teacher: {
    objectives: [
      "孩子能说出：递归像一个会叫自己的小助手",
      "孩子能理解拆n块积木可以先拿1块或先拿2块",
      "孩子能说出递归必须有停止条件",
      "孩子能看懂ways(n - 1) + ways(n - 2)的含义",
      "孩子能完成一个最小版递归计数题"
    ],
    concepts: [
      {
        name: "递归小助手",
        definition: "递归就是函数在解决大问题时，请同一个函数帮忙解决小一点的问题。",
        example: "ways(n) 会用到 ways(n - 1) 和 ways(n - 2)。",
        teacherSay: "像拆一座高塔，先拆一块后，剩下的小塔还是同一种问题。",
        kidQuestion: "拆掉1块后，剩下的问题是不是还在拆积木？"
      },
      {
        name: "两种第一步",
        definition: "每次可以先拿1块，也可以先拿2块。",
        example: "ways(n) = ways(n - 1) + ways(n - 2)",
        teacherSay: "所有拆法可以分成两队：第一步拿1块的，第一步拿2块的。",
        kidQuestion: "塔高3时，第一步可以拿几块？"
      },
      {
        name: "递归出口",
        definition: "递归出口告诉函数什么时候停下来。",
        example: "if n == 0: return 1\nif n < 0: return 0",
        teacherSay: "如果没有出口，小助手会一直叫下去，程序会迷路。",
        kidQuestion: "为什么递归一定要有停止条件？"
      },
      {
        name: "数拆法",
        definition: "不是输出每一种拆法，而是数一共有多少种。",
        example: "n=3时：1+1+1、1+2、2+1，共3种。",
        teacherSay: "我们像裁判一样数方案，不需要把每个动作都打印出来。",
        kidQuestion: "3块积木有几种拆法？"
      }
    ],
    commonMistakes: [
      {
        mistake: "没有写递归出口",
        wrongCode: "def ways(n):\n    return ways(n - 1) + ways(n - 2)",
        correctCode: "def ways(n):\n    if n == 0:\n        return 1\n    if n < 0:\n        return 0\n    return ways(n - 1) + ways(n - 2)",
        explanation: "递归必须知道什么时候停下来。"
      },
      {
        mistake: "把n < 0也算成一种方法",
        wrongCode: "if n < 0:\n    return 1",
        correctCode: "if n < 0:\n    return 0",
        explanation: "拆过头不是成功方案，所以返回0。"
      },
      {
        mistake: "忘记return",
        wrongCode: "ways(n - 1) + ways(n - 2)",
        correctCode: "return ways(n - 1) + ways(n - 2)",
        explanation: "函数要把算出的数量交回来，必须return。"
      }
    ],
    teachingTips: "这是一节大题独立课。不要把递归讲成抽象定义，直接从3块积木的三种拆法开始，让孩子看到规律。",
    handsOn: {
      title: "拆3块积木",
      steps: [
        "拿3块积木，列出1+1+1、1+2、2+1",
        "问孩子：如果第一步拿1块，剩下几块？",
        "再问：如果第一步拿2块，剩下几块？",
        "把两队方案相加，翻译成ways(n-1)+ways(n-2)"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "递归最像什么？",
        options: ["函数请自己帮忙解决小问题", "只输出文字", "打开图片", "去掉重复"],
        answer: 0,
        explanation: "递归是函数调用自己来解决更小的问题。",
        points: 10
      },
      {
        type: "choice",
        question: "拆3块积木，每次拿1块或2块，共有几种拆法？",
        options: ["3种", "2种", "1种", "6种"],
        answer: 0,
        explanation: "1+1+1、1+2、2+1，共3种。",
        points: 10
      },
      {
        type: "choice",
        question: "递归为什么必须有出口？",
        options: ["不然会一直调用下去", "为了换颜色", "为了输入文字", "为了排序"],
        answer: 0,
        explanation: "没有停止条件，递归会一直继续。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "function",
      title: "数一数拆积木的方法",
      description: "有一座n块高的积木塔。\n每次可以拿走1块或2块。\n请输出把积木塔完全拆完的不同方法数。\n\n例如输入：\n3\n\n输出：\n3",
      hint: "分成两种第一步：先拿1块，或先拿2块。\n\n如果刚好拆完n == 0，说明找到1种方法。\n如果拆过头n < 0，说明这条路不行。\n\ndef ways(n):\n    if n == 0:\n        return 1\n    if n < 0:\n        return 0\n    return ways(n - 1) + ways(n - 2)",
      starterCode: "# 递归拆积木：每次拿1块或2块\n\ndef ways(n):\n    if n == 0:\n        return 1\n    if n < 0:\n        return 0\n    return ways(n - 1) + ways(n - 2)\n\nn = int(input())\nprint(ways(n))\n",
      testCases: [
        { label: "3块", input: "3", expected: "3" },
        { label: "4块", input: "4", expected: "5" },
        { label: "5块", input: "5", expected: "8" }
      ],
      points: 80,
      badge: "递归启蒙师"
    }
  }
};

export default lesson28;
