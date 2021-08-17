jQuery(document).ready(function($){
    $('body').on('click', '#place_order', function () {
	//	$('.woocommerce-error li').remove();
        //setTimeout( 
		//	function() {
				if ( ($('.woocommerce-invalid').length == 0 ) && ($('#terms').is(':checked')) && ($('.woocommerce-error').length == 0)) {
            		$('#place_order').attr('disabled', 'disabled');
            		$('#place_order').replaceWith('<img id="spinner" style="margin:0 auto; display:flex;">');
            		$('#spinner').attr('src', wpAjax.wpurl + "/wp-admin/images/spinner-2x.gif");
            		$('.checkout').submit();
        		}
		//	}, 500
    //);
        
     });
});