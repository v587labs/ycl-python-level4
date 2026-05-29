/**
 * YCL Python 四级互动教学课件 - 循环结构 for 循环
 */

// ==================== 第3章 第3节 循环结构 for 循环（课时7）====================
const lesson07 = {
  id: 7,
  title: "循环结构 for 循环",
  chapter: "第3章 Python程序结构",
  type: "main",
  examTopics: ["for循环", "range范围", "循环变量"],
  difficulty: 2,
  teacher: {
    objectives: [
      "孩子能说出：循环就是让电脑一直重复做同样的事",
      "孩子能写出：for i in range(5) 让电脑做5次",
      "孩子能说出：range()的范围是左闭右开"
    ],
    concepts: [
      {
        name: "循环是什么",
        definition: "循环就像转陀螺！转起来之后就一直转一直转，直到停下来为止。电脑也这样，重复执行同样的代码！",
        example: "for i in range(3):\n    print(\"转！\")   # 打印三次\"转！\"",
        illustration: "一个彩色陀螺在旋转，旁边写着'重复执行'"
      },
      {
        name: "range(n) 数数器",
        definition: "range(5)就像数数从0开始：0、1、2、3、4，数到5就停。一共数5个数字！",
        example: "for i in range(5):\n    print(i)   # 打印 0 1 2 3 4",
        illustration: "一个计数器从0开始数，数到5就喊停！"
      },
      {
        name: "range(start, end) 范围数数",
        definition: "range(1, 5)从1开始数：1、2、3、4，数到5就停（不包含5）。",
        example: "for i in range(1, 5):\n    print(i)   # 打印 1 2 3 4",
        illustration: "一个计数器从1开始，跳过0，数到5前就停"
      },
      {
        name: "循环变量的作用",
        definition: "i在循环里会变！每次循环都会变成下一个数字，可以在循环里用！",
        example: "for i in range(3):\n    print(\"第\" + str(i) + \"次\")\n# 第0次\n# 第1次\n# 第2次",
        illustration: "一个小人走楼梯，每次踩的台阶数字都不一样"
      }
    ],
    commonMistakes: [
      {
        mistake: "range(5)打印的是1到5？错！",
        wrongCode: "range(5)会打印1,2,3,4,5   ❌",
        correctCode: "range(5)会打印0,1,2,3,4   ✅",
        explanation: "range从0开始数！range(5)是从0数到4，一共5个数字！"
      },
      {
        mistake: "for后面忘记加冒号",
        wrongCode: "for i in range(3)   ❌",
        correctCode: "for i in range(3):   ✅",
        explanation: "for的每一行后面都要有冒号:！"
      }
    ],
    teachingTips: "建议先让小朋友在纸上画圈圈：一个圈写'打印你好'，然后画3个箭头连回去，看看打印几次！",
    handsOn: {
      title: "跟做练习：数数小陀螺",
      steps: [
        "第一步：想一个数字，比如3",
        "第二步：用range(3)让程序数0、1、2（数3次）",
        "第三步：每次数到就打印\"转！\"",
        "第四步：写出 for i in range(3): print(\"转！\")"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "range(3) 会打印哪几个数字？",
        options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "1, 2"],
        answer: 1,
        explanation: "range从0开始数！range(3) = 0, 1, 2，一共3个数字！",
        points: 10
      },
      {
        type: "choice",
        question: "range(1, 4) 会打印哪几个数字？",
        options: ["1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3", "2, 3"],
        answer: 0,
        explanation: "从1开始数，数到4之前停下：1, 2, 3！",
        points: 10
      },
      {
        type: "choice",
        question: "for i in range(2): print(\"Hello\") 会打印几次Hello？",
        options: ["1次", "2次", "3次", "无限次"],
        answer: 1,
        explanation: "range(2) = 0, 1，循环2次，所以打印2次Hello！",
        points: 10
      },
      {
        type: "choice",
        question: "range(5)[0] 的范围是？",
        options: ["0, 1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3", "1, 2, 3, 4"],
        answer: 0,
        explanation: "range(5)从0开始，到5之前停下：0, 1, 2, 3, 4！",
        points: 10
      }
    ],
    codingChallenge: {
      type: "for",
      title: "编程题：打印5颗星星！",
      description: "请用循环打印5颗星星！\n\n程序会输出5行，每行一个「*」\n\n效果：\n*\n*\n*\n*\n*",
      hint: "用 for i in range(5) 循环5次，每次打印一颗星～\n\nfor i in range(5):\n    print(\"*\")",
      starterCode: "# for循环：打印5颗星星\n\nfor i in range(5):\n    print(\"*\")\n",
      testCases: [
        { label: "星星测试", input: "", expected: "*\n*\n*\n*\n*" },
        { label: "再次检查", input: "", expected: "*\n*\n*\n*\n*" }
      ],
      points: 50,
      badge: "循环小陀螺"
    }
  }
};

export default lesson07;
