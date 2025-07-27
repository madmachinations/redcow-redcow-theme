<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

//  <div class="hero-media" style="background-image: url(' echo get_template_directory_uri();/assets/images/room_bg.jpg');">
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	
	<div class="redcow-hero-banner">

		<div class="hero-media" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/room_bg.jpg');">
			<video src="<?php echo get_template_directory_uri(); ?>/assets/videos/home_header.mp4" autoplay loop muted playsinline></video>
		</div>

		<div class="hero-content">
			<div class="container">
				<div class="container-column">
					<?php echo $content; ?>
				</div>
			</div>
		</div>

		<div class="hero-cutoff">
			<svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
				<polygon points="0,100 1000,100 1000,0 500,100 0,0" fill="white" />
			</svg>
		</div>

	</div>

</div>
