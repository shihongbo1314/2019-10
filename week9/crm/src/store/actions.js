import {getDpList,getuserList,getjobList} from '@/api/index.js'
export function changeDpList({commit}){
     getDpList().then(data=>{
         if(data.code== 0){
            commit('changeDpList',{
                data:data.data
            })
         }
     })
}
export function changeuserList({commit},option={}){
    // 调用ajax请求
    getuserList(option).then(data=>{
        if(data.code==0){
            commit('changeuserList',{
                data:data.data
            })
        }
    })
}
export function changejobList({commit},option={}){
    // 调用ajax请求
    getjobList(option).then(data=>{
        if(data.code==0){
            commit('changejobList',{
                data:data.data
            })
        }
    })
}