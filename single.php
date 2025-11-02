<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package BCM_ACTION
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php
		while ( have_posts() ) {
			the_post();
			?>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<header class="entry-header">
					<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
					<div class="entry-meta">
						<?php
						echo esc_html( get_the_date() );
						echo ' | ' . esc_html__( 'Por', 'bcm-action' ) . ' ' . esc_html( get_the_author() );
						?>
					</div>
				</header><!-- .entry-header -->

				<?php if ( has_post_thumbnail() ) : ?>
					<div class="post-thumbnail">
						<?php the_post_thumbnail( 'bcm-action-hero' ); ?>
					</div>
				<?php endif; ?>

				<div class="entry-content">
					<?php
					the_content();
					wp_link_pages( array(
						'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'bcm-action' ),
						'after'  => '</div>',
					) );
					?>
				</div><!-- .entry-content -->

				<nav class="post-navigation">
					<?php
					the_post_navigation( array(
						'prev_text' => esc_html__( 'Post Anterior', 'bcm-action' ),
						'next_text' => esc_html__( 'Próximo Post', 'bcm-action' ),
					) );
					?>
				</nav>
			</article><!-- #post-<?php the_ID(); ?> -->
			<?php
		}
		?>

	</main><!-- #primary -->

<?php
get_sidebar();
get_footer();
