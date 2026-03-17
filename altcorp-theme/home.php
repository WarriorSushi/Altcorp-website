<?php
get_header();

$posts_page_title = get_option( 'page_for_posts' ) ? get_the_title( get_option( 'page_for_posts' ) ) : __( 'Writing', 'altcorp' );
$posts_page_copy  = get_option( 'page_for_posts' ) ? altcorp_get_summary( get_option( 'page_for_posts' ), __( 'Writing, announcements, and company perspective from across Altcorp.', 'altcorp' ) ) : __( 'Writing, announcements, and company perspective from across Altcorp.', 'altcorp' );
$artwork          = altcorp_get_editorial_artwork( 'forest' );
$artwork_style    = altcorp_get_surface_style( $artwork );
?>

<section class="page-hero page-hero--immersive page-hero--immersive-dark" style="<?php echo esc_attr( $artwork_style ); ?>">
	<div class="page-hero__content page-hero__content--immersive" data-reveal>
		<p class="eyebrow"><?php esc_html_e( 'Writing', 'altcorp' ); ?></p>
		<h1><?php echo esc_html( $posts_page_title ); ?></h1>
		<p class="page-hero__summary"><?php echo esc_html( $posts_page_copy ); ?></p>
	</div>

	<aside class="page-hero__panel page-hero__panel--immersive" data-reveal>
		<p class="eyebrow"><?php esc_html_e( 'Inside Altcorp', 'altcorp' ); ?></p>
		<h3><?php esc_html_e( 'Writing, announcements, and company perspective.', 'altcorp' ); ?></h3>
		<p><?php esc_html_e( 'This section publishes company notes, operating context, and group updates from across Altcorp.', 'altcorp' ); ?></p>
	</aside>
</section>

<section class="section-shell">
	<div class="post-grid">
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/post-card' ); ?>
			<?php endwhile; ?>
		<?php else : ?>
			<?php get_template_part( 'template-parts/content-none' ); ?>
		<?php endif; ?>
	</div>

	<?php the_posts_pagination(); ?>
</section>

<?php
get_footer();
