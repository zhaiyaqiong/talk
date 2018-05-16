/**
 * Created by wanda on 2016/11/14.
 */

/*
$('#login').click(
        function(){
            $.getJSON("json/user.json", function(json){
                alert(json.users[0].uname);
            });
        }
)
*/

$.getJSON("json/user.json", function(json){
        var num=json.users.length;
        var psd='';
        $('input[type=text]').blur(
            function(){
                var un=$('input[type=text]').val();
                var panduan=0;
                if(un!=''){
                    for(i=0;i<num;i++){
                        if(un==json.users[i].uname){
                            $('#login-box form span.duihao1').css('display','block');
                            $('section #login-box form span.tishi1').css('color','transparent')
                            psd=json.users[i].password;
                            panduan=1;
                            break;
                        }
                    }
                    if(panduan==0){
                        $('#login-box form span.duihao1').css('display','none');
                        $('section #login-box form span.tishi1').css('color','#e4393c')
                    }
                }else if(un==''){
                    $('#login-box form span.duihao1').css('display','none');
                    $('section #login-box form span.tishi1').css('color','transparent')
                }

            }
        )



        $('input[type=password]').blur(
            function() {
                var un = $('input[type=text]').val();
                var pw = $('input[type=password]').val();
                var zhuangtai = $('section #login-box form span.tishi1').css('color');
                if(un!=''){
                    if(zhuangtai!='#e4393c'){
                        if(pw != '' && pw == psd){
                            $('#login-box form span.duihao2').css('display', 'block');
                            $('section #login-box form span.tishi2').css('color','transparent');
                        }else if (pw != '' && pw != psd) {
                            $('section #login-box form span.tishi2').css('color','#e4393c');
                            $('#login-box form span.duihao2').css('display', 'none');
                        }
                    }
                }
            }
        )
}
);

$('#login').click(
    function(){
        if($('#login-box form span.duihao1').css('display')=='block'&&$('#login-box form span.duihao2').css('display')=='block'){
            var nm=$('input[type=text]').val();
            sessionStorage.setItem('uname',nm);
            window.open("setting.html","_self");
        }else if($('#login-box form span.duihao1').css('display')=='none'||$('#login-box form span.duihao2').css('display')=='none'){
            alert('不通过')
        }
    }
)

