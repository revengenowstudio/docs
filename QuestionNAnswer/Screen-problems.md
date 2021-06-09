[返回首页](/index.md)

***


## 游戏画面向左或者向右偏移 :id=deviation1

- 可能的情况有：**画面的某一边显示不出来以及四周有黑边**，**画面无法铺满整个屏幕**（画面向右偏移导致建造栏无法显示完全，画面向左偏移暂无实例）

![image](https://user-images.githubusercontent.com/49360196/112751867-c7b82300-9002-11eb-947b-3de51c1b0d60.png)


- 一：

  - 点开始（或者win键+r），打开运行窗口，输入regedit 回车，这样就打开了注册表编辑器，然后，定位到以下位置： HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Control\\GraphicsDrivers\\Configuration\\

  - 在Configuration这上面右键，选择查找，输入Scaling，在右框找到scaling，右键scaling修改，将数值改为3即可。

  - 具体图文教程地址：http://jingyan.baidu.com/article/49711c61478e7bfa441b7cc0.html

- 二：

  - 画面偏移可能是由切换了分辨率之后显示器的画面自动校正调整导致的，请根据你的显示器型号查询教程并按照教程手动调整显示器相关设置
  - 提示：大多数情况该问题和VGA接口有关，原因是液晶显示器的驱动可能不适配VGA信号输出的画面，如有条件请使用DP接口或者HDMI接口连接显示器，若没有条件请根据显示器型号自行查询教程调整画面矫正幅度
  - 可供参考的调节画面位置的教程：https://www.jb51.net/hardware/xianshiqi/561020.html


## 游戏画面显示不完全，游戏中按钮、图标偏离 :id=deviation2
![a]..(/img/gso1.png) 
![a]..(/img/gso2.png)
![a]..(/img/jiaocheng10.png)
- 类似以上这种，只能显示游戏画面一部分（可能导致鼠标无法移动到建造栏），按钮、图标偏离或消失，并且**分辨率大于1920x1280**的，全局DPI缩放大多不是100%，你需要调节DPI缩放来解决该问题，参见下文[给复仇时刻主程序禁用DPI缩放](/QuestionNAnswer/Screen-problems.md#DPI)


## 给复仇时刻主程序禁用DPI缩放 :id=DPI 

  - 在**复仇时刻主程序（包括gamern.exe)**的 属性--兼容性 里打开高dpi时禁用显示缩放

  - win10系统给软件单独禁用dpi稍微麻烦一些：![a]..(/img/gso3.png) 
  - 先点击"更改高dpi设置" 


  ![pic](./gso4.png) 
  
  
  -  然后给”代替搞dpi缩放行为“打钩
  


- 或者你也可以调节**全局DPI缩放**来解决此问题  
  - win7用户参见这个网址：https://zhidao.baidu.com/question/137413874.html  
  - win10用户参见这个网址：https://jingyan.baidu.com/article/af9f5a2d42a89143140a4584.html  



- **未来复仇时刻自带的渲染补丁会支持2k以及最高4k分辨率**








***
[返回目录](/QuestionNAnswer/index.md#gaming-problem)
