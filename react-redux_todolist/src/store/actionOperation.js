import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionType';

export const changeInputAction = data=>({
    type:CHANGE_INPUT,
    value:data
})
export const addItemAction = ()=>({
    type:ADD_ITEM,
})
export const deleteItemAction = index=>({
    type:DELETE_ITEM,
    index:index
})