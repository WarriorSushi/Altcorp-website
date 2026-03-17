<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function altcorp_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 96,
			'width'       => 320,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
	add_theme_support(
		'editor-color-palette',
		array(
			array(
				'name'  => __( 'Ink', 'altcorp' ),
				'slug'  => 'ink',
				'color' => '#14161d',
			),
			array(
				'name'  => __( 'Stone', 'altcorp' ),
				'slug'  => 'stone',
				'color' => '#f6f1e8',
			),
			array(
				'name'  => __( 'Soft Sky', 'altcorp' ),
				'slug'  => 'soft-sky',
				'color' => '#dce7ff',
			),
			array(
				'name'  => __( 'Brand Violet', 'altcorp' ),
				'slug'  => 'brand-violet',
				'color' => '#5d17bd',
			),
			array(
				'name'  => __( 'Mist', 'altcorp' ),
				'slug'  => 'mist',
				'color' => '#edf1f8',
			),
		)
	);
	add_theme_support(
		'editor-font-sizes',
		array(
			array(
				'name' => __( 'Body', 'altcorp' ),
				'shortName' => __( 'Body', 'altcorp' ),
				'size' => 18,
				'slug' => 'body',
			),
			array(
				'name' => __( 'Large Body', 'altcorp' ),
				'shortName' => __( 'Large', 'altcorp' ),
				'size' => 22,
				'slug' => 'large-body',
			),
			array(
				'name' => __( 'Display', 'altcorp' ),
				'shortName' => __( 'Display', 'altcorp' ),
				'size' => 56,
				'slug' => 'display',
			),
		)
	);
	add_editor_style( 'style.css' );

	register_nav_menus(
		array(
			'primary' => __( 'Primary Navigation', 'altcorp' ),
			'footer'  => __( 'Footer Navigation', 'altcorp' ),
		)
	);
}
add_action( 'after_setup_theme', 'altcorp_setup' );

function altcorp_enqueue_assets() {
	$theme         = wp_get_theme();
	$style_path    = get_stylesheet_directory() . '/style.css';
	$script_path   = get_template_directory() . '/assets/js/theme.js';
	$style_version = file_exists( $style_path ) ? (string) filemtime( $style_path ) : $theme->get( 'Version' );
	$script_version = file_exists( $script_path ) ? (string) filemtime( $script_path ) : $theme->get( 'Version' );

	wp_enqueue_style( 'altcorp-style', get_stylesheet_uri(), array(), $style_version );
	wp_enqueue_script(
		'altcorp-theme',
		get_template_directory_uri() . '/assets/js/theme.js',
		array(),
		$script_version,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'altcorp_enqueue_assets' );

function altcorp_add_page_excerpt_support() {
	add_post_type_support( 'page', 'excerpt' );
}
add_action( 'init', 'altcorp_add_page_excerpt_support' );

function altcorp_register_content_model() {
	register_post_type(
		'company',
		array(
			'labels'       => array(
				'name'               => __( 'Companies', 'altcorp' ),
				'singular_name'      => __( 'Company', 'altcorp' ),
				'add_new_item'       => __( 'Add New Company', 'altcorp' ),
				'edit_item'          => __( 'Edit Company', 'altcorp' ),
				'new_item'           => __( 'New Company', 'altcorp' ),
				'view_item'          => __( 'View Company', 'altcorp' ),
				'search_items'       => __( 'Search Companies', 'altcorp' ),
				'not_found'          => __( 'No companies found.', 'altcorp' ),
				'not_found_in_trash' => __( 'No companies found in Trash.', 'altcorp' ),
			),
			'public'       => true,
			'menu_icon'    => 'dashicons-building',
			'has_archive'  => true,
			'rewrite'      => array( 'slug' => 'companies' ),
			'show_in_rest' => true,
			'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions' ),
		)
	);

	register_taxonomy(
		'company_sector',
		'company',
		array(
			'labels'            => array(
				'name'          => __( 'Sectors', 'altcorp' ),
				'singular_name' => __( 'Sector', 'altcorp' ),
			),
			'public'            => true,
			'hierarchical'      => true,
			'show_in_rest'      => true,
			'show_admin_column' => true,
			'rewrite'           => array( 'slug' => 'sector' ),
		)
	);
}
add_action( 'init', 'altcorp_register_content_model' );

function altcorp_register_company_meta_box() {
	add_meta_box(
		'altcorp-company-details',
		__( 'Company Details', 'altcorp' ),
		'altcorp_render_company_meta_box',
		'company',
		'normal',
		'high'
	);
}
add_action( 'add_meta_boxes', 'altcorp_register_company_meta_box' );

function altcorp_render_company_meta_box( $post ) {
	$tagline     = get_post_meta( $post->ID, '_altcorp_company_tagline', true );
	$website_url = get_post_meta( $post->ID, '_altcorp_company_website_url', true );
	$status      = get_post_meta( $post->ID, '_altcorp_company_status', true );
	$is_featured = get_post_meta( $post->ID, '_altcorp_company_featured', true );

	wp_nonce_field( 'altcorp_save_company_meta', 'altcorp_company_meta_nonce' );
	?>
	<p>
		<label for="altcorp-company-tagline"><strong><?php esc_html_e( 'Short Tagline', 'altcorp' ); ?></strong></label>
		<input type="text" id="altcorp-company-tagline" name="altcorp_company_tagline" class="widefat" value="<?php echo esc_attr( $tagline ); ?>">
	</p>
	<p>
		<label for="altcorp-company-website"><strong><?php esc_html_e( 'Website URL', 'altcorp' ); ?></strong></label>
		<input type="url" id="altcorp-company-website" name="altcorp_company_website_url" class="widefat" value="<?php echo esc_attr( $website_url ); ?>">
	</p>
	<p>
		<label for="altcorp-company-status"><strong><?php esc_html_e( 'Status Label', 'altcorp' ); ?></strong></label>
		<input type="text" id="altcorp-company-status" name="altcorp_company_status" class="widefat" value="<?php echo esc_attr( $status ); ?>">
	</p>
	<p>
		<label>
			<input type="checkbox" name="altcorp_company_featured" value="1" <?php checked( $is_featured, '1' ); ?>>
			<?php esc_html_e( 'Feature this company on the homepage', 'altcorp' ); ?>
		</label>
	</p>
	<?php
}

function altcorp_save_company_meta( $post_id ) {
	if ( ! isset( $_POST['altcorp_company_meta_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['altcorp_company_meta_nonce'] ) ), 'altcorp_save_company_meta' ) ) {
		return;
	}

	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	update_post_meta( $post_id, '_altcorp_company_tagline', sanitize_text_field( wp_unslash( $_POST['altcorp_company_tagline'] ?? '' ) ) );
	update_post_meta( $post_id, '_altcorp_company_website_url', esc_url_raw( wp_unslash( $_POST['altcorp_company_website_url'] ?? '' ) ) );
	update_post_meta( $post_id, '_altcorp_company_status', sanitize_text_field( wp_unslash( $_POST['altcorp_company_status'] ?? '' ) ) );
	update_post_meta( $post_id, '_altcorp_company_featured', isset( $_POST['altcorp_company_featured'] ) ? '1' : '0' );
}
add_action( 'save_post_company', 'altcorp_save_company_meta' );

function altcorp_customize_register( $wp_customize ) {
	$wp_customize->add_section(
		'altcorp_brand_settings',
		array(
			'title'       => __( 'Altcorp Brand Settings', 'altcorp' ),
			'description' => __( 'Core company details used across the site.', 'altcorp' ),
			'priority'    => 30,
		)
	);

	$settings = array(
		'altcorp_contact_email'    => array( 'default' => 'contact@altcorp.in', 'label' => __( 'Contact Email', 'altcorp' ) ),
		'altcorp_contact_location' => array( 'default' => 'India', 'label' => __( 'Primary Location', 'altcorp' ) ),
		'altcorp_company_tagline'  => array( 'default' => 'The parent company behind Altcorp\'s software, platforms, and operating businesses.', 'label' => __( 'Global Tagline', 'altcorp' ) ),
	);

	foreach ( $settings as $key => $config ) {
		$wp_customize->add_setting(
			$key,
			array(
				'default'           => $config['default'],
				'sanitize_callback' => 'sanitize_text_field',
			)
		);

		$wp_customize->add_control(
			$key,
			array(
				'section' => 'altcorp_brand_settings',
				'label'   => $config['label'],
				'type'    => 'text',
			)
		);
	}
}
add_action( 'customize_register', 'altcorp_customize_register' );

function altcorp_get_theme_setting( $key, $default = '' ) {
	return get_theme_mod( $key, $default );
}

function altcorp_get_brand_logo_url() {
	$custom_logo_id = (int) get_theme_mod( 'custom_logo' );

	if ( $custom_logo_id ) {
		$custom_logo = wp_get_attachment_image_url( $custom_logo_id, 'full' );

		if ( $custom_logo ) {
			return $custom_logo;
		}
	}

	$default_files = array(
		'altcorp-logo.png',
	);

	foreach ( $default_files as $filename ) {
		$default_logo_path = trailingslashit( get_template_directory() ) . $filename;

		if ( file_exists( $default_logo_path ) ) {
			return trailingslashit( get_template_directory_uri() ) . $filename;
		}
	}

	return '';
}

function altcorp_get_editorial_artwork( $key = 'cloud' ) {
	$artworks = array(
		'cloud'      => array(
			'url'     => trailingslashit( get_template_directory_uri() ) . 'assets/images/cloud-study.jpg',
			'alt'     => __( 'Cloud Study (Early Evening) by Simon Denis, public domain artwork', 'altcorp' ),
			'caption' => __( 'Cloud Study (Early Evening), Simon Denis', 'altcorp' ),
		),
		'forest'     => array(
			'url'     => trailingslashit( get_template_directory_uri() ) . 'assets/images/forest-sunset.jpg',
			'alt'     => __( 'The Forest in Winter at Sunset by Theodore Rousseau, public domain artwork', 'altcorp' ),
			'caption' => __( 'The Forest in Winter at Sunset, Theodore Rousseau', 'altcorp' ),
		),
		'still-life' => array(
			'url'     => trailingslashit( get_template_directory_uri() ) . 'assets/images/still-life.jpg',
			'alt'     => __( 'Still Life with Flowers and Fruit by Henri Fantin-Latour, public domain artwork', 'altcorp' ),
			'caption' => __( 'Still Life with Flowers and Fruit, Henri Fantin-Latour', 'altcorp' ),
		),
	);

	if ( isset( $artworks[ $key ] ) ) {
		return $artworks[ $key ];
	}

	return $artworks['cloud'];
}

function altcorp_get_company_artwork( $post_id = 0 ) {
	$post_id = $post_id ? $post_id : get_the_ID();
	$terms   = get_the_terms( $post_id, 'company_sector' );
	$slug    = $terms && ! is_wp_error( $terms ) ? $terms[0]->slug : '';

	if ( 'digital-commerce' === $slug ) {
		return altcorp_get_editorial_artwork( 'still-life' );
	}

	if ( 'verification-tools' === $slug ) {
		return altcorp_get_editorial_artwork( 'forest' );
	}

	return altcorp_get_editorial_artwork( 'cloud' );
}

function altcorp_get_surface_style( $source, $variable = 'section-image' ) {
	$url = '';

	if ( is_array( $source ) ) {
		$url = $source['url'] ?? '';
	} elseif ( is_string( $source ) ) {
		$url = $source;
	}

	if ( ! $url ) {
		return '';
	}

	return sprintf( '--%1$s:url("%2$s");', sanitize_key( $variable ), esc_url_raw( $url ) );
}

function altcorp_get_artwork_style( $artwork ) {
	return altcorp_get_surface_style( $artwork, 'art-image' );
}

function altcorp_get_company_meta( $post_id, $key ) {
	return get_post_meta( $post_id, $key, true );
}

function altcorp_get_summary( $post_id = 0, $fallback = '' ) {
	$post_id = $post_id ? $post_id : get_the_ID();
	$excerpt = trim( get_the_excerpt( $post_id ) );

	if ( $excerpt ) {
		return $excerpt;
	}

	$content = get_post_field( 'post_content', $post_id );

	if ( $content ) {
		return wp_trim_words( wp_strip_all_tags( $content ), 28 );
	}

	return $fallback;
}

function altcorp_has_seo_plugin() {
	return defined( 'WPSEO_VERSION' ) || defined( 'AIOSEO_VERSION' ) || defined( 'RANK_MATH_VERSION' );
}

function altcorp_output_meta_description() {
	if ( altcorp_has_seo_plugin() ) {
		return;
	}

	$post_id     = get_queried_object_id();
	$description = '';

	if ( is_singular() && $post_id ) {
		$description = altcorp_get_summary( $post_id );
	} elseif ( is_post_type_archive( 'company' ) ) {
		$description = __( 'Explore the companies, software products, and digital platforms operating under Altcorp.', 'altcorp' );
	} elseif ( is_home() ) {
		$description = __( 'Read company updates, product perspective, and writing from across Altcorp.', 'altcorp' );
	} else {
		$description = altcorp_get_theme_setting( 'altcorp_company_tagline', get_bloginfo( 'description' ) );
	}

	if ( $description ) {
		printf( "<meta name=\"description\" content=\"%s\">\n", esc_attr( $description ) );
	}
}
add_action( 'wp_head', 'altcorp_output_meta_description', 1 );

function altcorp_output_front_page_schema() {
	if ( ! is_front_page() ) {
		return;
	}

	$schema = array(
		'@context'    => 'https://schema.org',
		'@type'       => 'Organization',
		'name'        => get_bloginfo( 'name' ),
		'url'         => home_url( '/' ),
		'email'       => altcorp_get_theme_setting( 'altcorp_contact_email', 'contact@altcorp.in' ),
		'description' => altcorp_get_theme_setting( 'altcorp_company_tagline', get_bloginfo( 'description' ) ),
		'address'     => array(
			'@type'           => 'PostalAddress',
			'addressLocality' => altcorp_get_theme_setting( 'altcorp_contact_location', 'Bangalore, India' ),
		),
	);

	echo '<script type="application/ld+json">' . wp_json_encode( $schema ) . '</script>';
}
add_action( 'wp_head', 'altcorp_output_front_page_schema', 5 );

function altcorp_register_block_patterns() {
	if ( ! function_exists( 'register_block_pattern' ) || ! class_exists( 'WP_Block_Pattern_Categories_Registry' ) || ! class_exists( 'WP_Block_Patterns_Registry' ) ) {
		return;
	}

	$category_registry = WP_Block_Pattern_Categories_Registry::get_instance();
	$pattern_registry  = WP_Block_Patterns_Registry::get_instance();

	if ( ! $category_registry->is_registered( 'altcorp' ) ) {
		register_block_pattern_category(
			'altcorp',
			array(
				'label' => __( 'Altcorp', 'altcorp' ),
			)
		);
	}

	if ( ! $pattern_registry->is_registered( 'altcorp/statement-panel' ) ) {
		register_block_pattern(
			'altcorp/statement-panel',
			array(
				'title'       => __( 'Statement Panel', 'altcorp' ),
				'description' => __( 'An introductory block for explaining a company, page, or line of work.', 'altcorp' ),
				'categories'  => array( 'altcorp' ),
				'content'     => '<!-- wp:group {"className":"altcorp-block-panel","layout":{"type":"constrained"}} --><div class="wp-block-group altcorp-block-panel"><!-- wp:paragraph {"className":"eyebrow"} --><p class="eyebrow">Section label</p><!-- /wp:paragraph --><!-- wp:heading {"level":2} --><h2>Explain what belongs here.</h2><!-- /wp:heading --><!-- wp:paragraph {"fontSize":"body"} --><p>Use this panel for a concise introduction to a company, product, research thread, or page within Altcorp.</p><!-- /wp:paragraph --></div><!-- /wp:group -->',
			)
		);
	}

	if ( ! $pattern_registry->is_registered( 'altcorp/two-column-brief' ) ) {
		register_block_pattern(
			'altcorp/two-column-brief',
			array(
				'title'       => __( 'Two-Column Brief', 'altcorp' ),
				'description' => __( 'Split content section with a concise side note.', 'altcorp' ),
				'categories'  => array( 'altcorp' ),
				'content'     => '<!-- wp:columns {"className":"altcorp-block-columns"} --><div class="wp-block-columns altcorp-block-columns"><!-- wp:column {"width":"66.66%"} --><div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:group {"className":"altcorp-block-panel","layout":{"type":"constrained"}} --><div class="wp-block-group altcorp-block-panel"><!-- wp:paragraph {"className":"eyebrow"} --><p class="eyebrow">Narrative</p><!-- /wp:paragraph --><!-- wp:heading {"level":2} --><h2>Describe the work in context.</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Use the main column for the fuller explanation, history, or context you want visitors to understand.</p><!-- /wp:paragraph --></div><!-- /wp:group --></div><!-- /wp:column --><!-- wp:column {"width":"33.33%"} --><div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:group {"className":"altcorp-note-card","layout":{"type":"constrained"}} --><div class="wp-block-group altcorp-note-card"><!-- wp:paragraph {"className":"eyebrow"} --><p class="eyebrow">Quick Note</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>Use the side column for a short note, highlight, or useful detail.</p><!-- /wp:paragraph --></div><!-- /wp:group --></div><!-- /wp:column --></div><!-- /wp:columns -->',
			)
		);
	}

	if ( ! $pattern_registry->is_registered( 'altcorp/contact-cta' ) ) {
		register_block_pattern(
			'altcorp/contact-cta',
			array(
				'title'       => __( 'Contact CTA', 'altcorp' ),
				'description' => __( 'A polished call-to-action section for partnerships and inquiries.', 'altcorp' ),
				'categories'  => array( 'altcorp' ),
				'content'     => '<!-- wp:group {"className":"altcorp-cta-band","layout":{"type":"constrained"}} --><div class="wp-block-group altcorp-cta-band"><!-- wp:paragraph {"className":"eyebrow"} --><p class="eyebrow">Next step</p><!-- /wp:paragraph --><!-- wp:heading {"level":2} --><h2>Open the conversation with Altcorp.</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Use this section when you want to direct visitors toward contact, partnerships, or a company-specific inquiry.</p><!-- /wp:paragraph --><!-- wp:buttons --><div class="wp-block-buttons"><!-- wp:button {"className":"is-style-fill"} --><div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button">Primary action</a></div><!-- /wp:button --><!-- wp:button {"className":"is-style-outline"} --><div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button">Secondary action</a></div><!-- /wp:button --></div><!-- /wp:buttons --></div><!-- /wp:group -->',
			)
		);
	}
}
add_action( 'init', 'altcorp_register_block_patterns' );

function altcorp_fallback_menu() {
	$about_page = get_page_by_path( 'about-altcorp' );
	$contact    = get_page_by_path( 'contact' );
	$leadership = get_page_by_path( 'leadership' );
	$insights   = get_option( 'page_for_posts' ) ? get_permalink( get_option( 'page_for_posts' ) ) : home_url( '/insights/' );
	?>
	<ul class="site-nav__list">
		<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Home', 'altcorp' ); ?></a></li>
		<li><a href="<?php echo esc_url( get_post_type_archive_link( 'company' ) ); ?>"><?php esc_html_e( 'Companies', 'altcorp' ); ?></a></li>
		<?php if ( $about_page ) : ?>
			<li><a href="<?php echo esc_url( get_permalink( $about_page ) ); ?>"><?php esc_html_e( 'About', 'altcorp' ); ?></a></li>
		<?php endif; ?>
		<?php if ( $leadership ) : ?>
			<li><a href="<?php echo esc_url( get_permalink( $leadership ) ); ?>"><?php esc_html_e( 'Founder', 'altcorp' ); ?></a></li>
		<?php endif; ?>
		<li><a href="<?php echo esc_url( $insights ); ?>"><?php esc_html_e( 'Writing', 'altcorp' ); ?></a></li>
		<?php if ( $contact ) : ?>
			<li><a href="<?php echo esc_url( get_permalink( $contact ) ); ?>"><?php esc_html_e( 'Contact', 'altcorp' ); ?></a></li>
		<?php endif; ?>
	</ul>
	<?php
}

function altcorp_create_or_update_page( $slug, $title, $excerpt, $content ) {
	$page = get_page_by_path( $slug );

	$data = array(
		'post_title'   => $title,
		'post_name'    => $slug,
		'post_type'    => 'page',
		'post_status'  => 'publish',
		'post_excerpt' => $excerpt,
		'post_content' => $content,
	);

	if ( $page ) {
		$data['ID'] = $page->ID;
		return wp_update_post( $data, true );
	}

	return wp_insert_post( $data, true );
}

function altcorp_create_or_update_post_entry( $slug, $title, $excerpt, $content ) {
	$post = get_page_by_path( $slug, OBJECT, 'post' );

	$data = array(
		'post_title'   => $title,
		'post_name'    => $slug,
		'post_type'    => 'post',
		'post_status'  => 'publish',
		'post_excerpt' => $excerpt,
		'post_content' => $content,
	);

	if ( $post ) {
		$data['ID'] = $post->ID;
		return wp_update_post( $data, true );
	}

	return wp_insert_post( $data, true );
}

function altcorp_sync_navigation_menu( $menu_name, $page_ids ) {
	$menu = wp_get_nav_menu_object( $menu_name );

	if ( ! $menu ) {
		$menu_id = wp_create_nav_menu( $menu_name );
	} else {
		$menu_id = $menu->term_id;
	}

	$existing_items = wp_get_nav_menu_items( $menu_id );
	$item_lookup    = array();

	if ( $existing_items ) {
		foreach ( $existing_items as $item ) {
			$key = '';

			if ( 'post_type' === $item->type && ! empty( $item->object_id ) ) {
				$key = 'post_type:' . $item->object_id;
			} elseif ( 'custom' === $item->type ) {
				$key = 'custom:' . untrailingslashit( $item->url );
			}

			if ( ! $key ) {
				continue;
			}

			if ( ! isset( $item_lookup[ $key ] ) ) {
				$item_lookup[ $key ] = array();
			}

			$item_lookup[ $key ][] = $item;
		}
	}

	$desired_items = array(
		array(
			'lookup_key'  => 'custom:' . untrailingslashit( home_url( '/' ) ),
			'menu-item-title' => 'Home',
			'menu-item-url'   => home_url( '/' ),
			'menu-item-type'  => 'custom',
		),
		array(
			'lookup_key'  => 'custom:' . untrailingslashit( get_post_type_archive_link( 'company' ) ),
			'menu-item-title' => 'Companies',
			'menu-item-url'   => get_post_type_archive_link( 'company' ),
			'menu-item-type'  => 'custom',
		),
		array(
			'lookup_key'           => 'post_type:' . $page_ids['about'],
			'menu-item-title'      => 'About Altcorp',
			'menu-item-object-id'  => $page_ids['about'],
			'menu-item-object'     => 'page',
			'menu-item-type'       => 'post_type',
		),
		array(
			'lookup_key'           => 'post_type:' . $page_ids['leadership'],
			'menu-item-title'      => 'Founder',
			'menu-item-object-id'  => $page_ids['leadership'],
			'menu-item-object'     => 'page',
			'menu-item-type'       => 'post_type',
		),
		array(
			'lookup_key'           => 'post_type:' . $page_ids['insights'],
			'menu-item-title'      => 'Writing',
			'menu-item-object-id'  => $page_ids['insights'],
			'menu-item-object'     => 'page',
			'menu-item-type'       => 'post_type',
		),
		array(
			'lookup_key'           => 'post_type:' . $page_ids['contact'],
			'menu-item-title'      => 'Contact',
			'menu-item-object-id'  => $page_ids['contact'],
			'menu-item-object'     => 'page',
			'menu-item-type'       => 'post_type',
		),
	);

	foreach ( $desired_items as $index => $item_args ) {
		$lookup_key = $item_args['lookup_key'];
		$item_id    = 0;

		if ( ! empty( $item_lookup[ $lookup_key ] ) ) {
			$matched_item = array_shift( $item_lookup[ $lookup_key ] );
			$item_id      = $matched_item->ID;

			foreach ( $item_lookup[ $lookup_key ] as $duplicate_item ) {
				wp_delete_post( $duplicate_item->ID, true );
			}

			unset( $item_lookup[ $lookup_key ] );
		}

		unset( $item_args['lookup_key'] );
		$item_args['menu-item-status']   = 'publish';
		$item_args['menu-item-position'] = $index + 1;

		wp_update_nav_menu_item( $menu_id, $item_id, $item_args );
	}

	$legacy_company_url = home_url( '/?post_type=company' );

	if ( ! empty( $existing_items ) ) {
		foreach ( $existing_items as $item ) {
			$is_legacy_home      = 'post_type' === $item->type && (int) $item->object_id === (int) $page_ids['home'] && 'Altcorp' === $item->title;
			$is_legacy_companies = 'custom' === $item->type && untrailingslashit( $item->url ) === untrailingslashit( $legacy_company_url );

			if ( $is_legacy_home || $is_legacy_companies ) {
				wp_delete_post( $item->ID, true );
			}
		}
	}

	$locations            = get_theme_mod( 'nav_menu_locations', array() );
	$locations['primary'] = $menu_id;
	$locations['footer']  = $menu_id;
	set_theme_mod( 'nav_menu_locations', $locations );
}

function altcorp_seed_site_content() {
	if ( get_option( 'altcorp_seeded_content_v1' ) ) {
		return;
	}

	altcorp_register_content_model();

	$home_id = altcorp_create_or_update_page(
		'home',
		'Altcorp',
		'Altcorp is the parent company behind software businesses, digital products, and specialist online platforms.',
		'<p>Altcorp is built to own and operate internet businesses over the long term.</p><p>It brings together software products, digital platforms, and category-specific businesses inside one parent company.</p><p>The objective is straightforward: build durable digital companies with clear positioning, disciplined execution, and long-term operating value.</p><p>Altcorp provides the structure that connects those businesses within one coherent group.</p>'
	);

	$about_id = altcorp_create_or_update_page(
		'about-altcorp',
		'About Altcorp',
		'Altcorp is the parent company behind software businesses, products, and digital platforms.',
		'<h2>Altcorp is structured to build and operate internet businesses over the long term.</h2><p>Altcorp is the parent company behind a group of software products, digital platforms, and focused online businesses.</p><p>Each company serves a distinct market, while Altcorp provides the ownership, operating structure, and strategic direction behind the group.</p><p>The result is a parent company with multiple operating brands under one name.</p>'
	);

	$leadership_id = altcorp_create_or_update_page(
		'leadership',
		'Founder',
		'Dr. Syed Irfan is the founder of Altcorp.',
		'<h2>Dr. Syed Irfan</h2><p>Founder of Altcorp.</p><p>Dr. Syed Irfan oversees the company across its businesses, products, and digital platforms.</p><p>With a background in medicine and a focus on software, he leads group strategy, product direction, and long-term business development across Altcorp.</p>'
	);

	$contact_id = altcorp_create_or_update_page(
		'contact',
		'Contact',
		'Contact Altcorp regarding company, product, or business enquiries.',
		'<p>Contact Altcorp regarding company, product, or business enquiries.</p><p>Email: contact@altcorp.in</p><p>Location: India</p>'
	);

	$insights_id = altcorp_create_or_update_page(
		'insights',
		'Writing',
		'Writing, announcements, and company perspective from across Altcorp.',
		'<p>This section contains company writing, operating perspective, and selected updates from across the Altcorp group.</p><p>It exists to provide context around the businesses, products, and markets Altcorp serves.</p>'
	);

	update_option( 'show_on_front', 'page' );
	update_option( 'page_on_front', $home_id );
	update_option( 'page_for_posts', $insights_id );
	update_option( 'blogname', 'Altcorp' );
	update_option( 'blogdescription', 'The parent company behind Altcorp\'s software, platforms, and operating businesses.' );
	set_theme_mod( 'altcorp_contact_email', 'contact@altcorp.in' );
	set_theme_mod( 'altcorp_contact_location', 'India' );
	set_theme_mod( 'altcorp_company_tagline', 'The parent company behind Altcorp\'s software, platforms, and operating businesses.' );

	$sectors = array(
		'Core Platforms',
		'Consumer & Network Products',
	);

	foreach ( $sectors as $sector_name ) {
		if ( ! term_exists( $sector_name, 'company_sector' ) ) {
			wp_insert_term( $sector_name, 'company_sector' );
		}
	}

	$existing_company_ids = get_posts(
		array(
			'post_type'      => 'company',
			'post_status'    => 'any',
			'posts_per_page' => -1,
			'fields'         => 'ids',
		)
	);

	foreach ( $existing_company_ids as $existing_company_id ) {
		update_post_meta( $existing_company_id, '_altcorp_company_featured', '0' );
	}

	$companies = array(
		array(
			'title'    => 'BurnerLinks',
			'excerpt'  => 'Private file sharing through one-time links designed for security and simplicity.',
			'content'  => '<p>BurnerLinks is a private file-sharing product built around one-time links, security, and ease of use.</p><p>It reflects Altcorp\'s approach to focused software: practical digital tools with a clear use case and a straightforward product experience.</p>',
			'tagline'  => 'Private file sharing through one-time links.',
			'status'   => '',
			'featured' => true,
			'sector'   => 'Core Platforms',
		),
		array(
			'title'    => 'Feedbacks.dev',
			'excerpt'  => 'Structured feedback collection for founders, teams, and online communities.',
			'content'  => '<p>Feedbacks.dev is a structured feedback product for founders, teams, and online communities.</p><p>It is designed to reduce operational noise and make audience feedback easier to collect, review, and act on.</p>',
			'tagline'  => 'Structured feedback collection for modern teams.',
			'status'   => '',
			'featured' => true,
			'sector'   => 'Core Platforms',
		),
		array(
			'title'    => 'Supaviewer',
			'excerpt'  => 'A distribution and discovery platform for AI-native film and moving-image work.',
			'content'  => '<p>Supaviewer is a platform for AI-native film and moving-image work.</p><p>It is positioned around discovery, distribution, and audience development for creators working with new production tools.</p>',
			'tagline'  => 'Distribution and discovery for AI-native film.',
			'status'   => '',
			'featured' => true,
			'sector'   => 'Core Platforms',
		),
		array(
			'title'    => 'Verified.Doctor',
			'excerpt'  => 'A trust layer for healthcare platforms that allows verification of medical professionals. Designed to make medical identity and credentials verifiable across digital systems.',
			'content'  => '<p>Verified.Doctor is a trust layer for healthcare platforms that allows verification of medical professionals.</p><p>It is designed to make medical identity and credentials verifiable across digital systems.</p>',
			'tagline'  => 'Verification infrastructure for medical professionals.',
			'status'   => '',
			'featured' => true,
			'sector'   => 'Core Platforms',
		),
		array(
			'title'    => 'AFKNPC',
			'excerpt'  => 'An online game platform focused on persistent worlds and system-driven gameplay.',
			'content'  => '<p>AFKNPC is an online game platform focused on persistent worlds and system-driven play.</p><p>Its design centres on autonomous NPC systems, dynamic world behaviour, and gameplay that continues evolving beyond a single session.</p>',
			'tagline'  => 'A persistent-world online game platform.',
			'status'   => '',
			'featured' => true,
			'sector'   => 'Consumer & Network Products',
		),
		array(
			'title'    => 'MyGang.ai',
			'excerpt'  => 'A multi-agent social product built around group-based AI interaction.',
			'content'  => '<p>MyGang.ai is a social AI product built around multi-agent group interaction.</p><p>It explores conversational environments where users engage with multiple AI personalities inside a shared group setting.</p>',
			'tagline'  => 'Multi-agent social interaction in a shared space.',
			'status'   => '',
			'featured' => true,
			'sector'   => 'Consumer & Network Products',
		),
		array(
			'title'    => 'Ottr.chat',
			'excerpt'  => 'A messaging platform designed specifically for couples. Private, focused communication built around intimacy rather than broadcast social networks.',
			'content'  => '<p>Ottr.chat is a messaging platform designed specifically for couples.</p><p>It focuses on private communication, a quieter product experience, and messaging designed around close personal use rather than broadcast social behaviour.</p>',
			'tagline'  => 'Private messaging designed for couples.',
			'status'   => '',
			'featured' => true,
			'sector'   => 'Consumer & Network Products',
		),
		array(
			'title'       => 'CPA & CME Tracker',
			'excerpt'     => 'Credit and compliance tracking software for medical professionals.',
			'content'     => '<p>CPA & CME Tracker is credit and compliance tracking software for medical professionals.</p><p>It represents Altcorp\'s focus on practical software products built around clear operational needs.</p>',
			'tagline'     => 'Credit tracking software for medical practitioners.',
			'status'      => '',
			'featured'    => false,
			'sector'      => 'Core Platforms',
			'website_url' => 'https://play.google.com/store/apps/details?id=com.cmetrackerpro.app&pcampaignid=web_share',
		),
		array(
			'title'    => 'MedicalNotes',
			'excerpt'  => 'Medical education resources built for practical use.',
			'content'  => '<p>MedicalNotes is a medical education resource brand within the Altcorp group.</p><p>It extends the company\'s work in practical, professional tools and specialist knowledge products.</p>',
			'tagline'  => 'Medical education resources built for practical use.',
			'status'   => '',
			'featured' => false,
			'sector'   => 'Core Platforms',
		),
		array(
			'title'    => 'SuperDoctor.io',
			'excerpt'  => 'Healthcare tools built for ambitious practitioners.',
			'content'  => '<p>SuperDoctor.io sits within the healthcare software cluster of the Altcorp group.</p><p>It is positioned as a digital platform for practitioners seeking modern tools around professional growth and practice efficiency.</p>',
			'tagline'  => 'Healthcare tools built for ambitious practitioners.',
			'status'   => '',
			'featured' => false,
			'sector'   => 'Core Platforms',
		),
		array(
			'title'    => 'SupaBaby.io',
			'excerpt'  => 'A family-focused digital product within the Altcorp group.',
			'content'  => '<p>SupaBaby.io is a family-focused digital product within the wider Altcorp group.</p><p>It reflects the company\'s work in consumer-facing software and category-specific digital brands.</p>',
			'tagline'  => 'A family-focused digital product.',
			'status'   => '',
			'featured' => false,
			'sector'   => 'Consumer & Network Products',
		),
		array(
			'title'    => 'UltraStupid',
			'excerpt'  => 'A consumer internet brand with a distinct identity and audience position.',
			'content'  => '<p>UltraStupid is a consumer internet product within the Altcorp group.</p><p>It is positioned as a distinct consumer brand within the company\'s broader portfolio of software and digital products.</p>',
			'tagline'  => 'A consumer internet product with a distinct voice.',
			'status'   => '',
			'featured' => false,
			'sector'   => 'Consumer & Network Products',
		),
	);

	foreach ( $companies as $company ) {
		$existing = get_page_by_path( sanitize_title( $company['title'] ), OBJECT, 'company' );

		$post_data = array(
			'post_title'   => $company['title'],
			'post_name'    => sanitize_title( $company['title'] ),
			'post_type'    => 'company',
			'post_status'  => 'publish',
			'post_excerpt' => $company['excerpt'],
			'post_content' => $company['content'],
		);

		if ( $existing ) {
			$post_data['ID'] = $existing->ID;
			$company_id      = wp_update_post( $post_data, true );
		} else {
			$company_id = wp_insert_post( $post_data, true );
		}

		if ( is_wp_error( $company_id ) ) {
			continue;
		}

		update_post_meta( $company_id, '_altcorp_company_tagline', $company['tagline'] );
		update_post_meta( $company_id, '_altcorp_company_status', $company['status'] );
		update_post_meta( $company_id, '_altcorp_company_featured', $company['featured'] ? '1' : '0' );
		update_post_meta( $company_id, '_altcorp_company_website_url', $company['website_url'] ?? '' );
		wp_set_object_terms( $company_id, $company['sector'], 'company_sector', false );
	}

	altcorp_create_or_update_post_entry(
		'why-altcorp-exists',
		'Why Altcorp exists',
		'Why Altcorp exists as the parent company behind software businesses, digital products, and online platforms.',
		'<p>Altcorp exists to bring multiple software businesses and digital products under one parent company.</p><p>Each brand can operate with its own focus, audience, and positioning while benefiting from shared ownership and strategic direction at the group level.</p><p>That structure allows Altcorp to grow as a coherent company rather than a loose collection of unrelated assets.</p>'
	);

	altcorp_sync_navigation_menu(
		'Altcorp Primary',
		array(
			'home'       => $home_id,
			'about'      => $about_id,
			'leadership' => $leadership_id,
			'insights'   => $insights_id,
			'contact'    => $contact_id,
		)
	);

	update_option( 'altcorp_seeded_content_v1', 1 );
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'altcorp_seed_site_content' );

function altcorp_run_seed_migrations() {
	if ( get_option( 'altcorp_seeded_content_v2' ) ) {
		return;
	}

	$home_page       = get_page_by_path( 'home' );
	$about_page      = get_page_by_path( 'about-altcorp' );
	$leadership_page = get_page_by_path( 'leadership' );
	$contact_page    = get_page_by_path( 'contact' );
	$insights_id     = (int) get_option( 'page_for_posts' );

	if ( ! $home_page || ! $about_page || ! $leadership_page || ! $contact_page || ! $insights_id ) {
		return;
	}

	altcorp_sync_navigation_menu(
		'Altcorp Primary',
		array(
			'home'       => $home_page->ID,
			'about'      => $about_page->ID,
			'leadership' => $leadership_page->ID,
			'insights'   => $insights_id,
			'contact'    => $contact_page->ID,
		)
	);

	update_option( 'altcorp_seeded_content_v2', 1 );
}
add_action( 'admin_init', 'altcorp_run_seed_migrations' );

function altcorp_run_content_refresh_v3() {
	if ( get_option( 'altcorp_seeded_content_v3' ) ) {
		return;
	}

	$home_page       = get_page_by_path( 'home' );
	$about_page      = get_page_by_path( 'about-altcorp' );
	$leadership_page = get_page_by_path( 'leadership' );
	$contact_page    = get_page_by_path( 'contact' );
	$posts_page      = get_page_by_path( 'insights' );

	if ( ! $home_page || ! $about_page || ! $leadership_page || ! $contact_page || ! $posts_page ) {
		return;
	}

	delete_option( 'altcorp_seeded_content_v1' );
	altcorp_seed_site_content();

	update_option( 'page_on_front', $home_page->ID );
	update_option( 'page_for_posts', $posts_page->ID );

	update_option( 'altcorp_seeded_content_v3', 1 );
}
add_action( 'init', 'altcorp_run_content_refresh_v3', 20 );

function altcorp_run_content_refresh_v4() {
	if ( get_option( 'altcorp_seeded_content_v4' ) ) {
		return;
	}

	$home_page       = get_page_by_path( 'home' );
	$about_page      = get_page_by_path( 'about-altcorp' );
	$leadership_page = get_page_by_path( 'leadership' );
	$contact_page    = get_page_by_path( 'contact' );
	$posts_page      = get_page_by_path( 'insights' );

	if ( ! $home_page || ! $about_page || ! $leadership_page || ! $contact_page || ! $posts_page ) {
		return;
	}

	delete_option( 'altcorp_seeded_content_v1' );
	altcorp_seed_site_content();

	update_option( 'page_on_front', $home_page->ID );
	update_option( 'page_for_posts', $posts_page->ID );

	update_option( 'altcorp_seeded_content_v4', 1 );
}
add_action( 'init', 'altcorp_run_content_refresh_v4', 25 );

function altcorp_run_content_refresh_v5() {
	if ( get_option( 'altcorp_seeded_content_v5' ) ) {
		return;
	}

	$home_page       = get_page_by_path( 'home' );
	$about_page      = get_page_by_path( 'about-altcorp' );
	$leadership_page = get_page_by_path( 'leadership' );
	$contact_page    = get_page_by_path( 'contact' );
	$posts_page      = get_page_by_path( 'insights' );

	if ( ! $home_page || ! $about_page || ! $leadership_page || ! $contact_page || ! $posts_page ) {
		return;
	}

	delete_option( 'altcorp_seeded_content_v1' );
	altcorp_seed_site_content();

	update_option( 'page_on_front', $home_page->ID );
	update_option( 'page_for_posts', $posts_page->ID );

	update_option( 'altcorp_seeded_content_v5', 1 );
}
add_action( 'init', 'altcorp_run_content_refresh_v5', 30 );

function altcorp_run_content_refresh_v6() {
	if ( get_option( 'altcorp_seeded_content_v6' ) ) {
		return;
	}

	$kingbundle = get_page_by_path( 'kingbundle', OBJECT, 'company' );

	if ( $kingbundle ) {
		wp_delete_post( $kingbundle->ID, true );
	}

	update_option( 'altcorp_seeded_content_v6', 1 );
}
add_action( 'init', 'altcorp_run_content_refresh_v6', 35 );

function altcorp_run_content_refresh_v7() {
	if ( get_option( 'altcorp_seeded_content_v7' ) ) {
		return;
	}

	$leadership_page = get_page_by_path( 'leadership' );

	if ( $leadership_page ) {
		wp_update_post(
			array(
				'ID'           => $leadership_page->ID,
				'post_excerpt' => 'Dr. Syed Irfan is the founder of Altcorp.',
				'post_content' => '<h2>Dr. Syed Irfan</h2><p>Founder of Altcorp.</p><p>Dr. Syed Irfan leads Altcorp across AI products, internet software, and digital platforms.</p><p>With a background in medicine and a focus on software, he oversees the broader company strategy, product direction, and long-term portfolio development behind the group.</p>',
			)
		);
	}

	update_option( 'altcorp_seeded_content_v7', 1 );
}
add_action( 'init', 'altcorp_run_content_refresh_v7', 40 );

function altcorp_run_content_refresh_v8() {
	if ( get_option( 'altcorp_seeded_content_v8' ) ) {
		return;
	}

	$home_page       = get_page_by_path( 'home' );
	$about_page      = get_page_by_path( 'about-altcorp' );
	$leadership_page = get_page_by_path( 'leadership' );
	$contact_page    = get_page_by_path( 'contact' );
	$posts_page      = get_page_by_path( 'insights' );

	if ( ! $home_page || ! $about_page || ! $leadership_page || ! $contact_page || ! $posts_page ) {
		return;
	}

	delete_option( 'altcorp_seeded_content_v1' );
	altcorp_seed_site_content();

	update_option( 'page_on_front', $home_page->ID );
	update_option( 'page_for_posts', $posts_page->ID );
	update_option( 'blogdescription', 'The parent company behind Altcorp\'s software, platforms, and operating businesses.' );
	set_theme_mod( 'altcorp_company_tagline', 'The parent company behind Altcorp\'s software, platforms, and operating businesses.' );
	wp_update_post(
		array(
			'ID'           => $home_page->ID,
			'post_excerpt' => 'Altcorp is the parent company behind a portfolio of internet businesses, AI products, and digital platforms.',
		)
	);
	wp_update_post(
		array(
			'ID'           => $about_page->ID,
			'post_excerpt' => 'Altcorp is the parent company behind a portfolio of internet businesses, products, and platforms.',
		)
	);

	update_option( 'altcorp_seeded_content_v8', 1 );
}
add_action( 'init', 'altcorp_run_content_refresh_v8', 45 );

function altcorp_run_content_refresh_v9() {
	if ( get_option( 'altcorp_seeded_content_v9' ) ) {
		return;
	}

	$home_page  = get_page_by_path( 'home' );
	$about_page = get_page_by_path( 'about-altcorp' );

	if ( $home_page ) {
		wp_update_post(
			array(
				'ID'           => $home_page->ID,
				'post_excerpt' => 'Altcorp is the parent company behind a portfolio of internet businesses, AI products, and digital platforms.',
			)
		);
	}

	if ( $about_page ) {
		wp_update_post(
			array(
				'ID'           => $about_page->ID,
				'post_excerpt' => 'Altcorp is the parent company behind a portfolio of internet businesses, products, and platforms.',
			)
		);
	}

	update_option( 'blogdescription', 'The parent company behind Altcorp\'s software, platforms, and operating businesses.' );
	set_theme_mod( 'altcorp_company_tagline', 'The parent company behind Altcorp\'s software, platforms, and operating businesses.' );

	update_option( 'altcorp_seeded_content_v9', 1 );
}
add_action( 'init', 'altcorp_run_content_refresh_v9', 50 );

function altcorp_run_content_refresh_v10() {
	if ( get_option( 'altcorp_seeded_content_v10' ) ) {
		return;
	}

	$home_page       = get_page_by_path( 'home' );
	$about_page      = get_page_by_path( 'about-altcorp' );
	$leadership_page = get_page_by_path( 'leadership' );
	$contact_page    = get_page_by_path( 'contact' );
	$posts_page      = get_page_by_path( 'insights' );

	if ( ! $home_page || ! $about_page || ! $leadership_page || ! $contact_page || ! $posts_page ) {
		return;
	}

	delete_option( 'altcorp_seeded_content_v1' );
	altcorp_seed_site_content();

	update_option( 'page_on_front', $home_page->ID );
	update_option( 'page_for_posts', $posts_page->ID );
	update_option( 'blogdescription', 'The parent company behind Altcorp\'s software, platforms, and operating businesses.' );
	set_theme_mod( 'altcorp_company_tagline', 'The parent company behind Altcorp\'s software, platforms, and operating businesses.' );

	update_option( 'altcorp_seeded_content_v10', 1 );
}
add_action( 'init', 'altcorp_run_content_refresh_v10', 55 );

function altcorp_run_content_refresh_v11() {
	if ( get_option( 'altcorp_seeded_content_v11' ) ) {
		return;
	}

	$home_page       = get_page_by_path( 'home' );
	$about_page      = get_page_by_path( 'about-altcorp' );
	$leadership_page = get_page_by_path( 'leadership' );
	$contact_page    = get_page_by_path( 'contact' );
	$posts_page      = get_page_by_path( 'insights' );

	if ( ! $home_page || ! $about_page || ! $leadership_page || ! $contact_page || ! $posts_page ) {
		return;
	}

	delete_option( 'altcorp_seeded_content_v1' );
	altcorp_seed_site_content();

	update_option( 'page_on_front', $home_page->ID );
	update_option( 'page_for_posts', $posts_page->ID );

	update_option( 'altcorp_seeded_content_v11', 1 );
}
add_action( 'init', 'altcorp_run_content_refresh_v11', 60 );
