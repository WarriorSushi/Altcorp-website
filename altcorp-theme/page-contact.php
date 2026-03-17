<?php
get_header();

$artwork = altcorp_get_editorial_artwork( 'forest' );
$artwork_style = altcorp_get_surface_style( $artwork );
?>

<?php while ( have_posts() ) : the_post(); ?>
	<section class="page-hero page-hero--immersive page-hero--immersive-dark" style="<?php echo esc_attr( $artwork_style ); ?>">
		<div class="page-hero__content page-hero__content--immersive" data-reveal>
			<p class="eyebrow"><?php esc_html_e( 'Contact', 'altcorp' ); ?></p>
			<h1><?php the_title(); ?></h1>
			<p class="page-hero__summary"><?php echo esc_html( altcorp_get_summary( get_the_ID(), __( 'Reach out regarding Altcorp, one of its companies, or a business enquiry related to the group.', 'altcorp' ) ) ); ?></p>
		</div>

		<aside class="page-hero__panel page-hero__panel--immersive" data-reveal>
			<div class="contact-card">
				<span><?php esc_html_e( 'Email', 'altcorp' ); ?></span>
				<a href="mailto:<?php echo antispambot( esc_attr( altcorp_get_theme_setting( 'altcorp_contact_email', 'contact@altcorp.in' ) ) ); ?>"><?php echo esc_html( altcorp_get_theme_setting( 'altcorp_contact_email', 'contact@altcorp.in' ) ); ?></a>
			</div>
			<div class="contact-card">
				<span><?php esc_html_e( 'Base', 'altcorp' ); ?></span>
				<strong><?php echo esc_html( altcorp_get_theme_setting( 'altcorp_contact_location', 'India' ) ); ?></strong>
			</div>
			<div class="contact-card">
				<span><?php esc_html_e( 'Best for', 'altcorp' ); ?></span>
				<strong><?php esc_html_e( 'Company enquiries, product questions, and business discussions', 'altcorp' ); ?></strong>
			</div>
		</aside>
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
