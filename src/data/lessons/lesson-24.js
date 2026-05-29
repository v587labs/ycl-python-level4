/**
 * 题库改造课 - 不重复的魔法盒
 * 来源方向：进阶题库中的集合 set 不重复元素。
 */

const lesson24 = {
  id: 24,
  title: "不重复的魔法盒",
  chapter: "题库改造挑战",
  type: "extended",
  examTopics: ["集合set", "去重", "len长度", "split输入"],
  difficulty: 2,
  teacher: {
    objectives: [
      "孩子能说出：set集合像一个不收重复贴纸的盒子",
      "孩子能理解：重复元素放进set后只保留一份",
      "孩子能使用split()把一行输入拆成许多小贴纸",
      "孩子能使用len(set(...))数出不同贴纸的数量",
      "孩子能把题库里的“集合不重复”改造成生活小题"
    ],
    concepts: [
      {
        name: "集合 set",
        definition: "set是一种不允许重复内容的容器。",
        example: "set([1, 2, 2, 3]) 会得到 {1, 2, 3}",
        teacherSay: "集合像一个有规则的贴纸盒，同样的贴纸只能放一张。",
        kidQuestion: "如果盒子里已经有2，再放一个2，会变成两个2吗？"
      },
      {
        name: "去重",
        definition: "去重就是把重复的东西合并成一份。",
        example: "1 2 2 3 1 去重后有 1、2、3。",
        teacherSay: "我们不是把贴纸丢掉，而是在数种类，不数重复张数。",
        kidQuestion: "1、1、1 算几种贴纸？"
      },
      {
        name: "split()拆开一行",
        definition: "split()会把一整行文字按空格拆成列表。",
        example: "\"1 2 2\".split() 得到 ['1', '2', '2']。",
        teacherSay: "一整串贴纸编号先排成队，split负责把它们一个个分开。",
        kidQuestion: "输入1 2 3，split以后有几个小东西？"
      },
      {
        name: "len()数一数",
        definition: "len()可以数容器里有几个元素。",
        example: "len(set(stickers))",
        teacherSay: "set负责去重，len负责数盒子里还剩几种。",
        kidQuestion: "去重后是1、2、3，len是多少？"
      }
    ],
    commonMistakes: [
      {
        mistake: "直接数原列表，忘记去重",
        wrongCode: "stickers = input().split()\nprint(len(stickers))",
        correctCode: "stickers = input().split()\nprint(len(set(stickers)))",
        explanation: "原列表会把重复贴纸也算进去，set才会先去重。"
      },
      {
        mistake: "把set写成字符串",
        wrongCode: "unique = \"set(stickers)\"",
        correctCode: "unique = set(stickers)",
        explanation: "引号里只是普通文字，真正调用set不要加引号。"
      },
      {
        mistake: "忘记split，整行只算成一个东西",
        wrongCode: "stickers = input()\nprint(len(set(stickers)))",
        correctCode: "stickers = input().split()\nprint(len(set(stickers)))",
        explanation: "没有split时，程序会按字符看，不是按贴纸编号看。"
      }
    ],
    teachingTips: "用贴纸或卡片演示最直观：同样编号的贴纸可以拿出来，但种类只算一次。",
    handsOn: {
      title: "贴纸去重",
      steps: [
        "准备几张编号贴纸：1、2、2、3、1",
        "让孩子先数一共有几张，再数有几种",
        "把“有几种”对应到set去重",
        "最后用len数不同贴纸数量"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "哪种容器最像“不收重复贴纸的盒子”？",
        options: ["set集合", "普通字符串", "print", "if"],
        answer: 0,
        explanation: "set集合不允许重复元素。",
        points: 10
      },
      {
        type: "choice",
        question: "1 2 2 3 1 去重后有几种数字？",
        options: ["3种", "5种", "2种", "1种"],
        answer: 0,
        explanation: "不同数字是1、2、3，共3种。",
        points: 10
      },
      {
        type: "choice",
        question: "input().split()的作用更像什么？",
        options: ["把一行内容按空格拆开", "让数字变大", "停止循环", "打开图片"],
        answer: 0,
        explanation: "split会把一行输入拆成多个小字符串。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "set",
      title: "数一数不同贴纸",
      description: "输入一行贴纸编号，编号之间用空格隔开。\n请输出一共有几种不同的贴纸。\n\n例如输入：\n1 2 2 3 1\n\n输出：\n3",
      hint: "先用split拆开，再用set去重，最后用len数数量：\n\nstickers = input().split()\nunique = set(stickers)\nprint(len(unique))",
      starterCode: "# 不重复的魔法盒：数不同贴纸\n\nstickers = input().split()\nunique = set(stickers)\n\nprint(len(unique))\n",
      testCases: [
        { label: "有重复贴纸", input: "1 2 2 3 1", expected: "3" },
        { label: "全都一样", input: "5 5 5 5", expected: "1" },
        { label: "都不重复", input: "1 2 3 4", expected: "4" }
      ],
      points: 60,
      badge: "去重小侦探"
    }
  }
};

export default lesson24;
