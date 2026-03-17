<?php
get_header();

$artwork = altcorp_get_editorial_artwork( 'still-life' );
$artwork_style = altcorp_get_surface_style( $artwork );
?>

<?php while ( have_posts() ) : the_post(); ?>
	<section class="page-hero page-hero--immersive" style="<?php echo esc_attr( $artwork_style ); ?>">
		<div class="page-hero__content page-hero__content--immersive" data-reveal>
			<p class="eyebrow"><?php esc_html_e( 'About Altcorp', 'altcorp' ); ?></p>
			<h1><?php the_title(); ?></h1>
			<p class="page-hero__summary"><?php echo esc_html( altcorp_get_summary( get_the_ID(), __( 'Altcorp is the parent company behind a growing group of software businesses, products, and platforms.', 'altcorp' ) ) ); ?></p>
		</div>

		<aside class="page-hero__panel page-hero__panel--immersive" data-reveal>
			<ul class="meta-list">
				<li><span><?php esc_html_e( 'Role', 'altcorp' ); ?></span><strong><?php esc_html_e( 'Parent company', 'altcorp' ); ?></strong></li>
				<li><span><?php esc_html_e( 'Scope', 'altcorp' ); ?></span><strong><?php esc_html_e( 'Companies, products, and platforms', 'altcorp' ); ?></strong></li>
				<li><span><?php esc_html_e( 'Mode', 'altcorp' ); ?></span><strong><?php esc_html_e( 'Ownership, operations, and long-term brand building', 'altcorp' ); ?></strong></li>
			</ul>
		</aside>
	</section>

	<section class="section-shell">
		<div class="story-grid story-grid--page">
			<article class="panel panel--text" data-reveal>
				<div class="rich-copy">
					<?php the_content(); ?>
				</div>
			</article>

			<div class="structure-grid structure-grid--stacked">
				<article class="structure-card" data-reveal>
					<h3><?php esc_html_e( 'Internet-native companies', 'altcorp' ); ?></h3>
					<p><?php esc_html_e( 'Altcorp builds and operates companies designed for software distribution, digital services, and online markets.', 'altcorp' ); ?></p>
				</article>
				<article class="structure-card" data-reveal>
					<h3><?php esc_html_e( 'Products and platforms', 'altcorp' ); ?></h3>
					<p><?php esc_html_e( 'The group includes software products, specialist tools, and digital platforms built for clearly defined audiences and commercial use cases.', 'altcorp' ); ?></p>
				</article>
				<article class="structure-card" data-reveal>
					<h3><?php esc_html_e( 'Coherent parent structure', 'altcorp' ); ?></h3>
					<p><?php esc_html_e( 'Altcorp provides the parent structure that connects multiple brands, products, and operating entities inside one company.', 'altcorp' ); ?></p>
				</article>
			</div>
		</div>
	</section>
<?php endwhile; ?>

<?php
get_footer();
