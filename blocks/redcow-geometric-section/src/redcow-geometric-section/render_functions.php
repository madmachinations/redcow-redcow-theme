<?php

function spacingSvg(
	int $height,
	string $color,
): ?string {
	if($height === 0){
		return null;
	}

	return '
<svg style="display: block;" fill="none" xmlns="http://www.w3.org/2000/svg" height="auto" width="100%" viewBox="0 0 610 '.$height.'">
	<rect width="610" height="'.$height.'" fill="'.$color.'" />
</svg>';
}

function semiCircleSvg(
	string $shapeColor,
	string $transitionColor,
	string $maskId,
	int $width,
	int $height,
	int $ellipseX,
	int $ellipseY,
	int $ellipseSize,
): string {
	return '
<svg style="display: block;" fill="none" xmlns="http://www.w3.org/2000/svg" height="auto" width="100%" viewBox="0 0 '.$width.' '.$height.'">
	<rect width="'.$width.'" height="'.$height.'" fill="'.$transitionColor.'" />
	<mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" height="'.$height.'" id="'.$maskId.'" width="'.$width.'">
		<rect width="'.$width.'" height="'.$height.'" fill="blue"/>
	</mask>
	<g mask="url(#'.$maskId.')">
		<ellipse cx="'.$ellipseX.'" cy="'.$ellipseY.'" ry="'.$ellipseSize.'" fill="'.$shapeColor.'" rx="'.$ellipseSize.'"/>
	</g>
</svg>';
}


function shape(string $shapeType, string $shapeColor, string $transitionColor): ?string
{
	return match ($shapeType) {
		'semi-circle-top-left' => semiCircleSvg($shapeColor, $transitionColor, $shapeType, 610, 160, 244, 500, 500),
		'semi-circle-top-middle' => semiCircleSvg($shapeColor, $transitionColor, $shapeType, 610, 65, 305, 750, 750),
		'semi-circle-top-right' => semiCircleSvg($shapeColor, $transitionColor, $shapeType, 610, 160, 366, 500, 500),
		'semi-circle-bottom-left' => semiCircleSvg($shapeColor, $transitionColor, $shapeType, 610, 160, 244, -340, 500),
		'semi-circle-bottom-middle' => semiCircleSvg($shapeColor, $transitionColor, $shapeType, 610, 65, 305, -685, 750),
		'semi-circle-bottom-right' => semiCircleSvg($shapeColor, $transitionColor, $shapeType, 610, 160, 366, -340, 500),
		default => null,
	};
}
