<?php
/**
 * The template for displaying the footer
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package BCM_ACTION
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="footer-content">
			<div class="container">
				<div class="footer-grid">
					<div class="footer-column">
						<h3><?php esc_html_e( 'Sobre Nós', 'bcm-action' ); ?></h3>
						<p><?php esc_html_e( 'BCM ACTION oferece soluções completas em serviços especializados para sua empresa.', 'bcm-action' ); ?></p>
					</div>
					<div class="footer-column">
						<h3><?php esc_html_e( 'Serviços', 'bcm-action' ); ?></h3>
						<?php
						wp_nav_menu( array(
							'theme_location' => 'footer',
							'menu_id'        => 'footer-menu',
							'fallback_cb'    => '',
							'container'      => '',
							'depth'          => 1,
						) );
						?>
					</div>
					<div class="footer-column">
						<h3><?php esc_html_e( 'Contato', 'bcm-action' ); ?></h3>
						<p>
							<?php esc_html_e( 'CNPJ: 52.418.107/0001-58', 'bcm-action' ); ?><br>
							<?php esc_html_e( 'WhatsApp: (21) 99999-9999', 'bcm-action' ); ?>
						</p>
					</div>
				</div>
				<div class="footer-bottom">
					<p>&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'Todos os Direitos Reservados.', 'bcm-action' ); ?></p>
				</div>
			</div>
		</div>
	</footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
