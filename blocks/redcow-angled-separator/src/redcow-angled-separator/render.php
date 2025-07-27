<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes([
	'style' => 'background-color: ' . $attributes['fromColor']
]); ?>>
	
	<?php if($attributes['transitionType'] == "arrow"){ ?>
		<svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
			<polygon points="0,100 1000,100 1000,0 500,100 0,0" fill="<?php echo $attributes['toColor']; ?>" />
		</svg>
	<?php } ?>

	<?php if($attributes['transitionType'] == "slide-left"){ ?>
		<svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
			<polygon points="0,100 1000,100 1000,0" fill="<?php echo $attributes['toColor']; ?>" />
		</svg>
	<?php } ?>

	<?php if($attributes['transitionType'] == "slide-right"){ ?>
		<svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
			<polygon points="0,100 1000,100 0,0" fill="<?php echo $attributes['toColor']; ?>" />
		</svg>
	<?php } ?>

</div>
