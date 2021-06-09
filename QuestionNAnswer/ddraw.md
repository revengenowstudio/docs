[返回首页](./index.md)

***
 ![a](./img/jiaocheng11.jpg)

## 0.99.902版本
理论上99%的玩家使用该版本不会出现问题，如果你是该版本但仍然有问题，请看下文[渲染补丁没有效果，怎么办？](./ddraw.md#渲染补丁没有效果)

## 运行后持续黑屏 :id=Blackscreen
仅遇到启动游戏后自动切换到全屏，或是窗口化出现窗口但是一直黑屏不显示图像，此种情况罕见，可直接联系开发者。

## 0.99.G1208等旧版本
请更新到0.99.902版本，然后尝试进入游戏。如果仍然有该问题，请参照下文[渲染补丁没有效果，怎么办？](./ddraw.md#渲染补丁没有效果)

***


## 渲染补丁没有效果 :id=renderpatchfailed
<a name="renderpatchfailed" data-id="renderpatchfailed" class="anchor"></a>
- 注意: 请**确保使用过所有补丁都不生效**再使用此方法，该方法适用于除xp（及xp以前的win系统）以外win用户，0.99.902起的版本可以直接看下面的步骤。
- 警告: 必须确保你没有在安装完毕之后做任何多余操作，例如禁用3D加速、修改用户配置文件(通常为RA2MD.ini)、修改分辨率等非说明书指导的操作，如果有，请先恢复原样。

首先，使用**win（菜单键）+r**快捷键，呼出“运行”窗口，在输入框内输入regedit，回车（确定）。或者在C盘找到window文件夹、regedit.exe，即可启动注册表编辑器

接着，弹出注册表编辑器，根据以下目录
**HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
\Control\Session Manager\KnownDLLs**
找到**ddraw**的那一条，![a](./img/a4.png)

双击打开，于“数值数据”输入框内添加任意内容（例如在**前面加一个a**） ![a](./img/a1.png)
或者选中ddraw这一项右键删除

改完后，关闭注册表编辑器，**重启电脑**，然后再回到根目录，再**重新尝试安装合适的补丁**(**0.99.902版本起仅重启即可**)，直到合适为止。

若出现“编辑值时出错” ![a](./img/a2.png)
，不能编辑的情况下，在C盘找到window文件夹、regedit.exe，鼠标右键“**用管理员身份运行**”，若仍然不允许编辑，那么参见这个教程：[教程链接](https://baijiahao.baidu.com/s?id=1604347607947449668&wfr=spider&for=pc&isFailFlag=1)


***
[返回目录](/QuestionNAnswer/index.md#gaming-problem)
