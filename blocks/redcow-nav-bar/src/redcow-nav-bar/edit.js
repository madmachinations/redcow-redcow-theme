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
import { useBlockProps } from '@wordpress/block-editor';

import { InnerBlocks } from '@wordpress/block-editor';

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
export default function Edit() {
	return (
		<>

			<div { ...useBlockProps() }>

				<NavBarLogo />

				<div class="nav-bar-content">
					<div class="nav-bar-menu">
						<InnerBlocks allowedBlocks={['core/navigation']} />
					</div>

					<div className="nav-bar-right">
						<div className="get-in-touch-button">Get in touch</div>
					</div>
				</div>

			</div>

		</>
	);
}


function NavBarLogo() {
	return (
		<div class="dynamic-logo">
			<div class="full-logo">
				<FullLogoSvg />
			</div>
		</div>
	)
}


function FullLogoSvg() {
	return (
		<svg width="20" height="22" viewBox="0 0 20 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g fill-rule="evenodd" transform="translate(2.7942582e-5,-7.2681199)">
				<g transform="translate(0,7)">
					<path
						d="M 7.462,21.784 H 0.071 C 0.051,21.482 0.02,21.212 0.02,20.944 0.017,14.408 0.03,7.873 0,1.34 -0.003,0.59 0.235,0.403 0.988,0.42 3.104,0.467 5.222,0.436 7.464,0.436 v 5.612 l 0.2,0.04 c 0.128,-0.203 0.258,-0.405 0.383,-0.61 0.94,-1.547 2.065,-2.946 3.565,-4.04 2.153,-1.568 5.233,-1.55 7.405,-0.005 0.503,0.357 0.568,0.648 0.267,1.181 -1.053,1.872 -2.048,3.772 -3.1,5.727 L 15.537,7.869 C 14.004,6.742 12.35,6.7 10.764,7.769 9.265,8.779 8.27,10.165 7.585,11.764 7.47,12.034 7.468,12.358 7.467,12.657 7.459,15.393 7.462,18.128 7.462,20.863 Z"
						id="path2"
					/>
				</g>
			</g>
		</svg>
	)
}
