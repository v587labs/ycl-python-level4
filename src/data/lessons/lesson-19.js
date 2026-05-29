/**
 * YCL Python 四级互动教学课件 - 有问有答
 * 对齐儿童教材目录风格：第20课 有问有答。
 */

const lesson19 = {
  id: 19,
  title: "有问有答",
  chapter: "函数小工厂",
  type: "extended",
  examTopics: ["函数参数", "return返回值", "input输入", "字符串拼接"],
  difficulty: 3,
  teacher: {
    objectives: [
      "孩子能说出：input负责提问并听答案",
      "孩子能使用两个input收集两条信息",
      "孩子能理解：return是函数把结果交回来",
      "孩子能把函数返回值保存到变量里",
      "孩子能写出一个会生成完整句子的问答函数"
    ],
    concepts: [
      {
        name: "程序提问",
        definition: "input()会让程序停下来，等待同学输入答案。",
        example: "name = input()",
        teacherSay: "input像采访小话筒，问完以后要把答案放进变量盒子。",
        kidQuestion: "电脑听到名字以后，放进哪个盒子？"
      },
      {
        name: "多个输入",
        definition: "程序可以连续问多个问题，每个答案放进不同变量。",
        example: "name = input()\ndream = input()",
        teacherSay: "第一个问题问名字，第二个问题问梦想，两个答案不能放混。",
        kidQuestion: "如果两个input，程序会停下来听几次？"
      },
      {
        name: "return 交回结果",
        definition: "return会把函数做好的结果交回给调用它的地方。",
        example: "return name + \"想成为\" + dream",
        teacherSay: "return不像小喇叭直接说出来，它像把成品卡片递出来。",
        kidQuestion: "return是直接显示，还是把结果交回来？"
      },
      {
        name: "保存返回值",
        definition: "函数交回来的结果可以放进变量，再用print显示。",
        example: "card = make_card(name, dream)\nprint(card)",
        teacherSay: "card像一张写好的问答卡，最后用print读出来。",
        kidQuestion: "如果不print(card)，同学能看到这张卡吗？"
      },
      {
        name: "函数里的完整句子",
        definition: "函数可以把输入的碎片拼成一句完整的话。",
        example: "name + \"想成为\" + dream + \"。\"",
        teacherSay: "名字和梦想是两块拼图，函数负责把它们拼成一句话。",
        kidQuestion: "如果name是小雨，dream是宇航员，句子会是什么？"
      }
    ],
    commonMistakes: [
      {
        mistake: "把return当成print",
        wrongCode: "def make_card(name, dream):\n    return name + dream\n\nmake_card(\"小雨\", \"宇航员\")",
        correctCode: "def make_card(name, dream):\n    return name + dream\n\ncard = make_card(\"小雨\", \"宇航员\")\nprint(card)",
        explanation: "return只是把结果交回来，想看见结果还要print。"
      },
      {
        mistake: "两个输入放进同一个变量",
        wrongCode: "answer = input()\nanswer = input()",
        correctCode: "name = input()\ndream = input()",
        explanation: "第二次输入会盖掉第一次，两个答案要放进两个盒子。"
      },
      {
        mistake: "调用函数时参数顺序写反",
        wrongCode: "card = make_card(dream, name)",
        correctCode: "card = make_card(name, dream)",
        explanation: "参数顺序很重要，名字要进name，梦想要进dream。"
      }
    ],
    teachingTips: "这一课把函数讲成“采访卡片生成器”。先让孩子口头采访同桌：你叫什么？你想成为什么？再把问答变成input和return。",
    handsOn: {
      title: "同桌采访卡",
      steps: [
        "老师示范问两个问题：你叫什么？你想成为什么？",
        "孩子把两个答案写在两张纸条上",
        "把两张纸条放进“函数小工厂”，拼成一句完整的话",
        "最后说明：return把这张卡片交回来，print把卡片读出来"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "两个input()会让程序听几次输入？",
        options: ["2次", "1次", "0次", "无限次"],
        answer: 0,
        explanation: "每个input都会停下来听一次。",
        points: 10
      },
      {
        type: "choice",
        question: "return最像什么？",
        options: ["把函数做好的结果交回来", "直接显示到屏幕", "结束整个程序", "画一条线"],
        answer: 0,
        explanation: "return会把结果交给调用函数的地方。",
        points: 10
      },
      {
        type: "choice",
        question: "想看到return回来的内容，通常还需要什么？",
        options: ["print()", "break", "upper()", "import turtle"],
        answer: 0,
        explanation: "return本身不负责显示，print才会把内容显示出来。",
        points: 10
      },
      {
        type: "choice",
        question: "name = input(); dream = input()中，两个答案应该怎样保存？",
        options: ["放进两个不同变量", "都放进name", "都放进dream", "不用保存"],
        answer: 0,
        explanation: "不同问题的答案最好放进不同变量，后面才不会混。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "function",
      title: "制作梦想问答卡",
      description: "请做一个会生成问答卡的函数！\n\n程序会输入两行：\n第1行是名字。\n第2行是梦想。\n\n请定义make_card(name, dream)，返回一句话：\n名字想成为梦想。\n\n例如输入：\n小雨\n宇航员\n\n输出：\n小雨想成为宇航员。",
      hint: "return把句子交回来，print负责显示：\n\ndef make_card(name, dream):\n    return name + \"想成为\" + dream + \"。\"\n\nname = input()\ndream = input()\ncard = make_card(name, dream)\nprint(card)",
      starterCode: "# 有问有答：制作梦想问答卡\n\ndef make_card(name, dream):\n    return name + \"想成为\" + dream + \"。\"\n\nname = input()\ndream = input()\ncard = make_card(name, dream)\nprint(card)\n",
      testCases: [
        { label: "小雨的梦想", input: "小雨\n宇航员", expected: "小雨想成为宇航员。" },
        { label: "Alex的梦想", input: "Alex\n工程师", expected: "Alex想成为工程师。" }
      ],
      points: 70,
      badge: "问答卡设计师"
    }
  }
};

export default lesson19;
