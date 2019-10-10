//action  type对应操作
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_DATA} from './actionType'
import axios from 'axios';

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
// 可以使用中间件action返回函数,中间件相当于对dispatch的一个增强
export const getDataAction = ()=>(
    dispatch=>{
        //接口地址不稳定
        axios.get("https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList")
        .then(res=>{
            const data = res.data;
            const action = {
                type:GET_DATA,
                data:data
            }
            dispatch(action)
        })
    }
)