<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="logo-scroller live">
		<div class="logo-track <?php if($attributes['direction'] == "right-to-left"){echo "left";} else {echo "right";} ?>">
			<?php echo $content . $content; ?>
		</div>
	</div>
</div>
