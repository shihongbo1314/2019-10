$(function () {
    //将当前操作的导航存到sessionStorage中
    sessionStorage.setItem('currentUrl','./page/departmentlist.html')
    // 获取数据 展示列表  权限判断  展示不展示操作权 点击对应按钮
    // 点击编辑 带着ID跳到添加页  点击删除  弹出警示框  然后再做是否删除的操作
    let power = localStorage.getItem('power');
    // setItem 的第二个参数必须是字符串；

    // let canShow = power.indexOf('resetpassword') == -1 ? false : true;
    let canShow = power.includes('resetpassword');

    function getData() {
        axios.get('/department/list').then((data) => {
            if (data.code == 0) {
                render(data.data)
                eventBind();
            } else {
                alert('系统繁忙')
            }
        })
    }

    function render(ary) {
        let str = '';
        ary.forEach(item => {
            let {
                id,
                name,
                desc
            } = item;
            str += `<tr>
                        <td class="w10">${id}</td>
                        <td class="w20">${name}</td>
                        <td class="w40">${desc}</td>
                        ${
                            canShow?`<td class="w20">
                            <a href="./departmentadd.html?departmentId=${id}">编辑</a>
                            <a href="javascript:;" class='delBtn' departmentId=${id}>删除</a>
                            </td>`:''
                        }
                        
                    </tr>`
        })
        $('.tableBox tbody').html(str);
    }
    getData();
    // axios.get('/user/power').then(data=>{
    //     console.log(data)
    // })

    if (!canShow) {
        $('.btnBox').hide();
    }

    function del(id) {
        axios.get('/department/delete?departmentId=' + id)
    }

    function eventBind() {
        // 实现事件的绑定
        $as = $('.delBtn').on('click', function () {
            let id = $(this).attr('departmentId'); // 获取要删除的ID
            alert('确定删除？', {
                title: '警告',
                confirm: true,
                handled(type) {
                    if (type == 'CONFIRM') {
                        // 确定删除
                        del(id)
                    }
                }
            })
        })
    }
})
