const dataDefault = {
    defaultValue:"web thomas",
    list:[1,2,3,4,5]
}

export default (state=dataDefault,action)=>{
    if(action.type==="change"){
        // 深拷贝
        let newState = JSON.parse(JSON.stringify(state));
        newState.defaultValue = action.value;
        return newState
    }
    // 增加
    if(action.type==="add"){
        // 深拷贝
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.defaultValue);
        newState.defaultValue = "";
        return newState
    }
    //  删除
    if(action.type==="delete"){
        // 深拷贝
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState
    }
    return state
}