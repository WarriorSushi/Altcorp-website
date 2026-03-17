<?php
get_header();
?>

<?php while ( have_posts() ) : the_post(); ?>
	<section class="page-hero leadership-layout page-hero--founder">
		<div class="page-hero__stack" data-reveal>
			<div class="page-hero__content page-hero__content--immersive">
				<p class="eyebrow"><?php esc_html_e( 'Founder', 'altcorp' ); ?></p>
				<h1><?php the_title(); ?></h1>
				<p class="page-hero__summary"><?php echo esc_html( altcorp_get_summary( get_the_ID(), __( 'Dr. Syed Irfan is the founder of Altcorp and oversees the group across its businesses, products, and platforms.', 'altcorp' ) ) ); ?></p>
			</div>

			<aside class="page-hero__panel page-hero__panel--immersive" data-reveal>
				<ul class="meta-list">
					<li><span><?php esc_html_e( 'Role', 'altcorp' ); ?></span><strong><?php esc_html_e( 'Founder', 'altcorp' ); ?></strong></li>
					<li><span><?php esc_html_e( 'Work', 'altcorp' ); ?></span><strong><?php esc_html_e( 'Software businesses, digital products, and online platforms', 'altcorp' ); ?></strong></li>
					<li><span><?php esc_html_e( 'Base', 'altcorp' ); ?></span><strong><?php echo esc_html( altcorp_get_theme_setting( 'altcorp_contact_location', 'India' ) ); ?></strong></li>
				</ul>
			</aside>
		</div>

		<figure class="leadership-image" data-reveal>
			<img src="<?php echo esc_url( get_template_directory_uri() . '/founder.webp' ); ?>" alt="<?php esc_attr_e( 'Portrait of Dr. Syed Irfan', 'altcorp' ); ?>" loading="eager" decoding="async">
		</figure>
	</section>

	<section class="section-shell">
		<article class="panel panel--content" data-reveal>
			<div class="rich-copy">
				<?php the_content(); ?>
			</div>
		</article>
	</section>
<?php endwhile; ?>

<?php
get_footer();
