/**
 * YCL Python 四级互动教学课件 - 分解质因数
 * 对齐儿童教材目录风格：第22课 分解质因数。
 */

const lesson21 = {
  id: 21,
  title: "分解质因数",
  chapter: "数学挑战关",
  type: "extended",
  examTopics: ["while循环", "取余%", "整除//", "列表append", "字符串join"],
  difficulty: 4,
  teacher: {
    objectives: [
      "孩子能说出：因数就是能整齐分掉一个数的小数字",
      "孩子能用%判断一个数能不能被另一个数整除",
      "孩子能用//把已经分掉的部分拿走",
      "孩子能理解while循环会一直拆，直到数字变成1",
      "孩子能输出一个数字的质因数分解结果"
    ],
    concepts: [
      {
        name: "因数",
        definition: "如果一个数能被另一个数整齐分完，另一个数就是它的因数。",
        example: "12可以被3整除，所以3是12的因数。",
        teacherSay: "因数像能把积木塔整齐拆开的积木块。",
        kidQuestion: "12能不能被5整齐分完？"
      },
      {
        name: "% 余数检查",
        definition: "%可以告诉我们有没有剩余。",
        example: "12 % 3 得到0，表示能整除。",
        teacherSay: "余数是0，说明刚好分完；余数不是0，说明还有剩。",
        kidQuestion: "14 % 2的余数是几？"
      },
      {
        name: "// 拆掉一层",
        definition: "//可以做整除，把已经找到的因数拆掉。",
        example: "12 // 2 得到6。",
        teacherSay: "找到一个2以后，就把12拆成2和6，接着继续拆6。",
        kidQuestion: "12拆掉一个2以后，还剩几继续拆？"
      },
      {
        name: "从2开始试",
        definition: "分解质因数通常从最小的质数2开始试。",
        example: "d = 2",
        teacherSay: "我们像拿钥匙开门，从最小钥匙2开始试，打不开再换下一把。",
        kidQuestion: "第一个要试的因数通常是谁？"
      },
      {
        name: "拆到1为止",
        definition: "当n变成1，说明已经全部拆完。",
        example: "while n > 1:",
        teacherSay: "n是还没拆完的积木塔，高度变成1就收工。",
        kidQuestion: "为什么循环条件是n > 1？"
      },
      {
        name: "把答案排成一行",
        definition: "找到的因数先放进列表，最后用空格连起来输出。",
        example: "print(\" \".join(factors))",
        teacherSay: "列表像一个托盘，找到一个因数就放一块，最后排成整齐的一行。",
        kidQuestion: "如果托盘里是2、2、3，输出应该是什么？"
      }
    ],
    commonMistakes: [
      {
        mistake: "找到因数后忘记把n变小",
        wrongCode: "if n % d == 0:\n    factors.append(str(d))",
        correctCode: "if n % d == 0:\n    factors.append(str(d))\n    n = n // d",
        explanation: "只记录不拆掉，n一直不变，循环就可能停不下来。"
      },
      {
        mistake: "不能整除时忘记换下一个数字",
        wrongCode: "else:\n    print(\"不能整除\")",
        correctCode: "else:\n    d = d + 1",
        explanation: "当前钥匙打不开，就要换下一把钥匙。"
      },
      {
        mistake: "把数字直接join",
        wrongCode: "factors.append(d)\nprint(\" \".join(factors))",
        correctCode: "factors.append(str(d))\nprint(\" \".join(factors))",
        explanation: "join只能连接字符串，所以放进列表前要str()。"
      }
    ],
    teachingTips: "这节课难度高，但可以用“拆积木塔”降低抽象度。先手算12：12拆成2和6，6拆成2和3，所以12 = 2 x 2 x 3。",
    handsOn: {
      title: "拆积木塔",
      steps: [
        "先在黑板写12",
        "问孩子：能不能被2整齐分完？可以，就写下2，剩6",
        "继续问6能不能被2分完？可以，就写下2，剩3",
        "3只能被3分完，写下3，剩1，停止"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "12 % 3 的结果是0，说明什么？",
        options: ["12能被3整除", "12不能被3整除", "3比12大", "程序出错"],
        answer: 0,
        explanation: "余数为0表示刚好分完。",
        points: 10
      },
      {
        type: "choice",
        question: "找到一个因数2后，n = n // 2是在做什么？",
        options: ["把这个2拆掉，继续拆剩下的数", "把n变成文字", "结束程序", "输出答案"],
        answer: 0,
        explanation: "整除后，n会变成还没拆完的部分。",
        points: 10
      },
      {
        type: "choice",
        question: "分解质因数通常从哪个数字开始试？",
        options: ["2", "0", "1", "10"],
        answer: 0,
        explanation: "2是最小的质数，所以通常从2开始试。",
        points: 10
      },
      {
        type: "choice",
        question: "while n > 1 表示什么时候停止？",
        options: ["n变成1时停止", "n变成100时停止", "d变成2时停止", "输入为空时停止"],
        answer: 0,
        explanation: "n变成1说明已经拆完。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "while",
      title: "把数字拆成质因数",
      description: "输入一个大于1的整数，把它拆成质因数，并用空格输出。\n\n例如输入：\n12\n\n输出：\n2 2 3\n\n再例如输入：\n18\n\n输出：\n2 3 3",
      hint: "从2开始试，如果n能被d整除，就记录d，并把n变成n // d；否则d加1：\n\nn = int(input())\nfactors = []\nd = 2\nwhile n > 1:\n    if n % d == 0:\n        factors.append(str(d))\n        n = n // d\n    else:\n        d = d + 1\nprint(\" \".join(factors))",
      starterCode: "# 分解质因数：把数字拆成小积木\n\nn = int(input())\nfactors = []\nd = 2\n\nwhile n > 1:\n    if n % d == 0:\n        factors.append(str(d))\n        n = n // d\n    else:\n        d = d + 1\n\nprint(\" \".join(factors))\n",
      testCases: [
        { label: "12", input: "12", expected: "2 2 3" },
        { label: "18", input: "18", expected: "2 3 3" },
        { label: "13", input: "13", expected: "13" }
      ],
      points: 80,
      badge: "数字拆解师"
    }
  }
};

export default lesson21;
