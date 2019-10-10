import* as React from 'react'
import store from '../store/index'

class TodoUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInput = this.changeInput.bind(this)
        // 需要订阅才能更新
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange);
        // 点击增加
        this.addItem = this.addItem.bind(this);

    }
    storeChange(){
        //store.getState()返回的是新的state对象
        this.setState(store.getState())
        // 虽然newState值改变了并且返回到了store中，但是实际的state并没改变
        //改变的是储存中的state，这就意味着state并未生效。
    }
    changeInput(e){
        // 发送action 
        const action = {
            type:"change",
            value:e.target.value
        }
        store.dispatch(action)
    }
    addItem(){
        // 发送增加的action到store
        const action = {
            type:"add"
        }
        store.dispatch(action)
    }
    // 删除
    deleteItem(index){
        // 发送删除的action到store
        const action = {
            type:"delete",
            index
        }
        store.dispatch(action)
    }
    render() { 
        console.log(this.state)
        return ( <div>
            <div>
                <input value={this.state.defaultValue} onChange={this.changeInput}/>
                {/* 点击增加 */}
                <button onClick={this.addItem}>提交</button> 
            </div>
            <ul>
                {
                    this.state.list.map((ele,index)=>
                        <li key={index} onClick={()=>{this.deleteItem(index)}}>{ele}</li>
                    )
                }
            </ul>
        </div> );
    }
}
 
export default TodoUI;