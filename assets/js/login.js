
           $.ajaxPrefilter(function (options){
           
            options.url ='http://www.liulongbin.top:3007'+options.url
            console.log(options.url)
           })
        $('#link_login').on('click', function () {
            $('.reg_box').hide()
            $('.login_box').show()
        })
        $('#link_reg').on('click', function () {
            $('.login_box').hide()
            $('.reg_box').show()
        })
          let form=layui.form
        form.verify({
        
           pwd:[/^[\S]{6,12}$/,'密码必须是6到12位且不能出现空格'],
           repwd:function(value){
              if($('.reg_box input[name=password]').val()!=value)
              {
                return '两次密码输入不一致'
              }
           }
        })
  $('#form_reg').on('submit',function (e){
    e.preventDefault()
  
    $.ajax({
        method:"POST",
        url:'http://www.liulongbin.top:3007/api/reguser'
        ,data:{username:$('#form_reg [name=username]').val(),password:$('#form_reg [name=password]').val()}
        ,success:function(res){
            let layer=layui.layer 
            if(res!==0)
            { 
                 layer.msg(res.message)
            }
            layer.msg('注册成功,请登录！')
            $('#link_login').trigger('click')
        }
    })
  })
  $('#form_login').on('submit',function (e){
e.preventDefault()
$.ajax({
        method:"post",
        url:'/api/login'
        ,data:$(this).serialize()
        ,success:function(res){
            let layer=layui.layer 
            if(res.status!==0)
            { 
                console.log($(this).serialize())
                console.log(res.status)
                 layer.msg('登陆失败')
            }
          else {layer.msg('登陆成功！')  
        }
         localStorage.setItem('token',res.token)
          //跳转到后台主页
          location.href='/index.html'
        }
    })
  })
