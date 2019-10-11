# redux #
**组成部分：**

 **action:** 

- 1,发起改变的请求，将请求传递到store中。通过store传递到reducer中进行处理。


**store:** 

- 1,state状态下发的库，接收传递过来的action，然后将action传递到reducer中去执行。
- 2,接收recuder中返回的新的state,并且将这个新的状态值下发到组件中。

**reducer:** 

- 1,返回初始化的state。
- 2,接收store传递过来的action,对action进行处理。返回新的state。

> 需要注意的是，reducer不能直接更改state。只能对state进行一个深拷贝。然后返回新的state到store中

**关系图:**

![webpack图](https://github.com/lmxyjy/redux_base/blob/master/img/1.png)

![webpack图](https://github.com/lmxyjy/redux_base/blob/master/img/2.png)

**示例demo**

> 使用redux做一个todolist demo，详见redux-todolist-V1。
> 
- 可以对输入框的内容进行修改
- 点击按钮，将输入框中的内容添加到下方的列表当中
- 点击对应的列表选项可以实现删除