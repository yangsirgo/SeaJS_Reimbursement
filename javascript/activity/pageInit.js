/**
 * Created by ryf on 2016/9/19.
 */
define(function (require, exports, module){
    require("./common");
    var template = require("../plugins/template");
    //require("../plugins/seajs-text.js")
    $.ajax({
//      url: i8_session.ajaxWfHost + 'webajax/process/process-name',
        url:  './json/getProcNameList.json',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(data.body);
            var tpl = require('../template/caidanlist.tpl');
            var render = template.compile(tpl);
            var _procName = render({data_list: data.body});
            $("#js_left_menu").html(_procName);
        }, error: function (e1, e2, e3) {
            $("#js_left_menu").empty().html('获取全部菜单名称时请求超时，请检查网络！');
        }
    })
})