<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
	$upper_text = isset( $attributes['upperText'] ) ? $attributes['upperText'] : '';
	$middle_text = isset( $attributes['middleText'] ) ? $attributes['middleText'] : '';
	$lower_text = isset( $attributes['lowerText'] ) ? $attributes['lowerText'] : '';
	$upper_align = isset( $attributes['upperAlign'] ) ? strtolower( $attributes['upperAlign'] ) : 'left';
	$middle_align = isset( $attributes['middleAlign'] ) ? strtolower( $attributes['middleAlign'] ) : 'left';
	$lower_align = isset( $attributes['lowerAlign'] ) ? strtolower( $attributes['lowerAlign'] ) : 'left';

	$allowed_align = array( 'left', 'center', 'right' );
	if ( ! in_array( $upper_align, $allowed_align, true ) ) {
		$upper_align = 'left';
	}
	if ( ! in_array( $middle_align, $allowed_align, true ) ) {
		$middle_align = 'left';
	}
	if ( ! in_array( $lower_align, $allowed_align, true ) ) {
		$lower_align = 'left';
	}

	$allowed_tags = array( 'h1', 'h2', 'h3', 'h4', 'h5', 'p' );
	$tag = isset( $attributes['tag'] ) ? strtolower( $attributes['tag'] ) : 'h2';
	if ( ! in_array( $tag, $allowed_tags, true ) ) {
		$tag = 'h2';
	}
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="nested-title-container">
		<<?php echo esc_html( $tag ); ?> class="nested-title">
			<?php if ( '' !== trim( $upper_text ) ) : ?>
				<span class="nested-title-line nested-title-upper nested-title-align-<?php echo esc_attr( $upper_align ); ?>">
					<?php echo esc_html( $upper_text ); ?>
				</span>
			<?php endif; ?>

			<span class="nested-title-line nested-title-middle nested-title-align-<?php echo esc_attr( $middle_align ); ?>">
				<?php echo esc_html( $middle_text ); ?>
			</span>

			<?php if ( '' !== trim( $lower_text ) ) : ?>
				<span class="nested-title-line nested-title-lower nested-title-align-<?php echo esc_attr( $lower_align ); ?>">
					<?php echo esc_html( $lower_text ); ?>
				</span>
			<?php endif; ?>
		</<?php echo esc_html( $tag ); ?>>
	</div>
</div>
