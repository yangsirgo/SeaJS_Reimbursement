/**
 * Created by Xcar on 2016/9/7.
 */

/*
 *������ʾ����
 *btnobj:$����,Ĭ��Ϊ������Ļ�м���ʾ���д��ݶ������ڰ�ť���Ϸ���ʾ,
 *str:��ʾ��Ϣ����,
 *type:1,��ʾ���ͣ�1Ϊ������ʾ��2Ϊ���棬3Ϊͨ�����߳ɹ�
 *stype:Ĭ��Ϊ�գ�false �Զ��رգ�true ���ֶ��ر�
 *time:Ĭ��Ϊ2000(����)
 *cbk:function() �ص�����
 */
var i8alert = function (json) {
    var time = 2000;
    var _color = " #FF690E";
    var stypehtml = "";
    if (!json.type) {
        json.type = 1;
    }
    //��ʾ��������
    if (json.type != 1) {
        _color = " #717276";
    }
    //��ʾ��ʽ
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

/*import  ��дwindow.alert*/
window._alert = window.alert;
window.alert = function (data) {
    i8alert({str:data});
}