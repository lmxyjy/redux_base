//action  type对应操作
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionType'

export const changeAction = (data)=>({
    type:CHANGE_INPUT,
    value:data
})
export const addAction = ()=>({
    type:ADD_ITEM
})
export const deleteAction = (index)=>({
    type:DELETE_ITEM,
    index:index
})