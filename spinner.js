jQuery(document).ready(function($){
    $('body').on('click', '#place_order', function () {
       $('#place_order').attr('disabled', 'disabled');
       (wpAjax.wpurl + "/wp-admin/images/spinner-2x.gif");
       spinner.
       $('#place_order').replaceWith('<img id="spinner" style="margin:0 auto;">');
       $('#spinner').attr('src', wpAjax.wpurl + "/wp-admin/images/spinner-2x.gif")
       $('.checkout').submit();
     });
});