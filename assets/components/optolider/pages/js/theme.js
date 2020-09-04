'use strict';

$(function () {

    // =====================================================
    //      Forms custom JS mvtForms2
    // =====================================================

    mvtForms2.callbacks.success = function (response) {
        $("body").overhang({
            type: "success",
            message: response.data.answer
        });
        $('#' + response.form + '_form').reset();
    };

    mvtForms2.callbacks.error = function (response) {
        $("body").overhang({
            type: "error",
            message: response.data.message
        });
    };

    $('.btn.btn-lg.btn-warning').on("show.bs.modal", function(e){
       console.log('show bs modal');
    });
});