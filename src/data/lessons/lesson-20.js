/**
 * YCL Python 四级互动教学课件 - 阿兰的密码
 * 对齐儿童教材目录风格：第21课 阿兰的密码。
 */

const lesson20 = {
  id: 20,
  title: "阿兰的密码",
  chapter: "文字秘密与综合应用",
  type: "extended",
  examTopics: ["字符串比较", "if/else", "strip处理空格", "lower大小写处理"],
  difficulty: 3,
  teacher: {
    objectives: [
      "孩子能说出：密码本质上是一段字符串",
      "孩子能使用==判断输入的密码是否正确",
      "孩子能理解strip()可以去掉输入前后的空格",
      "孩子能使用lower()让大小写不影响判断",
      "孩子能写出一个完整的密码判断程序"
    ],
    concepts: [
      {
        name: "密码是字符串",
        definition: "密码可以由字母、数字或符号组成，在程序里通常当作字符串处理。",
        example: "secret = \"python\"",
        teacherSay: "密码像一把文字钥匙，必须和锁里的文字一模一样才打开。",
        kidQuestion: "密码python要不要放在引号里？"
      },
      {
        name: "== 比较是否一样",
        definition: "==用来问电脑：左边和右边是不是相同？",
        example: "password == \"python\"",
        teacherSay: "一个等号是放进去，两个等号才是比较是不是一样。",
        kidQuestion: "判断密码对不对，应该用=还是==？"
      },
      {
        name: "strip() 擦掉边缘空格",
        definition: "strip()会去掉文字前面和后面的空格。",
        example: "password = input().strip()",
        teacherSay: "有时孩子不小心多敲了空格，strip像橡皮擦，把边缘空格擦掉。",
        kidQuestion: "strip()会擦掉中间的字母吗？"
      },
      {
        name: "lower() 统一小写",
        definition: "lower()会把英文字母变成小写，方便比较。",
        example: "\"Python\".lower() 变成 \"python\"",
        teacherSay: "大小写像帽子不一样，lower让大家都戴同一种帽子再比较。",
        kidQuestion: "输入Python，lower()以后是什么？"
      },
      {
        name: "密码分支",
        definition: "密码正确走if路线，密码错误走else路线。",
        example: "if password == \"python\":\n    print(\"打开\")\nelse:\n    print(\"错误\")",
        teacherSay: "这就是密码门：对了开门，错了提醒再试。",
        kidQuestion: "如果输入apple，会走if还是else？"
      }
    ],
    commonMistakes: [
      {
        mistake: "把=当成判断",
        wrongCode: "if password = \"python\":\n    print(\"打开\")",
        correctCode: "if password == \"python\":\n    print(\"打开\")",
        explanation: "一个等号是赋值，两个等号才是比较。"
      },
      {
        mistake: "忘记给正确密码加引号",
        wrongCode: "if password == python:\n    print(\"打开\")",
        correctCode: "if password == \"python\":\n    print(\"打开\")",
        explanation: "python作为密码文字时要放在引号里。"
      },
      {
        mistake: "大小写导致密码错判",
        wrongCode: "password = input()\nif password == \"python\":",
        correctCode: "password = input().strip().lower()\nif password == \"python\":",
        explanation: "用lower()可以让Python、PYTHON也变成python再判断。"
      }
    ],
    teachingTips: "这节课适合设计成“宝箱密码”故事。先让孩子判断几张密码卡：python、Python、 python ，再解释strip和lower为什么能帮忙。",
    handsOn: {
      title: "宝箱密码卡",
      steps: [
        "准备三张卡：python、Python、 python ",
        "让孩子先猜哪些能打开宝箱",
        "再说明lower处理大小写，strip处理边缘空格",
        "最后把密码门翻译成if/else代码"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "判断两个字符串是否一样，应该用哪个符号？",
        options: ["==", "=", "+", "%"],
        answer: 0,
        explanation: "==表示比较是否相等，=表示把右边放进左边。",
        points: 10
      },
      {
        type: "choice",
        question: "input().strip()里的strip()会做什么？",
        options: ["去掉前后空格", "把字母变大写", "退出循环", "生成随机数"],
        answer: 0,
        explanation: "strip()会擦掉字符串前面和后面的空格。",
        points: 10
      },
      {
        type: "choice",
        question: "\"Python\".lower()会变成什么？",
        options: ["python", "PYTHON", "Python", "pYTHON"],
        answer: 0,
        explanation: "lower()会把英文字母统一变成小写。",
        points: 10
      },
      {
        type: "choice",
        question: "密码文字python在代码里应该怎样写？",
        options: ["\"python\"", "python", "= python", "print"],
        answer: 0,
        explanation: "字符串文字要放在引号里。",
        points: 10
      }
    ],
    codingChallenge: {
      type: "if",
      title: "打开阿兰的密码宝箱",
      description: "阿兰有一个宝箱，正确密码是python。\n\n程序会输入一段密码。\n请先去掉前后空格，再统一变成小写。\n如果密码是python，输出：\n密码正确，宝箱打开！\n否则输出：\n密码错误，再试一次！",
      hint: "先处理输入，再用if/else判断：\n\npassword = input().strip().lower()\nif password == \"python\":\n    print(\"密码正确，宝箱打开！\")\nelse:\n    print(\"密码错误，再试一次！\")",
      starterCode: "# 阿兰的密码：打开宝箱\n\npassword = input().strip().lower()\n\nif password == \"python\":\n    print(\"密码正确，宝箱打开！\")\nelse:\n    print(\"密码错误，再试一次！\")\n",
      testCases: [
        { label: "正确小写", input: "python", expected: "密码正确，宝箱打开！" },
        { label: "大小写混合", input: "Python", expected: "密码正确，宝箱打开！" },
        { label: "错误密码", input: "apple", expected: "密码错误，再试一次！" }
      ],
      points: 70,
      badge: "密码宝箱守护者"
    }
  }
};

export default lesson20;
