# redux #
**组成部分：**

1. **action:** 发起改变的请求，将请求传递到**store**中。通过**store**传递到**reducer**中进行处理。
2. **store:** state状态下发的库，接收传递过来的**action**，然后将**action**传递到**reducer**中去执行。并且接收**recuder**中返回的新的state,并且将这个新的状态值下发到组件中。
3. **reducer:**返回初始化的state并且接收**store**传递过来的**action**,对**action**进行处理。返回新的state。（需要注意的是，reducer不能直接更改state。只能对state进行一个深拷贝。然后返回新的state到**store**中）

**关系图:**

![webpack图](https://github.com/lmxyjy/redux_base/blob/master/img/1.png)

![webpack图](https://github.com/lmxyjy/redux_base/blob/master/img/2.png)