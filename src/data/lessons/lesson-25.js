/**
 * 题库改造课 - 糖果加工机
 * 来源方向：进阶题库中的 map/filter/lambda 批量加工与筛选。
 */

const lesson25 = {
  id: 25,
  title: "糖果加工机",
  chapter: "题库改造挑战",
  type: "extended",
  examTopics: ["for循环", "列表append", "条件筛选", "批量处理"],
  difficulty: 3,
  teacher: {
    objectives: [
      "孩子能说出：批量加工就是对一队数字逐个做同一件事",
      "孩子能用for循环遍历一行数字",
      "孩子能理解：先加1，再筛选奇数",
      "孩子能用append把符合条件的结果收集起来",
      "孩子能把高阶函数题改写成低龄可理解的循环题"
    ],
    concepts: [
      {
        name: "批量加工",
        definition: "批量加工就是让每个数字都经过同一台机器。",
        example: "2、3、4 每个都加1，变成3、4、5。",
        teacherSay: "这像糖果排队进机器，每颗糖都被加上一层糖衣。",
        kidQuestion: "2经过“加1机器”后变成几？"
      },
      {
        name: "筛选",
        definition: "筛选就是只留下符合条件的东西。",
        example: "只留下奇数：3、5、7。",
        teacherSay: "筛子只让合格糖果通过，不合格的留在外面。",
        kidQuestion: "4是奇数还是偶数？能通过奇数筛子吗？"
      },
      {
        name: "append收集",
        definition: "append可以把新结果放进列表尾巴。",
        example: "answer.append(str(new_number))",
        teacherSay: "answer像一个托盘，符合条件的糖果就放上去。",
        kidQuestion: "找到一个合格数字以后，要放进哪个托盘？"
      },
      {
        name: "从map/filter到for",
        definition: "进阶题里会出现map和filter，低龄课堂先用for循环理解同样的动作。",
        example: "for n in nums: 先加工，再判断。",
        teacherSay: "map像加工机，filter像筛子；我们先用for把机器和筛子的过程讲清楚。",
        kidQuestion: "加工和筛选，哪个先做？"
      }
    ],
    commonMistakes: [
      {
        mistake: "先筛选再加1，顺序反了",
        wrongCode: "if n % 2 == 1:\n    answer.append(str(n + 1))",
        correctCode: "new_number = n + 1\nif new_number % 2 == 1:\n    answer.append(str(new_number))",
        explanation: "题目要求先加1，再看加完后的数字是不是奇数。"
      },
      {
        mistake: "append数字后直接join",
        wrongCode: "answer.append(new_number)\nprint(\" \".join(answer))",
        correctCode: "answer.append(str(new_number))\nprint(\" \".join(answer))",
        explanation: "join只能连接字符串，数字要先str()。"
      },
      {
        mistake: "没有处理一个都不符合的情况",
        wrongCode: "print(\" \".join(answer))",
        correctCode: "if answer:\n    print(\" \".join(answer))\nelse:\n    print(\"没有符合的数字\")",
        explanation: "如果托盘是空的，要给出清楚提示。"
      }
    ],
    teachingTips: "这题来自进阶题库的map/filter思想，但课堂上先不强调术语。用“加工机+筛子”的故事更适合低龄孩子。",
    handsOn: {
      title: "加1糖衣和奇数筛子",
      steps: [
        "拿数字卡片2、3、4、5、6排队",
        "每张卡先加1，变成3、4、5、6、7",
        "只留下奇数卡片3、5、7",
        "把动作翻译成for循环、if判断和append"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "2经过“加1机器”后变成几？",
        options: ["3", "2", "1", "4"],
        answer: 0,
        explanation: "2 + 1 = 3。",
        points: 10
      },
      {
        type: "choice",
        question: "筛选奇数时，哪个数字会留下？",
        options: ["5", "4", "8", "10"],
        answer: 0,
        explanation: "5是奇数，会留下。",
        points: 10
      },
      {
        type: "choice",
        question: "answer.append(...)像在做什么？",
        options: ["把合格结果放进托盘", "退出循环", "打开文件", "画一条线"],
        answer: 0,
        explanation: "append会把元素加入列表。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "for",
      title: "加1后留下奇数",
      description: "输入一行数字。\n请让每个数字先加1，再只留下加完以后是奇数的数字。\n用空格输出留下的数字。\n如果一个都没有，输出：没有符合的数字\n\n例如输入：\n2 3 4 5 6\n\n输出：\n3 5 7",
      hint: "先循环每个数字，做new_number = n + 1，再判断new_number是不是奇数：\n\nnums = list(map(int, input().split()))\nanswer = []\nfor n in nums:\n    new_number = n + 1\n    if new_number % 2 == 1:\n        answer.append(str(new_number))\nprint(\" \".join(answer))",
      starterCode: "# 糖果加工机：加1后留下奇数\n\nnums = list(map(int, input().split()))\nanswer = []\n\nfor n in nums:\n    new_number = n + 1\n    if new_number % 2 == 1:\n        answer.append(str(new_number))\n\nif answer:\n    print(\" \".join(answer))\nelse:\n    print(\"没有符合的数字\")\n",
      testCases: [
        { label: "题库风格例子", input: "2 3 4 5 6", expected: "3 5 7" },
        { label: "只有一个留下", input: "1 2 7", expected: "3" },
        { label: "没有留下", input: "1 3 5", expected: "没有符合的数字" }
      ],
      points: 70,
      badge: "加工筛选师"
    }
  }
};

export default lesson25;
