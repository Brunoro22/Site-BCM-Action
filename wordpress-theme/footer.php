<?php
/**
 * The footer for our theme
 */
?>
    <footer class="footer">
        <div class="footer-content">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-column">
                        <h3><?php _e( 'BCM ACTION', 'bcm-action' ); ?></h3>
                        <p><?php _e( 'Soluções completas em serviços especializados', 'bcm-action' ); ?></p>
                    </div>
                    
                    <div class="footer-column">
                        <h3><?php _e( 'Serviços', 'bcm-action' ); ?></h3>
                        <ul>
                            <li><a href="#servicos"><?php _e( 'Promotoria de Vendas', 'bcm-action' ); ?></a></li>
                            <li><a href="#servicos"><?php _e( 'Serviços Administrativos', 'bcm-action' ); ?></a></li>
                            <li><a href="#servicos"><?php _e( 'Limpeza e Conservação', 'bcm-action' ); ?></a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3><?php _e( 'Contato', 'bcm-action' ); ?></h3>
                        <p>CNPJ: 52.418.107/0001-58</p>
                        <p><?php _e( 'Rio de Janeiro, Minas Gerais e Espírito Santo', 'bcm-action' ); ?></p>
                    </div>
                    
                    <div class="footer-column">
                        <?php
                        wp_nav_menu( array(
                            'theme_location' => 'footer',
                            'container_class' => 'footer-menu',
                            'fallback_cb' => false,
                        ) );
                        ?>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="container">
                <p>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. <?php _e( 'Todos os direitos reservados.', 'bcm-action' ); ?></p>
            </div>
        </div>
    </footer>
    
    <?php wp_footer(); ?>
</body>
</html>
