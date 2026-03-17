	</main>
	<footer class="site-footer">
		<div class="site-footer__grid">
			<div class="site-footer__intro" data-reveal>
				<p class="eyebrow"><?php esc_html_e( 'Altcorp', 'altcorp' ); ?></p>
				<h2 class="site-footer__title"><?php esc_html_e( 'The parent company behind Altcorp\'s software, platforms, and operating businesses.', 'altcorp' ); ?></h2>
				<p class="site-footer__text"><?php echo esc_html( altcorp_get_theme_setting( 'altcorp_company_tagline', 'The parent company behind Altcorp\'s software, platforms, and operating businesses.' ) ); ?></p>
			</div>

			<div class="site-footer__column" data-reveal>
				<p class="eyebrow"><?php esc_html_e( 'Navigate', 'altcorp' ); ?></p>
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'footer',
						'container'      => false,
						'menu_class'     => 'site-footer__links',
						'fallback_cb'    => 'altcorp_fallback_menu',
					)
				);
				?>
			</div>

			<div class="site-footer__column" data-reveal>
				<p class="eyebrow"><?php esc_html_e( 'Contact', 'altcorp' ); ?></p>
				<ul class="site-footer__meta">
					<li><span><?php esc_html_e( 'Email', 'altcorp' ); ?></span><a href="mailto:<?php echo antispambot( esc_attr( altcorp_get_theme_setting( 'altcorp_contact_email', 'contact@altcorp.in' ) ) ); ?>"><?php echo esc_html( altcorp_get_theme_setting( 'altcorp_contact_email', 'contact@altcorp.in' ) ); ?></a></li>
					<li><span><?php esc_html_e( 'Location', 'altcorp' ); ?></span><strong><?php echo esc_html( altcorp_get_theme_setting( 'altcorp_contact_location', 'India' ) ); ?></strong></li>
					<li><span><?php esc_html_e( 'Scope', 'altcorp' ); ?></span><strong><?php esc_html_e( 'Software businesses, digital products, and online platforms', 'altcorp' ); ?></strong></li>
				</ul>
			</div>
		</div>

		<div class="site-footer__base">
			<p>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?></p>
		</div>
	</footer>
</div>
<?php wp_footer(); ?>
</body>
</html>
