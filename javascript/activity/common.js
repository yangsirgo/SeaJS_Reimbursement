/**
 * Created by Xcar on 2016/9/1.
 */
$(function(){
    $(window).on("resize",function(){
        var domHeight = $(window).height()-$(".app-header").height()+"px";
        $(".set-menu").css("height",domHeight);
        $('#content-size-OA').css('height', $(window).height() - $('.app-header').height() - $('.set-page-mbx').height());
        $('#content').css('height',$(window).height()-$('.app-header').height());
    }).trigger("resize");
    $("#js_left_menu").on("click","li.ex a.first_A",function () {
        if($(this).parent().hasClass('true')){
            $(this).parent().removeClass('true').addClass("false");
        }else{
            $(this).parent().removeClass('false').addClass("true");
        }
    })

    //日期input不可编辑
    $("table input.hasDatepicker").live('keydown',function(){
        return false;
    });
    $("div input.hasDatepicker").live('keydown',function(){
        return false;
    })
});