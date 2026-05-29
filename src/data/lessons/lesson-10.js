/**
 * YCL Python 四级互动教学课件 - 变量作用域与常用模块
 */

// ==================== 第4章 第2节 变量作用域与常用模块（课时10）====================
const lesson10 = {
  id: 10,
  title: "变量作用域与常用模块",
  chapter: "第4章 函数与模块",
  type: "main",
  examTopics: ["局部变量", "全局变量", "import导入", "math模块", "random随机数"],
  difficulty: 3,
  teacher: {
    objectives: [
      "孩子能说出：局部变量只在函数里有用，全局变量到处都能用",
      "孩子能说出：模块就像一个有很多工具的大仓库",
      "孩子能用：import math 来借工具",
      "孩子能用：random.randint() 产生随机数"
    ],
    concepts: [
      {
        name: "局部变量",
        definition: "在函数里面创建的变量叫局部变量，它只在函数里面有用，出了函数就不认识了！",
        example: "def test():\n    a = 10   # 局部变量，只在test()里有\n    print(a)\n\ntest()   # 打印10\nprint(a)   # 报错！a不存在",
        illustration: "一个小盒子，只能在这个房间里用，出了房间就消失"
      },
      {
        name: "全局变量",
        definition: "在所有函数外面创建的变量叫全局变量，到处都能用！",
        example: "b = 20   # 全局变量\ndef test2():\n    print(b)   # 可以用到b\n\ntest2()   # 打印20",
        illustration: "一个大盒子，放在房间中间，所有房间都能用"
      },
      {
        name: "模块是什么",
        definition: "模块就像一个装满工具的大仓库！import就是去仓库借工具，借了就能用！",
        example: "import math\nprint(math.pi)   # 借用pi",
        illustration: "一个大仓库，门口写着import，里面有各种工具柜"
      },
      {
        name: "math.sqrt() 开平方根",
        definition: "sqrt就是开根号！比如sqrt(9)=3，因为3×3=9。",
        example: "import math\nprint(math.sqrt(16))   # 4.0",
        illustration: "一个小精灵拿着放大镜找数字的根"
      },
      {
        name: "random.randint() 随机数",
        definition: "randint就是随机选一个数字！就像掷骰子，randint(1,6)会随机给你1到6中的一个数字。",
        example: "import random\nprint(random.randint(1, 6))   # 随机1-6之间的数字",
        illustration: "一个骰子精灵，一摇就出来一个1-6的数字"
      },
      {
        name: "random.choice() 随机选一个",
        definition: "choice就是从一群东西里随机挑一个！",
        example: "import random\nprint(random.choice([\"红\", \"黄\", \"蓝\"]))   # 随机选一个颜色",
        illustration: "一个小转盘，上面有红黄蓝，一转随机停在某一个颜色"
      }
    ],
    commonMistakes: [
      {
        mistake: "用sqrt但没import math",
        wrongCode: "print(sqrt(16))   ❌（找不到sqrt！）",
        correctCode: "import math\nprint(math.sqrt(16))   ✅",
        explanation: "用任何math工具前都要先import！"
      },
      {
        mistake: "randint范围写错了",
        wrongCode: "以为randint(1,6)可能得到7",
        correctCode: "randint(1, 6)是闭区间，就是1、2、3、4、5、6",
        explanation: "randint(1,6)是闭区间，包括1和6！"
      }
    ],
    teachingTips: "建议玩骰子游戏：每人写一个randint(1,6)，比大小！",
    handsOn: {
      title: "跟做练习：摇骰子游戏",
      steps: [
        "第一步：import random 打开随机仓库",
        "第二步：用random.randint(1,6)摇一个骰子",
        "第三步：再摇一个",
        "第四步：输出两个骰子的点数和"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "想用math里的工具，第一步要做什么？",
        options: ["打开电脑", "import math", "print(math)", "写sqrt"],
        answer: 1,
        explanation: "先import仓库，才能借工具！",
        points: 10
      },
      {
        type: "choice",
        question: "math.sqrt(9) 的结果是？",
        options: ["3", "9", "4.5", "81"],
        answer: 0,
        explanation: "sqrt是开平方根，3×3=9，所以sqrt(9)=3！",
        points: 10
      },
      {
        type: "choice",
        question: "random.randint(1, 6) 可能得到哪些数字？",
        options: ["1,2,3,4,5", "1,2,3,4,5,6", "0,1,2,3,4,5,6", "2,3,4,5,6"],
        answer: 1,
        explanation: "randint(1,6)是闭区间，包括1和6！",
        points: 10
      },
      {
        type: "choice",
        question: "局部变量和全局变量的区别是？",
        options: ["没有区别", "局部只在函数内有效", "全局只在函数内有效", "局部到处都能用"],
        answer: 1,
        explanation: "局部变量只在创建它的函数内有效，全局变量到处都能用！",
        points: 10
      }
    ],
    codingChallenge: {
      type: "math",
      title: "编程题：骰子总和裁判",
      description: "为了方便自动检查，这里先用输入模拟两颗骰子的点数。\n\n程序会输入两行：\n第1行是第一颗骰子的点数。\n第2行是第二颗骰子的点数。\n\n请输出：总和是：X\n\n例如输入「3」「5」\n输出「总和是：8」",
      hint: "先读取两个点数，再相加输出：\n\nd1 = int(input())\nd2 = int(input())\nprint(\"总和是：\" + str(d1 + d2))\n\n如果在真实课堂想随机摇骰子，可以把输入换成random.randint(1, 6)。",
      starterCode: "# 骰子总和裁判\n\nd1 = int(input())\nd2 = int(input())\n\nprint(\"总和是：\" + str(d1 + d2))\n",
      testCases: [
        { label: "3和5", input: "3\n5", expected: "总和是：8" },
        { label: "1和6", input: "1\n6", expected: "总和是：7" }
      ],
      points: 50,
      badge: "骰子小王子"
    }
  }
};

export default lesson10;
