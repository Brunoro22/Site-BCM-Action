<?php
/**
 * The main template file
 */
get_header(); ?>

<main class="main-content">
    <div class="container">
        <?php
        if ( have_posts() ) {
            while ( have_posts() ) {
                the_post();
                get_template_part( 'template-parts/content', get_post_type() );
            }
            
            the_posts_pagination( array(
                'prev_text' => __( 'Anterior', 'bcm-action' ),
                'next_text' => __( 'Próximo', 'bcm-action' ),
            ) );
        } else {
            get_template_part( 'template-parts/content', 'none' );
        }
        ?>
    </div>
</main>

<?php get_footer();
