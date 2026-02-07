/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, ColorPalette, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl } from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

const shapeConfigs = {
	"semi-circle-top-left": {
		"shapeMinViewHeight": 26.5,
		"backgroundColor": "inner",
	},
	"semi-circle-top-right": {
		"shapeMinViewHeight": 26.5,
		"backgroundColor": "inner",
	},
	"semi-circle-top-middle": {
		"shapeMinViewHeight": 26,
		"backgroundColor": "inner",
	},
	"semi-circle-bottom-left": {
		"shapeMinViewHeight": 26.5,
		"backgroundColor": "outer",
	},
	"semi-circle-bottom-right": {
		"shapeMinViewHeight": 26.5,
		"backgroundColor": "outer",
	},
	"semi-circle-bottom-middle": {
		"shapeMinViewHeight": 26,
		"backgroundColor": "outer",
	},
}

export default function Edit({ attributes, setAttributes }) {
	const { topSpacing, outerColor, innerColor, shape } = attributes;

	const backgroundColor = shapeConfigs[shape]["backgroundColor"] === "inner" ? innerColor : outerColor;
	const spacingColor = shapeConfigs[shape]["backgroundColor"] === "inner" ? outerColor : innerColor;

	const blockProps = useBlockProps({
		style: {
			backgroundColor: backgroundColor,
			minHeight: "calc(" + String(shapeConfigs[shape]) + "vw + " + String(topSpacing) + "px)",
		},
		className: "redcow-geometric-section"
	});

	return (
		<>

			<InspectorControls>
				<PanelBody title="Outer colour" initialOpen={true}>
					<ColorPalette
						value={outerColor}
						onChange={(newColor) => setAttributes({ outerColor: newColor })}
					/>
				</PanelBody>
				<PanelBody title="Inner colour" initialOpen={true}>
					<ColorPalette
						value={innerColor}
						onChange={(newColor) => setAttributes({ innerColor: newColor })}
					/>
				</PanelBody>
				<PanelBody title="Shape" initialOpen={true}>
					<SelectControl
						label="Shape"
						value={shape}
						options={[
							{ label: 'Semi-circle top left', value: 'semi-circle-top-left' },
							{ label: 'Semi-circle top middle', value: 'semi-circle-top-middle' },
							{ label: 'Semi-circle top right', value: 'semi-circle-top-right' },
							{ label: 'Semi-circle bottom left', value: 'semi-circle-bottom-left' },
							{ label: 'Semi-circle bottom middle', value: 'semi-circle-bottom-middle' },
							{ label: 'Semi-circle bottom right', value: 'semi-circle-bottom-right' },
						]}
						onChange={(value) => setAttributes({ shape: value })}
					/>
				</PanelBody>
				<PanelBody title="Containment" initialOpen={false}>
					<RangeControl
						label="Top spacing"
						value={ topSpacing }
						onChange={ (val) => setAttributes({ topSpacing: val }) }
						min={ 0 }
						max={ 500 }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>

				<div className={"redcow-geometric-section-shape-container"}>
					<TopSpacing height={topSpacing} color={spacingColor} />
					<Shape
						shapeType={shape}
						shapeColor={innerColor}
						transitionColor={outerColor}
					/>
				</div>

				<div className={"redcow-geometric-section-content"}>
					<InnerBlocks />
				</div>

			</div>

		</>
	);
}


function TopSpacing({height, color}) {
	if(height === 0){
		return null
	}

	return (
		<svg style={{display: "block"}} fill="none" xmlns="http://www.w3.org/2000/svg" height="auto" width="100%" viewBox={"0 0 610" + " " + String(height)}>
			<rect width={610} height={height} fill={color} />
		</svg>
	)
}

function Shape({shapeType, shapeColor, transitionColor}) {
	if(shapeType === "semi-circle-top-left") {
		return <SemiCircleSvg
			shapeColor={shapeColor}
			transitionColor={transitionColor}
			maskId={shapeType}
			width={610}
			height={160}
			ellipseX={244}
			ellipseY={500}
			ellipseSize={500}
		/>
	}

	if(shapeType === "semi-circle-top-middle") {
		return <SemiCircleSvg
			shapeColor={shapeColor}
			transitionColor={transitionColor}
			maskId={shapeType}
			width={610}
			height={65}
			ellipseX={305}
			ellipseY={750}
			ellipseSize={750}
		/>
	}

	if(shapeType === "semi-circle-top-right") {
		return <SemiCircleSvg
			shapeColor={shapeColor}
			transitionColor={transitionColor}
			maskId={shapeType}
			width={610}
			height={160}
			ellipseX={366}
			ellipseY={500}
			ellipseSize={500}
		/>
	}

	if(shapeType === "semi-circle-bottom-left") {
		return <SemiCircleSvg
			shapeColor={shapeColor}
			transitionColor={transitionColor}
			maskId={shapeType}
			width={610}
			height={160}
			ellipseX={244}
			ellipseY={-340}
			ellipseSize={500}
		/>
	}

	if(shapeType === "semi-circle-bottom-middle") {
		return <SemiCircleSvg
			shapeColor={shapeColor}
			transitionColor={transitionColor}
			maskId={shapeType}
			width={610}
			height={65}
			ellipseX={305}
			ellipseY={-685}
			ellipseSize={750}
		/>
	}

	if(shapeType === "semi-circle-bottom-right") {
		return <SemiCircleSvg
			shapeColor={shapeColor}
			transitionColor={transitionColor}
			maskId={shapeType}
			width={610}
			height={160}
			ellipseX={366}
			ellipseY={-340}
			ellipseSize={500}
		/>
	}

	return null
}



function SemiCircleSvg({ width, height, ellipseX, ellipseY, ellipseSize, shapeColor, transitionColor, maskId }) {
	return (
		<svg style={{display: "block"}} fill="none" xmlns="http://www.w3.org/2000/svg" height="auto" width="100%" viewBox={"0 0 " + String(width) + " " + String(height)}>
			<rect width={width} height={height} fill={transitionColor} />
			<mask style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" height={height} id={maskId} width={width}>
				<rect width={width} height={height} fill="blue"/>
			</mask>
			<g mask={"url(#"+maskId+")"}>
				<ellipse cx={ellipseX} cy={ellipseY} ry={ellipseSize} fill={shapeColor} rx={ellipseSize}/>
			</g>
		</svg>
	)
}
