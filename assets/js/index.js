
$('.layui-nav-tree li').on('click',function (){
    $(this).removeClass('layui-this')
})
$(function(){
    getUserInfo()
})
function getUserInfo(){
    $.ajax({
        method:'Get'
        ,url:'/my/userinfo'
        //请求头配置对象
        ,success:function(res){
         if(res.status!==0)
         {
            return layui.layer.msg('获取用户信息失败！')
         }
       renderAvatar(res.data)
        }
        
    })
}
function renderAvatar(user){
    let name=user.nickname || user.username
    $('#welcome').html('欢迎&nbsp&nbsp'+name)
    if(user.user_pic !==null)
    {
          $('.layui-nav-img').attr('src',user.user_pic).show()
          $('.text-avatar').hide()
    }
    else{
        $('.layui-nav-img').hide()
        let first =name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}
$('#logout').on('click',function (e){
    e.preventDefault()
      layui.layer.confirm('确认退出？',{icon:3,title:'提示'},function (){
          localStorage.removeItem('token')
          location.href='/login.html'
      })
})
