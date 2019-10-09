import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';
import store from '../store/index'; //导入store
import { get } from 'https';

class ToList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange);//订阅
        this.clickBtn = this.clickBtn.bind(this);
    }
    render() { 
        return ( <div>
            <div  style={{margin:"10px"}}>
                <Input 
                    placeholder={this.state.inputValue}
                    style={{width:"250px",marginRight:"10px"}}
                    onChange={this.changeInputValue}
                    value={this.state.inputValue}
                />
                <Button 
                type="primary"
                onClick={this.clickBtn}
                >增加</Button>                
            </div>
            <div style={{margin:"10px",width:"300px"}}>
                <List 
                    bordered
                    dataSource={this.state.list}
                    renderItem={item=>(<List.Item>{item}</List.Item>)}
                />
            </div>
        </div> );
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
    }
    }
    changeInputValue(e){
        const action = {
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action);//将action传递到仓库中
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = {
            type:'addItem',
        }
        store.dispatch(action)
    }

}
 
export default ToList;