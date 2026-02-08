<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

//  <div class="hero-media" style="background-image: url(' echo get_template_directory_uri();/assets/images/room_bg.jpg');">
?>
<div <?php echo get_block_wrapper_attributes(); ?>>

	<div class="redcow-hero-banner">

		<?php
		//<div class="hero-media" style="background-image: url('echo get_template_directory_uri();/assets/images/hero_background.jpg');">
		?>
		<div class="hero-media">
			<?php
			//<video src="echo get_template_directory_uri();/assets/videos/home_header.mp4" autoplay loop muted playsinline></video>
			?>
			<image src="<?php echo get_template_directory_uri(); ?>/assets/images/hero_background.jpg"></image>
		</div>

		<div class="hero-content">
			<div class="container">
				<div class="container-column">
					<?php echo $content; ?>
				</div>
			</div>
		</div>

		<div class="hero-cutoff">
<!--			<svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">-->
<!--				<polygon points="0,100 1000,100 1000,0 500,100 0,0" fill="white" />-->
<!--			</svg>-->
			<svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
				<mask id="mainmask" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="100">
					<rect width="1000" height="100" fill="white"/>
					<ellipse cx="500" cy="-600" rx="1000" ry="700" fill="black"/>
				</mask>
				<rect width="1000" height="100" fill="white" mask="url(#mainmask)"/>
			</svg>

		</div>

	</div>

</div>
