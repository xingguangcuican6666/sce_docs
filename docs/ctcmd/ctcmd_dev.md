---
sidebar_position: 2
---

# CTCMD 开发者手册
:::warning
此页面已过时，部分内容可能不再适用，我们将很快更新
:::

欢迎使用CTCMD，本手册面向开发者，并为咖啡桌提供帮助，你可以在这里找到一些关于开发，编译方面的帮助！

 - 本项目GitHub地址：https://github.com/xingguangcuican6666/custom_command

 - 加速链接(由OracleLoadStar提供)：https://git.oraclestar.cn/xingguangcuican6666/custom_command

## 1.1 编译

第一步自然是先git克隆仓库，获取源码
~~~bash
git clone https://github.com/xingguangcuican6666/custom_command
~~~

安装**vs2022 build tools**，选择**C++桌面开发**工作负载，在**Developer Command Prompt for VS 2022**中运行以下命令。


~~~bash
.\build.bat
~~~

:::tip
注意：请在Windows环境下编译，或者使用mingw编译器，因为ctcmd使用了一些Windows特有的API。
:::

接着打开`temp`文件夹，`main.cpp`就是ctcmd。

若你想编译**发行包**而不是**核心包**，请继续阅读以下内容。

请运行以下命令，需对相关路径进行修改，可能不适用于你的系统结构,在运行该命令前，请保证运行了上述命令。
~~~bash
.\build_package.bat
~~~

将生成的**dist**文件夹打包，就可以得到发行包了。

## 2.1 软件包管理器

ctcmd内置了软件包管理器，你可以自定义你的软件源和制作自定义软件包，用户可以通过添加软件源安装你的模块包。

### 2.1.1 制作软件包

首先，你需要创建一个文件夹，**文件夹名称为模块名**，打开该文件夹，放置bat文件，退出该文件夹并打包成zip即可，是不是特别简单，这就是一个基本软件包了。

但是，软件包可以做的不仅仅于此，你可以添加安装前执行脚本和卸载前执行脚本来控制软件包的安装。

如果要使用该功能，请把bat文件命名为`setup.bat`和`uninstall.bat`，它们分别会被识别为安装前脚本和卸载前脚本，它们会在这两个时间自动运行。

另外，为了方便用户使用，请写一个json文件，名为`help.json`，它将会在用户执行help时为用户提供自定义帮助。

例如：
~~~bash
Custom CMD [版本 10.0.26100.4946]
(c) OracleLoadStar。保留所有权利。
ctcmd - 自定义终端，输入 help 获取命令帮助。
C:\Users\xingguangcuican\Desktop\Project\docs\my-website>help
ctcmd 支持如下命令：
  cd [目录]         切换目录
  set KEY=VALUE     设置环境变量
  env [KEY]         查看环境变量
  print 内容        输出内容（支持变量替换）
  ls [目录]         列出目录内容
  ps                查看进程列表
  pkill 进程名      按名杀进程
  对象.方法(参数)   调用批处理（如 power.shutdown(1)）
  exit              退出终端

可用对象.方法：
  module.winpt    软件包管理器
  std.cls    清屏，清除命令行窗口内容
  test.test
  win.cmd        打开命令提示符窗口，支持传递参数执行命令
  win.editor     用首选编辑器打开指定文件
  win.notepad    用记事本打开指定文件
  win.pwsh       用 PowerShell 打开指定脚本或命令
  wsl.bash           打开终端，传入参数时执行命令
  wsl.install_pkg    安装软件包
  wsl.update         更新软件源
~~~

`help.json`文件示例
~~~json
{
    "方法（即对应bat名）":"描述文本"
}
~~~

### 2.2.1 搭建软件源

你可以自定义软件源，软件源下要有一个`all.ctcmd`文件，各软件包发行文件夹，类似这样

~~~bash
repo
│  .gitignore
│  all.ctcmd
│  LICENSE
│  README.md
│
├─std
│      std_x86-64_latest.zip
│
├─test
│      test_x86-64_0.0.1.zip
│      test_x86-64_latest.zip
│
├─win
│      win_x86-64_latest.zip
│
└─wsl
        wsl_x86-64_latest.zip
~~~

`all.ctcmd`文件下需要为软件包指向对应的软件源地址，例如官方源的`all.ctcmd`文件

~~~bash
test@https://raw.githubusercontent.com/xingguangcuican6666/ctcmd_repo/refs/heads/main/test
win@https://raw.githubusercontent.com/xingguangcuican6666/ctcmd_repo/refs/heads/main/win
std@https://raw.githubusercontent.com/xingguangcuican6666/ctcmd_repo/refs/heads/main/std
wsl@https://raw.githubusercontent.com/xingguangcuican6666/ctcmd_repo/refs/heads/main/wsl
~~~

各软件目录下的软件包名称以以下规范命名**软件包名_架构_版本**，且必须要存在latest版本，架构目前只能为x86-64，其他的尚未支持。