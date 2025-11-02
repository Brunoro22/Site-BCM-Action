<?php
/**
 * BCM ACTION Theme Functions
 */

// Adicionar suporte a recursos do tema
function bcm_action_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
    
    // Registrar menus
    register_nav_menus( array(
        'primary' => __( 'Menu Principal', 'bcm-action' ),
        'footer' => __( 'Menu Rodapé', 'bcm-action' ),
    ) );
}
add_action( 'after_setup_theme', 'bcm_action_theme_setup' );

// Enfileirar scripts e estilos
function bcm_action_enqueue_scripts() {
    // CSS
    wp_enqueue_style( 'bcm-action-style', get_stylesheet_uri() );
    wp_enqueue_style( 'bcm-action-custom', get_template_directory_uri() . '/css/custom.css' );
    
    // JavaScript
    wp_enqueue_script( 'bcm-action-main', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true );
    
    // Comentários
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'bcm_action_enqueue_scripts' );

// Classes customizadas para menu
function bcm_action_nav_menu_link_attributes( $atts, $item, $args ) {
    $atts['class'] = 'nav-link';
    return $atts;
}
add_filter( 'nav_menu_link_attributes', 'bcm_action_nav_menu_link_attributes', 10, 3 );

// Registrar widgets
function bcm_action_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Barra Lateral Principal', 'bcm-action' ),
        'id'            => 'primary-sidebar',
        'description'   => __( 'Widget principal', 'bcm-action' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
    
    register_sidebar( array(
        'name'          => __( 'Rodapé', 'bcm-action' ),
        'id'            => 'footer-sidebar',
        'description'   => __( 'Widget do rodapé', 'bcm-action' ),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'bcm_action_widgets_init' );

// Remover tipos de post customizados
function bcm_action_remove_post_types() {
    unregister_post_type( 'attachment' );
}
add_action( 'init', 'bcm_action_remove_post_types', 1 );

// Adicionar classes ao body
function bcm_action_body_class( $classes ) {
    if ( is_front_page() ) {
        $classes[] = 'home';
    }
    return $classes;
}
add_filter( 'body_class', 'bcm_action_body_class' );
