import React, { Component } from 'react'
import store from '../store/store'
import TodoListUI from '../components/Todolist'
import {changeAction,addAction,deleteAction,getDataAction} from '../store/actionOperation'

export default class Todolist extends Component {
    constructor(props){
        super(props)
        //定义初始化state
        this.state = store.getState();
        // 绑定函数this
        this.changeInputValue = this.changeInputValue.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        // 订阅监听
        this.onChangeStore = this.onChangeStore.bind(this);
        store.subscribe(this.onChangeStore);
    }
    // 订阅监听
    onChangeStore(){
        this.setState(store.getState())
    }
    // 监听输入框
    changeInputValue(e){
        const action = changeAction(e.target.value);
        store.dispatch(action);
    }
    // 增加item
    addItem(){
        const action = addAction(); //返回的是一个action对象
        store.dispatch(action);
    }
    // 删除item
    deleteItem(index){
        const action = deleteAction(index);
        store.dispatch(action)
    }
    // 请求数据
    componentDidMount() {
        const action = getDataAction();
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
            />
        )
    }
}
