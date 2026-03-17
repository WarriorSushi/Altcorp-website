<?php
$brand_logo = altcorp_get_brand_logo_url();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php if ( ! has_site_icon() && $brand_logo ) : ?>
		<link rel="icon" type="image/png" href="<?php echo esc_url( $brand_logo ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="site-shell">
	<header class="site-header">
		<div class="site-header__inner">
			<a class="site-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
				<span class="site-brand__mark">
					<?php if ( $brand_logo ) : ?>
						<img src="<?php echo esc_url( $brand_logo ); ?>" alt="<?php esc_attr_e( 'Altcorp logo', 'altcorp' ); ?>">
					<?php else : ?>
						<span>A</span>
					<?php endif; ?>
				</span>
				<span class="site-brand__copy">
					<span class="site-brand__name"><?php bloginfo( 'name' ); ?></span>
					<span class="site-brand__descriptor"><?php esc_html_e( 'Companies, products, and platforms', 'altcorp' ); ?></span>
				</span>
			</a>

			<button class="site-nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="<?php esc_attr_e( 'Toggle navigation', 'altcorp' ); ?>">
				<span></span>
				<span></span>
				<span></span>
			</button>

			<nav id="primary-navigation" class="site-nav" aria-label="<?php esc_attr_e( 'Primary navigation', 'altcorp' ); ?>">
				<div class="site-nav__panel">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'primary',
							'container'      => false,
							'menu_class'     => 'site-nav__list',
							'fallback_cb'    => 'altcorp_fallback_menu',
						)
					);
					?>
				</div>
			</nav>
		</div>
		<div class="site-nav-backdrop" aria-hidden="true"></div>
	</header>
	<main class="site-main">
