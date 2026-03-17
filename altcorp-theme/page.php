<?php
get_header();
?>

<?php while ( have_posts() ) : the_post(); ?>
	<section class="page-hero">
		<div class="page-hero__content" data-reveal>
			<p class="eyebrow"><?php echo esc_html( get_post_type_object( get_post_type() )->labels->singular_name ); ?></p>
			<h1><?php the_title(); ?></h1>
			<p class="page-hero__summary"><?php echo esc_html( altcorp_get_summary( get_the_ID(), altcorp_get_theme_setting( 'altcorp_company_tagline', get_bloginfo( 'description' ) ) ) ); ?></p>
		</div>
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
