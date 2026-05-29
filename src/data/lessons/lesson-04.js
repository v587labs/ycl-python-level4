/**
 * YCL Python 四级互动教学课件 - 字符串类型
 */

// ==================== 第2章 第2节 字符串类型（课时4）====================
const lesson04 = {
  id: 4,
  title: "字符串类型",
  chapter: "第2章 Python基本数据类型",
  type: "main",
  examTopics: ["字符串索引", "字符串切片", "字符串方法upper/lower", "len()长度", "字符串拼接"],
  difficulty: 2,
  teacher: {
    objectives: [
      "孩子能说出：字符串就像一串珠子，每个位置有编号",
      "孩子能做：用[0]、[1]拿出串子里的某一个珠子",
      "孩子能做：用.upper()把字母变大，用.lower()把字母变小"
    ],
    concepts: [
      {
        name: "字符串是一串珠子",
        definition: "字符串就像一串项链珠子，每个珠子上有一个字符。编号从0开始，第一个珠子是0号！",
        example: "name = \"Python\"\nprint(name[0])   # P\nprint(name[1])   # y",
        illustration: "一串项链，珠子下面标着0-P, 1-y, 2-t, 3-h, 4-o, 5-n"
      },
      {
        name: "切片：切下一段珠子",
        definition: "[:3]就是切下0到2号珠子（不包含3），[1:4]就是切下1到3号珠子。切片是左闭右开！",
        example: "word = \"Hello\"\nprint(word[0:3])   # Hel\nprint(word[2:])    # llo",
        illustration: "一把小刀，在串子上切一刀，抽出中间的几颗"
      },
      {
        name: "upper() 大写魔法",
        definition: "upper()就像按了一个变大按钮，所有小写字母都会变成大写！",
        example: "print(\"hello\".upper())   # HELLO",
        illustration: "一个小精灵拿着大写魔杖，h变成H，e变成E..."
      },
      {
        name: "lower() 小写魔法",
        definition: "lower()就像按了一个变小按钮，所有大写字母都会变成小写！",
        example: "print(\"HELLO\".lower())   # hello",
        illustration: "一个小精灵拿着小写魔杖，H变成h..."
      },
      {
        name: "len() 数珠子个数",
        definition: "len()就是数一数这串珠子有几颗！注意：数的时候从1开始数，但编号从0开始。",
        example: "print(len(\"Hello\"))   # 5",
        illustration: "一个小天平，左边放字符串，右边显示数字5"
      },
      {
        name: "字符串拼接",
        definition: "用+号可以把多个字符串连起来！就像把橡皮泥捏在一起！",
        example: "\"Hello\" + \" \" + \"World\" = \"Hello World\"",
        illustration: "三块不同颜色的橡皮泥，用+号粘在一起变成大橡皮泥"
      }
    ],
    commonMistakes: [
      {
        mistake: "索引从1开始数？错！",
        wrongCode: "\"Python\"[1] = y   ❌（应该是P）",
        correctCode: "\"Python\"[0] = P   ✅",
        explanation: "字符串索引从0开始！第1个字符是[0]，第2个才是[1]！"
      },
      {
        mistake: "切片[0:3]包含了3？错！",
        wrongCode: "以为[0:3]包含第3个",
        correctCode: "[0:3]不包含第3个字符，实际是0、1、2三个字符",
        explanation: "切片是【左闭右开】：包含开始，不包含结束！"
      }
    ],
    teachingTips: "建议拿一根绳子穿5个珠子，标上编号，和小朋友一起找第0号、第3号是什么！",
    handsOn: {
      title: "跟做练习：串子游戏",
      steps: [
        "第一步：在心里想一个英文单词，比如\"CAT\"",
        "第二步：找第一个字母（索引0），是什么？",
        "第三步：试试.upper()让所有字母变大写",
        "第四步：写出代码并运行！"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "\"Hello\"[0] 的结果是？",
        options: ["H", "e", "o", "Hello"],
        answer: 0,
        explanation: "第0号（第一个）字符是H！索引从0开始～",
        points: 10
      },
      {
        type: "choice",
        question: "\"Python\"[0:3] 的结果是？",
        options: ["Pyt", "yth", "Pyth", "Python"],
        answer: 0,
        explanation: "切0到2号字符：P-y-t → \"Pyt\"！",
        points: 10
      },
      {
        type: "choice",
        question: "\"hello\".upper() 的结果是？",
        options: ["hello", "HELLO", "Hello", "hELLO"],
        answer: 1,
        explanation: "upper()把所有字母变成大写！",
        points: 10
      },
      {
        type: "choice",
        question: "len(\"Hi!\") 的结果是？",
        options: ["2", "3", "4", "1"],
        answer: 1,
        explanation: "\"H\", \"i\", \"!\" 三个字符，所以是3！",
        points: 10
      }
    ],
    codingChallenge: {
      type: "string",
      title: "变大写小魔法！",
      description: "输入一个英文单词，程序会：\n\n第1步：原样显示\n第2步：全部变大写显示\n第3步：全部变小写显示\n\n例如：输入「Hello」\n输出：\nHello\nHELLO\nhello",
      hint: "模板：\nword = input()\nprint(word)\nprint(word.upper())\nprint(word.lower())",
      starterCode: "# 字符串大小写魔法\n\nword = input()\nprint(word)\nprint(word.upper())\nprint(word.lower())\n",
      testCases: [
        { label: "World", input: "World", expected: "World\nWORLD\nworld" },
        { label: "Hello", input: "Hello", expected: "Hello\nHELLO\nhello" }
      ],
      points: 50,
      badge: "字符串小厨师"
    }
  }
};

export default lesson04;
