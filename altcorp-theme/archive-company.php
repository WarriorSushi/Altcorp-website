<?php
get_header();

$company_count = (int) wp_count_posts( 'company' )->publish;
$sector_count  = (int) wp_count_terms(
	array(
		'taxonomy'   => 'company_sector',
		'hide_empty' => true,
	)
);
$artwork = altcorp_get_editorial_artwork( 'cloud' );
$artwork_style = altcorp_get_surface_style( $artwork );
?>

<section class="page-hero page-hero--immersive" style="<?php echo esc_attr( $artwork_style ); ?>">
	<div class="page-hero__content page-hero__content--immersive" data-reveal>
		<p class="eyebrow"><?php esc_html_e( 'Companies & Products', 'altcorp' ); ?></p>
		<h1><?php post_type_archive_title(); ?></h1>
		<p class="page-hero__summary"><?php esc_html_e( 'This section presents the companies, software products, and digital platforms operating under Altcorp.', 'altcorp' ); ?></p>
	</div>

	<aside class="page-hero__panel page-hero__panel--immersive" data-reveal>
		<div class="metric-strip">
			<article class="metric">
				<span><?php esc_html_e( 'Entries', 'altcorp' ); ?></span>
				<strong><?php echo esc_html( (string) $company_count ); ?></strong>
			</article>
			<article class="metric">
				<span><?php esc_html_e( 'Sectors', 'altcorp' ); ?></span>
				<strong><?php echo esc_html( (string) $sector_count ); ?></strong>
			</article>
			<article class="metric">
				<span><?php esc_html_e( 'Parent', 'altcorp' ); ?></span>
				<strong><?php bloginfo( 'name' ); ?></strong>
			</article>
		</div>
	</aside>
</section>

<section class="section-shell">
	<div class="term-row" data-reveal>
		<?php foreach ( get_terms( array( 'taxonomy' => 'company_sector', 'hide_empty' => true ) ) as $term ) : ?>
			<span class="term-chip"><?php echo esc_html( $term->name ); ?></span>
		<?php endforeach; ?>
	</div>

	<div class="card-grid">
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/company-card' ); ?>
			<?php endwhile; ?>
		<?php else : ?>
			<?php get_template_part( 'template-parts/content-none' ); ?>
		<?php endif; ?>
	</div>

	<?php the_posts_pagination(); ?>
</section>

<?php
get_footer();
