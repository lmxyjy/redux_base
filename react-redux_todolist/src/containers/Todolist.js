import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodolistUI from '../components/Todolist'
import {changeInputAction,addItemAction,deleteItemAction} from '../store/actionOperation'

export class Todolist extends Component {
    render() {
        let {
            inputValue,
            list,
            changeInput,
            addItem,
            deleteItem
        }=this.props
        return (
            <TodolistUI 
                inputValue={inputValue}
                list={list}
                changeInput={changeInput}
                addItem={addItem}
                deleteItem={deleteItem}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    inputValue:state.inputValue,
    list:state.list
})

const mapDispatchToProps = dispatch=> ({
    changeInput:(e)=>{
        dispatch(changeInputAction(e.target.value))
    },
    addItem:()=>{
        dispatch(addItemAction())
    },
    deleteItem:(index)=>{
        dispatch(deleteItemAction(index))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
