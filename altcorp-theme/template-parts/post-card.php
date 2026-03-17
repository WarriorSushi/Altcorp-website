<article <?php post_class( 'post-card' ); ?> data-reveal>
	<p class="post-card__meta"><?php echo esc_html( get_the_date() ); ?></p>
	<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
	<p><?php echo esc_html( altcorp_get_summary( get_the_ID(), '' ) ); ?></p>
	<a class="text-link" href="<?php the_permalink(); ?>"><?php esc_html_e( 'Read article', 'altcorp' ); ?></a>
</article>
