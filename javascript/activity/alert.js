/**
 * Created by Xcar on 2016/9/7.
 */

/*
 *公用提示方法
 *btnobj:$对象,默认为空在屏幕中间显示，有传递对象则在按钮的上方显示,
 *str:提示消息内容,
 *type:1,提示类型，1为错误提示，2为警告，3为通过或者成功
 *stype:默认为空，false 自动关闭，true 则手动关闭
 *time:默认为2000(两秒)
 *cbk:function() 回调函数
 */
var i8alert = function (json) {
    var time = 2000;
    var _color = " #FF690E";
    var stypehtml = "";
    if (!json.type) {
        json.type = 1;
    }
    //提示内容类型
    if (json.type != 1) {
        _color = " #717276";
    }
    //显示方式
    if (json.stype) {
        stypehtml = '<span class="lg_fm_close"></span>';
    }
    if (json.time) {
        time = json.time;
    }
    var domobj = document.getElementById("js_lg_tp_div");
    if (domobj) {
        domobj = $(document.getElementById("js_lg_tp_div"));
        domobj.html('<i class="lg_fm_' + json.type + '"></i>' + json.str + stypehtml);
    } else {
        var htmlstr = '<div id="js_lg_tp_div" style="position:absolute; z-index:9999999; left:50%; top:50%;' +
            'font-size:14px;color:' + _color + '; border:1px solid #CFD0D0; padding:8px 30px 8px 15px; background:#fff;' +
            'box-shadow:2px 2px 2px -1px #C5C6C7; line-height:25px; display:none;">' +
            '<i class="lg_fm_' + json.type + '"></i>' + json.str + stypehtml + '</div>';
        $("body").append(htmlstr);
        domobj = $(document.getElementById("js_lg_tp_div"));
    }
    domobj.css({ "margin-left": 0 - domobj.width() / 2, "margin-top": 0 - domobj.height() / 2, color: _color, "position": "fixed" });
    if (json.btnobj) {
        var _left = json.btnobj.offset().left;
        var _top = json.btnobj.offset().top - domobj.outerHeight() - 10;
        if (_top < 0)
            _top = 1;
        var _right = "auto";
        var wdwidht = $(window).width();
        var boxwidth = domobj.width();
        if (_left > (wdwidht - boxwidth)) {
            _left = "auto";
            _right = 0;
        }
        domobj.css({ margin: 0, left: _left, top: _top,right:_right, position: "absolute" });
    }
    domobj.show();
    if (json.stype) {
        $(".lg_fm_close").click(function () {
            $(this).parent().hide();
        });
        return;
    }
    setTimeout(function () {
        domobj.hide();
        if (json.cbk) {
            json.cbk();
        }
    }, time);
};

/*import  重写window.alert*/
window._alert = window.alert;
window.alert = function (data) {
    i8alert({str:data});
}