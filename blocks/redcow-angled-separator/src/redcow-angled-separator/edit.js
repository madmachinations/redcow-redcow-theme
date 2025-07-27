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
import { useBlockProps, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';


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
export default function Edit({ attributes, setAttributes }) {
	const { fromColor, toColor, transitionType } = attributes;

	const blockProps = useBlockProps({
		style: {
			backgroundColor: fromColor || undefined
		}
	});

	return (
		<>

			<InspectorControls>
				<PanelBody title="From colour" initialOpen={true}>
					<ColorPalette
						value={fromColor}
						onChange={(newColor) => setAttributes({ fromColor: newColor })}
					/>
				</PanelBody>
				<PanelBody title="To colour" initialOpen={true}>
					<ColorPalette
						value={toColor}
						onChange={(newColor) => setAttributes({ toColor: newColor })}
					/>
				</PanelBody>
				<PanelBody title="Shape" initialOpen={true}>
					<SelectControl
						label="Transition type"
						value={transitionType}
						options={[
						{ label: 'Slide Right', value: 'slide-right' },
						{ label: 'Slide Left', value: 'slide-left' },
						{ label: 'Arrow', value: 'arrow' }
						]}
						onChange={(value) => setAttributes({ transitionType: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{transitionType == "arrow" ? (
					<Arrow fillColor={toColor} />
				) : null}

				{transitionType == "slide-left" ? (
					<SlideLeft fillColor={toColor} />
				) : null}

				{transitionType == "slide-right" ? (
					<SlideRight fillColor={toColor} />
				) : null}
			</div>

		</>
	);
}



function Arrow({ fillColor }) {
	return (
		<svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
			<polygon points="0,100 1000,100 1000,0 500,100 0,0" fill={fillColor} />
		</svg>
	)
}


function SlideRight({ fillColor }) {
	return (
		<svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
			<polygon points="0,100 1000,100 0,0" fill={fillColor} />
		</svg>
	)
}


function SlideLeft({ fillColor }) {
	return (
		<svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
			<polygon points="0,100 1000,100 1000,0" fill={fillColor} />
		</svg>
	)
}