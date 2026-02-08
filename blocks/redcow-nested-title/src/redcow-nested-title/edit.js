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
		upperAlign,
		middleAlign,
		lowerAlign,
		tag,
	} = attributes;

	const tagOptions = [
		{ label: 'H1', value: 'h1' },
		{ label: 'H2', value: 'h2' },
		{ label: 'H3', value: 'h3' },
		{ label: 'H4', value: 'h4' },
		{ label: 'H5', value: 'h5' },
		{ label: 'P', value: 'p' },
	];

	const alignOptions = [
		{ label: 'Left', value: 'left' },
		{ label: 'Center', value: 'center' },
		{ label: 'Right', value: 'right' },
	];

	const TagName = tag || 'h2';

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __('Title Settings', 'redcow-nested-title') } initialOpen={ true }>
					<SelectControl
						label={ __('Title tag', 'redcow-nested-title') }
						value={ tag }
						options={ tagOptions }
						onChange={ (value) => setAttributes({ tag: value }) }
					/>
					<SelectControl
						label={ __('Upper alignment', 'redcow-nested-title') }
						value={ upperAlign }
						options={ alignOptions }
						onChange={ (value) => setAttributes({ upperAlign: value }) }
					/>
					<SelectControl
						label={ __('Middle alignment', 'redcow-nested-title') }
						value={ middleAlign }
						options={ alignOptions }
						onChange={ (value) => setAttributes({ middleAlign: value }) }
					/>
					<SelectControl
						label={ __('Lower alignment', 'redcow-nested-title') }
						value={ lowerAlign }
						options={ alignOptions }
						onChange={ (value) => setAttributes({ lowerAlign: value }) }
					/>
				</PanelBody>
				<PanelBody title={ __('Content', 'redcow-nested-title') } initialOpen={ false }>
					<TextControl
						label={ __('Upper text', 'redcow-nested-title') }
						value={ upperText }
						onChange={ (value) => setAttributes({ upperText: value }) }
					/>
					<TextControl
						label={ __('Middle text', 'redcow-nested-title') }
						value={ middleText }
						onChange={ (value) => setAttributes({ middleText: value }) }
					/>
					<TextControl
						label={ __('Lower text', 'redcow-nested-title') }
						value={ lowerText }
						onChange={ (value) => setAttributes({ lowerText: value }) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div className={"nested-title-container"}>
					<TagName className="nested-title">
						{ upperText ? (
							<span className={ `nested-title-line nested-title-upper nested-title-align-${upperAlign || 'left'}` }>
							{ upperText }
						</span>
						) : null }
						<span className={ `nested-title-line nested-title-middle nested-title-align-${middleAlign || 'left'}` }>
						{ middleText || __('Title', 'redcow-nested-title') }
					</span>
						{ lowerText ? (
							<span className={ `nested-title-line nested-title-lower nested-title-align-${lowerAlign || 'left'}` }>
							{ lowerText }
						</span>
						) : null }
					</TagName>
				</div>
			</div>
		</>
	);
}
