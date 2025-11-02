<?php
/**
 * Template part for displaying posts
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-item' ); ?>>
    <header class="entry-header">
        <h2 class="entry-title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h2>
        <div class="entry-meta">
            <span class="posted-on"><?php echo get_the_date(); ?></span>
            <span class="byline"><?php the_author(); ?></span>
        </div>
    </header>
    
    <?php
    if ( has_post_thumbnail() ) {
        echo '<div class="post-thumbnail-wrapper">';
        the_post_thumbnail( 'medium' );
        echo '</div>';
    }
    ?>
    
    <div class="entry-content">
        <?php
        the_excerpt();
        ?>
        <a href="<?php the_permalink(); ?>" class="read-more"><?php _e( 'Leia Mais', 'bcm-action' ); ?></a>
    </div>
</article>
