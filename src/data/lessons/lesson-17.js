/**
 * YCL Python 四级互动教学课件 - 打破无尽的重复
 * 对齐儿童教材目录风格：第18课 打破无尽的重复。
 */

const lesson17 = {
  id: 17,
  title: "打破无尽的重复",
  chapter: "循环进阶与小游戏",
  type: "extended",
  examTopics: ["while循环", "break退出", "累加器", "哨兵值"],
  difficulty: 2,
  teacher: {
    objectives: [
      "孩子能说出：while True会一直重复，需要停止暗号",
      "孩子能看懂：break像刹车，能立刻跳出循环",
      "孩子能使用一个变量total不断累加输入的数字",
      "孩子能理解：0可以当作“停止输入”的暗号",
      "孩子能按输入、判断、累加、输出四步完成循环题"
    ],
    concepts: [
      {
        name: "无尽的重复",
        definition: "while True会让电脑一直做同一件事，直到我们主动喊停。",
        example: "while True:\n    print(\"继续\")",
        teacherSay: "这像一列不会自己停的小火车，所以我们要给它一个刹车。",
        kidQuestion: "如果小火车一直往前开，需要什么东西让它停下来？"
      },
      {
        name: "break 刹车",
        definition: "break会让程序马上跳出当前循环。",
        example: "if number == 0:\n    break",
        teacherSay: "看到停止暗号0，就踩刹车，不再继续问下一次。",
        kidQuestion: "break出现后，还会继续执行循环里的下一轮吗？"
      },
      {
        name: "哨兵值",
        definition: "哨兵值是一个特殊输入，用来告诉程序：到这里停下。",
        example: "0表示不再输入糖果数量。",
        teacherSay: "0不是糖果数量，它是门口的小哨兵，告诉程序该收工了。",
        kidQuestion: "为什么这里输入0不是加0颗糖，而是停止？"
      },
      {
        name: "累加器 total",
        definition: "累加器负责把每一次得到的数字加到一起。",
        example: "total = total + candy",
        teacherSay: "total像一个总篮子，每来一把糖就倒进去。",
        kidQuestion: "如果先来3颗，又来5颗，total最后是多少？"
      },
      {
        name: "循环里的顺序",
        definition: "先输入，再判断是否停止，没停止才累加。",
        example: "candy = int(input())\nif candy == 0:\n    break\ntotal += candy",
        teacherSay: "顺序不能反。如果先加再判断，0虽然不影响总数，但孩子会误以为停止暗号也要参与计算。",
        kidQuestion: "我们应该先判断0，还是先把它放进篮子？"
      }
    ],
    commonMistakes: [
      {
        mistake: "忘记写break，循环停不下来",
        wrongCode: "while True:\n    candy = int(input())\n    if candy == 0:\n        print(total)",
        correctCode: "while True:\n    candy = int(input())\n    if candy == 0:\n        break",
        explanation: "判断到0以后，要用break真正跳出循环。"
      },
      {
        mistake: "忘记把输入转成整数",
        wrongCode: "candy = input()\ntotal = total + candy",
        correctCode: "candy = int(input())\ntotal = total + candy",
        explanation: "input听到的是文字，做加法前要用int()变成数字。"
      },
      {
        mistake: "每次循环都把total重新变成0",
        wrongCode: "while True:\n    total = 0\n    candy = int(input())\n    total += candy",
        correctCode: "total = 0\nwhile True:\n    candy = int(input())\n    total += candy",
        explanation: "总篮子要放在循环外面，只准备一次。"
      }
    ],
    teachingTips: "这一课用“小火车刹车”和“糖果总篮子”讲，不要先讲抽象的无限循环。先让孩子演一次：老师不断报数字，孩子听到0就喊停。",
    handsOn: {
      title: "停止暗号小游戏",
      steps: [
        "老师连续说几个糖果数量，比如3、5、2、0",
        "孩子听到普通数字就把它加进总数",
        "孩子听到0就举手喊“停”",
        "最后把动作翻译成while True、if、break和total"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "while True最像什么？",
        options: ["一直重复的小火车", "只做一次的按钮", "一段普通文字", "一个变量盒子"],
        answer: 0,
        explanation: "while True会一直重复，所以要准备停止办法。",
        points: 10
      },
      {
        type: "choice",
        question: "在循环里，break的作用是什么？",
        options: ["让循环马上停下", "让数字变大", "显示文字", "把文字变大写"],
        answer: 0,
        explanation: "break像刹车，会跳出循环。",
        points: 10
      },
      {
        type: "choice",
        question: "本课里输入0表示什么？",
        options: ["停止输入", "加0颗糖后继续", "输入错了", "输出0"],
        answer: 0,
        explanation: "0是停止暗号，也叫哨兵值。",
        points: 10
      },
      {
        type: "choice",
        question: "total = total + candy是在做什么？",
        options: ["把新糖果加进总数", "清空总数", "判断是否停止", "创建字符串"],
        answer: 0,
        explanation: "total是总篮子，每次把新的candy加进去。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "while",
      title: "收糖果，听到0就停",
      description: "糖果收集员来了！\n\n程序会不断收到一个数字，表示这次收到了几颗糖。\n如果输入的是0，表示收集结束。\n请输出一共收集了多少颗糖。\n\n例如输入：\n3\n5\n0\n\n输出：\n一共收集8颗糖",
      hint: "先准备总篮子total，再用while True一直听输入。\n听到0就break，没听到0就累加：\n\ntotal = 0\nwhile True:\n    candy = int(input())\n    if candy == 0:\n        break\n    total += candy\nprint(f\"一共收集{total}颗糖\")",
      starterCode: "# 打破无尽的重复：收糖果\n# 输入多个数字，0表示停止\n\ntotal = 0\n\nwhile True:\n    candy = int(input())\n    if candy == 0:\n        break\n    total += candy\n\nprint(f\"一共收集{total}颗糖\")\n",
      testCases: [
        { label: "3颗和5颗", input: "3\n5\n0", expected: "一共收集8颗糖" },
        { label: "1颗、2颗、3颗", input: "1\n2\n3\n0", expected: "一共收集6颗糖" },
        { label: "马上停止", input: "0", expected: "一共收集0颗糖" }
      ],
      points: 60,
      badge: "循环刹车手"
    }
  }
};

export default lesson17;
