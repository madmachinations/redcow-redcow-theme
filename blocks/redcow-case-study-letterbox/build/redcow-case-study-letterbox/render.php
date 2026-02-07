<?php
/**
 * Server-side rendering for the block.
 *
 * Expects attributes:
 * - imageUrl (string)
 * - linkUrl (string)
 *
 * Variables available in this render file:
 * - array  $attributes Block attributes.
 * - string $content    The block inner content (InnerBlocks).
 * - WP_Block $block    Block instance.
 */

$image_url = isset( $attributes['imageUrl'] ) ? (string) $attributes['imageUrl'] : '';
$link_url  = isset( $attributes['linkUrl'] ) ? (string) $attributes['linkUrl'] : '';

$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => 'redcow-letterbox' ] );

$href       = $link_url ? esc_url( $link_url ) : '#';
$style_attr = $image_url ? ' style="background-image:url(' . esc_url( $image_url ) . ');"' : '';

?>
<div <?php echo $wrapper_attributes; ?>>
	<a class="redcow-letterbox__item" href="<?php echo $href; ?>"<?php echo $style_attr; ?>>
		<div class="redcow-letterbox__overlay">
			<div class="redcow-letterbox__overlay-inner">
				<?php echo $content; ?>
			</div>
		</div>
	</a>
</div>
