/**
 * YCL Python 四级互动教学课件 - 整数与浮点数高级运算
 */

// ==================== 第2章 第1节 整数与浮点数高级运算（课时3）====================
const lesson03 = {
  id: 3,
  title: "整数与浮点数高级运算",
  chapter: "第2章 Python基本数据类型",
  type: "main",
  examTopics: ["math模块", "abs绝对值", "pow幂运算", "round四舍五入", "整除//", "取余%"],
  difficulty: 2,
  teacher: {
    objectives: [
      "孩子能用：abs()求绝对值",
      "孩子能用：pow()进行幂运算",
      "孩子能用：round()进行四舍五入",
      "孩子能说出：//是整除，%是取余"
    ],
    concepts: [
      {
        name: "abs() 绝对值",
        definition: "绝对值就是不管正负，只管数字有多大！-5的绝对值是5，就像把符号去掉！",
        example: "abs(-10) = 10   /   abs(5) = 5",
        illustration: "一个小天平，不管左边是正还是负，右边都显示正数"
      },
      {
        name: "pow() 幂运算",
        definition: "pow就是power（幂）的缩写！pow(2,3)就是2的3次方 = 2×2×2 = 8！",
        example: "pow(2, 3) = 8   /   pow(5, 2) = 25   /   pow(10, 2) = 100",
        illustration: "一个指数塔，2的3次方就是2叠三层，每层翻倍"
      },
      {
        name: "round() 四舍五入",
        definition: "四舍五入就是：小数点后小于5就舍去，大于等于5就进一位！",
        example: "round(3.14) = 3   /   round(3.56) = 4   /   round(3.5) = 4",
        illustration: "一个小算盘，上面标着3.14和3.56，算盘珠子会四舍五入"
      },
      {
        name: "// 整除",
        definition: "整除就是除完不要小数部分！10 // 3 = 3，因为10除以3等于3还剩1，余数不要了！",
        example: "10 // 3 = 3   /   15 // 4 = 3   /   7 // 2 = 3",
        illustration: "一个分饼干机器，10块饼干分给3个人，每人最多分到3块，还剩1块"
      },
      {
        name: "% 取余",
        definition: "取余就是只关心分完剩下的部分！10 % 3 = 1，因为10除以3等于3余1！",
        example: "10 % 3 = 1   /   15 % 4 = 3   /   7 % 2 = 1",
        illustration: "一个分饼干机器，只显示剩下的那1块饼干"
      },
      {
        name: "math.floor() 和 math.ceil()",
        definition: "floor是向下取整（往小的地方取），ceil是向上取整（往大的地方取）！",
        example: "import math\nmath.floor(3.7) = 3   /   math.ceil(3.2) = 4",
        illustration: "一个数字电梯，floor按下去到3楼，ceil按上来到4楼"
      }
    ],
    commonMistakes: [
      {
        mistake: "把 // 和 / 搞混",
        wrongCode: "10 / 3 以为是3，其实是3.333...",
        correctCode: "10 // 3 = 3（整除）   /   10 / 3 = 3.333...（小数除法）",
        explanation: "//是整除（要整数），/是小数除法！别搞混了！"
      },
      {
        mistake: "% 取余和 / 整除混淆",
        wrongCode: "10 % 3 以为等于3",
        correctCode: "10 % 3 = 1（余数）   /   10 // 3 = 3（整除的结果）",
        explanation: "%是看剩下的余数，//是看能分几整份！"
      }
    ],
    teachingTips: "建议拿实际例子：10颗糖分给3个小朋友，每人几颗？剩几颗？让孩子理解整除和取余！",
    handsOn: {
      title: "跟做练习：分糖游戏",
      steps: [
        "第一步：想一个总数，比如15颗糖",
        "第二步：分给4个小朋友，计算每人几颗：15 // 4 = ?",
        "第三步：计算还剩几颗：15 % 4 = ?",
        "第四步：用代码验证你的答案！"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "abs(-8) 的结果是？",
        options: ["-8", "8", "0", "-0"],
        answer: 1,
        explanation: "绝对值把负号去掉，所以-8变成8！",
        points: 10
      },
      {
        type: "choice",
        question: "pow(2, 4) 的结果是？",
        options: ["6", "8", "16", "24"],
        answer: 2,
        explanation: "pow(2,4) = 2的4次方 = 2×2×2×2 = 16！",
        points: 10
      },
      {
        type: "choice",
        question: "17 // 5 的结果是？",
        options: ["3", "3.4", "2", "12"],
        answer: 0,
        explanation: "17除以5等于3还剩2，整除只看能分几整份，所以是3！",
        points: 10
      },
      {
        type: "choice",
        question: "17 % 5 的结果是？",
        options: ["3", "2", "3.4", "12"],
        answer: 1,
        explanation: "17除以5等于3余2，%取余数，所以是2！",
        points: 10
      }
    ],
    codingChallenge: {
      type: "math",
      title: "编程题：计算糖剩几颗！",
      description: "有17颗糖，分给5个小朋友。\n\n请计算：\n1. 每人分到几颗？（整除）\n2. 还剩几颗？（取余）\n\n输出格式：「每人X颗，剩Y颗」",
      hint: "用 // 整除，用 % 取余！\n\nprint(\"每人\" + str(17 // 5) + \"颗，剩\" + str(17 % 5) + \"颗\")",
      starterCode: "# 分糖游戏：整除和取余\n\npeople = 5\ncandies = 17\n\nprint(\"每人\" + str(candies // people) + \"颗，剩\" + str(candies % people) + \"颗\")\n",
      testCases: [
        { label: "标准分糖", input: "", expected: "每人3颗，剩2颗" },
        { label: "再次检查", input: "", expected: "每人3颗，剩2颗" }
      ],
      points: 50,
      badge: "数学小达人"
    }
  }
};

export default lesson03;
