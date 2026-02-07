<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>

	<div class="dynamic-logo">
		<div class="full-logo">
			<?php include(get_template_directory() . '/assets/images/logo-white.svg'); ?>
		</div>
	</div>

	<div class="nav-bar-content">
		<div class="nav-bar-menu">
			<?php echo $content; ?>
		</div>

		<div class="nav-bar-right">

			<div class="get-in-touch-button">Get in touch</div>

		</div>
	</div>

	<div class="get-in-touch-bar">
		<a>Get in touch</a>
	</div>

</div>
