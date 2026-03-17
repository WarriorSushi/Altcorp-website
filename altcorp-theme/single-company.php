<?php
get_header();
?>

<?php while ( have_posts() ) : the_post(); ?>
	<?php
	$tagline     = altcorp_get_company_meta( get_the_ID(), '_altcorp_company_tagline' );
	$website_url = altcorp_get_company_meta( get_the_ID(), '_altcorp_company_website_url' );
	$terms       = get_the_terms( get_the_ID(), 'company_sector' );
	$artwork     = altcorp_get_company_artwork( get_the_ID() );
	$artwork_style = altcorp_get_surface_style( $artwork );
	?>
	<section class="page-hero page-hero--immersive" style="<?php echo esc_attr( $artwork_style ); ?>">
		<div class="page-hero__content page-hero__content--immersive" data-reveal>
			<p class="eyebrow"><?php echo $terms && ! is_wp_error( $terms ) ? esc_html( $terms[0]->name ) : esc_html__( 'Company', 'altcorp' ); ?></p>
			<h1><?php the_title(); ?></h1>
			<p class="page-hero__summary"><?php echo esc_html( $tagline ? $tagline : altcorp_get_summary( get_the_ID(), '' ) ); ?></p>
			<div class="action-row">
				<?php if ( $website_url ) : ?>
					<a class="button button--primary" href="<?php echo esc_url( $website_url ); ?>" target="_blank" rel="noopener"><?php esc_html_e( 'Visit Website', 'altcorp' ); ?></a>
				<?php endif; ?>
				<a class="button button--secondary" href="<?php echo esc_url( get_post_type_archive_link( 'company' ) ); ?>"><?php esc_html_e( 'Back To Companies', 'altcorp' ); ?></a>
			</div>
		</div>

		<aside class="page-hero__panel page-hero__panel--immersive" data-reveal>
			<ul class="meta-list">
				<li><span><?php esc_html_e( 'Parent', 'altcorp' ); ?></span><strong><?php bloginfo( 'name' ); ?></strong></li>
				<?php if ( $terms && ! is_wp_error( $terms ) ) : ?>
					<li><span><?php esc_html_e( 'Sector', 'altcorp' ); ?></span><strong><?php echo esc_html( $terms[0]->name ); ?></strong></li>
				<?php endif; ?>
				<li><span><?php esc_html_e( 'Type', 'altcorp' ); ?></span><strong><?php esc_html_e( 'Company profile', 'altcorp' ); ?></strong></li>
			</ul>
		</aside>
	</section>

	<section class="section-shell">
		<div class="story-grid story-grid--detail">
			<article class="panel panel--content" data-reveal>
				<div class="rich-copy">
					<?php the_content(); ?>
				</div>
			</article>

			<aside class="panel panel--note" data-reveal>
				<p class="eyebrow"><?php esc_html_e( 'Within Altcorp', 'altcorp' ); ?></p>
				<h3><?php esc_html_e( 'Where this entry sits in the group.', 'altcorp' ); ?></h3>
				<p><?php bloginfo( 'name' ); ?> <?php esc_html_e( 'presents this business as part of the wider group record, alongside the other companies, products, and platforms listed across the site.', 'altcorp' ); ?></p>
				<?php if ( $website_url ) : ?>
					<a class="text-link" href="<?php echo esc_url( $website_url ); ?>" target="_blank" rel="noopener"><?php esc_html_e( 'Open external website', 'altcorp' ); ?></a>
				<?php endif; ?>
			</aside>
		</div>
	</section>
<?php endwhile; ?>

<?php
get_footer();
