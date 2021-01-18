import http from './http'


export function judgeLogin(){
    return http.get('/user/login').then(data=>{
      return data.code == 0 
    })
}


//请求部门列表数据

export function  getDpList(){
    return http.get('/department/list')
}
//删除部门列表中的数据
export function delDpList(departmentId){
    return http.get('/department/delete',{
      params:{departmentId}
    })
}
// 新增部门数据
export function addDpList(option){
     return http.post('/department/add',option)
}
// 更新部门接口
export function updateDpList(option){
  return http.post('/department/update',option)
}
// 获取用户列表接口
export function getuserList(option){
  //option ==> {departmentId:0,}
  return http.get('/user/list',{
    params:option
  })
}
//删除用户列表中的数据
export function deluserList(userId){
  return http.get('/user/delete',{
    params:{userId}
  })
}
//更新用户接口
export function updateuserList(option){
  return http.post('/user/update',option)
}
//新增用户数据
export function adduserList(option){
  return http.post('/user/add',option)
}
//获取职务列表数据
export function getjobList(jobId){
  return http.get('/job/list',{
    params:{jobId}
  })
}
// 新增职务列表
export function addjobList(option) {
  return http.post('/job/add', option)
}

// 删除职务列表
export function deljobList(jobId) {
  return http.get('/job/delete', {
      params: {jobId}
  })
}

// 更新职务列表
export function updatejobList(option) {
  http.post('/job/update', option)
}
