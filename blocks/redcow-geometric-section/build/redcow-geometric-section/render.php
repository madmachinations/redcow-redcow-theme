<?php

require_once(get_template_directory() . '/blocks/redcow-geometric-section/build/redcow-geometric-section/render_functions.php');

$shapeConfigs = [
	"semi-circle-top-left" => [
		"containerMinHeight" => "53vw",
		"backgroundColor" => "inner",
	],
	"semi-circle-top-middle" => [
		"containerMinHeight" => "52vw",
		"backgroundColor" => "inner",
	],
	"semi-circle-top-right" => [
		"containerMinHeight" => "53vw",
		"backgroundColor" => "inner",
	],
	"semi-circle-bottom-left" => [
		"containerMinHeight" => "53vw",
		"backgroundColor" => "outer",
	],
	"semi-circle-bottom-middle" => [
		"containerMinHeight" => "52vw",
		"backgroundColor" => "outer",
	],
	"semi-circle-bottom-right" => [
		"containerMinHeight" => "53vw",
		"backgroundColor" => "outer",
	],
];

$backgroundColor = $shapeConfigs[$attributes['shape']]['backgroundColor'] === 'inner' ? $attributes['innerColor'] : $attributes['outerColor'];
$spacingColor = $shapeConfigs[$attributes['shape']]['backgroundColor'] === 'inner' ? $attributes['outerColor'] : $attributes['innerColor'];

$minHeight = 'calc(' . $shapeConfigs[$attributes['shape']]['containerMinHeight'] . 'vw + ' . $attributes['topSpacing'] . 'px)';
?>


<div class="redcow-geometric-section" style="background-color: <?php echo $backgroundColor; ?>; min-height: <?php echo $minHeight; ?>;">

	<div class="redcow-geometric-section-shape-container">

		<?php echo spacingSvg(
			$attributes['topSpacing'],
			$spacingColor
		); ?>

		<?php echo shape(
			$attributes['shape'],
			$attributes['innerColor'],
			$attributes['outerColor']
		); ?>

	</div>

	<div class="redcow-geometric-section-content">
		<?php echo $content; ?>
	</div>

</div>
