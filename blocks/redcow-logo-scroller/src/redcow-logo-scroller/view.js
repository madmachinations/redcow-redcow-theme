/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */

function updateLogoTrack(track) {
	const firstSet = track.querySelector(".logo-set");
	const gap = 150;
	const totalWidth = firstSet ? firstSet.scrollWidth + gap : track.scrollWidth / 2;
	const pixelsPerSecond = 120;
	const duration = totalWidth / pixelsPerSecond;

	track.style.setProperty("--scroll-distance", `-${totalWidth}px`);
	track.style.animationDuration = `${duration}s`;
}

function waitForTrackImages(track) {
	const images = Array.from(track.querySelectorAll("img"));
	if (!images.length) {
		updateLogoTrack(track);
		return;
	}

	images.forEach((img) => {
		img.loading = "eager";
		img.decoding = "sync";
	});

	const pending = images.filter((img) => !img.complete);
	if (!pending.length) {
		updateLogoTrack(track);
		return;
	}

	let remaining = pending.length;
	const done = () => {
		remaining -= 1;
		if (remaining <= 0) {
			updateLogoTrack(track);
		}
	};

	pending.forEach((img) => {
		img.addEventListener("load", done, { once: true });
		img.addEventListener("error", done, { once: true });
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const tracks = document.getElementsByClassName("logo-track");

	Array.from(tracks).forEach((track) => {
		waitForTrackImages(track);
	});
});

window.addEventListener("resize", () => {
	const tracks = document.getElementsByClassName("logo-track");
	Array.from(tracks).forEach((track) => updateLogoTrack(track));
});

/* eslint-enable no-console */
