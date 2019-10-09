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

> 简单使用，参见demo01