/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';

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
	const {
		upperText,
		middleText,
		lowerText,
		upperTag,
		middleTag,
		lowerTag,
	} = attributes;

	const tagOptions = [
		{ label: 'H1', value: 'h1' },
		{ label: 'H2', value: 'h2' },
		{ label: 'H3', value: 'h3' },
		{ label: 'H4', value: 'h4' },
		{ label: 'H5', value: 'h5' },
		{ label: 'P', value: 'p' },
	];

	const UpperTag = upperTag || 'h3';
	const MiddleTag = middleTag || 'h2';
	const LowerTag = lowerTag || 'h3';

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __('Nested Title Settings', 'redcow-nested-title') } initialOpen={ true }>
					<TextControl
						label={ __('Upper text', 'redcow-nested-title') }
						value={ upperText }
						onChange={ (value) => setAttributes({ upperText: value }) }
					/>
					<SelectControl
						label={ __('Upper tag', 'redcow-nested-title') }
						value={ upperTag }
						options={ tagOptions }
						onChange={ (value) => setAttributes({ upperTag: value }) }
					/>
					<TextControl
						label={ __('Middle text', 'redcow-nested-title') }
						value={ middleText }
						onChange={ (value) => setAttributes({ middleText: value }) }
					/>
					<SelectControl
						label={ __('Middle tag', 'redcow-nested-title') }
						value={ middleTag }
						options={ tagOptions }
						onChange={ (value) => setAttributes({ middleTag: value }) }
					/>
					<TextControl
						label={ __('Lower text', 'redcow-nested-title') }
						value={ lowerText }
						onChange={ (value) => setAttributes({ lowerText: value }) }
					/>
					<SelectControl
						label={ __('Lower tag', 'redcow-nested-title') }
						value={ lowerTag }
						options={ tagOptions }
						onChange={ (value) => setAttributes({ lowerTag: value }) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				{ upperText ? (
					<UpperTag className="nested-title-line nested-title-upper">{ upperText }</UpperTag>
				) : null }
				<MiddleTag className="nested-title-line nested-title-middle">
					{ middleText || __('Title', 'redcow-nested-title') }
				</MiddleTag>
				{ lowerText ? (
					<LowerTag className="nested-title-line nested-title-lower">{ lowerText }</LowerTag>
				) : null }
			</div>
		</>
	);
}
