<?php
/**
 * Plugin Name: WooCommerce Checkout Spinner
 * Description: Changes Checkout button to spinner on form submission.
 * Version: 1.0
 * Plugin URI: https://github.com/joe9663/checkout-spinner
 * Author: Joseph Wood & Harry Jackson
 * Author URI: https://github.com/joe9663
 */
/**
 * Adds jQuery to override default WooCommerce checkout button behavior.
 *
 * @since 1.0.0
 */
function checkout_spinner()
{
    wp_enqueue_script( 'checkout-spinner' , plugin_dir_url( __FILE__ ) . 'spinner.js' );
}
add_action('wp_enqueue_scripts', 'checkout_spinner');
