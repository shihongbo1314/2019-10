$(function(){
     //将当前操作的导航存到sessionStorage中
     sessionStorage.setItem('currentUrl','./page/joblist.html')
    let obj={
            userhandle: '员工操作权',
            departhandle:'部门操作权',
            jobhandle:'职务操作权',
            departcustomer:'部门全部客户',
            allcustomer:'公司全部客户',
            resetpassword:'重置密码'
          };
    let canShow = localStorage.getItem('power').includes('resetpassword');
    if(!canShow){
        // $('.btnBox').hide();
        $('.btnBox').remove();
    }
    function trans(power){
       let ary = power.split('|');
       return  ary.map(item=>{
           return obj[item]
       }).join('|');
    }
    function getData(){
       axios.get('/job/list').then(data=>{
           render(data.data);
           eventBind()
       })
    }
    function render(ary){
        let str = '';
        
        ary.forEach(item => {
            let {id,name,desc,power} = item;
            str+=`<tr>
            <td class="w8">${id}</td>
            <td class="w10">${name}</td>
            <td class="w20">${desc}</td>
            <td class="w50">${trans(power)}</td>
            ${
                canShow ?
                `<td class="w12">
                <a href="./jobadd.html?jobId=${id}">编辑</a>
                <a href="javascript:;" class='delBtn' jobId=${id}>删除</a>
            </td>`:''
            }
            
        </tr>`
        });
        $('tbody').html(str);
    }
    getData();

    function eventBind(){
        $('.delBtn').on('click',function(){
            let id = $(this).attr('jobId');
            alert('确定删除?',{
                confirm:true,
                handled(type){
                    //type CANCELD CONFIRM
                    if(type == 'CONFIRM'){
                        //确定删除
                        axios.get('/job/delete?jobId='+id)
                    }
                }
            })
        })
    }
})
