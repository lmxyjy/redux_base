const defaultState = {
    inputValue : "write something",
    list:[
        '早八点开晨会议1',
        '早八点开晨会议2',
        '早八点开晨会议3',
        '早八点开晨会议4',
    ]
}

export default (state = defaultState,action)=>{
    console.log(action)
    //1， reducer里只能接收state 不能直接改变state
    if(action.type === "changeInput"){
        let newState = JSON.parse(JSON.stringify(state));//2，深拷贝
        newState.inputValue = action.value;
        return newState
    }
    if(action.type === "addItem"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}