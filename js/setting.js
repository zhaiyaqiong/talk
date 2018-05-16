/**
 * Created by wanda on 2016/11/8.
 */
$(".jt a#bb-nav-next").click(function(){
    $('#bb-nav-prev').css('display','block');
    var item=$('#bb-bookblock').children().each(
        function(){
            var a=$(this).css('display');
            if($(this).css('display')=='block'){
                var biaoti=$(this).children('.zuo').children('h1').html();
                $('#step ul li p').each(
                    function(){

                        if($(this).html()==biaoti){
                            var num=$(this).index('#step ul li p');
                            console.log(num);
                            if(num<3){
                                $('#bb-nav-next h2').html($('#step ul li p').eq(num+2).html());

                            }
                            if(num<4){
                                $('#bb-nav-prev h2').html($('#step ul li p').eq(num).html());
                            }

                            if(num>=3){
                                $('#bb-nav-next').css('display','none');
                                $('#tijiaobtn').css('display',"block");
                                $('#direct').css('display','none');
                            }
                            for(bian=0;bian<=num;bian++){
                                $('#step ul li h1').eq(bian+1).css('background-positionY','-534px');
                                $('#step ul li p').eq(bian+1).css('color','#3498db');
                            }
                        }
                    }
                )
            }
        }
    )
})

$(".jt a#bb-nav-prev").click(function(){
    $('#bb-nav-next').css('display','block');
    $('#tijiaobtn').css('display',"none");
    $('#direct').css('display','block');
    $('#direct').css('top',"340px");
    var item=$('#bb-bookblock').children().each(
        function(){
            var a=$(this).css('display');
            if($(this).css('display')=='block'){
                var biaoti=$(this).children('.zuo').children('h1').html();
                $('#step ul li p').each(
                    function(){
                        if($(this).html()==biaoti){
                            var num=$(this).index('#step ul li p');
                            console.log(num);
                            if(num>=1){
                                $('#bb-nav-next h2').html($('#step ul li p').eq(num).html());

                            }
                            if(num>=2){
                                $('#bb-nav-prev h2').html($('#step ul li p').eq(num-2).html());
                            }
                            if(num<2){
                                $('#bb-nav-prev').css('display','none');
                            }
                            for(bian=4;bian>=num;bian--){
                                $('#step ul li h1').eq(bian).css('background-positionY','-604px');
                                $('#step ul li p').eq(bian).css('color','#777');
                            }
                        }
                    }
                )
            }
        }
    )
})


$(document).ready(
    function(){
        var mingzi= sessionStorage.getItem('uname');
        $("#welcome p").html('欢迎！'+mingzi);
        $('#welcome p').attr('title','欢迎！'+mingzi);
    }
)





