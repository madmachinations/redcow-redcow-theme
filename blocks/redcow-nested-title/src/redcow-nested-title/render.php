<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
	$upper_text = isset( $attributes['upperText'] ) ? $attributes['upperText'] : '';
	$middle_text = isset( $attributes['middleText'] ) ? $attributes['middleText'] : '';
	$lower_text = isset( $attributes['lowerText'] ) ? $attributes['lowerText'] : '';

	$allowed_tags = array( 'h1', 'h2', 'h3', 'h4', 'h5', 'p' );
	$upper_tag = isset( $attributes['upperTag'] ) ? strtolower( $attributes['upperTag'] ) : 'h3';
	$middle_tag = isset( $attributes['middleTag'] ) ? strtolower( $attributes['middleTag'] ) : 'h2';
	$lower_tag = isset( $attributes['lowerTag'] ) ? strtolower( $attributes['lowerTag'] ) : 'h3';

	if ( ! in_array( $upper_tag, $allowed_tags, true ) ) {
		$upper_tag = 'h3';
	}
	if ( ! in_array( $middle_tag, $allowed_tags, true ) ) {
		$middle_tag = 'h2';
	}
	if ( ! in_array( $lower_tag, $allowed_tags, true ) ) {
		$lower_tag = 'h3';
	}
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php if ( '' !== trim( $upper_text ) ) : ?>
		<<?php echo esc_html( $upper_tag ); ?> class="nested-title-line nested-title-upper">
			<?php echo esc_html( $upper_text ); ?>
		</<?php echo esc_html( $upper_tag ); ?>>
	<?php endif; ?>

	<<?php echo esc_html( $middle_tag ); ?> class="nested-title-line nested-title-middle">
		<?php echo esc_html( $middle_text ); ?>
	</<?php echo esc_html( $middle_tag ); ?>>

	<?php if ( '' !== trim( $lower_text ) ) : ?>
		<<?php echo esc_html( $lower_tag ); ?> class="nested-title-line nested-title-lower">
			<?php echo esc_html( $lower_text ); ?>
		</<?php echo esc_html( $lower_tag ); ?>>
	<?php endif; ?>
</div>
