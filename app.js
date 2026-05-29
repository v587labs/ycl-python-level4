const STORAGE_KEY = "ycl-python4-progress-v1";
const EXPORT_SCHEMA = "ycl-python4-progress-export-v1";
const optionKeys = ["A", "B", "C", "D", "E", "F"];

const lessonGuides = {
  1: guide(
    "把 Python 想成一台听话的自动售货机：你输入指令，它按照指令显示结果。print 是让机器说话，变量是给线索贴标签，input 是让机器先听你说一句。",
    ["先决定要显示什么", "用变量保存会变化的信息", "用 input 读取一行输入", "运行样例，观察输出是否一字不差"],
    "name = input()\nmessage = \"Agent: \" + name\nprint(message)",
    "这段代码先读取姓名，再把固定文字和姓名拼起来，最后输出完整身份。学生要看懂每一行在做什么，而不是只背写法。",
    ["print 后面要有括号", "字符串要加引号，变量名不要加引号", "input 读到的是文本，不会自动变成数字", "输出格式里多一个空格也可能影响判题"],
    ["先让学生预测 print 的输出", "用姓名、代号、班级做变量例子", "强调程序是从上到下一行一行执行"],
    ["我能写出 print 输出一句话", "我能解释变量保存了什么", "我能用 input 读取一行内容"]
  ),
  2: guide(
    "数据类型就像不同盒子：数字盒子可以计算，文字盒子可以拼接。看起来都是 8，但数字 8 和字符串 \"8\" 在 Python 眼里不是同一种东西。",
    ["先判断输入是数字还是文字", "需要计算就用 int 或 float 转换", "需要拼接文字就保持 str", "遇到报错时先检查类型"],
    "a = int(input())\nb = int(input())\nprint(a + b)",
    "input 得到的是字符串，int 把它变成整数后才能做数学加法。否则 \"3\" + \"5\" 会得到 \"35\"，不是 8。",
    ["把字符串加法误认为数学加法", "忘记 int(input())", "把小数强行转 int 导致报错", "混用数字和字符串直接相加"],
    ["用 \"8\" 和 8 做对比演示", "让学生说出每个变量的类型", "把报错当成类型检查的线索"],
    ["我能区分 int、float、str", "我知道 input 默认是 str", "我能在计算前完成类型转换"]
  ),
  3: guide(
    "条件判断像路口红绿灯：满足条件走一条路，不满足就走另一条路。程序不会猜心思，它只看条件结果是真还是假。",
    ["读出题目中的判断标准", "写出比较表达式", "用 if/elif/else 分支", "检查每个分支的缩进和输出"],
    "score = int(input())\nif score >= 60:\n    print(\"pass\")\nelse:\n    print(\"retry\")",
    "这段代码先把分数转成整数，再判断是否达到 60。冒号后面的缩进表示这行代码属于哪个分支。",
    ["把 = 当成 == 使用", "忘记冒号", "if 下面没有缩进", "多个条件时 and 和 or 用反"],
    ["用成绩、门票身高、温度预警做生活情境", "让学生画出两个分支的流程", "提醒先写最容易判断的条件"],
    ["我能写出 if/else", "我能使用 >=、==、!= 等比较", "我能解释 and 和 or 的区别"]
  ),
  4: guide(
    "循环像体育课数圈：同一件事要做很多次，不需要把代码复制很多遍。for 适合次数清楚的任务，while 适合条件还没结束的任务。",
    ["找到重复做的事情", "确定循环从哪里开始到哪里结束", "准备累加或计数变量", "每轮循环后检查变量变化"],
    "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)",
    "total 是累加器，i 每次变成新的数字。range(1, n + 1) 才能包含 n，这是四级里很常见的边界点。",
    ["range(n) 不包含 n", "累加变量忘记先设为 0", "while 循环忘记更新条件", "把循环内外的缩进弄混"],
    ["用数楼层、排队编号解释 range", "每轮手动写出 i 和 total 的变化", "先讲 for，再轻触 while 的风险"],
    ["我能用 for 重复执行", "我能写 1 到 n 的循环", "我能用 total 完成累加"]
  ),
  5: guide(
    "字符串像一排编号的柜子，每个字符都有位置。第一个位置不是 1，而是 0；最后一个位置可以用 -1 快速拿到。",
    ["先确认要取单个字符还是一段字符", "单个字符用索引", "一段字符用切片", "查找内容时用 in 或遍历"],
    "s = input()\nprint(s[0], s[-1])\nprint(len(s))",
    "s[0] 是第一个字符，s[-1] 是最后一个字符，len(s) 是字符串长度。学生要把位置和长度分清楚。",
    ["把第一个字符写成 s[1]", "切片右边界多取了一位", "空字符串时直接取索引", "忘记字符串也可以用 for 遍历"],
    ["在黑板上给 python 六个字母编号", "让学生先口算 s[0:3]", "提醒索引错误通常和边界有关"],
    ["我知道索引从 0 开始", "我能使用 s[a:b]", "我能用 len 得到长度"]
  ),
  6: guide(
    "列表像一张成绩单，可以放很多个数据。字符串是一串字符，列表是一串项目，项目可以是数字、文字，也可以继续修改。",
    ["把一行输入拆成多个项目", "把每个项目转成需要的类型", "用 for 遍历列表", "用 max、min、sum 或计数器统计"],
    "nums = list(map(int, input().split()))\nprint(max(nums))\nprint(len(nums))",
    "split 把一行按空格切开，map(int, ...) 把每一项转成整数，list 把结果装回列表。",
    ["忘记把 split 后的内容转成 int", "把列表索引和元素值混在一起", "sort 会改变原列表", "空列表不能直接 max"],
    ["用班级成绩、购物清单举例", "拆开讲 input、split、map、list 四步", "让学生说出列表里有几个元素"],
    ["我能读入一行整数列表", "我能遍历列表", "我能求最大值、长度和简单统计"]
  ),
  7: guide(
    "函数像一个可重复使用的小工具：把材料交进去，它按固定步骤加工，再把结果交回来。写函数不是为了炫技，是为了让解题步骤更清楚。",
    ["给函数起一个表达用途的名字", "确定需要哪些参数", "在函数里完成计算", "用 return 返回结果，再在外面 print"],
    "def double(n):\n    return n * 2\n\nx = int(input())\nprint(double(x))",
    "double 只负责计算两倍，读取输入和输出结果放在函数外。这样职责更清楚，也更容易调试。",
    ["把 print 当成 return", "定义函数后忘记调用", "参数名和外部变量混淆", "函数内部缩进错误"],
    ["把函数比作榨汁机，输入水果输出果汁", "强调定义和调用是两件事", "用一题多次调用体现复用"],
    ["我能定义简单函数", "我能区分参数和返回值", "我能正确调用函数"]
  ),
  8: guide(
    "统计题像班主任点名：要么把数量数清楚，要么把总分加起来。count 负责数个数，total 负责加总和。",
    ["先判断题目要总和、个数、最大最小还是平均数", "准备 total 或 count", "遍历每个数据", "按条件更新变量，最后输出"],
    "nums = list(map(int, input().split()))\ncount = 0\nfor n in nums:\n    if n % 2 == 0:\n        count += 1\nprint(count)",
    "每遇到一个偶数，count 就加 1。统计题最重要的是明确什么时候更新变量。",
    ["count 和 total 混用", "循环里忘记更新变量", "平均数忘记除以个数", "最大最小初值设置不合理"],
    ["用投票、分数、身高统计举例", "让学生先用表格手算一遍", "强调变量名要服务思路"],
    ["我能使用 count 计数", "我能使用 total 求和", "我能根据条件统计数据"]
  ),
  9: guide(
    "枚举像逐个试钥匙：不知道答案时，把可能的情况按规则试一遍。模拟像按说明书操作：每一步都照题目规则改变状态。",
    ["列出可能范围", "写出筛选条件", "用循环逐个检查", "符合条件就输出或记录"],
    "n = int(input())\nfor i in range(1, n + 1):\n    if i % 3 == 0 and i % 5 != 0:\n        print(i)",
    "这段代码枚举 1 到 n 的每个数，再用两个条件筛选。and 表示两个条件都要满足。",
    ["枚举范围少 1 或多 1", "条件写反", "and 和 or 混用", "模拟题没有记录当前状态"],
    ["用找门牌号、筛选报名名单举例", "先用自然语言写规则，再翻译成代码", "提醒输出每行一个数时不要拼在一行"],
    ["我能写枚举范围", "我能组合多个筛选条件", "我能按规则模拟变化"]
  ),
  10: guide(
    "编程题像填答题卡：你会算还不够，格式也必须对。自动判题只看你的输出是否和标准答案一致。",
    ["圈出输入格式", "圈出输出格式", "先写能跑通样例的版本", "再考虑边界和特殊情况"],
    "name = input()\nscore = input()\nprint(name + \":\" + score)",
    "题目要求输出 name:score，中间没有空格。print(name, score) 会多一个空格，不符合格式。",
    ["输出多余提示文字", "空格和换行不一致", "没有按行读取输入", "只测一个样例就提交"],
    ["用同一题演示正确输出和错误输出", "把样例拆成输入区和输出区", "强调先保证能运行"],
    ["我能读懂输入输出格式", "我能用样例检查程序", "我知道输出多余内容会出错"]
  ),
  11: guide(
    "综合模拟不是拼速度，而是练节奏。选择题先稳住基础分，编程题先写出能跑样例的版本，再慢慢补边界。",
    ["先做会的单选题", "多选题标记不确定项", "编程题先读输入输出", "最后用剩余时间检查格式和边界"],
    "nums = list(map(int, input().split()))\nprint(max(nums) - min(nums))",
    "综合题里会把前面学过的输入、列表、统计、条件和循环混在一起。拆题能力比背代码更重要。",
    ["多选题漏选", "编程题格式错误", "卡在一题太久", "没有保留检查时间"],
    ["给学生明确 90 分钟分配建议", "让学生复盘错因而不是只看分数", "模拟结束后导出 CSV 做讲评"],
    ["我知道四级题型结构", "我能完成一次完整模拟", "我能根据错题找到薄弱点"]
  ),
  12: guide(
    "考前复盘像整理书包：不是把所有东西再学一遍，而是把最容易忘、最容易错的地方放到最顺手的位置。",
    ["按语法、输入输出、算法思路分类错题", "每类挑 1 道代表题重做", "整理自己的常见坑清单", "用最终闯关检验复盘效果"],
    "nums = list(map(int, input().split()))\navg = sum(nums) / len(nums)\nprint(sum(1 for n in nums if n > avg))",
    "这题把列表、平均数、条件统计合在一起。也可以用普通 for 循环写，不必追求最短代码。",
    ["只看答案不重写", "错题没有分类", "考前练太难的新题", "忽略输入输出格式"],
    ["把学生错题分三类讲评", "鼓励用熟悉写法拿稳分", "最后强调考试节奏和心态"],
    ["我能说出自己的薄弱点", "我能重做典型错题", "我能完成最终综合题"]
  )
};

const lessons = [
  lesson(1, "Python 世界入口", "print、变量、输入输出", "会用 print 输出信息，能用变量保存输入内容。", [
    "print() 用来把结果显示到屏幕上。",
    "变量名代表一块可以反复使用的数据标签。",
    "input() 读到的是字符串，需要时再转换类型。",
    "考试时先跑样例，再补边界情况。"
  ], [
    single("l1-q1", "下面哪一行可以正确输出 Hello Python？", ["print(\"Hello Python\")", "print Hello Python", "echo(\"Hello Python\")", "show Hello Python"], 0, "Python 使用 print() 输出内容，字符串要放在引号里。"),
    multi("l1-q2", "下面哪些变量名是 Python 中可用的？", ["score_4", "4score", "studentName", "class"], [0, 2], "变量名不能以数字开头；class 是 Python 关键字，不能直接作为变量名。")
  ], [
    challenge("l1-c1", "打印侦探代号", "输入一个名字，输出 Agent: 名字。", "name = input()\nprint(\"Agent:\", name)", [
      test("Lin", "Agent: Lin"),
      test("Mia", "Agent: Mia")
    ], "注意 print 的多个参数默认用空格隔开。")
  ]),
  lesson(2, "数据类型", "数字、字符串、类型转换", "理解 int、float、str 的区别，能完成简单类型转换。", [
    "input() 永远先得到字符串。",
    "int() 可以把合法整数字符串转成整数。",
    "字符串可以拼接，数字可以计算。",
    "类型不匹配是四级常见错误来源。"
  ], [
    single("l2-q1", "执行 int(\"12\") + 3 的结果是？", ["123", "15", "\"123\"", "报错"], 1, "int(\"12\") 得到整数 12，再加 3 得到 15。"),
    multi("l2-q2", "下面哪些表达式的结果是字符串？", ["\"8\" + \"2\"", "str(8 + 2)", "8 + 2", "int(\"8\")"], [0, 1], "引号包住的是字符串；str() 会把结果转成字符串。")
  ], [
    challenge("l2-c1", "线索总分", "输入两个整数，输出它们的和。", "a = int(input())\nb = int(input())\nprint(a + b)", [
      test("3\n5", "8"),
      test("20\n17", "37")
    ], "每次 input() 读取一行，做加法前先用 int() 转换。")
  ]),
  lesson(3, "条件判断", "if、比较、逻辑运算", "能用条件判断把问题拆成不同分支。", [
    "if 后面的条件结果必须能判断真假。",
    "elif 用来处理第二、第三种情况。",
    "and、or、not 可以组合多个条件。",
    "缩进是 Python 判断代码块的方式。"
  ], [
    single("l3-q1", "x = 7 时，表达式 x >= 5 and x < 10 的结果是？", ["True", "False", "7", "报错"], 0, "两个条件都成立，所以 and 的结果为 True。"),
    multi("l3-q2", "下面哪些写法能表示“分数不低于 60”？", ["score >= 60", "score > 59", "score = 60", "score < 60"], [0, 1], ">= 是大于等于；= 是赋值，不是比较。")
  ], [
    challenge("l3-c1", "通过判定", "输入一个分数，60 分及以上输出 pass，否则输出 retry。", "score = int(input())\nif score >= 60:\n    print(\"pass\")\nelse:\n    print(\"retry\")", [
      test("80", "pass"),
      test("45", "retry")
    ], "条件分支里要保持四个空格缩进。")
  ]),
  lesson(4, "循环基础", "for、while、range", "能用循环完成重复计算和计数任务。", [
    "for 常用于次数明确的重复。",
    "range(n) 会产生 0 到 n-1。",
    "while 适合条件满足时持续执行。",
    "循环题先确定初值、更新和结束条件。"
  ], [
    single("l4-q1", "for i in range(3): 会让 i 依次取哪些值？", ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3, 2, 1"], 1, "range(3) 从 0 开始，到 3 前停止。"),
    multi("l4-q2", "下面哪些任务适合用循环？", ["输出 10 次 Python", "计算 1 到 n 的和", "判断一个数是否大于 0", "遍历列表中的每个分数"], [0, 1, 3], "重复动作、累加和遍历都适合循环；单次判断不一定需要循环。")
  ], [
    challenge("l4-c1", "线索编号求和", "输入 n，输出 1 到 n 的和。", "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)", [
      test("5", "15"),
      test("100", "5050")
    ], "range(1, n + 1) 才会包含 n。")
  ]),
  lesson(5, "字符串任务", "索引、切片、查找、处理", "能读取和处理字符串中的关键信息。", [
    "字符串索引从 0 开始。",
    "s[a:b] 取 a 到 b 前一位。",
    "len() 可以得到字符串长度。",
    "in 可以判断某段文本是否出现。"
  ], [
    single("l5-q1", "s = \"python\"，s[1] 的结果是？", ["p", "y", "t", "报错"], 1, "索引从 0 开始，s[1] 是第二个字符 y。"),
    multi("l5-q2", "下面哪些表达式可以得到字符串 s 的长度或部分内容？", ["len(s)", "s[0:3]", "size(s)", "s[-1]"], [0, 1, 3], "len、切片和负索引都可用于字符串；size() 不是 Python 内置函数。")
  ], [
    challenge("l5-c1", "提取暗号", "输入一个字符串，输出它的第一个字符和最后一个字符，中间用空格隔开。", "s = input()\nprint(s[0], s[-1])", [
      test("python", "p n"),
      test("level", "l l")
    ], "最后一个字符可以用 s[-1] 取得。")
  ]),
  lesson(6, "列表任务", "列表增删改查、遍历", "能用列表保存多项数据并完成基础统计。", [
    "列表用 [] 保存一组有顺序的数据。",
    "append() 可以在末尾加入元素。",
    "for item in list 可以逐个访问元素。",
    "split() 常用于把一行输入拆成列表。"
  ], [
    single("l6-q1", "nums = [3, 5, 8]，nums[2] 是？", ["3", "5", "8", "报错"], 2, "列表索引从 0 开始，nums[2] 是第三个元素。"),
    multi("l6-q2", "下面哪些操作会改变列表本身？", ["nums.append(4)", "nums.sort()", "len(nums)", "nums[0] = 9"], [0, 1, 3], "append、sort、索引赋值会修改列表；len 只读取长度。")
  ], [
    challenge("l6-c1", "最高分", "输入一行整数，用空格隔开，输出其中最大值。", "nums = list(map(int, input().split()))\nprint(max(nums))", [
      test("3 8 5 2", "8"),
      test("10 7 19 19", "19")
    ], "split() 拆分字符串，map(int, ...) 把每一项转成整数。")
  ]),
  lesson(7, "函数入门", "参数、返回值、拆分步骤", "能把重复逻辑写成函数并正确调用。", [
    "函数用 def 定义。",
    "参数是函数接收的信息。",
    "return 把计算结果交回调用处。",
    "函数题要区分输出 print 和返回 return。"
  ], [
    single("l7-q1", "下面哪个关键字用于把函数结果返回给调用处？", ["print", "return", "def", "input"], 1, "return 负责返回结果，print 只负责显示。"),
    multi("l7-q2", "下面关于函数的说法哪些正确？", ["函数可以有参数", "函数一定要有 return", "函数可以被多次调用", "def 用于定义函数"], [0, 2, 3], "函数可以没有 return，此时默认返回 None。")
  ], [
    challenge("l7-c1", "双倍线索", "补全函数 double(n)，输入一个整数，输出它的 2 倍。", "def double(n):\n    return n * 2\n\nx = int(input())\nprint(double(x))", [
      test("6", "12"),
      test("21", "42")
    ], "函数内部算结果，主程序负责读取输入和输出。")
  ]),
  lesson(8, "基础算法一", "最大值、最小值、计数、平均数", "能用累加器和计数器解决统计题。", [
    "total 常用来保存累加结果。",
    "count 常用来保存满足条件的数量。",
    "最大值、最小值可以用内置函数或循环维护。",
    "平均数要注意总和与个数。"
  ], [
    single("l8-q1", "计算平均数时通常需要哪两个量？", ["最大值和最小值", "总和和个数", "第一个数和最后一个数", "字符串和列表"], 1, "平均数 = 总和 / 个数。"),
    multi("l8-q2", "下面哪些变量名常用于统计类算法？", ["total", "count", "answer", "i"], [0, 1, 3], "total、count、i 都是常见统计变量；answer 也可用，但语义不如前两者明确。")
  ], [
    challenge("l8-c1", "偶数个数", "输入一行整数，统计其中偶数的个数。", "nums = list(map(int, input().split()))\ncount = 0\nfor n in nums:\n    if n % 2 == 0:\n        count += 1\nprint(count)", [
      test("1 2 3 4 6", "3"),
      test("7 9 11", "0")
    ], "n % 2 == 0 表示 n 能被 2 整除。")
  ]),
  lesson(9, "基础算法二", "枚举、模拟、条件筛选", "能按规则逐项尝试并筛选符合条件的数据。", [
    "枚举就是把可能答案逐个试一遍。",
    "模拟题要按题目规则一步步更新状态。",
    "条件筛选常和循环、if 一起出现。",
    "先写清楚规则，再写代码。"
  ], [
    single("l9-q1", "“从 1 到 100 找出所有能被 7 整除的数”最适合使用？", ["枚举筛选", "字符串切片", "函数递归", "文件读写"], 0, "逐个检查 1 到 100，就是典型枚举筛选。"),
    multi("l9-q2", "做模拟题时应该关注哪些内容？", ["初始状态", "每一步如何变化", "什么时候停止", "变量名必须很长"], [0, 1, 2], "模拟题核心是状态、变化规则和停止条件。")
  ], [
    challenge("l9-c1", "筛选暗号", "输入 n，输出 1 到 n 中所有能被 3 整除但不能被 5 整除的数，每个数一行。", "n = int(input())\nfor i in range(1, n + 1):\n    if i % 3 == 0 and i % 5 != 0:\n        print(i)", [
      test("10", "3\n6\n9"),
      test("16", "3\n6\n9\n12")
    ], "把两个条件用 and 组合起来。")
  ]),
  lesson(10, "编程题训练", "输入格式、输出格式、样例验证", "能按考试要求处理输入输出并用样例自测。", [
    "先读题，圈出输入是什么、输出是什么。",
    "样例通过不代表完全正确，还要考虑边界。",
    "多行输入就多次 input()。",
    "输出格式错误也会导致编程题失分。"
  ], [
    single("l10-q1", "编程题提交前最应该先检查什么？", ["变量名是否好看", "样例输入输出是否一致", "代码行数是否足够", "有没有使用高级语法"], 1, "样例是最低限度的自检。"),
    multi("l10-q2", "下面哪些属于输出格式问题？", ["多输出一个空格", "少换行", "大小写不一致", "变量名叫 total"], [0, 1, 2], "判题通常对格式敏感，变量名不会影响输出。")
  ], [
    challenge("l10-c1", "标准化输出", "输入姓名和分数，输出 name:score。", "name = input()\nscore = input()\nprint(name + \":\" + score)", [
      test("Ada\n98", "Ada:98"),
      test("Ben\n60", "Ben:60")
    ], "题目要求没有空格，就不要额外输出空格。")
  ]),
  mockLesson(),
  lesson(12, "考前复盘", "错题归类、节奏、最终闯关", "能根据错题定位薄弱点，并完成考前策略复盘。", [
    "单选题先排除明显错误选项。",
    "多选题不要漏选，也不要猜太多。",
    "编程题先拿样例分，再完善边界。",
    "90 分钟要给编程题留出足够时间。"
  ], [
    single("l12-q1", "四级模拟中遇到编程题卡住 10 分钟，比较合理的做法是？", ["一直盯着同一行", "先写能通过样例的版本，再逐步补全", "直接放弃所有编程题", "只改变量名"], 1, "先写可运行版本，能帮助发现下一步问题。"),
    multi("l12-q2", "考前错题本适合按哪些类别整理？", ["语法错误", "输入输出错误", "算法思路错误", "字体大小错误"], [0, 1, 2], "错题分类要帮助下一次少犯同类错误。")
  ], [
    challenge("l12-c1", "最终小闯关", "输入一行整数，输出其中大于平均数的个数。", "nums = list(map(int, input().split()))\navg = sum(nums) / len(nums)\ncount = 0\nfor n in nums:\n    if n > avg:\n        count += 1\nprint(count)", [
      test("1 2 3 4 5", "2"),
      test("10 10 20 30", "2")
    ], "平均数可能是小数，比较时直接用 n > avg 即可。")
  ])
];

let state = loadState();
let pyodide = null;
let pyodidePromise = null;
let runningChallengeId = null;
let timerTick = null;

const els = {
  mainView: document.querySelector("#mainView"),
  lessonRail: document.querySelector("#lessonRail"),
  lessonSelect: document.querySelector("#lessonSelect"),
  teacherModeBtn: document.querySelector("#teacherModeBtn"),
  studentModeBtn: document.querySelector("#studentModeBtn"),
  timerBtn: document.querySelector("#timerBtn"),
  revealBtn: document.querySelector("#revealBtn"),
  fullscreenBtn: document.querySelector("#fullscreenBtn"),
  exportJsonBtn: document.querySelector("#exportJsonBtn"),
  exportCsvBtn: document.querySelector("#exportCsvBtn"),
  importBtn: document.querySelector("#importBtn"),
  importFile: document.querySelector("#importFile"),
  overallProgress: document.querySelector("#overallProgress")
};

init();

function init() {
  renderLessonSelect();
  attachEvents();
  render();
  timerTick = window.setInterval(renderTimerOnly, 1000);
}

function lesson(no, title, topic, goal, concepts, questions, challenges) {
  const id = `lesson-${String(no).padStart(2, "0")}`;
  const story = `AI 侦探学院第 ${no} 站：学生要用 ${topic} 破解一组原创数据线索。`;
  const guideData = lessonGuides[no];
  return {
    id,
    no,
    title,
    topic,
    goal,
    story,
    concepts,
    guide: guideData,
    questions,
    challenges,
    slides: buildSlides(no, title, topic, goal, story, concepts, guideData)
  };
}

function guide(analogy, steps, exampleCode, exampleExplain, mistakes, teacherTips, studentChecklist) {
  return {
    analogy,
    steps,
    exampleCode,
    exampleExplain,
    mistakes,
    teacherTips,
    studentChecklist
  };
}

function mockLesson() {
  const questions = [
    single("l11-s1", "print(2 + 3 * 4) 的输出是？", ["20", "14", "24", "9"], 1, "乘法优先于加法。"),
    single("l11-s2", "input() 默认读到的数据类型是？", ["int", "float", "str", "list"], 2, "input() 默认返回字符串。"),
    single("l11-s3", "range(2, 6) 会产生几个数？", ["3", "4", "5", "6"], 1, "分别是 2、3、4、5。"),
    single("l11-s4", "len(\"data\") 的结果是？", ["3", "4", "5", "报错"], 1, "data 有 4 个字符。"),
    single("l11-s5", "下面哪个符号表示取余？", ["/", "//", "%", "**"], 2, "% 是取余运算符。"),
    single("l11-s6", "列表 nums = [1, 4, 9]，nums[-1] 是？", ["1", "4", "9", "报错"], 2, "负索引 -1 代表最后一项。"),
    single("l11-s7", "if 语句后面通常需要哪个符号结束条件行？", [";", ":", ",", "."], 1, "Python 代码块前一行以冒号结尾。"),
    single("l11-s8", "下面哪一个会得到整数 7？", ["int(\"7\")", "str(7)", "\"3\" + \"4\"", "float(\"7\")"], 0, "int(\"7\") 转成整数 7。"),
    single("l11-s9", "for i in range(1, 4): print(i) 会输出几行？", ["1", "2", "3", "4"], 2, "输出 1、2、3，共 3 行。"),
    single("l11-s10", "函数定义使用哪个关键字？", ["func", "define", "def", "return"], 2, "Python 使用 def 定义函数。"),
    single("l11-s11", "\"py\" + \"thon\" 的结果是？", ["py thon", "python", "报错", "py+thon"], 1, "字符串加法表示拼接。"),
    single("l11-s12", "while 循环最需要避免什么？", ["变量名太短", "无限循环", "使用 print", "使用条件"], 1, "while 条件没有变化时容易无限循环。"),
    single("l11-s13", "下面哪项可以把一行空格分隔的数字转成整数列表？", ["list(input())", "input().split()", "list(map(int, input().split()))", "int(input().split())"], 2, "split 后要逐项 int，再转成列表。"),
    single("l11-s14", "and 运算在什么时候为 True？", ["任意一个条件为真", "两个条件都为真", "两个条件都为假", "永远为真"], 1, "and 要求两边条件都成立。"),
    single("l11-s15", "编程题输出多了无关文字，最可能导致什么？", ["更容易通过", "判题错误", "自动加分", "不影响"], 1, "自动判题通常严格比较输出。"),
    multi("l11-m1", "下面哪些是 Python 基础数据类型或容器？", ["int", "str", "list", "print"], [0, 1, 2], "print 是函数，不是数据类型或容器。"),
    multi("l11-m2", "下面哪些表达式结果为 True？", ["5 > 3", "2 == 2", "4 < 1", "not False"], [0, 1, 3], "前三项逐个判断，not False 为 True。"),
    multi("l11-m3", "下面哪些方法或函数可用于列表处理？", ["append", "sort", "len", "upper"], [0, 1, 2], "upper 是字符串方法。"),
    multi("l11-m4", "编程题读题时需要确认哪些信息？", ["输入格式", "输出格式", "样例含义", "网页背景颜色"], [0, 1, 2], "输入、输出和样例是编程题核心信息。"),
    multi("l11-m5", "下面哪些情况适合使用循环？", ["遍历所有分数", "重复读取 n 个数", "只输出一次标题", "计算满足条件的数量"], [0, 1, 3], "单次输出通常不需要循环。")
  ];

  const challenges = [
    challenge("l11-c1", "模拟题 1：区间求和", "输入 n，输出 1 到 n 中所有奇数的和。", "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    if i % 2 == 1:\n        total += i\nprint(total)", [
      test("5", "9"),
      test("10", "25")
    ], "先枚举区间，再筛选奇数。"),
    challenge("l11-c2", "模拟题 2：统计及格", "输入一行分数，统计大于等于 60 的个数。", "scores = list(map(int, input().split()))\ncount = 0\nfor score in scores:\n    if score >= 60:\n        count += 1\nprint(count)", [
      test("80 59 60 100", "3"),
      test("10 20 30", "0")
    ], "逐项判断是否达到 60。"),
    challenge("l11-c3", "模拟题 3：字符串清点", "输入一个字符串，输出其中字符 a 出现的次数。", "s = input()\ncount = 0\nfor ch in s:\n    if ch == \"a\":\n        count += 1\nprint(count)", [
      test("banana", "3"),
      test("python", "0")
    ], "字符串也可以直接用 for 遍历。"),
    challenge("l11-c4", "模拟题 4：极差", "输入一行整数，输出最大值与最小值的差。", "nums = list(map(int, input().split()))\nprint(max(nums) - min(nums))", [
      test("3 8 2 10", "8"),
      test("5 5 5", "0")
    ], "极差 = 最大值 - 最小值。")
  ];

  return lesson(11, "四级综合模拟", "15 单选、5 多选、4 编程题", "按四级题型节奏完成一次课堂模拟。", [
    "单选题 15 题，每题只选一个答案。",
    "多选题 5 题，必须完整选择所有正确项。",
    "编程题 4 题，优先保证输入输出格式正确。",
    "课堂模拟建议 90 分钟完成。"
  ], questions, challenges);
}

function buildSlides(no, title, topic, goal, story, concepts, guideData) {
  return [
    {
      kind: "mission",
      kicker: `第 ${no} 课`,
      title,
      lead: goal,
      bullets: [story, "本课先用投屏讲清概念，再进入学生练习页完成即时判题。", `核心范围：${topic}`]
    },
    {
      kind: "concept",
      kicker: "知识讲解",
      title: `${topic} 的解题抓手`,
      lead: "每个知识点都要落到“能读题、能写代码、能跑样例”。",
      bullets: concepts
    },
    {
      kind: "example",
      kicker: "例子拆解",
      title: "从生活语言翻译成 Python",
      lead: guideData.analogy,
      bullets: guideData.steps
    },
    {
      kind: "pitfall",
      kicker: "常见误区",
      title: "学生最容易卡在哪里",
      lead: "提前把坑讲清楚，练习时学生会更知道自己错在什么地方。",
      bullets: guideData.mistakes
    },
    {
      kind: "activity",
      kicker: "课堂互动",
      title: "3 分钟侦探任务",
      lead: "老师先让学生口头预测输出，再打开学生练习页运行代码验证。",
      bullets: ["先读代码，不急着运行。", "说出变量在每一步的变化。", "用样例解释为什么答案成立。"]
    },
    {
      kind: "quiz",
      kicker: "随堂题",
      title: "投屏答题与讲评",
      lead: "先隐藏答案收集学生判断，再显示解析统一纠偏。",
      bullets: ["单选题检查概念边界。", "多选题检查易混点。", "编程题检查输入输出和基本算法。"]
    },
    {
      kind: "summary",
      kicker: "课堂收束",
      title: "本课通关标准",
      lead: "完成随堂题和代码挑战后，导出本课数据作为课堂记录。",
      bullets: guideData.studentChecklist
    }
  ];
}

function single(id, prompt, options, answer, explanation) {
  return { id, type: "single", prompt, options, answer: [answer], explanation };
}

function multi(id, prompt, options, answer, explanation) {
  return { id, type: "multi", prompt, options, answer, explanation };
}

function challenge(id, title, prompt, starter, tests, explanation) {
  return { id, title, prompt, starter, tests, explanation };
}

function test(input, output) {
  return { input, output };
}

function attachEvents() {
  els.teacherModeBtn.addEventListener("click", () => setMode("teacher"));
  els.studentModeBtn.addEventListener("click", () => setMode("student"));
  els.lessonSelect.addEventListener("change", (event) => {
    state.lessonId = event.target.value;
    state.slideIndex = 0;
    saveState();
    render();
  });
  els.timerBtn.addEventListener("click", toggleTimer);
  els.revealBtn.addEventListener("click", () => {
    state.reveal = !state.reveal;
    saveState();
    render();
  });
  els.fullscreenBtn.addEventListener("click", toggleFullscreen);
  els.exportJsonBtn.addEventListener("click", exportJson);
  els.exportCsvBtn.addEventListener("click", exportCsv);
  els.importBtn.addEventListener("click", () => els.importFile.click());
  els.importFile.addEventListener("change", importJson);

  els.lessonRail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lesson-id]");
    if (!button) return;
    state.lessonId = button.dataset.lessonId;
    state.slideIndex = 0;
    saveState();
    render();
  });

  els.mainView.addEventListener("click", handleMainClick);
  els.mainView.addEventListener("input", handleMainInput);
  window.addEventListener("keydown", (event) => {
    if (state.mode !== "teacher") return;
    if (event.key === "ArrowRight") changeSlide(1);
    if (event.key === "ArrowLeft") changeSlide(-1);
  });
}

function handleMainClick(event) {
  const actionEl = event.target.closest("[data-action]");
  if (!actionEl) return;
  const action = actionEl.dataset.action;
  if (action === "prev-slide") changeSlide(-1);
  if (action === "next-slide") changeSlide(1);
  if (action === "reset-timer") resetTimer();
  if (action === "goto-student") setMode("student");
  if (action === "select-option") selectOption(actionEl.dataset.questionId, Number(actionEl.dataset.optionIndex));
  if (action === "submit-question") submitQuestion(actionEl.dataset.questionId);
  if (action === "clear-question") clearQuestion(actionEl.dataset.questionId);
  if (action === "run-sample") runChallenge(actionEl.dataset.challengeId, "sample");
  if (action === "submit-code") runChallenge(actionEl.dataset.challengeId, "all");
  if (action === "reset-code") resetCode(actionEl.dataset.challengeId);
}

function handleMainInput(event) {
  const target = event.target;
  if (target.id === "studentName") {
    state.studentName = target.value;
    saveState();
    return;
  }
  if (target.dataset.action === "code-input") {
    const lessonState = ensureLessonState(state.lessonId);
    const challengeId = target.dataset.challengeId;
    lessonState.code[challengeId] = {
      ...(lessonState.code[challengeId] || {}),
      code: target.value
    };
    saveState();
  }
}

function setMode(mode) {
  state.mode = mode;
  saveState();
  render();
}

function renderLessonSelect() {
  els.lessonSelect.innerHTML = lessons
    .map((item) => `<option value="${item.id}">第 ${item.no} 课 ${h(item.title)}</option>`)
    .join("");
}

function render() {
  const current = currentLesson();
  els.lessonSelect.value = current.id;
  els.teacherModeBtn.classList.toggle("is-active", state.mode === "teacher");
  els.studentModeBtn.classList.toggle("is-active", state.mode === "student");
  els.revealBtn.textContent = state.reveal ? "隐藏答案" : "显示答案";
  renderRail();
  if (state.mode === "teacher") renderTeacher(current);
  if (state.mode === "student") renderStudent(current);
  renderTimerOnly();
}

function renderRail() {
  const progress = getOverallProgress();
  els.overallProgress.textContent = `${progress}%`;
  els.lessonRail.innerHTML = lessons
    .map((item) => {
      const value = getLessonProgress(item.id).percent;
      return `
        <button class="lesson-pill ${item.id === state.lessonId ? "is-active" : ""}" type="button" data-lesson-id="${item.id}">
          <span class="lesson-no">${item.no}</span>
          <span>
            <span class="lesson-name">${h(item.title)}</span>
            <span class="lesson-topic">${h(item.topic)}</span>
          </span>
          <span class="progress-dot">${value}%</span>
        </button>
      `;
    })
    .join("");
}

function renderTeacher(current) {
  const slide = current.slides[state.slideIndex] || current.slides[0];
  els.mainView.innerHTML = `
    <div class="teacher-grid">
      <article class="deck">
        <section class="slide">
          <div class="slide-content">
            <span class="slide-kicker">${h(slide.kicker)}</span>
            <h2>${h(slide.title)}</h2>
            <p class="slide-lead">${h(slide.lead)}</p>
            ${renderSlideBody(current, slide)}
          </div>
          <div class="slide-visual">
            ${renderMissionBoard(current)}
          </div>
        </section>
        <footer class="deck-footer">
          <span class="slide-count">第 ${state.slideIndex + 1} / ${current.slides.length} 页</span>
          <div class="deck-actions">
            <button class="secondary-btn" type="button" data-action="prev-slide">上一页</button>
            <button class="primary-btn" type="button" data-action="next-slide">下一页</button>
          </div>
        </footer>
      </article>
      ${renderTeacherPanel(current)}
    </div>
  `;
}

function renderSlideBody(current, slide) {
  const bullets = `
    <ul class="bullet-list">
      ${slide.bullets.map((item) => `<li>${h(item)}</li>`).join("")}
    </ul>
  `;
  if (slide.kind === "example") {
    return `
      ${bullets}
      <div class="example-strip">
        <div>
          <strong>示例代码</strong>
          <pre>${h(current.guide.exampleCode)}</pre>
        </div>
        <p>${h(current.guide.exampleExplain)}</p>
      </div>
    `;
  }
  if (slide.kind !== "quiz") return bullets;
  const sampleQuestions = current.questions.slice(0, current.no === 11 ? 4 : 2);
  return `
    ${bullets}
    ${sampleQuestions.map((question) => renderTeacherQuestion(question)).join("")}
  `;
}

function renderTeacherQuestion(question) {
  const answerText = question.answer.map((index) => optionKeys[index]).join("、");
  return `
    <div class="teacher-question">
      <h3>${question.type === "single" ? "单选" : "多选"}：${h(question.prompt)}</h3>
      <ol class="mini-list" type="A">
        ${question.options.map((option) => `<li>${h(option)}</li>`).join("")}
      </ol>
      ${
        state.reveal
          ? `<div class="teacher-answer">答案：${answerText}。${h(question.explanation)}</div>`
          : ""
      }
    </div>
  `;
}

function renderMissionBoard(current) {
  const snippets = current.guide.exampleCode.split("\n").slice(0, 6);
  const cells = ["读题", "预测", "运行", "纠错", "复盘", "通关"];
  return `
    <div class="mission-board" aria-label="课堂任务板">
      <div class="mission-top">
        <span>AI 侦探学院任务板</span>
        <span class="case-chip">CASE ${String(current.no).padStart(2, "0")}</span>
      </div>
      <pre class="code-window">${h(snippets.join("\n"))}</pre>
      <div class="map-grid">
        ${cells.map((cell, index) => `<div class="map-cell ${index === state.slideIndex ? "is-hot" : ""}">${h(cell)}</div>`).join("")}
      </div>
    </div>
  `;
}

function renderTeacherPanel(current) {
  const progress = getLessonProgress(current.id);
  return `
    <aside class="side-panel">
      <div class="panel-section">
        <h3 class="panel-title">课堂计时</h3>
        <div class="timer-display">
          <span>本轮用时</span>
          <strong id="timerDisplay">${formatTime(getTimerMs())}</strong>
        </div>
        <div class="card-actions">
          <button class="secondary-btn" type="button" data-action="reset-timer">重置计时</button>
          <button class="primary-btn" type="button" data-action="goto-student">进入练习</button>
        </div>
      </div>
      <div class="panel-section">
        <h3 class="panel-title">本课结构</h3>
        <div class="stat-grid">
          <div class="stat"><strong>${current.questions.filter((q) => q.type === "single").length}</strong><span>单选</span></div>
          <div class="stat"><strong>${current.questions.filter((q) => q.type === "multi").length}</strong><span>多选</span></div>
          <div class="stat"><strong>${current.challenges.length}</strong><span>编程</span></div>
        </div>
      </div>
      <div class="panel-section">
        <h3 class="panel-title">本地进度</h3>
        <div class="progress-bar" aria-label="本课完成度"><span style="--value:${progress.percent}%"></span></div>
        <p class="slide-lead" style="font-size:14px;margin-top:10px;">已通过 ${progress.correct} / ${progress.total} 个练习项。进度保存在当前浏览器，可导出给老师归档。</p>
      </div>
      <div class="panel-section">
        <h3 class="panel-title">讲课提示</h3>
        <ol class="mini-list">
          ${current.guide.teacherTips.map((tip) => `<li>${h(tip)}</li>`).join("")}
        </ol>
      </div>
    </aside>
  `;
}

function renderStudent(current) {
  const progress = getLessonProgress(current.id);
  els.mainView.innerHTML = `
    <section class="student-panel">
      <div class="student-hero">
        <div class="student-intro">
          <span class="slide-kicker">学生练习</span>
          <h2>第 ${current.no} 课：${h(current.title)}</h2>
          <p class="slide-lead">${h(current.goal)}</p>
          <ul class="bullet-list">
            <li>选择题提交后立即显示正确性与解析。</li>
            <li>编程题在浏览器内运行 Python，无需安装环境。</li>
            <li>刷新页面后保留本机进度，可导出或导入。</li>
          </ul>
        </div>
        <div class="student-form">
          <label for="studentName">学生姓名</label>
          <input id="studentName" type="text" value="${h(state.studentName)}" placeholder="输入姓名后开始练习" />
          <div class="progress-bar" aria-label="本课练习进度"><span style="--value:${progress.percent}%"></span></div>
          <p>本课已通过 ${progress.correct} / ${progress.total} 项。</p>
        </div>
      </div>
      ${renderLearningGuide(current)}
      <div class="practice-grid">
        <div class="question-list">
          <h3>随堂选择题</h3>
          ${current.questions.map((question, index) => renderQuestionCard(question, index)).join("")}
        </div>
        <aside class="progress-panel">
          <h3>练习状态</h3>
          ${renderProgressSummary(current)}
        </aside>
      </div>
      <div class="code-list">
        <h3>Python 编程挑战</h3>
        ${current.challenges.map((item, index) => renderCodeCard(item, index)).join("")}
      </div>
    </section>
  `;
}

function renderLearningGuide(current) {
  return `
    <section class="learning-guide" aria-label="本课学习讲义">
      <div class="section-heading">
        <span class="slide-kicker">学习讲义</span>
        <h3>先看懂，再做题</h3>
        <p>这部分是给学生自学和课后复习用的。先把思路读明白，再去完成选择题和编程题。</p>
      </div>
      <div class="guide-grid">
        <article class="guide-card guide-card-wide">
          <h4>通俗理解</h4>
          <p>${h(current.guide.analogy)}</p>
        </article>
        <article class="guide-card">
          <h4>解题步骤</h4>
          <ol class="step-list">
            ${current.guide.steps.map((step) => `<li>${h(step)}</li>`).join("")}
          </ol>
        </article>
        <article class="guide-card">
          <h4>常见坑</h4>
          <ul class="plain-list">
            ${current.guide.mistakes.map((mistake) => `<li>${h(mistake)}</li>`).join("")}
          </ul>
        </article>
        <article class="guide-card guide-card-code">
          <h4>示例代码</h4>
          <pre>${h(current.guide.exampleCode)}</pre>
          <p>${h(current.guide.exampleExplain)}</p>
        </article>
        <article class="guide-card">
          <h4>学完要会</h4>
          <ul class="plain-list">
            ${current.guide.studentChecklist.map((item) => `<li>${h(item)}</li>`).join("")}
          </ul>
        </article>
      </div>
    </section>
  `;
}

function renderQuestionCard(question, index) {
  const itemState = getQuestionState(question.id);
  const selected = itemState.selected || [];
  const submitted = Boolean(itemState.submitted);
  const isCorrect = submitted && isSameSet(selected, question.answer);
  return `
    <article class="question-card">
      <div class="card-head">
        <span class="tag">${question.type === "single" ? "单选题" : "多选题"} ${index + 1}</span>
        ${submitted ? `<span class="tag">${isCorrect ? "已通过" : "需订正"}</span>` : ""}
      </div>
      <h3>${h(question.prompt)}</h3>
      <p class="question-tip">${question.type === "single" ? "只选择一个最合适的答案。先排除明显不符合 Python 规则的选项。" : "多选题要选全所有正确项，少选和多选都算错。提交前逐项检查。"}</p>
      <div class="answer-options">
        ${question.options.map((option, optionIndex) => renderOption(question, option, optionIndex, selected, submitted)).join("")}
      </div>
      <div class="card-actions">
        <button class="primary-btn" type="button" data-action="submit-question" data-question-id="${question.id}">提交答案</button>
        <button class="secondary-btn" type="button" data-action="clear-question" data-question-id="${question.id}">清除</button>
      </div>
      ${
        submitted
          ? `<div class="feedback ${isCorrect ? "is-good" : "is-bad"}">
              ${isCorrect ? "判断正确。" : `本题答案是 ${question.answer.map((i) => optionKeys[i]).join("、")}。`}
              ${h(question.explanation)}
            </div>`
          : ""
      }
    </article>
  `;
}

function renderOption(question, option, optionIndex, selected, submitted) {
  const selectedClass = selected.includes(optionIndex) ? "is-selected" : "";
  const correctClass = submitted && question.answer.includes(optionIndex) ? "is-correct" : "";
  const wrongClass = submitted && selected.includes(optionIndex) && !question.answer.includes(optionIndex) ? "is-wrong" : "";
  return `
    <button class="answer-option ${selectedClass} ${correctClass} ${wrongClass}" type="button" data-action="select-option" data-question-id="${question.id}" data-option-index="${optionIndex}">
      <span class="option-key">${optionKeys[optionIndex]}</span>
      <span>${h(option)}</span>
    </button>
  `;
}

function renderCodeCard(item, index) {
  const codeState = getCodeState(item.id);
  const code = codeState.code ?? item.starter;
  const result = codeState.result;
  const isRunning = runningChallengeId === item.id;
  return `
    <article class="code-card">
      <div class="card-head">
        <span class="tag is-code">编程题 ${index + 1}</span>
        ${result ? `<span class="tag">${result.passedAll ? "已通过" : `${result.passed}/${result.total}`}</span>` : ""}
      </div>
      <h3>${h(item.title)}</h3>
      <p>${h(item.prompt)}</p>
      <div class="code-hint">建议顺序：先读输入，写出样例能通过的版本，再点击“提交判题”检查全部测试。</div>
      <textarea class="code-editor" spellcheck="false" data-action="code-input" data-challenge-id="${item.id}">${h(code)}</textarea>
      <table class="test-table">
        <thead>
          <tr><th>样例输入</th><th>期望输出</th></tr>
        </thead>
        <tbody>
          ${item.tests.map((caseItem) => `<tr><td><pre>${h(caseItem.input)}</pre></td><td><pre>${h(caseItem.output)}</pre></td></tr>`).join("")}
        </tbody>
      </table>
      <div class="card-actions">
        <button class="secondary-btn" type="button" data-action="run-sample" data-challenge-id="${item.id}" ${isRunning ? "disabled" : ""}>运行样例</button>
        <button class="primary-btn" type="button" data-action="submit-code" data-challenge-id="${item.id}" ${isRunning ? "disabled" : ""}>提交判题</button>
        <button class="secondary-btn" type="button" data-action="reset-code" data-challenge-id="${item.id}" ${isRunning ? "disabled" : ""}>重置代码</button>
      </div>
      <div class="output-box">${h(isRunning ? "正在加载或运行 Python，请稍候..." : renderCodeOutput(result, item))}</div>
      ${
        result
          ? `<div class="feedback ${result.passedAll ? "is-good" : "is-bad"}">${h(item.explanation)}</div>`
          : ""
      }
    </article>
  `;
}

function renderCodeOutput(result, item) {
  if (!result) return "运行结果会显示在这里。首次运行会下载浏览器 Python 环境。";
  const lines = result.details.map((detail, index) => {
    const status = detail.ok ? "通过" : "未通过";
    const actual = detail.stderr ? `错误：${detail.stderr}` : `输出：${detail.output || "(空)"}`;
    return `测试 ${index + 1}：${status}\n输入：${detail.input || "(空)"}\n期望：${detail.expected || "(空)"}\n${actual}`;
  });
  return lines.join("\n\n");
}

function renderProgressSummary(current) {
  const progress = getLessonProgress(current.id);
  const singleDone = current.questions.filter((q) => q.type === "single" && isQuestionCorrect(q.id)).length;
  const multiDone = current.questions.filter((q) => q.type === "multi" && isQuestionCorrect(q.id)).length;
  const codeDone = current.challenges.filter((c) => isCodeCorrect(c.id)).length;
  return `
    <div class="stat-grid">
      <div class="stat"><strong>${singleDone}</strong><span>单选通过</span></div>
      <div class="stat"><strong>${multiDone}</strong><span>多选通过</span></div>
      <div class="stat"><strong>${codeDone}</strong><span>编程通过</span></div>
    </div>
    <div class="progress-bar"><span style="--value:${progress.percent}%"></span></div>
    <p style="color:var(--muted);line-height:1.7;">完成后可用顶部按钮导出 JSON 进度；老师需要汇总时导出 CSV。</p>
  `;
}

function selectOption(questionId, optionIndex) {
  const question = findQuestion(questionId);
  if (!question) return;
  const lessonState = ensureLessonState(state.lessonId);
  const current = lessonState.questions[questionId] || { selected: [] };
  let selected = current.selected || [];
  if (question.type === "single") {
    selected = [optionIndex];
  } else {
    selected = selected.includes(optionIndex)
      ? selected.filter((item) => item !== optionIndex)
      : [...selected, optionIndex].sort((a, b) => a - b);
  }
  lessonState.questions[questionId] = {
    selected,
    submitted: false
  };
  saveState();
  render();
}

function submitQuestion(questionId) {
  const lessonState = ensureLessonState(state.lessonId);
  const current = lessonState.questions[questionId] || { selected: [] };
  lessonState.questions[questionId] = {
    ...current,
    submitted: true,
    updatedAt: new Date().toISOString()
  };
  saveState();
  render();
}

function clearQuestion(questionId) {
  const lessonState = ensureLessonState(state.lessonId);
  delete lessonState.questions[questionId];
  saveState();
  render();
}

function resetCode(challengeId) {
  const lessonState = ensureLessonState(state.lessonId);
  const item = findChallenge(challengeId);
  lessonState.code[challengeId] = { code: item ? item.starter : "" };
  saveState();
  render();
}

async function runChallenge(challengeId, mode) {
  const item = findChallenge(challengeId);
  if (!item) return;
  const lessonState = ensureLessonState(state.lessonId);
  const codeState = lessonState.code[challengeId] || {};
  const code = codeState.code ?? item.starter;
  const cases = mode === "sample" ? [item.tests[0]] : item.tests;
  runningChallengeId = challengeId;
  render();
  try {
    const details = [];
    for (const caseItem of cases) {
      const run = await runPython(code, caseItem.input);
      const actual = normalizeOutput(run.stdout);
      const expected = normalizeOutput(caseItem.output);
      details.push({
        input: caseItem.input,
        expected: caseItem.output,
        output: run.stdout,
        stderr: run.stderr,
        ok: !run.stderr && actual === expected
      });
    }
    const passed = details.filter((detail) => detail.ok).length;
    lessonState.code[challengeId] = {
      code,
      result: {
        passed,
        total: cases.length,
        passedAll: passed === cases.length,
        mode,
        details,
        updatedAt: new Date().toISOString()
      }
    };
  } catch (error) {
    lessonState.code[challengeId] = {
      code,
      result: {
        passed: 0,
        total: cases.length,
        passedAll: false,
        mode,
        details: [
          {
            input: cases[0]?.input || "",
            expected: cases[0]?.output || "",
            output: "",
            stderr: String(error.message || error),
            ok: false
          }
        ],
        updatedAt: new Date().toISOString()
      }
    };
  } finally {
    runningChallengeId = null;
    saveState();
    render();
  }
}

async function runPython(code, stdinText) {
  const runtime = await ensurePyodide();
  const inputLines = String(stdinText ?? "").split(/\r?\n/);
  let inputIndex = 0;
  const stdout = [];
  const stderr = [];
  runtime.setStdin({
    stdin: () => {
      const value = inputIndex < inputLines.length ? inputLines[inputIndex] : "";
      inputIndex += 1;
      return value;
    }
  });
  runtime.setStdout({ batched: (text) => stdout.push(text) });
  runtime.setStderr({ batched: (text) => stderr.push(text) });
  try {
    await runtime.runPythonAsync(code);
  } catch (error) {
    stderr.push(String(error.message || error));
  }
  return {
    stdout: stdout.join("\n"),
    stderr: stderr.join("\n")
  };
}

async function ensurePyodide() {
  if (pyodide) return pyodide;
  if (!pyodidePromise) {
    if (typeof window.loadPyodide !== "function") {
      throw new Error("Python 运行环境还没有加载成功，请检查网络或刷新页面。");
    }
    pyodidePromise = window.loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/"
    });
  }
  pyodide = await pyodidePromise;
  return pyodide;
}

function changeSlide(delta) {
  const current = currentLesson();
  state.slideIndex = Math.max(0, Math.min(current.slides.length - 1, state.slideIndex + delta));
  saveState();
  render();
}

function toggleTimer() {
  if (state.timer.running) {
    state.timer.elapsed += Date.now() - state.timer.startedAt;
    state.timer.running = false;
    state.timer.startedAt = null;
  } else {
    state.timer.running = true;
    state.timer.startedAt = Date.now();
  }
  saveState();
  renderTimerOnly();
}

function resetTimer() {
  state.timer = { running: false, startedAt: null, elapsed: 0 };
  saveState();
  render();
}

function renderTimerOnly() {
  els.timerBtn.textContent = state.timer.running ? "暂停计时" : "开始计时";
  const display = document.querySelector("#timerDisplay");
  if (display) display.textContent = formatTime(getTimerMs());
}

function getTimerMs() {
  const base = state.timer.elapsed || 0;
  if (!state.timer.running) return base;
  return base + Date.now() - state.timer.startedAt;
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

function exportJson() {
  const payload = {
    schema: EXPORT_SCHEMA,
    exportedAt: new Date().toISOString(),
    app: "YCL Python 四级互动教学",
    state: {
      studentName: state.studentName,
      answers: state.answers
    }
  };
  downloadBlob(`ycl-python4-progress-${dateStamp()}.json`, JSON.stringify(payload, null, 2), "application/json");
}

function exportCsv() {
  const rows = [
    ["student", "lesson_no", "lesson_title", "item_id", "item_type", "status", "score", "selected", "expected"]
  ];
  for (const item of lessons) {
    for (const question of item.questions) {
      const questionState = state.answers[item.id]?.questions?.[question.id];
      const selected = (questionState?.selected || []).map((index) => optionKeys[index]).join("|");
      const expected = question.answer.map((index) => optionKeys[index]).join("|");
      rows.push([
        state.studentName || "",
        item.no,
        item.title,
        question.id,
        question.type,
        questionState?.submitted ? (isSameSet(questionState.selected || [], question.answer) ? "passed" : "needs_review") : "not_submitted",
        questionState?.submitted && isSameSet(questionState.selected || [], question.answer) ? "1/1" : "0/1",
        selected,
        expected
      ]);
    }
    for (const codeItem of item.challenges) {
      const result = state.answers[item.id]?.code?.[codeItem.id]?.result;
      rows.push([
        state.studentName || "",
        item.no,
        item.title,
        codeItem.id,
        "code",
        result ? (result.passedAll ? "passed" : "needs_review") : "not_submitted",
        result ? `${result.passed}/${result.total}` : "0/0",
        "",
        codeItem.tests.map((caseItem) => normalizeOutput(caseItem.output)).join(" | ")
      ]);
    }
  }
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  downloadBlob(`ycl-python4-summary-${dateStamp()}.csv`, csv, "text/csv;charset=utf-8");
}

function importJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result));
      if (!payload.state || !payload.state.answers) {
        throw new Error("文件格式不正确。");
      }
      state.studentName = payload.state.studentName || state.studentName;
      state.answers = payload.state.answers;
      saveState();
      render();
    } catch (error) {
      window.alert(`导入失败：${error.message || error}`);
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function downloadBlob(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function currentLesson() {
  return lessons.find((item) => item.id === state.lessonId) || lessons[0];
}

function findQuestion(questionId) {
  return currentLesson().questions.find((question) => question.id === questionId);
}

function findChallenge(challengeId) {
  return currentLesson().challenges.find((item) => item.id === challengeId);
}

function ensureLessonState(lessonId) {
  state.answers[lessonId] = state.answers[lessonId] || { questions: {}, code: {} };
  state.answers[lessonId].questions = state.answers[lessonId].questions || {};
  state.answers[lessonId].code = state.answers[lessonId].code || {};
  return state.answers[lessonId];
}

function getQuestionState(questionId) {
  return ensureLessonState(state.lessonId).questions[questionId] || { selected: [] };
}

function getCodeState(challengeId) {
  return ensureLessonState(state.lessonId).code[challengeId] || {};
}

function isQuestionCorrect(questionId, lessonId = state.lessonId) {
  const lessonItem = lessons.find((item) => item.id === lessonId);
  const question = lessonItem?.questions.find((item) => item.id === questionId);
  const questionState = state.answers[lessonId]?.questions?.[questionId];
  return Boolean(question && questionState?.submitted && isSameSet(questionState.selected || [], question.answer));
}

function isCodeCorrect(challengeId, lessonId = state.lessonId) {
  return Boolean(state.answers[lessonId]?.code?.[challengeId]?.result?.passedAll);
}

function getLessonProgress(lessonId) {
  const lessonItem = lessons.find((item) => item.id === lessonId);
  if (!lessonItem) return { correct: 0, total: 0, percent: 0 };
  const questionCorrect = lessonItem.questions.filter((question) => isQuestionCorrect(question.id, lessonId)).length;
  const codeCorrect = lessonItem.challenges.filter((item) => isCodeCorrect(item.id, lessonId)).length;
  const total = lessonItem.questions.length + lessonItem.challenges.length;
  const correct = questionCorrect + codeCorrect;
  return {
    correct,
    total,
    percent: total ? Math.round((correct / total) * 100) : 0
  };
}

function getOverallProgress() {
  let correct = 0;
  let total = 0;
  for (const item of lessons) {
    const progress = getLessonProgress(item.id);
    correct += progress.correct;
    total += progress.total;
  }
  return total ? Math.round((correct / total) * 100) : 0;
}

function loadState() {
  const fallback = {
    mode: "teacher",
    lessonId: "lesson-01",
    slideIndex: 0,
    reveal: false,
    studentName: "",
    timer: { running: false, startedAt: null, elapsed: 0 },
    answers: {}
  };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return {
      ...fallback,
      ...parsed,
      timer: {
        ...fallback.timer,
        ...(parsed.timer || {}),
        running: false,
        startedAt: null
      },
      answers: parsed.answers || {}
    };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function isSameSet(a = [], b = []) {
  if (a.length !== b.length) return false;
  const left = [...a].sort((x, y) => x - y);
  const right = [...b].sort((x, y) => x - y);
  return left.every((value, index) => value === right[index]);
}

function normalizeOutput(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .trim();
}

function dateStamp() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const mi = String(now.getMinutes()).padStart(2, "0");
  return `${yyyy}${mm}${dd}-${hh}${mi}`;
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function h(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[char];
  });
}
