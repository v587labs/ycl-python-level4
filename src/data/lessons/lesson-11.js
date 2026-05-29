/**
 * YCL Python 四级互动教学课件 - 文件操作与异常处理
 */

// ==================== 第5章 文件和异常（课时11）====================
const lesson11 = {
  id: 11,
  title: "文件操作与异常处理",
  chapter: "第5章 文件和异常",
  type: "main",
  examTopics: ["文件读取", "文件写入", "open/close", "try-except异常处理"],
  difficulty: 3,
  teacher: {
    objectives: [
      "孩子能说出：文件就是存在电脑里的记事本",
      "孩子能做：用open()打开文件，用.read()读取内容",
      "孩子能做：用try-except保护程序不让它崩溃"
    ],
    concepts: [
      {
        name: "文件是什么",
        definition: "文件就是存在电脑里的本子！有的是.txt记事本，有的是其他格式。文件里有内容，电脑可以读取和写入。",
        example: "f = open(\"note.txt\", \"r\")   # 打开文件来读\ncontent = f.read()\nf.close()",
        illustration: "一个文件夹，里面有纸和笔，可以读写内容"
      },
      {
        name: "open() 打开文件",
        definition: "open()就是打开文件！\"r\"是读，\"w\"是写。读的时候文件要存在，写的时候文件不存在会自动创建！",
        example: "f = open(\"note.txt\", \"r\")   # 读模式\nf = open(\"note.txt\", \"w\")   # 写模式",
        illustration: "一把钥匙开门，r是读（看里面有什么），w是写（往里面放东西）"
      },
      {
        name: ".read() 读内容",
        definition: ".read()就是翻开本子，把里面的字全部读出来！",
        example: "f = open(\"note.txt\")\nprint(f.read())\nf.close()",
        illustration: "一个小精灵在翻书，把书里所有字都读出来"
      },
      {
        name: ".write() 写内容",
        definition: ".write()就是拿笔写字！会覆盖原来的内容。",
        example: "f = open(\"note.txt\", \"w\")\nf.write(\"Hello!\")\nf.close()",
        illustration: "一个小精灵在写字，写完把笔放下（close）"
      },
      {
        name: "try-except 保护罩",
        definition: "try-except就像给程序穿保护罩。如果可能会出错，用这个罩住，错了也不会崩溃！",
        example: "try:\n    x = int(input())\nexcept:\n    print(\"输入错误！\")",
        illustration: "一个透明保护罩，程序在里面工作，炸弹来了也不怕"
      }
    ],
    commonMistakes: [
      {
        mistake: "写完文件忘记close()",
        wrongCode: "f.write(\"hi\")   # 没关文件！",
        correctCode: "f.write(\"hi\")\nf.close()   # 关掉才安全！",
        explanation: "写完文件要close()，不然可能会丢失内容！"
      },
      {
        mistake: "忘了写模式\"r\"或\"w\"",
        wrongCode: "open(\"file.txt\")   # 可能报错！",
        correctCode: "open(\"file.txt\", \"r\")   指定模式",
        explanation: "open要告诉电脑你要读还是写！r=读，w=写"
      }
    ],
    teachingTips: "建议先在电脑上创建一个.txt文件，用代码读取它！",
    handsOn: {
      title: "跟做练习：我的第一个文件程序",
      steps: [
        "第一步：在电脑上创建一个test.txt，写几句话",
        "第二步：用open(\"test.txt\", \"r\")打开它",
        "第三步：用.read()读取内容",
        "第四步：用print()把内容显示出来"
      ]
    }
  },
  student: {
    quizzes: [
      {
        type: "choice",
        question: "open(\"a.txt\", \"r\")里的\"r\"是什么意思？",
        options: ["read读", "write写", "run运行", "return返回"],
        answer: 0,
        explanation: "\"r\"=read，表示打开来读取内容！",
        points: 10
      },
      {
        type: "choice",
        question: "open(\"a.txt\", \"w\")打开后写内容，会怎样？",
        options: ["在后面加内容", "清空原来的内容再写", "报错", "什么都不做"],
        answer: 1,
        explanation: "\"w\"模式会先清空原内容，再写入新内容！",
        points: 10
      },
      {
        type: "choice",
        question: "try-except是做什么用的？",
        options: ["加速程序", "保护程序不让它崩溃", "关闭文件", "打开文件"],
        answer: 1,
        explanation: "try-except是保护罩，出错了程序也不会崩溃！",
        points: 10
      },
      {
        type: "choice",
        question: ".read()的作用是？",
        options: ["写内容到文件", "读取文件内容", "关闭文件", "创建文件"],
        answer: 1,
        explanation: "read就是读！把文件里的内容读出来～",
        points: 10
      }
    ],
    codingChallenge: {
      type: "string",
      title: "编程题：读到一句话",
      description: "我们先用input模拟“从文件读到的一句话”，方便自动检查。\n\n程序会输入一行文字。\n请统计里面有多少个「好」字，最后输出：\n'好'字出现了X次\n\n例如输入「今天天气真好」\n输出「'好'字出现了1次」",
      hint: "用.count()数一数有几个「好」字：\n\ncontent = input()\ncount = content.count(\"好\")\nprint(\"'好'字出现了\" + str(count) + \"次\")\n\n真实文件课里，content也可以来自f.read()。",
      starterCode: "# 文件和异常：先模拟读到一句话\n\ncontent = input()\ncount = content.count(\"好\")\n\nprint(\"'好'字出现了\" + str(count) + \"次\")\n",
      testCases: [
        { label: "一个好", input: "今天天气真好", expected: "'好'字出现了1次" },
        { label: "两个好", input: "好好学习", expected: "'好'字出现了2次" }
      ],
      points: 50,
      badge: "文件小管家"
    }
  }
};

export default lesson11;
