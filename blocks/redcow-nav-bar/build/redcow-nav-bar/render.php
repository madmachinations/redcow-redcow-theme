<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
	$menu_id = wp_unique_id( 'redcow-nav-menu-' );
?>
<div <?php echo get_block_wrapper_attributes(); ?>>

	<div class="dynamic-logo">
		<a class="full-logo" href="/">
			<?php include(get_template_directory() . '/assets/images/logo-white.svg'); ?>
		</a>
	</div>

	<div class="nav-bar-content">
		<div class="nav-bar-menu" id="<?php echo esc_attr( $menu_id ); ?>">
			<?php echo $content; ?>
		</div>

		<div class="nav-bar-right">

			<div class="get-in-touch-button" role="button" aria-label="Get in touch">
				<span class="get-in-touch-text">Get in touch</span>
				<span class="get-in-touch-icon" aria-hidden="true">
					<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.6 10.8c1.3 2.4 3.2 4.3 5.6 5.6l1.9-1.9c.2-.2.6-.3.9-.2 1 .3 2.1.5 3.2.5.5 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.1.2 2.2.5 3.2.1.3 0 .7-.2.9l-1.9 1.9z"/>
					</svg>
				</span>
			</div>

			<button class="nav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="<?php echo esc_attr( $menu_id ); ?>">
				<span class="nav-burger-bar"></span>
				<span class="nav-burger-bar"></span>
				<span class="nav-burger-bar"></span>
			</button>

		</div>
	</div>

	<div class="get-in-touch-bar">
		<a>Get in touch</a>
	</div>

</div>
