$.ajaxPrefilter(function (options){
           
    options.url ='http://www.liulongbin.top:3007'+options.url
    if(options.url.indexOf('/my/')!==-1)
    {
          options.headers=
    {
     Authorization:localStorage.getItem('token')||''
        
    }
    options.complete=function(res){
        if(res.responseJSON.status!==0 && res.responseJSON.message==='身份认证失败！')
        {
         localStorage.removeItem('token')
         location.href='./login.html'
        }
     }
    }
    //统一为有权限的接口设置请求头
  
   })