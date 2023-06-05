https://zhuanlan.zhihu.com/p/59467370

mvc 模式
> 当数据庞大后， m 处理逻辑变的不清晰，所以将controller 的数据 和逻辑处理部分从中抽离出来。
> 用一个 换门的对象去管理 viewmodel

mvvm 模式
>1. model -->  viewmodel --> view/view controller
>2. controller 变得清晰简介， viewmodel 分离了大部分 controller 代码
>3. 方便测试： 为 viewmodel 单独去做测试
>4. 开发解耦， 一人负责逻辑实现， 一人负责 UI 实现