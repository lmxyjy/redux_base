import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_DATA} from './actionType'
//管理函数
const defaultValue = {
    inputValue:"哈哈哈",
    list:[]
}

export default (state=defaultValue,action)=>{
    if(action){
        let newState = JSON.parse(JSON.stringify(state)) //对state做一个深拷贝
        switch (action.type) {
            case CHANGE_INPUT:
                newState.inputValue = action.value;
                break;
            case ADD_ITEM:
                newState.list.push(newState.inputValue);
                newState.inputValue = " ";
                break;            
            case DELETE_ITEM:
                newState.list.splice(action.index,1)
                break;   
            case GET_DATA:
                newState.list = action.data.data.list;
                break;                           
            default:
                break;
        }
        return newState;
    }
    return state;
}