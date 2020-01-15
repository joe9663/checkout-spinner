jQuery(document).ready(function(){
    jQuery('#place_order').click(function () {
       jQuery('#place_order').attr('disabled', 'disabled');
       jQuery('#place_order').replaceWith('<img style="margin:0 auto;" src="/wp-admin/images/spinner-2x.gif">')
       jQuery('.checkout').submit();
     });
});