<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>

	<a>
		<div class="tile-content">
			<?php echo $content; ?>
		</div>
		<div class="arrow">
			<?php include(get_template_directory() . '/assets/images/arrow-long-right.svg'); ?>
		</div>
	</a>
	
</div>