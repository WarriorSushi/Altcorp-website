<?php
get_header();

$about_page    = get_page_by_path( 'about-altcorp' );
$leadership_page = get_page_by_path( 'leadership' );
$contact_page  = get_page_by_path( 'contact' );
$insights_page = get_option( 'page_for_posts' ) ? get_permalink( get_option( 'page_for_posts' ) ) : home_url( '/insights/' );
$base_location = altcorp_get_theme_setting( 'altcorp_contact_location', 'India' );

$hero_image     = trailingslashit( get_template_directory() ) . 'assets/images/fields-hero.jpg';
$hero_art_url   = file_exists( $hero_image ) ? get_theme_file_uri( '/assets/images/fields-hero.jpg' ) : get_theme_file_uri( '/assets/images/fields.jpg' );
$lines_art_url  = get_theme_file_uri( '/assets/images/lines.webp' );
$hero_art_style = altcorp_get_surface_style( $hero_art_url );
$lines_art_style = altcorp_get_surface_style( $lines_art_url );

$software_ids = array();
foreach ( array( 'burnerlinks', 'feedbacks-dev', 'supaviewer', 'verified-doctor' ) as $slug ) {
	$entry = get_page_by_path( $slug, OBJECT, 'company' );
	if ( $entry ) {
		$software_ids[] = $entry->ID;
	}
}

$portfolio_ids = array();
foreach ( array( 'afknpc', 'mygang-ai', 'ottr-chat' ) as $slug ) {
	$entry = get_page_by_path( $slug, OBJECT, 'company' );
	if ( $entry ) {
		$portfolio_ids[] = $entry->ID;
	}
}

$software_query = new WP_Query(
	array(
		'post_type'      => 'company',
		'posts_per_page' => count( $software_ids ),
		'post__in'       => $software_ids,
		'orderby'        => 'post__in',
	)
);

$portfolio_query = new WP_Query(
	array(
		'post_type'      => 'company',
		'posts_per_page' => count( $portfolio_ids ),
		'post__in'       => $portfolio_ids,
		'orderby'        => 'post__in',
	)
);

$insights_query = new WP_Query(
	array(
		'post_type'      => 'post',
		'posts_per_page' => 3,
	)
);
?>

<?php while ( have_posts() ) : the_post(); ?>
	<section class="hero hero--immersive" style="<?php echo esc_attr( $hero_art_style ); ?>">
		<div class="hero__copy hero__copy--immersive" data-reveal>
			<p class="eyebrow"><?php esc_html_e( 'Altcorp', 'altcorp' ); ?></p>
			<h1 class="hero__title"><?php esc_html_e( 'The parent company behind software products, digital platforms, and operating brands.', 'altcorp' ); ?></h1>
			<p class="hero__lede"><?php esc_html_e( 'Altcorp brings together a growing group of companies and products across software, healthcare, media, and consumer internet.', 'altcorp' ); ?></p>

			<div class="action-row">
				<a class="button button--primary" href="<?php echo esc_url( get_post_type_archive_link( 'company' ) ); ?>"><?php esc_html_e( 'Explore Companies', 'altcorp' ); ?></a>
				<?php if ( $about_page ) : ?>
					<a class="button button--secondary" href="<?php echo esc_url( get_permalink( $about_page ) ); ?>"><?php esc_html_e( 'About Altcorp', 'altcorp' ); ?></a>
				<?php endif; ?>
			</div>

			<p class="page-meta-line"><?php esc_html_e( 'This site introduces the group, the companies within it, and the products it operates.', 'altcorp' ); ?></p>
		</div>
	</section>

	<section class="section-shell">
		<div class="section-surface section-surface--lines" data-reveal style="<?php echo esc_attr( $lines_art_style ); ?>">
			<div class="section-head section-head--surface">
				<p class="eyebrow"><?php esc_html_e( 'About Altcorp', 'altcorp' ); ?></p>
				<h2><?php esc_html_e( 'Altcorp is structured to build and operate internet businesses over the long term.', 'altcorp' ); ?></h2>
				<p><?php esc_html_e( 'The group brings together companies, products, and specialist platforms under one operating structure.', 'altcorp' ); ?></p>
			</div>

			<div class="story-grid story-grid--surface">
				<article class="panel panel--text" data-reveal>
					<div class="rich-copy">
						<?php the_content(); ?>
					</div>
				</article>

				<aside class="panel panel--note" data-reveal>
					<p class="eyebrow"><?php esc_html_e( 'Structure', 'altcorp' ); ?></p>
					<h3><?php esc_html_e( 'One parent company, multiple specialised businesses.', 'altcorp' ); ?></h3>
					<p><?php esc_html_e( 'Altcorp provides the ownership, strategic direction, and operating structure that connects the wider group.', 'altcorp' ); ?></p>
				</aside>
			</div>
		</div>
	</section>

<section class="section-shell">
	<div class="section-head" data-reveal>
		<p class="eyebrow"><?php esc_html_e( 'Companies & Products', 'altcorp' ); ?></p>
		<h2><?php esc_html_e( 'Selected companies, software products, and platforms under Altcorp.', 'altcorp' ); ?></h2>
		<p><?php esc_html_e( 'Altcorp includes category-specific software, consumer products, and specialist digital platforms serving distinct markets.', 'altcorp' ); ?></p>
	</div>

	<div class="catalog-group" data-reveal>
		<div class="catalog-group__head">
			<p class="eyebrow"><?php esc_html_e( 'Core Platforms', 'altcorp' ); ?></p>
			<p><?php esc_html_e( 'Core software products and infrastructure-led platforms within the group.', 'altcorp' ); ?></p>
		</div>

		<div class="card-grid">
			<?php if ( $software_query->have_posts() ) : ?>
				<?php while ( $software_query->have_posts() ) : $software_query->the_post(); ?>
					<?php get_template_part( 'template-parts/company-card' ); ?>
				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>
			<?php endif; ?>
		</div>
	</div>

	<div class="catalog-group" data-reveal>
		<div class="catalog-group__head">
			<p class="eyebrow"><?php esc_html_e( 'Consumer & Network Products', 'altcorp' ); ?></p>
			<p><?php esc_html_e( 'Consumer-facing products, communication platforms, and entertainment software operated within the Altcorp group.', 'altcorp' ); ?></p>
		</div>

		<div class="card-grid">
			<?php if ( $portfolio_query->have_posts() ) : ?>
				<?php while ( $portfolio_query->have_posts() ) : $portfolio_query->the_post(); ?>
					<?php get_template_part( 'template-parts/company-card' ); ?>
				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>
			<?php endif; ?>
		</div>
	</div>
</section>

<section class="section-shell">
	<div class="section-head" data-reveal>
		<p class="eyebrow"><?php esc_html_e( 'Founder', 'altcorp' ); ?></p>
		<h2><?php esc_html_e( 'Dr. Syed Irfan', 'altcorp' ); ?></h2>
		<p><?php esc_html_e( 'Founder of Altcorp.', 'altcorp' ); ?></p>
	</div>

	<div class="story-grid">
		<article class="panel panel--text" data-reveal>
			<div class="rich-copy">
				<p><?php esc_html_e( 'Dr. Syed Irfan is the founder of Altcorp and oversees its group strategy, product direction, and long-term development.', 'altcorp' ); ?></p>
				<p><?php esc_html_e( 'His work centres on building and operating software companies, digital products, and category-specific platforms under the Altcorp umbrella.', 'altcorp' ); ?></p>
			</div>
		</article>

		<aside class="panel panel--note" data-reveal>
			<p class="eyebrow"><?php esc_html_e( 'Approach', 'altcorp' ); ?></p>
			<h3><?php esc_html_e( 'Group leadership across software, platforms, and operating brands.', 'altcorp' ); ?></h3>
			<p><?php esc_html_e( 'Altcorp allows each business to retain a clear market position while benefiting from shared ownership and strategic direction.', 'altcorp' ); ?></p>
			<?php if ( $leadership_page ) : ?>
				<a class="text-link" href="<?php echo esc_url( get_permalink( $leadership_page ) ); ?>"><?php esc_html_e( 'Read founder page', 'altcorp' ); ?></a>
			<?php endif; ?>
		</aside>
	</div>
</section>

<section class="section-shell">
	<div class="section-head" data-reveal>
		<p class="eyebrow"><?php esc_html_e( 'Writing & Updates', 'altcorp' ); ?></p>
		<h2><?php esc_html_e( 'Writing, announcements, and perspective from across Altcorp.', 'altcorp' ); ?></h2>
		<p><?php esc_html_e( 'This section publishes updates that explain the group, its businesses, and the markets it serves.', 'altcorp' ); ?></p>
	</div>

	<div class="story-grid">
		<article class="panel panel--text" data-reveal>
			<div class="rich-copy">
				<p><?php esc_html_e( 'This section contains company writing, product commentary, and selected updates from across Altcorp.', 'altcorp' ); ?></p>
			</div>
		</article>

		<aside class="panel panel--note" data-reveal>
			<p class="eyebrow"><?php esc_html_e( 'Writing', 'altcorp' ); ?></p>
			<h3><?php esc_html_e( 'Context for the group and the businesses within it.', 'altcorp' ); ?></h3>
			<p><?php esc_html_e( 'Writing provides a clearer view of Altcorp\'s companies, operating priorities, and broader direction.', 'altcorp' ); ?></p>
		</aside>
	</div>

	<div class="post-grid">
		<?php if ( $insights_query->have_posts() ) : ?>
			<?php while ( $insights_query->have_posts() ) : $insights_query->the_post(); ?>
				<?php get_template_part( 'template-parts/post-card' ); ?>
			<?php endwhile; ?>
			<?php wp_reset_postdata(); ?>
		<?php else : ?>
			<?php get_template_part( 'template-parts/content-none' ); ?>
		<?php endif; ?>
	</div>

	<div class="action-row action-row--left" data-reveal>
		<a class="button button--secondary" href="<?php echo esc_url( $insights_page ); ?>"><?php esc_html_e( 'View All Writing', 'altcorp' ); ?></a>
	</div>
</section>

<section class="section-shell">
	<div class="story-grid">
		<article class="panel panel--content" data-reveal>
			<p class="eyebrow"><?php esc_html_e( 'Contact', 'altcorp' ); ?></p>
			<h2><?php esc_html_e( 'Contact Altcorp for company, product, or business enquiries.', 'altcorp' ); ?></h2>
			<p><?php esc_html_e( 'Use the Altcorp contact page for group enquiries, commercial discussions, or questions about any company listed here.', 'altcorp' ); ?></p>
			<div class="action-row">
				<?php if ( $contact_page ) : ?>
					<a class="button button--primary" href="<?php echo esc_url( get_permalink( $contact_page ) ); ?>"><?php esc_html_e( 'Contact Altcorp', 'altcorp' ); ?></a>
				<?php endif; ?>
			</div>
		</article>

		<aside class="contact-rail" data-reveal>
			<div class="contact-card">
				<span><?php esc_html_e( 'Email', 'altcorp' ); ?></span>
				<a href="mailto:<?php echo antispambot( esc_attr( altcorp_get_theme_setting( 'altcorp_contact_email', 'contact@altcorp.in' ) ) ); ?>"><?php echo esc_html( altcorp_get_theme_setting( 'altcorp_contact_email', 'contact@altcorp.in' ) ); ?></a>
			</div>
			<div class="contact-card">
				<span><?php esc_html_e( 'Location', 'altcorp' ); ?></span>
				<strong><?php echo esc_html( $base_location ); ?></strong>
			</div>
		</aside>
	</div>
</section>
<?php endwhile; ?>

<?php
get_footer();
