import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionType'

const defaultValue = {
    inputValue:"thomas learn react-redux",
    list:[
        "redux",
        "redux-thunk",
        "redux-saga",
        "react-redux"
    ]
}

export default (state = defaultValue,action)=>{
    if(action){
        let newState = JSON.parse(JSON.stringify(state));
        switch (action.type) {
            case CHANGE_INPUT:
                newState.inputValue = action.value;
                break;
            case ADD_ITEM:
                newState.list.push(newState.inputValue);
                newState.inputValue = ""
                break;   
            case DELETE_ITEM:
                newState.list.splice(action.index,1)
                break;     
            default:
                break;
        }
        return newState;
    }
    return state
}