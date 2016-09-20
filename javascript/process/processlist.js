/**
 * Created by Xcar on 2016/9/12.
 */

    //µ¥Ñ¡¿ò
$('.myapplycation-info-table').on('click', '.app-checkbox', function () {
    var _this = $(this);
    var isChecked = _this.toggleClass('checked').hasClass('checked');
    if (_this.parents('thead').length > 0) {
        var app_checkbox = _this.parents('.myapplycation-info-table').find('.app-checkbox');
        if (isChecked) {
            app_checkbox.addClass('checked');
        }
        else {
            app_checkbox.removeClass('checked');
        }
    }
});






