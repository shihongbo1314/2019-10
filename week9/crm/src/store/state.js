let departmentList = JSON.parse(localStorage.getItem('departmentList'))
let userList = JSON.parse(localStorage.getItem('userList'))
let jobList = JSON.parse(localStorage.getItem('jobList'))

export default {
    departmentList: departmentList || [],//存储的是部门列表数据 
    userList:userList || [],//存储的是 员工列表 
    jobList:jobList || [],//存储的是职务列表

}