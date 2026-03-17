<?php
get_header();
?>

<section class="page-hero">
	<div class="page-hero__content" data-reveal>
		<p class="eyebrow"><?php esc_html_e( 'Latest', 'altcorp' ); ?></p>
		<h1><?php wp_title( '' ); ?></h1>
		<p class="page-hero__summary"><?php esc_html_e( 'Browse the latest pages and posts published on Altcorp.', 'altcorp' ); ?></p>
	</div>
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
