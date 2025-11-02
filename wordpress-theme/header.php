<?php
/**
 * The header for our theme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo( 'description' ); ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <header class="header">
        <nav class="navbar">
            <div class="container navbar-container">
                <div class="navbar-logo">
                    <?php
                    if ( has_custom_logo() ) {
                        the_custom_logo();
                    } else {
                        echo '<a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html( bloginfo( 'name' ) ) . '</a>';
                    }
                    ?>
                </div>
                
                <button class="navbar-toggle" id="navbar-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <div class="navbar-menu" id="navbar-menu">
                    <?php
                    wp_nav_menu( array(
                        'theme_location' => 'primary',
                        'container_class' => 'nav-menu',
                        'fallback_cb' => 'wp_page_menu',
                    ) );
                    ?>
                </div>
            </div>
        </nav>
    </header>
