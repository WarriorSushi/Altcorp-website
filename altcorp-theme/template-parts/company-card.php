<article <?php post_class( 'company-card' ); ?> data-reveal>
	<?php
	$tagline     = altcorp_get_company_meta( get_the_ID(), '_altcorp_company_tagline' );
	$website_url = altcorp_get_company_meta( get_the_ID(), '_altcorp_company_website_url' );
	$terms       = get_the_terms( get_the_ID(), 'company_sector' );
	$excerpt     = get_the_excerpt();
	?>
	<div class="company-card__meta">
		<?php if ( $terms && ! is_wp_error( $terms ) ) : ?>
			<span class="term-chip"><?php echo esc_html( $terms[0]->name ); ?></span>
		<?php endif; ?>
	</div>

	<div class="company-card__body">
		<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
		<?php if ( $tagline ) : ?>
			<p class="company-card__tagline"><?php echo esc_html( $tagline ); ?></p>
		<?php endif; ?>
		<?php if ( $excerpt && trim( wp_strip_all_tags( $excerpt ) ) !== trim( wp_strip_all_tags( $tagline ) ) ) : ?>
			<p class="company-card__excerpt"><?php echo esc_html( $excerpt ); ?></p>
		<?php endif; ?>
	</div>

	<div class="company-card__actions">
		<a class="text-link" href="<?php the_permalink(); ?>"><?php esc_html_e( 'Open profile', 'altcorp' ); ?></a>
		<?php if ( $website_url ) : ?>
			<a class="text-link" href="<?php echo esc_url( $website_url ); ?>" target="_blank" rel="noopener"><?php esc_html_e( 'Visit website', 'altcorp' ); ?></a>
		<?php endif; ?>
	</div>
</article>
