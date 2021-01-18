export function changeDpList(state,option){
    state.departmentList = option.data
    localStorage.setItem('departmentList',JSON.stringify(option.data))
}
export function changeuserList(state,option){
    state.userList = option.data;
    localStorage.setItem('userList',JSON.stringify(option.data))
}
export function changejobList(state,option){
    state.userList = option.data;
    localStorage.setItem('jobList',JSON.stringify(option.data))
}
