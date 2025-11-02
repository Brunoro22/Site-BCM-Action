<?php
/**
 * BCM ACTION Theme Functions
 *
 * @package BCM_ACTION
 */

// Define theme directory
define( 'BCM_ACTION_DIR', get_template_directory() );
define( 'BCM_ACTION_URI', get_template_directory_uri() );

/**
 * Configuração inicial do tema
 */
function bcm_action_setup() {
	// Tradução
	load_theme_textdomain( 'bcm-action', BCM_ACTION_DIR . '/languages' );

	// Suporte para recursos do WordPress
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
		'script',
		'style',
	) );
	add_theme_support( 'custom-logo' );
	add_theme_support( 'responsive-embeds' );

	// Registrar menus
	register_nav_menus( array(
		'primary' => esc_html__( 'Menu Principal', 'bcm-action' ),
		'footer'  => esc_html__( 'Menu Rodapé', 'bcm-action' ),
	) );
}
add_action( 'after_setup_theme', 'bcm_action_setup' );

/**
 * Enfileirar estilos e scripts
 */
function bcm_action_scripts() {
	// Estilos
	wp_enqueue_style( 'bcm-action-style', BCM_ACTION_URI . '/style.css', array(), '1.0.0' );
	wp_enqueue_style( 'bcm-action-custom', BCM_ACTION_URI . '/css/custom.css', array(), '1.0.0' );

	// Scripts
	wp_enqueue_script( 'bcm-action-main', BCM_ACTION_URI . '/js/main.js', array(), '1.0.0', true );

	// Desabilitar jQuery se não precisar
	if ( ! is_admin() ) {
		wp_deregister_script( 'jquery' );
	}
}
add_action( 'wp_enqueue_scripts', 'bcm_action_scripts' );

/**
 * Adicionar classe personalizada ao body
 */
function bcm_action_body_class( $classes ) {
	if ( is_front_page() ) {
		$classes[] = 'home-page';
	}
	return $classes;
}
add_filter( 'body_class', 'bcm_action_body_class' );

/**
 * Registrar widgets
 */
function bcm_action_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar Principal', 'bcm-action' ),
		'id'            => 'primary-sidebar',
		'description'   => esc_html__( 'Sidebar principal do site', 'bcm-action' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'bcm_action_widgets_init' );

/**
 * Customizar tamanho de excerpt
 */
function bcm_action_excerpt_length( $length ) {
	return 20;
}
add_filter( 'excerpt_length', 'bcm_action_excerpt_length' );

/**
 * Customizar botão de "Ler mais"
 */
function bcm_action_excerpt_more( $more ) {
	return '...';
}
add_filter( 'excerpt_more', 'bcm_action_excerpt_more' );

/**
 * Adicionar suporte para imagens responsivas
 */
function bcm_action_image_sizes() {
	add_image_size( 'bcm-action-hero', 1920, 1080, true );
	add_image_size( 'bcm-action-service', 600, 400, true );
	add_image_size( 'bcm-action-thumbnail', 300, 300, true );
}
add_action( 'after_setup_theme', 'bcm_action_image_sizes' );
