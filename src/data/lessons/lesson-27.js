/**
 * 题库改造课 - 电梯小管家
 * 来源方向：进阶编程题中的电梯移动模拟。
 */

const lesson27 = {
  id: 27,
  title: "电梯小管家",
  chapter: "题库改造挑战",
  type: "extended",
  examTopics: ["模拟过程", "列表遍历", "if判断", "差值计算", "累加总时间"],
  difficulty: 4,
  teacher: {
    objectives: [
      "孩子能理解：模拟题要按事情发生的顺序一步步算",
      "孩子能用current记录电梯当前楼层",
      "孩子能判断上楼和下楼使用不同时间",
      "孩子能把每次移动时间和停留时间累加到total",
      "孩子能完成一个简化版电梯调度题"
    ],
    concepts: [
      {
        name: "模拟过程",
        definition: "模拟就是让程序按真实事情的顺序一步一步走。",
        example: "从1楼到3楼，再到1楼。",
        teacherSay: "我们不是一眼猜答案，而是跟着电梯一站一站走。",
        kidQuestion: "电梯当前在哪一层，要不要记住？"
      },
      {
        name: "current当前楼层",
        definition: "current用来保存电梯现在的位置。",
        example: "current = 1",
        teacherSay: "current像电梯门口的楼层显示屏，到了新楼层就更新。",
        kidQuestion: "电梯到3楼后，current应该改成几？"
      },
      {
        name: "上楼和下楼",
        definition: "上楼和下楼可能花不同时间，所以要用if判断。",
        example: "if floor > current: 上楼\nelse: 下楼",
        teacherSay: "电梯往上走和往下走，速度不同，不能用同一个公式。",
        kidQuestion: "从1楼到4楼，是上楼还是下楼？"
      },
      {
        name: "累加总时间",
        definition: "total负责把每一段移动和停留时间加起来。",
        example: "total += move_time + 5",
        teacherSay: "每完成一次任务，就把这次花的时间倒进总时间桶。",
        kidQuestion: "为什么每到一层还要加停留时间？"
      }
    ],
    commonMistakes: [
      {
        mistake: "忘记更新current",
        wrongCode: "for floor in floors:\n    total += abs(floor - current) * 6",
        correctCode: "for floor in floors:\n    total += move_time\n    current = floor",
        explanation: "电梯到了新楼层，当前位置必须更新。"
      },
      {
        mistake: "上楼下楼都用同一个速度",
        wrongCode: "total += abs(floor - current) * 6",
        correctCode: "if floor > current:\n    total += (floor - current) * 6\nelse:\n    total += (current - floor) * 4",
        explanation: "题目里上楼和下楼速度不同，要分开判断。"
      },
      {
        mistake: "漏掉停留时间",
        wrongCode: "total += move_time",
        correctCode: "total += move_time + 5",
        explanation: "每到一个目标楼层，电梯都要停留5秒。"
      }
    ],
    teachingTips: "这是进阶模拟题的低龄版本。用电梯玩具或楼层卡片走一遍，孩子会更容易理解current为什么要更新。",
    handsOn: {
      title: "楼层卡片模拟",
      steps: [
        "把1楼、3楼、1楼、4楼写成卡片",
        "让孩子拿小电梯从1楼开始移动",
        "每移动一段就算时间，每到一站加5秒",
        "最后把手动过程写成for循环"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "current变量最像什么？",
        options: ["电梯当前楼层显示屏", "密码", "贴纸盒", "画笔颜色"],
        answer: 0,
        explanation: "current保存电梯现在在哪一层。",
        points: 10
      },
      {
        type: "choice",
        question: "从1楼到4楼是上楼还是下楼？",
        options: ["上楼", "下楼", "不移动", "无法判断"],
        answer: 0,
        explanation: "目标楼层比当前楼层大，所以是上楼。",
        points: 10
      },
      {
        type: "choice",
        question: "每到一个目标楼层为什么要加5秒？",
        options: ["停留开门时间", "随机数字", "因为必须转弯", "因为要去重"],
        answer: 0,
        explanation: "简化题里每次到站都要停留5秒。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "for",
      title: "计算电梯完成任务的总时间",
      description: "电梯从1楼开始。\n输入一行目标楼层，表示电梯要按顺序去这些楼层。\n规则：\n上楼每层6秒，下楼每层4秒。\n每到一个目标楼层，停留5秒。\n请输出总时间。\n\n例如输入：\n3 1 4\n\n输出：\n53",
      hint: "用current记录当前楼层，用total累加时间：\n\nfloors = list(map(int, input().split()))\ncurrent = 1\ntotal = 0\nfor floor in floors:\n    if floor > current:\n        total += (floor - current) * 6\n    else:\n        total += (current - floor) * 4\n    total += 5\n    current = floor\nprint(total)",
      starterCode: "# 电梯小管家：计算总时间\n\nfloors = list(map(int, input().split()))\ncurrent = 1\ntotal = 0\n\nfor floor in floors:\n    if floor > current:\n        total += (floor - current) * 6\n    else:\n        total += (current - floor) * 4\n    total += 5\n    current = floor\n\nprint(total)\n",
      testCases: [
        { label: "上上下上", input: "3 1 4", expected: "53" },
        { label: "只上楼", input: "2 3", expected: "22" },
        { label: "上下楼", input: "5 2", expected: "46" }
      ],
      points: 80,
      badge: "模拟小管家"
    }
  }
};

export default lesson27;
