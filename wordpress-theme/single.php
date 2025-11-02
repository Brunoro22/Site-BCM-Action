<?php
/**
 * The template for displaying single posts
 */
get_header(); ?>

<main class="main-content post-content">
    <div class="container">
        <?php
        while ( have_posts() ) {
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class( 'post-article' ); ?>>
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                    <div class="entry-meta">
                        <span class="posted-on">
                            <?php
                            printf(
                                esc_html__( 'Publicado em %s', 'bcm-action' ),
                                '<a href="' . esc_url( get_permalink() ) . '">' . get_the_date() . '</a>'
                            );
                            ?>
                        </span>
                        <span class="byline">
                            <?php
                            printf(
                                esc_html__( 'Por %s', 'bcm-action' ),
                                '<a href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a>'
                            );
                            ?>
                        </span>
                    </div>
                </header>
                
                <?php
                if ( has_post_thumbnail() ) {
                    echo '<div class="post-thumbnail">';
                    the_post_thumbnail( 'large' );
                    echo '</div>';
                }
                ?>
                
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
                
                <footer class="entry-footer">
                    <?php the_tags( '<span class="tags">', ', ', '</span>' ); ?>
                </footer>
            </article>
            
            <?php
            comments_template();
        }
        ?>
    </div>
</main>

<?php get_footer();
