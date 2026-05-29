/**
 * YCL Python 四级互动教学课件 - 选择结构 if/elif/else
 */

// ==================== 第3章 第2节 选择结构 if/elif/else（课时6）====================
const lesson06 = {
  id: 6,
  title: "选择结构 if/elif/else",
  chapter: "第3章 Python程序结构",
  type: "main",
  examTopics: ["if条件", "else否则", "elif多条件", "比较符号"],
  difficulty: 2,
  teacher: {
    objectives: [
      "孩子能说出：if是'如果'的意思，电脑会做选择",
      "孩子能写出：if...else... 让电脑二选一",
      "孩子能说出：==是判断等不等于，!=是不等于"
    ],
    concepts: [
      {
        name: "if 如果（条件判断）",
        definition: "if就像一个小交警，站在路口看情况。如果条件是对的，就走这条路；如果不对，就不走。",
        example: "if age >= 6:\n    print(\"可以上学！\")",
        illustration: "一个小交警站在红绿灯下，判断年龄够不够6岁"
      },
      {
        name: "else 否则",
        definition: "else就是'否则'，如果if的条件不对，就走else这条路！",
        example: "if score >= 60:\n    print(\"及格啦！\")\nelse:\n    print(\"加油哦！\")",
        illustration: "两条路：一条是if的，一条是else的，只能走一条"
      },
      {
        name: "elif 多条件",
        definition: "elif是'否则如果'，可以加更多条件！就像有很多门，只有符合的门才会开！",
        example: "if score >= 90:\n    print(\"优秀！\")\nelif score >= 60:\n    print(\"及格！\")\nelse:\n    print(\"加油！\")",
        illustration: "三扇门，每扇门有不同的条件，只有符合的门会开"
      },
      {
        name: "比较符号",
        definition: "==判断等不等于（就像天平称东西），!=是不等于，>是大于，<是小于，>=是大于等于，<=是小于等于",
        example: "5 == 5（对的）  /  3 != 5（对的）  /  4 > 2（对的）",
        illustration: "四个小天平：==两端一样重，!=不一样重，>左边重，<右边重"
      }
    ],
    commonMistakes: [
      {
        mistake: "if后面忘记加冒号",
        wrongCode: "if x > 5   ❌（忘加冒号）",
        correctCode: "if x > 5:   ✅",
        explanation: "if的每一行后面都要有冒号:，这是Python的规矩！"
      },
      {
        mistake: "用 = 判断相等（赋值不是判断！）",
        wrongCode: "if x = 5:   ❌（这是把5放进x，不是判断！）",
        correctCode: "if x == 5:   ✅",
        explanation: "一个等号是赋值（放进盒子），两个等号才是判断等不等于！"
      }
    ],
    teachingTips: "建议玩'如果...就...'游戏：老师说'如果今天下雨，就带伞'，让小朋友举牌子判断！",
    handsOn: {
      title: "跟做练习：设计你的选择机器",
      steps: [
        "第一步：想一个条件，比如'如果年龄大于6岁'",
        "第二步：想条件对的时候说什么，比如'可以骑自行车'",
        "第三步：想条件不对的时候说什么，比如'再等一年'",
        "第四步：在电脑上写出 if age > 6: print(...) else: print(...)"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "if后面要加什么符号？",
        options: [".", ",", ":", ";"],
        answer: 2,
        explanation: "if的每一行结尾都要加冒号:！这是Python的规矩～",
        points: 10
      },
      {
        type: "choice",
        question: "10 > 5 的结果是？",
        options: ["True（对的）", "False（错的）", "10", "5"],
        answer: 0,
        explanation: "10确实大于5，所以是True！",
        points: 10
      },
      {
        type: "choice",
        question: "5 == 5 的意思是？",
        options: ["把5放进5里", "5不等于5", "5等于5（判断）", "5大于5"],
        answer: 2,
        explanation: "==是判断等不等于，=是赋值（放进去）！别搞混哦～",
        points: 10
      },
      {
        type: "choice",
        question: "if和else分别代表什么？",
        options: ["如果/如果", "否则/如果", "如果/否则", "或者/而且"],
        answer: 2,
        explanation: "if=如果，else=否则。条件对走if，不对走else！",
        points: 10
      }
    ],
    codingChallenge: {
      type: "if",
      title: "编程题：判断及格了吗？",
      description: "考试分数来了！\n如果分数大于等于60分，就输出「及格啦！」\n如果分数小于60分，就输出「加油哦！」\n\n程序会给你一个分数，你要判断及不及格～",
      hint: "模板：\nscore = int(input())\nif score >= 60:\n    print(\"及格啦！\")\nelse:\n    print(\"加油哦！\")",
      starterCode: "# if分支练习：判断及格了吗\n\nscore = int(input())\n\nif score >= 60:\n    print(\"及格啦！\")\nelse:\n    print(\"加油哦！\")\n",
      testCases: [
        { label: "及格", input: "75", expected: "及格啦！" },
        { label: "不及格", input: "55", expected: "加油哦！" }
      ],
      points: 50,
      badge: "判断小交警"
    }
  }
};

export default lesson06;
