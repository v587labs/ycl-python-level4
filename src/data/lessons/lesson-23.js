/**
 * YCL Python 四级互动教学课件 - Turtle项目：海底小鱼
 * 拓展挑战：把Turtle动作拆解、函数复用和循环组织成项目步骤。
 */

const lesson23 = {
  id: 23,
  title: "Turtle项目：海底小鱼",
  chapter: "Turtle复习与项目创作",
  type: "extended",
  examTopics: ["函数复用", "for循环", "图形分解", "Turtle综合创作"],
  difficulty: 3,
  teacher: {
    objectives: [
      "孩子能把一条小鱼拆成身体、尾巴、移动三步",
      "孩子能用函数保存一组画鱼动作",
      "孩子能用for循环重复画多条小鱼",
      "孩子能理解penup/pendown是移动画笔时常用的开关",
      "孩子能先输出创作步骤，再迁移到真实Turtle画图"
    ],
    concepts: [
      {
        name: "复杂图形先拆开",
        definition: "一幅画可以拆成几个小动作，逐个完成。",
        example: "小鱼 = 身体 + 尾巴 + 换位置",
        teacherSay: "不要一口气画整片海，先画一条鱼，再复制多条。",
        kidQuestion: "一条小鱼可以拆成哪几部分？"
      },
      {
        name: "函数保存动作",
        definition: "把画一条鱼的步骤放进函数，后面就能重复使用。",
        example: "def draw_fish(number):",
        teacherSay: "函数像一个画鱼印章，按一次就画一条。",
        kidQuestion: "如果要画3条鱼，函数能帮我们少写什么？"
      },
      {
        name: "循环画多条",
        definition: "for循环可以多次调用画鱼函数。",
        example: "for i in range(1, count + 1):\n    draw_fish(i)",
        teacherSay: "循环像连续盖章：第1条、第2条、第3条。",
        kidQuestion: "count是3时，会调用draw_fish几次？"
      },
      {
        name: "移动到新位置",
        definition: "画完一个图形后，常常要移动到别的位置再画下一个。",
        example: "penup移动，pendown继续画。",
        teacherSay: "penup像把笔抬起来走路，不会在路上留下乱线。",
        kidQuestion: "移动位置时，为什么要先把笔抬起来？"
      },
      {
        name: "创作步骤可检查",
        definition: "先用文字输出创作步骤，可以检查顺序是否清楚。",
        example: "第1条鱼：画身体",
        teacherSay: "低龄课堂先把动作排顺，再进真实画布，孩子更不容易乱。",
        kidQuestion: "如果步骤顺序乱了，画出来会不会乱？"
      }
    ],
    commonMistakes: [
      {
        mistake: "函数定义了但循环里没有调用",
        wrongCode: "def draw_fish(number):\n    print(number)\n\nfor i in range(3):\n    print(\"鱼\")",
        correctCode: "def draw_fish(number):\n    print(number)\n\nfor i in range(1, count + 1):\n    draw_fish(i)",
        explanation: "函数要在循环里被调用，才会重复画多条鱼。"
      },
      {
        mistake: "range少写count + 1",
        wrongCode: "for i in range(1, count):",
        correctCode: "for i in range(1, count + 1):",
        explanation: "range右边不包含，所以要写count + 1才能数到最后一条。"
      },
      {
        mistake: "忘记把输入转成数字",
        wrongCode: "count = input()\nfor i in range(1, count + 1):",
        correctCode: "count = int(input())\nfor i in range(1, count + 1):",
        explanation: "range需要数字，input听到的是文字，要先int()。"
      }
    ],
    teachingTips: "这一课是Turtle拓展项目收束课。学生端依旧用可判题的“步骤清单”，教师端可以现场演示如何把这些步骤换成turtle的forward、circle、right、penup。",
    handsOn: {
      title: "海底小鱼排队",
      steps: [
        "先画一条小鱼：身体、尾巴、换位置",
        "让孩子说出重复画3条鱼时，哪些步骤相同",
        "把相同步骤装进draw_fish函数",
        "再用for循环调用函数，完成多条鱼"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "一条小鱼可以先拆成哪些步骤？",
        options: ["身体、尾巴、换位置", "只有一行print", "打开文件、关闭文件", "加法、减法、乘法"],
        answer: 0,
        explanation: "复杂图形先拆成可理解的小动作。",
        points: 10
      },
      {
        type: "choice",
        question: "把画鱼步骤放进函数，有什么好处？",
        options: ["可以重复使用", "一定会变成大写", "不用运行代码", "不能出错"],
        answer: 0,
        explanation: "函数可以保存一组步骤，后面重复调用。",
        points: 10
      },
      {
        type: "choice",
        question: "count = 3时，for i in range(1, count + 1)会得到哪些i？",
        options: ["1、2、3", "0、1、2", "1、2", "3、4、5"],
        answer: 0,
        explanation: "range右边不包含，所以count + 1让它数到3。",
        points: 10
      },
      {
        type: "choice",
        question: "真实Turtle里，移动位置又不想画乱线，常用什么？",
        options: ["penup和pendown", "upper和lower", "break和continue", "read和write"],
        answer: 0,
        explanation: "penup抬笔移动，pendown落笔继续画。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "function",
      title: "海龟画鱼步骤清单",
      description: "请用函数和循环写出“画小鱼”的步骤清单。\n\n输入一个数字count，表示要画几条鱼。\n每条鱼输出三行：\n第i条鱼：画身体\n第i条鱼：画尾巴\n第i条鱼：换位置\n\n例如输入：\n2\n\n输出：\n第1条鱼：画身体\n第1条鱼：画尾巴\n第1条鱼：换位置\n第2条鱼：画身体\n第2条鱼：画尾巴\n第2条鱼：换位置",
      hint: "把画一条鱼的三步放进函数，再用for循环调用：\n\ndef draw_fish(number):\n    print(f\"第{number}条鱼：画身体\")\n    print(f\"第{number}条鱼：画尾巴\")\n    print(f\"第{number}条鱼：换位置\")\n\ncount = int(input())\nfor i in range(1, count + 1):\n    draw_fish(i)",
      starterCode: "# Turtle项目：海底小鱼步骤清单\n\ndef draw_fish(number):\n    print(f\"第{number}条鱼：画身体\")\n    print(f\"第{number}条鱼：画尾巴\")\n    print(f\"第{number}条鱼：换位置\")\n\ncount = int(input())\n\nfor i in range(1, count + 1):\n    draw_fish(i)\n",
      testCases: [
        { label: "2条鱼", input: "2", expected: "第1条鱼：画身体\n第1条鱼：画尾巴\n第1条鱼：换位置\n第2条鱼：画身体\n第2条鱼：画尾巴\n第2条鱼：换位置" },
        { label: "1条鱼", input: "1", expected: "第1条鱼：画身体\n第1条鱼：画尾巴\n第1条鱼：换位置" }
      ],
      points: 70,
      badge: "海底创作家"
    }
  }
};

export default lesson23;
