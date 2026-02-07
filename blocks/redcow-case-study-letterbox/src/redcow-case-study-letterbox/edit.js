/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Block editor hooks and components.
 */
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	URLInput,
	InnerBlocks,
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

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
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { imageId, imageUrl = '', linkUrl = '' } = attributes || {};

	const onSelectImage = ( media ) => {
		setAttributes( {
			imageId: media?.id || undefined,
			imageUrl: media?.url || '',
		} );
	};

	const onRemoveImage = () => {
		setAttributes( { imageId: undefined, imageUrl: '' } );
	};

	const onChangeLink = ( url ) => setAttributes( { linkUrl: url || '' } );

	const blockProps = useBlockProps( { className: 'redcow-letterbox' } );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Background', 'redcow-case-study-letterbox' ) } initialOpen={ true }>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ onSelectImage }
							allowedTypes={ [ 'image' ] }
							value={ imageId }
							render={ ( { open } ) => (
								<Fragment>
									<Button variant="secondary" onClick={ open }>
										{ imageUrl
											? __( 'Change image', 'redcow-case-study-letterbox' )
											: __( 'Select image', 'redcow-case-study-letterbox' ) }
									</Button>
									{ !! imageUrl && (
										<Button variant="link" onClick={ onRemoveImage } style={ { marginLeft: 8 } }>
											{ __( 'Remove', 'redcow-case-study-letterbox' ) }
										</Button>
									) }
								</Fragment>
							) }
						/>
					</MediaUploadCheck>
				</PanelBody>

				<PanelBody title={ __( 'Link', 'redcow-case-study-letterbox' ) } initialOpen={ true }>
					<URLInput
						label={ __( 'Destination URL or page', 'redcow-case-study-letterbox' ) }
						value={ linkUrl }
						onChange={ onChangeLink }
					/>
				</PanelBody>
			</InspectorControls>

			<div
				className="redcow-letterbox__item"
				style={ imageUrl ? { backgroundImage: `url(${ imageUrl })` } : undefined }
			>
				<div className="redcow-letterbox__overlay">
					<div className="redcow-letterbox__overlay-inner">
						<InnerBlocks />
					</div>
				</div>
			</div>
		</div>
	);
}
