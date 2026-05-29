/**
 * 题库改造课 - 花园浇水计划
 * 来源方向：进阶编程题中的连续 P 天区间和目标值最接近。
 */

const lesson26 = {
  id: 26,
  title: "花园浇水计划",
  chapter: "题库改造挑战",
  type: "extended",
  examTopics: ["连续区间", "for循环", "sum求和", "abs绝对值", "最小值更新"],
  difficulty: 4,
  teacher: {
    objectives: [
      "孩子能理解：连续P天就是挨在一起的P个数字",
      "孩子能用for循环枚举每一个连续小窗口",
      "孩子能用sum计算窗口里的总水量",
      "孩子能用abs计算和目标值的差距",
      "孩子能不断更新最小差距，找到最接近的答案"
    ],
    concepts: [
      {
        name: "连续小窗口",
        definition: "连续P天表示从某一天开始，连着看P天。",
        example: "4 2 5 1，连续3天可以是4+2+5，也可以是2+5+1。",
        teacherSay: "窗口像尺子，每次盖住连续几天，然后向右滑一格。",
        kidQuestion: "连续3天能不能跳过中间一天？"
      },
      {
        name: "窗口求和",
        definition: "sum可以把窗口里的数字加起来。",
        example: "sum(demands[i:i+p])",
        teacherSay: "窗口盖住哪几天，sum就帮我们把这几天的水量加起来。",
        kidQuestion: "4、2、5加起来是多少？"
      },
      {
        name: "abs差距",
        definition: "abs可以把差距变成正数。",
        example: "abs(current_sum - target)",
        teacherSay: "不管多了还是少了，我们只关心离目标有多远。",
        kidQuestion: "8和10差几？12和10差几？"
      },
      {
        name: "最小差距",
        definition: "每算一个窗口，就和当前最小差距比一比，留下更小的。",
        example: "best = min(best, diff)",
        teacherSay: "best像冠军牌，谁离目标更近，冠军牌就交给谁。",
        kidQuestion: "差距3和差距1，谁更接近目标？"
      }
    ],
    commonMistakes: [
      {
        mistake: "窗口范围少算最后一组",
        wrongCode: "for i in range(n - p):",
        correctCode: "for i in range(n - p + 1):",
        explanation: "起点要一直滑到最后一个能放下P天窗口的位置。"
      },
      {
        mistake: "忘记用abs，负数差距干扰比较",
        wrongCode: "diff = current_sum - target",
        correctCode: "diff = abs(current_sum - target)",
        explanation: "差距应该是距离，不能有负号。"
      },
      {
        mistake: "每次都直接覆盖best",
        wrongCode: "best = diff",
        correctCode: "best = min(best, diff)",
        explanation: "best要保存目前最小的差距，不是保存最后一次差距。"
      }
    ],
    teachingTips: "这是大一点的编程题，适合作为独立挑战课。先用纸条摆出7天水量，再拿尺子盖住连续3天滑动。",
    handsOn: {
      title: "尺子滑窗口",
      steps: [
        "把每天水量写成一排数字卡",
        "用一把尺子盖住连续P张卡片",
        "每滑一次就算总和与目标的差距",
        "把最小差距圈出来，再写成代码"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "连续3天是什么意思？",
        options: ["挨在一起的3天", "随便挑3天", "只看第3天", "跳着看3天"],
        answer: 0,
        explanation: "连续就是中间不能跳过。",
        points: 10
      },
      {
        type: "choice",
        question: "abs(8 - 10)的结果是多少？",
        options: ["2", "-2", "18", "0"],
        answer: 0,
        explanation: "abs会得到正的差距。",
        points: 10
      },
      {
        type: "choice",
        question: "best = min(best, diff)是在做什么？",
        options: ["留下更小的差距", "把数字变成文字", "退出循环", "打开文件"],
        answer: 0,
        explanation: "min会选出更小的那个。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "for",
      title: "找最接近目标的连续几天",
      description: "花园每天需要不同水量。\n输入N和P，表示一共有N天，要选择连续P天。\n第二行输入N个水量。\n第三行输入目标水量T。\n请输出：连续P天水量总和与目标T最接近的差距。\n\n例如输入：\n7 3\n4 2 5 1 3 6 2\n10\n\n输出：\n0",
      hint: "用窗口从左到右滑动：\n\nn, p = map(int, input().split())\ndemands = list(map(int, input().split()))\ntarget = int(input())\nbest = 10**9\nfor i in range(n - p + 1):\n    current_sum = sum(demands[i:i+p])\n    diff = abs(current_sum - target)\n    best = min(best, diff)\nprint(best)",
      starterCode: "# 花园浇水计划：连续P天最接近目标\n\nn, p = map(int, input().split())\ndemands = list(map(int, input().split()))\ntarget = int(input())\n\nbest = 10**9\n\nfor i in range(n - p + 1):\n    current_sum = sum(demands[i:i+p])\n    diff = abs(current_sum - target)\n    best = min(best, diff)\n\nprint(best)\n",
      testCases: [
        { label: "样例窗口", input: "7 3\n4 2 5 1 3 6 2\n10", expected: "0" },
        { label: "差距为2", input: "5 2\n1 4 8 2 3\n7", expected: "2" },
        { label: "正好命中", input: "4 2\n5 5 1 1\n10", expected: "0" }
      ],
      points: 80,
      badge: "滑动窗口小园丁"
    }
  }
};

export default lesson26;
