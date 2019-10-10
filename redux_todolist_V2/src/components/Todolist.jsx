import React from 'react'

const Todolist =(props)=> {
    let {
        inputValue,
        list,
        changeInputValue,
        addItem,
        deleteItem
    } = props
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={addItem}>添加</button>
            </div>
            <ul>
                {list.map((ele,index)=>
                    <li key={index} onClick={()=>{deleteItem(index)}}>{ele}</li>    
                )}
            </ul>
        </div>
    )
}
export default Todolist;
