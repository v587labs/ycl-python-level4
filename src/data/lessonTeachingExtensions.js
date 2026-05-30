const note = (title, lines) => ({ title, lines });

const extensionPlans = {
  3: {
    previous: "第2课我们学会了：input听到的先是文字，要用int()变成数字才能计算。",
    core: "今天继续做数字运算，但不急着背公式。我们用“分糖果”的故事理解整除和余数。",
    metaphor: "数字工具箱",
    keyCode: "print(17 // 5)\nprint(17 % 5)",
    studentPrompt: "17颗糖分给5个小朋友，每人几颗？还剩几颗？",
    teacherMove: "拿17个小圆点或在黑板画17颗糖，先手动分给5个孩子，再把结果对应到//和%。",
    keyPoint: "//看每人能分几整份，%看最后剩下几份。",
    commonTrap: "孩子会把/、//、%混在一起；先用糖果实物分清“每人几个”和“剩几个”。",
    next: "下一课进入字符串，孩子会看到文字也能像一串珠子一样被编号和切开。",
    board: [
      "第2课：数字能计算，文字数字要先int()",
      "第3课：数字工具箱更丰富",
      "17 // 5 = 每人分到几颗",
      "17 % 5 = 还剩几颗",
      "round()四舍五入，abs()去掉负号"
    ],
    parent: "今天孩子用分糖果理解了//整除和%取余。家长可以问：17颗糖分给5人，每人几颗、剩几颗，对应哪个符号？"
  },
  4: {
    previous: "前面我们知道str是文字类型，今天专门研究文字。",
    core: "字符串像一串珠子，每个字母或汉字都是一颗珠子，电脑会给它们编号。",
    metaphor: "文字珠子项链",
    keyCode: "word = \"Python\"\nprint(word[0])\nprint(word[0:3])",
    studentPrompt: "Python这串珠子里，0号珠子是谁？0到3会切出哪几颗？",
    teacherMove: "在黑板写P y t h o n，下面标0 1 2 3 4 5，让孩子上来指0号、1号、0到3。",
    keyPoint: "编号从0开始；切片左边要，右边停在前一颗。",
    commonTrap: "孩子会从1开始编号；用“电脑数数从0开始”反复提醒。",
    next: "下一课会讲程序从上到下一步步执行，就像按顺序穿珠子。",
    board: [
      "str = 文字串",
      "字符串像一串珠子",
      "编号从0开始：P是0号",
      "word[0] 取一颗",
      "word[0:3] 切一段，不包含3"
    ],
    parent: "今天孩子学习字符串索引和切片。可以让孩子给“Python”标编号：P是0号，y是1号。"
  },
  5: {
    previous: "前面我们会写单行代码，也会处理数字和文字。",
    core: "今天学习顺序结构：电脑会从上到下一行一行执行，顺序不同，结果可能不同。",
    metaphor: "做早饭步骤清单",
    keyCode: "print(\"起床\")\nprint(\"刷牙\")\nprint(\"上学\")",
    studentPrompt: "如果把“上学”放到“起床”前面，会不会奇怪？",
    teacherMove: "让孩子排列三张卡片：起床、刷牙、上学。故意打乱顺序，让孩子纠正。",
    keyPoint: "程序默认从第一行开始，一行一行往下走。",
    commonTrap: "孩子容易只看单行，不看顺序；让他们读出第1行、第2行、第3行。",
    next: "下一课加入选择结构：电脑不只是按顺序走，还能根据条件走不同路线。",
    board: [
      "顺序结构 = 一步一步做",
      "电脑从上往下执行",
      "第1行先做，第2行再做",
      "顺序错了，故事就乱了"
    ],
    parent: "今天孩子学习程序的顺序执行。可以请孩子说出早晨三步：起床、刷牙、上学，再对应三行print。"
  },
  6: {
    previous: "第5课我们学会了电脑从上到下一步步做。",
    core: "今天电脑学会看情况：如果条件成立，就走一条路；否则，走另一条路。",
    metaphor: "路口小交警",
    keyCode: "score = int(input())\nif score >= 60:\n    print(\"及格啦\")\nelse:\n    print(\"继续加油\")",
    studentPrompt: "如果输入80，会走哪条路？如果输入50呢？",
    teacherMove: "在地上或白板画两条路：>=60 和 <60，让孩子拿分数卡片走对应路线。",
    keyPoint: "if后面是条件，冒号下面要缩进，else表示否则。",
    commonTrap: "孩子容易漏冒号、忘缩进、把=和==混淆；先只抓冒号和缩进。",
    next: "下一课讲循环：有些事情不是选择一次，而是要重复很多次。",
    board: [
      "if = 如果",
      "else = 否则",
      "条件后面要冒号 :",
      "条件成立走if，不成立走else",
      "缩进表示属于这条路"
    ],
    parent: "今天孩子学习if/else选择结构。家长可以问：如果分数>=60输出什么？否则输出什么？"
  },
  7: {
    previous: "第6课电脑会根据条件走不同路。",
    core: "今天电脑学会重复做事。for循环适合“我知道要做几次”的任务。",
    metaphor: "重复盖章机",
    keyCode: "for i in range(5):\n    print(\"★\")",
    studentPrompt: "range(5)会让星星出现几次？",
    teacherMove: "让孩子当盖章机，老师说重复5次，孩子每次数一个编号0、1、2、3、4。",
    keyPoint: "range(5)一共5次，但数字从0数到4。",
    commonTrap: "孩子以为range(5)会数到5；强调“到5门口停下，不包含5”。",
    next: "下一课讲while：如果不知道重复几次，就看条件是否还成立。",
    board: [
      "for = 重复做",
      "range(5) = 重复5次",
      "电脑数数从0开始：0,1,2,3,4",
      "冒号和缩进不能丢"
    ],
    parent: "今天孩子学习for循环。可以问孩子：range(3)会数哪几个数？答案是0、1、2。"
  },
  8: {
    previous: "第7课我们用for循环重复固定次数。",
    core: "今天学习while循环：只要条件还成立，就继续做；条件不成立才停。",
    metaphor: "红绿灯和停止按钮",
    keyCode: "i = 1\nwhile i <= 5:\n    print(i)\n    i = i + 1",
    studentPrompt: "如果最后忘了 i = i + 1，会发生什么？",
    teacherMove: "让孩子扮演计数器，从1数到5；每数一次必须把数字加1，否则永远卡在1。",
    keyPoint: "while一定要让条件有机会变成False，否则会停不下来。",
    commonTrap: "孩子最容易写死循环；反复强调“循环里要有变化”。",
    next: "下一课讲函数：把一组会重复用的步骤装进小工厂。",
    board: [
      "while = 当条件成立时一直做",
      "条件变False才会停",
      "循环里要有变化",
      "break = 直接停止",
      "continue = 跳过这一次"
    ],
    parent: "今天孩子学习while循环。请重点让孩子记住：while里要有变化，不然程序可能一直停不下来。"
  },
  9: {
    previous: "前面我们写了很多步骤，有些步骤会重复出现。",
    core: "函数像一个小工厂：把步骤装起来，想用时叫名字，工厂就开始工作。",
    metaphor: "小工厂",
    keyCode: "def say_hello(name):\n    print(\"你好\" + name)\n\nsay_hello(\"小明\")",
    studentPrompt: "函数定义好了，如果不调用，它会自己工作吗？",
    teacherMove: "画一个工厂：入口是参数name，里面是print步骤，出口是显示结果。先画工厂，再按按钮调用。",
    keyPoint: "def是建工厂，函数名加括号是开工厂；参数是放进去的原料。",
    commonTrap: "孩子会写了def但忘记调用；强调“建好工厂不等于开工”。",
    next: "下一课讲模块：别人已经做好的工具箱，我们可以import来用。",
    board: [
      "函数 = 可重复使用的小工厂",
      "def = 建工厂",
      "参数 = 原料",
      "return/print = 产出或显示",
      "函数名() = 调用，让工厂开工"
    ],
    parent: "今天孩子学习函数。可以问：def是在建工厂，还是在开工厂？函数名加括号才是调用。"
  },
  10: {
    previous: "第9课我们会自己做函数小工厂。",
    core: "今天学习两件事：函数里的变量有自己的小房间；模块是别人准备好的工具箱。",
    metaphor: "小房间和工具箱",
    keyCode: "import random\nprint(random.randint(1, 6))",
    studentPrompt: "如果想摇骰子，应该先借哪个工具箱？",
    teacherMove: "把函数画成房间，房间里的变量出门就不一定认识；再拿出工具箱卡片math、random。",
    keyPoint: "import表示借工具；random能做随机数，math能做数学工具。",
    commonTrap: "孩子会忘记import就直接用工具；强调“先借工具箱，再用工具”。",
    next: "下一课进入文件和异常，程序会开始和电脑里的本子打交道。",
    board: [
      "局部变量 = 函数房间里的变量",
      "全局变量 = 外面大家都能看到的变量",
      "模块 = 工具箱",
      "import = 借工具箱",
      "random.randint(1,6) = 随机摇骰子"
    ],
    parent: "今天孩子学习模块和作用域。家长可以问：使用random.randint前为什么要先写import random？"
  },
  11: {
    previous: "前面程序大多只在屏幕上显示结果。",
    core: "今天程序开始读写文件：文件像电脑里的本子；异常处理像保护罩。",
    metaphor: "电脑本子和保护罩",
    keyCode: "try:\n    f = open(\"note.txt\", \"r\")\n    print(f.read())\nexcept:\n    print(\"文件没找到\")",
    studentPrompt: "如果本子不存在，程序应该崩掉，还是友好提醒？",
    teacherMove: "拿一本真实本子演示：打开、读、写、合上；再演示找不到本子时要说清楚原因。",
    keyPoint: "r是读，w是写；try包住可能出错的地方，except处理错误。",
    commonTrap: "孩子容易忘记文件名要加引号；也容易不知道w会覆盖旧内容。",
    next: "下一课综合复习，把前面所有知识连成完整解题流程。",
    board: [
      "文件 = 电脑里的本子",
      "open(..., \"r\") = 读",
      "open(..., \"w\") = 写",
      "read() = 读内容",
      "try-except = 程序保护罩"
    ],
    parent: "今天孩子认识了文件读写和try-except。重点是理解：程序遇到错误也可以友好处理。"
  },
  12: {
    previous: "前面的主线课已经覆盖变量、类型、程序结构、函数、模块和文件。",
    core: "今天不学新招式，而是学会把题目拆开，按步骤解决。",
    metaphor: "闯关地图",
    keyCode: "name = input()\nscore = int(input())\nif score >= 60:\n    print(name + \"通过\")\nelse:\n    print(name + \"加油\")",
    studentPrompt: "读题时，我们先找输入、处理，还是输出？",
    teacherMove: "把一道综合题拆成三栏：输入什么、怎么处理、输出什么，让孩子先填表再写代码。",
    keyPoint: "综合题先读题，找输入、处理、输出，再写代码。",
    commonTrap: "孩子会一看到题就敲代码；训练先画流程、再写代码。",
    next: "后面进入Turtle趣味拓展，用代码画图，继续练顺序、循环和函数思维。",
    board: [
      "综合题三步：输入 -> 处理 -> 输出",
      "先读题，不急着敲",
      "input通常要考虑是否int()",
      "if/for/函数看题目需要再使用",
      "写完用测试数据检查"
    ],
    parent: "今天孩子做综合复习。家长可以提醒孩子：先说清输入、处理、输出，再开始写代码。"
  },
  13: {
    previous: "主线课学会了让电脑输出文字和计算。",
    core: "Turtle让代码变成图画。小画笔走到哪里，就会留下线条。",
    metaphor: "会走路的小画笔",
    keyCode: "import turtle\nt = turtle.Turtle()\nt.forward(100)\nt.left(90)",
    studentPrompt: "小画笔向前走100步，再左转90度，会发生什么？",
    teacherMove: "让孩子站起来当小画笔：向前走几步，再左转。用身体理解方向。",
    keyPoint: "forward前进，left/right转方向；画图也是顺序执行。",
    commonTrap: "孩子以为left会画线；强调转弯只是换方向，forward才画线。",
    next: "下一课用for循环画正方形，把循环知识用在画图里。",
    board: [
      "Turtle = 代码小画笔",
      "forward = 前进",
      "left/right = 转方向",
      "先走再转，顺序很重要"
    ],
    parent: "今天孩子认识Turtle画图。可以让孩子用身体演示：前进、左转、右转。"
  },
  14: {
    previous: "第13课小画笔会前进和转弯。",
    core: "正方形是4条边和4个90度角。重复“走一段、转90度”4次就画好了。",
    metaphor: "四条边的操场",
    keyCode: "for i in range(4):\n    t.forward(100)\n    t.right(90)",
    studentPrompt: "画正方形要重复几次？每次转多少度？",
    teacherMove: "让孩子用手在空中画四条边，每画一条边就转一次90度。",
    keyPoint: "for循环负责重复4次；每次先走边，再转弯。",
    commonTrap: "孩子会把转弯写到循环外；强调走和转都要放在循环里面。",
    next: "下一课画五角星，重复次数和转弯角度都会改变。",
    board: [
      "正方形 = 4条边",
      "每个角 = 90度",
      "重复4次：走100，转90",
      "for循环帮我们少写重复代码"
    ],
    parent: "今天孩子用for循环画正方形。重点是理解：循环里同时包含前进和转弯。"
  },
  15: {
    previous: "第14课用循环画了正方形。",
    core: "五角星也是重复画出来的：走一段，转144度，重复5次。",
    metaphor: "星星路线图",
    keyCode: "for i in range(5):\n    t.forward(120)\n    t.right(144)",
    studentPrompt: "五角星要走几条线？每次转多少度？",
    teacherMove: "先展示星星图，再让孩子数5条线。强调角度144可以先当作画星星的固定秘诀。",
    keyPoint: "五角星重复5次；转144度是画五角星的常用角度。",
    commonTrap: "孩子会把144改成90；对比正方形90、五角星144。",
    next: "下一课做Turtle综合创作，把图形组合成房子。",
    board: [
      "五角星 = 5条线",
      "重复5次",
      "每次前进，再右转144度",
      "不同图形有不同转角"
    ],
    parent: "今天孩子用循环画五角星。可以问：正方形转90度，五角星这节课转多少度？"
  },
  16: {
    previous: "前面我们会画线、正方形和五角星。",
    core: "综合创作就是把小图形组合起来。房子可以拆成墙、屋顶、门窗。",
    metaphor: "积木搭房子",
    keyCode: "t.pencolor(\"blue\")\nt.pensize(3)\n# 先画墙，再画屋顶",
    studentPrompt: "一座房子可以拆成哪些小图形？",
    teacherMove: "在黑板画房子，让孩子指出正方形墙、三角形屋顶、长方形门。",
    keyPoint: "复杂图形先拆小图形；画完一部分再移动到下一部分。",
    commonTrap: "孩子会想一次画完整个房子；引导先拆分再组合。",
    next: "后面回到循环和函数，把“停下来、重复用、组合起来”讲得更细。",
    board: [
      "综合创作 = 拆小图形再组合",
      "房子 = 墙 + 屋顶 + 门窗",
      "pencolor改颜色",
      "pensize改线条粗细",
      "penup/pendown帮助移动位置"
    ],
    parent: "今天孩子做Turtle综合创作。重点不是画得多像，而是学会把大图形拆成小步骤。"
  },
  17: {
    previous: "前面学过while会一直重复，也知道循环里必须有变化。",
    core: "今天专门学习怎么让循环停下来：给程序一个停止暗号，看到暗号就break。",
    metaphor: "小火车刹车",
    keyCode: "total = 0\nwhile True:\n    candy = int(input())\n    if candy == 0:\n        break\n    total += candy",
    studentPrompt: "如果输入3、5、0，程序应该什么时候停？最后总数是多少？",
    teacherMove: "让孩子当糖果记录员。老师报3、5、0，孩子听到普通数字就累加，听到0就举手喊停。",
    keyPoint: "while True需要停止暗号；break像刹车，能跳出循环。",
    commonTrap: "孩子会写了if candy == 0却忘记break，导致循环没有真正停下。",
    next: "下一课进入函数：把一组步骤装成可以重复使用的小工厂。",
    board: [
      "while True = 一直重复",
      "0 = 停止暗号",
      "break = 循环刹车",
      "total = 总篮子",
      "先判断是否停止，再累加"
    ],
    parent: "今天孩子学习用break打破无尽重复。家长可以问：为什么输入0时不是继续加，而是停止？"
  },
  18: {
    previous: "上一课我们学会了让循环在合适的时候停下来。",
    core: "今天把几行常用代码装进函数小工厂。工厂建好后，调用它才会开始工作。",
    metaphor: "函数小工厂",
    keyCode: "def say_hello(name):\n    print(\"你好，\" + name)\n\nsay_hello(\"小明\")",
    studentPrompt: "def是在建工厂，还是已经让工厂开工？",
    teacherMove: "画一个工厂，入口写name，里面写print。先放入“小明”卡片，再按say_hello(\"小明\")按钮。",
    keyPoint: "def是定义函数；函数名加括号才是调用函数。",
    commonTrap: "孩子会定义函数但忘记调用，或函数里面的代码没有缩进。",
    next: "下一课继续用函数做问答卡，认识return把结果交回来。",
    board: [
      "函数 = 小工厂",
      "def = 建工厂",
      "参数 = 原料",
      "缩进 = 工厂里面的步骤",
      "函数名() = 调用开工"
    ],
    parent: "今天孩子初识函数。家长可以问：为什么只写def不会自动输出？"
  },
  19: {
    previous: "上一课函数像小工厂，参数是送进去的原料。",
    core: "今天让程序会提问、会整理答案。input负责听，return负责把函数做好的结果交回来。",
    metaphor: "采访卡片生成器",
    keyCode: "def make_card(name, dream):\n    return name + \"想成为\" + dream + \"。\"\n\ncard = make_card(name, dream)\nprint(card)",
    studentPrompt: "return回来的内容，如果不print，屏幕上能看到吗？",
    teacherMove: "让孩子采访同桌两个问题：名字和梦想。把两张答案卡送进函数工厂，拼成一张完整问答卡。",
    keyPoint: "return把结果交回来；想显示结果还要print。",
    commonTrap: "孩子会把return当成print，函数返回了结果但屏幕没有显示。",
    next: "下一课把字符串、if和函数思维放进一个密码宝箱故事。", 
    board: [
      "input = 采访小话筒",
      "两个问题 -> 两个变量",
      "return = 交回结果",
      "card = 保存返回值",
      "print(card) = 读出问答卡"
    ],
    parent: "今天孩子学习函数返回值。家长可以问：return和print有什么不同？"
  },
  20: {
    previous: "上一课程序会提问并整理答案，今天这些答案会变成一把文字钥匙。",
    core: "密码就是字符串。程序用==比较输入和正确密码，再用if/else决定宝箱开不开。",
    metaphor: "文字钥匙和密码门",
    keyCode: "password = input().strip().lower()\nif password == \"python\":\n    print(\"密码正确，宝箱打开！\")\nelse:\n    print(\"密码错误，再试一次！\")",
    studentPrompt: "输入Python和输入python，经过lower()以后一样吗？",
    teacherMove: "准备三张密码卡：python、Python、 python 。让孩子先猜哪张能开门，再介绍strip和lower。",
    keyPoint: "一个等号是赋值，两个等号是比较；strip和lower让密码判断更稳。",
    commonTrap: "孩子容易用=做比较，或忘记给正确密码加引号。",
    next: "下一课进入数学挑战：用%和//把一个数拆成质因数。",
    board: [
      "密码 = 字符串",
      "= 是放进去",
      "== 是比较是否一样",
      "strip() 擦掉前后空格",
      "lower() 统一小写"
    ],
    parent: "今天孩子做密码判断程序。家长可以问：为什么判断密码要用两个等号==？"
  },
  21: {
    previous: "上一课用字符串和if做了密码判断。",
    core: "今天换成数字挑战：把一个大数字拆成几个不能再拆的小因数。",
    metaphor: "拆积木塔",
    keyCode: "n = int(input())\nd = 2\nwhile n > 1:\n    if n % d == 0:\n        print(d)\n        n = n // d\n    else:\n        d += 1",
    studentPrompt: "12先能被2整齐分完吗？拆掉一个2以后还剩多少？",
    teacherMove: "在黑板上写12，带孩子一步步拆：12 -> 2和6，6 -> 2和3，最后得到2、2、3。",
    keyPoint: "%看能不能整除，//把找到的因数拆掉。",
    commonTrap: "孩子找到因数后会忘记让n变小，循环就一直拆同一个数。",
    next: "下一课进入Turtle创作，把代码变成海龟画图指令。",
    board: [
      "因数 = 能整齐分掉的数字",
      "% = 看有没有余数",
      "余数0 = 能整除",
      "// = 拆掉一层",
      "n变成1就拆完"
    ],
    parent: "今天孩子学习分解质因数。家长可以用12提问：12可以拆成哪几个质因数？"
  },
  22: {
    previous: "前面的Turtle趣味拓展已经画过线条、正方形、五角星和房子。",
    core: "今天不是重新学Turtle，而是把画图动作复习成可检查的指令清单：前进、转弯、重复。",
    metaphor: "会走路的小画笔",
    keyCode: "for i in range(4):\n    print(\"前进100\")\n    print(\"右转90\")",
    studentPrompt: "画正方形为什么要重复4次？每次转多少度？",
    teacherMove: "请孩子站起来当小海龟，按“前进、右转90度”重复4次，身体走出正方形。",
    keyPoint: "forward负责画线，right/left负责转方向；正方形重复4次。",
    commonTrap: "孩子会把转弯写在循环外面，结果只转一次。",
    next: "下一课把画一条鱼的动作装进函数，再用循环画多条鱼。",
    board: [
      "Turtle = 会走路的小画笔",
      "forward = 前进画线",
      "right/left = 转方向",
      "正方形 = 重复4次",
      "先写动作清单，再换成代码"
    ],
    parent: "今天孩子学习Turtle基础。可以让孩子用身体演示：前进、右转、重复4次。"
  },
  23: {
    previous: "上一课小海龟会画正方形，知道了前进、转弯和重复。",
    core: "今天做综合创作：把一条鱼拆成身体、尾巴、换位置，再用函数和循环画多条。",
    metaphor: "海底小鱼印章",
    keyCode: "def draw_fish(number):\n    print(f\"第{number}条鱼：画身体\")\n    print(f\"第{number}条鱼：画尾巴\")\n\nfor i in range(1, count + 1):\n    draw_fish(i)",
    studentPrompt: "如果要画3条鱼，draw_fish要被调用几次？",
    teacherMove: "先画一条鱼的三张步骤卡：身体、尾巴、换位置。再把三张卡放进draw_fish函数，循环调用多次。",
    keyPoint: "复杂创作先拆步骤；函数保存一组步骤，循环负责重复。",
    commonTrap: "孩子会定义函数但没有在for循环里调用，结果只写了工厂没开工。",
    next: "后面开始从进阶题库里挑适合的题型，改造成低龄孩子也能理解的小挑战。",
    board: [
      "小鱼 = 身体 + 尾巴 + 换位置",
      "函数保存画一条鱼",
      "for循环画多条鱼",
      "range(1, count + 1) 数到count",
      "先排清步骤，再进画布"
    ],
    parent: "今天孩子完成Turtle综合创作思维。家长可以问：为什么画多条鱼适合用函数加循环？"
  },
  24: {
    previous: "前面我们已经会用列表保存一队东西，也会用len数数量。",
    core: "今天认识集合set：它像一个不收重复贴纸的魔法盒，重复的内容只保留一份。",
    metaphor: "不重复贴纸盒",
    keyCode: "stickers = input().split()\nunique = set(stickers)\nprint(len(unique))",
    studentPrompt: "1、2、2、3、1一共有几张贴纸？又有几种贴纸？",
    teacherMove: "拿5张贴纸卡片：1、2、2、3、1。先数张数，再把重复的叠在一起，只数种类。",
    keyPoint: "set负责去重，len负责数去重后的数量。",
    commonTrap: "孩子会直接len原列表，把重复贴纸也算进去。",
    next: "下一课继续题库改造：把一队数字先加工，再用条件筛选。",
    board: [
      "set = 不重复盒子",
      "split() = 拆开一行输入",
      "set(stickers) = 去重",
      "len(unique) = 数种类",
      "张数和种类不一定一样"
    ],
    parent: "今天孩子学习集合去重。家长可以问：1、1、2、3有几张？有几种？"
  },
  25: {
    previous: "上一课我们用set把重复内容去掉，只留下不同种类。",
    core: "今天做批量加工：每个数字先进加1机器，再过奇数筛子。",
    metaphor: "糖果加工机和筛子",
    keyCode: "for n in nums:\n    new_number = n + 1\n    if new_number % 2 == 1:\n        answer.append(str(new_number))",
    studentPrompt: "2、3、4、5、6都加1以后，哪些是奇数？",
    teacherMove: "用数字卡片排队，先每张卡加1，再只留下奇数卡片。让孩子说出加工前、加工后、筛选后三队。",
    keyPoint: "先加工，再筛选；append把合格结果放进列表。",
    commonTrap: "孩子会先判断原数字是不是奇数，忘了题目要求先加1。",
    next: "下一课把进阶大题改小：用滑动窗口找连续几天最接近目标。",
    board: [
      "批量加工 = 每个数字都做同一件事",
      "new_number = n + 1",
      "if new_number % 2 == 1",
      "append = 放进结果托盘",
      "join = 排成一行输出"
    ],
    parent: "今天孩子练习批量处理和条件筛选。家长可以问：为什么要先加1，再判断奇数？"
  },
  26: {
    previous: "上一课我们会让一队数字逐个加工和筛选。",
    core: "今天看一段连续的小窗口：连续P天的水量加起来，谁离目标最近就选谁。",
    metaphor: "会滑动的小尺子",
    keyCode: "for i in range(n - p + 1):\n    current_sum = sum(demands[i:i+p])\n    diff = abs(current_sum - target)\n    best = min(best, diff)",
    studentPrompt: "连续3天能不能跳着选？如果4、2、5加起来是多少？",
    teacherMove: "把每天水量写成一排卡片，用尺子盖住连续P张。每次向右滑一格，算总和和差距。",
    keyPoint: "连续窗口不能跳；abs算差距，min留下最小差距。",
    commonTrap: "孩子容易少算最后一个窗口，range要写n - p + 1。",
    next: "下一课继续模拟类题目：让程序像电梯一样按顺序移动。",
    board: [
      "连续P天 = 挨在一起P个数",
      "窗口从左往右滑",
      "sum算窗口总和",
      "abs算离目标多远",
      "best保存最小差距"
    ],
    parent: "今天孩子挑战滑动窗口思想。家长可以用一排数字问：连续2个数有哪些组合？"
  },
  27: {
    previous: "上一课我们用窗口按顺序滑动，今天继续按顺序模拟一件事。",
    core: "电梯题的关键是记住当前位置。每去一个楼层，先算移动时间，再加停留时间，最后更新当前位置。",
    metaphor: "楼层显示屏",
    keyCode: "current = 1\nfor floor in floors:\n    if floor > current:\n        total += (floor - current) * 6\n    else:\n        total += (current - floor) * 4\n    total += 5\n    current = floor",
    studentPrompt: "电梯从1楼到3楼，再回1楼，每一段方向一样吗？",
    teacherMove: "用楼层卡片让孩子移动小电梯。每到一站就把current卡片换成新楼层。",
    keyPoint: "模拟题要按真实顺序走；current必须随着电梯位置更新。",
    commonTrap: "孩子会忘记更新current，导致后面的移动都从旧楼层开始算。",
    next: "下一课进入递归启蒙：把大积木塔拆成小积木塔。",
    board: [
      "current = 当前楼层",
      "floor = 目标楼层",
      "上楼每层6秒",
      "下楼每层4秒",
      "到站停5秒并更新current"
    ],
    parent: "今天孩子做电梯模拟题。家长可以问：为什么电梯到新楼层后，要更新current？"
  },
  28: {
    previous: "上一课我们按顺序模拟电梯移动，知道了大题也可以拆成一步一步。",
    core: "今天第一次碰递归：拆n块积木，可以先拿1块，也可以先拿2块，剩下的小塔继续用同样方法拆。",
    metaphor: "会叫自己的拆塔小助手",
    keyCode: "def ways(n):\n    if n == 0:\n        return 1\n    if n < 0:\n        return 0\n    return ways(n - 1) + ways(n - 2)",
    studentPrompt: "3块积木，每次拿1块或2块，一共有哪几种拆法？",
    teacherMove: "拿3块积木现场列出1+1+1、1+2、2+1。再把“先拿1块”和“先拿2块”分成两队。",
    keyPoint: "递归必须有出口；ways(n)可以拆成ways(n-1)和ways(n-2)。",
    commonTrap: "孩子容易忘记递归出口，函数就会一直叫自己。",
    next: "题库改造到这里先收束，后续可以继续把更多大题拆成低龄可学的小挑战。",
    board: [
      "递归 = 函数请自己帮忙",
      "先拿1块 -> ways(n-1)",
      "先拿2块 -> ways(n-2)",
      "n == 0 是成功拆完",
      "n < 0 是拆过头"
    ],
    parent: "今天孩子初识递归。家长可以问：3块积木每次拿1或2块，有几种拆法？"
  }
};

function buildNoteBlocks(plan) {
  return [
    note("你可以照着这样讲", [
      plan.previous,
      plan.core
    ]),
    note("课堂操作", [
      plan.teacherMove,
      "让孩子先预测，再运行或揭晓答案。低龄孩子先说出来，再敲代码，会更稳。"
    ]),
    note("容易卡住的地方", [
      plan.commonTrap,
      "孩子回答错时先追问“你是怎么看出来的？”，再带回屏幕上的关键词或符号。"
    ]),
    note("过渡", [
      plan.next
    ])
  ];
}

function buildDemoSlides(lesson, plan) {
  return [
    {
      kicker: "复习",
      title: "上一课接到这一课",
      body: plan.previous,
      prompt: "请先说一句：上一课我们最重要学到了什么？",
      teacherNote: [
        note("你可以照着这样讲", [
          "每节课开头先帮孩子把旧知识叫醒，不要直接进入新概念。",
          plan.previous
        ]),
        note("课堂操作", [
          "请1位孩子回答上一课关键词。",
          "老师把孩子的话整理成一句清楚的话，再进入本课。"
        ]),
        note("新手老师提醒", [
          "如果孩子答不上来，不要停太久。你直接给出关键词，让孩子跟读一遍即可。"
        ])
      ],
      check: "孩子能说出上一课的一个关键词。"
    },
    {
      kicker: "本课任务",
      title: lesson.title,
      body: plan.core,
      prompt: plan.studentPrompt,
      teacherNote: buildNoteBlocks(plan),
      check: plan.keyPoint
    },
    {
      kicker: "看代码",
      title: "把代码拆成小零件",
      body: `今天的关键词：${plan.metaphor}`,
      code: plan.keyCode,
      prompt: "你能找到今天最重要的符号或单词吗？",
      teacherNote: [
        note("你可以照着这样讲", [
          "我们不急着背整段代码，先把它拆成小零件。",
          "每个小零件都有自己的工作，找到它们，代码就不吓人了。"
        ]),
        note("课堂操作", [
          "先让孩子只看第一行，指出变量名、函数名或符号。",
          "再看第二行，让孩子预测电脑下一步会做什么。",
          "最后把每一行连成完整故事。"
        ]),
        note("检查方式", [
          "问孩子：这段代码先做什么？再做什么？最后输出什么？"
        ])
      ],
      check: "孩子能说出代码中的一个关键零件。"
    },
    {
      kicker: "互动",
      title: "先动手，再敲代码",
      body: plan.teacherMove,
      prompt: plan.studentPrompt,
      teacherNote: [
        note("你可以照着这样讲", [
          "我们先不用电脑，用手、纸条或黑板把题目演一遍。",
          "演明白以后，再把动作翻译成代码。"
        ]),
        note("课堂操作", [
          plan.teacherMove,
          "请孩子说出刚才动作里的顺序：第一步、第二步、第三步。",
          "把孩子说的话写成简短关键词。"
        ]),
        note("低龄课堂提醒", [
          "7-8岁孩子很需要身体动作和可见物品。先做动作，再看代码，理解会更顺。"
        ])
      ],
      check: "孩子能把动作说成步骤。"
    },
    {
      kicker: "避坑",
      title: "最容易错在哪里？",
      body: plan.commonTrap,
      prompt: "如果这里出错，我们第一步检查什么？",
      teacherNote: [
        note("你可以照着这样讲", [
          "程序员不是不犯错，程序员是会检查错误。",
          "今天我们先记住最常见的一个坑。"
        ]),
        note("带孩子检查", [
          plan.commonTrap,
          "让孩子用手指屏幕上的关键位置，一起检查符号、顺序、括号或缩进。"
        ]),
        note("鼓励话术", [
          "写错不是失败，能找到错在哪里，就是程序员很厉害的能力。"
        ])
      ],
      check: "孩子知道本课最常见的错误点。"
    },
    {
      kicker: "收口",
      title: "今天带走一句话",
      body: plan.keyPoint,
      bullets: plan.board.slice(0, 3),
      prompt: "请选一句你最记得的话读出来。",
      teacherNote: [
        note("收尾方式", [
          "先全班齐读本页标题。",
          "请2-3位孩子各说一句自己记住的话。",
          "再切回学生练习，让孩子马上做一道题巩固。"
        ]),
        note("衔接下一课", [
          plan.next
        ])
      ],
      check: "孩子能说出本课核心句。"
    }
  ];
}

function buildLessonFlow(plan) {
  return [
    {
      time: "0-5分钟",
      phase: "复习连接",
      teacher: plan.previous,
      student: "说出上一课的关键词，跟老师把旧知识接回来。"
    },
    {
      time: "5-12分钟",
      phase: "本课故事",
      teacher: plan.core,
      student: "回答本课开场问题，先用生活语言理解概念。"
    },
    {
      time: "12-24分钟",
      phase: "代码拆解",
      teacher: `展示关键代码：${plan.keyCode.replace(/\n/g, " / ")}。带孩子逐行说出每个零件的作用。`,
      student: "指出关键符号、函数名或变量名，预测输出。"
    },
    {
      time: "24-34分钟",
      phase: "互动演示",
      teacher: plan.teacherMove,
      student: "用手势、纸条、黑板或口头预测完成一次非电脑演示。"
    },
    {
      time: "34-42分钟",
      phase: "上机练习",
      teacher: "让孩子照着模板完成学生端编程题，重点检查本课最容易错的地方。",
      student: "运行代码，看到输出后再交卷。"
    },
    {
      time: "42-45分钟",
      phase: "收口衔接",
      teacher: `${plan.keyPoint} ${plan.next}`,
      student: "说出今天带走的一句话。"
    }
  ];
}

function buildTeacherScript(plan) {
  return [
    {
      when: "开场",
      title: "先接上一课",
      say: `${plan.previous} 今天我们继续往前走：${plan.core}`,
      check: "孩子能说出上一课关键词。"
    },
    {
      when: "讲新概念",
      title: `使用“${plan.metaphor}”比喻`,
      say: `把今天的新知识想成“${plan.metaphor}”。先用生活例子讲明白，再看代码。`,
      check: plan.keyPoint
    },
    {
      when: "看代码",
      title: "逐行翻译",
      say: "不要让孩子整段背。老师逐行问：这一行先做什么？下一行又做什么？",
      check: "孩子能说出代码执行顺序。"
    },
    {
      when: "孩子出错",
      title: "先定位一个坑",
      say: `本课最常见的问题是：${plan.commonTrap}`,
      check: "孩子知道先检查哪里。"
    }
  ];
}

function buildAgeAdaptation(plan) {
  return {
    target: "7-8岁，一二年级，适合先讲故事再看代码",
    pace: "复习3分钟，生活演示8分钟，代码拆解10分钟，上机练习10分钟，收口3分钟",
    language: `本课统一使用“${plan.metaphor}”作比喻，少说抽象术语，多说动作和结果`,
    notes: [
      "每页演示只抓一个核心点，孩子能复述就进入下一页。",
      "右侧老师提示可以照读；主画面给孩子看，不要把备课说明读给孩子。",
      "如果孩子卡住，回到生活动作，不要停留在术语解释上。"
    ]
  };
}

export function withTeachingExtensions(lesson) {
  const plan = extensionPlans[lesson.sourceId ?? lesson.id];
  if (!plan) return lesson;

  const teacher = lesson.teacher || {};

  return {
    ...lesson,
    teacher: {
      ...teacher,
      ageAdaptation: teacher.ageAdaptation || buildAgeAdaptation(plan),
      lessonFlow: teacher.lessonFlow || buildLessonFlow(plan),
      teacherScript: teacher.teacherScript || buildTeacherScript(plan),
      demoSlides: teacher.demoSlides || buildDemoSlides(lesson, plan),
      boardPlan: teacher.boardPlan || plan.board,
      parentNote: teacher.parentNote || plan.parent,
      teachingTips: teacher.teachingTips
        ? `${teacher.teachingTips} 低龄课堂建议：${plan.commonTrap}`
        : `低龄课堂建议：${plan.commonTrap}`
    }
  };
}
