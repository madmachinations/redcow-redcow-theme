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

function handleGetInTouchBarScrollEffect() {
  const navBar = document.querySelector('.get-in-touch-bar');
  if (!navBar) return;

  const scrollTop = window.scrollY;
  const scrollBottomThreshold = document.documentElement.scrollHeight - window.innerHeight - 100;

  // if (scrollTop === 0 || scrollTop >= scrollBottomThreshold) {
  if (scrollTop === 0) {
    navBar.classList.remove('visible');
  } else {
    navBar.classList.add('visible');
  }
}

window.addEventListener('DOMContentLoaded', handleGetInTouchBarScrollEffect);
window.addEventListener('scroll', handleGetInTouchBarScrollEffect);

function setupNavBurgerMenus() {
  const navBlocks = document.querySelectorAll('.wp-block-redcow-redcow-nav-bar');
  if (!navBlocks.length) return;

  navBlocks.forEach((block) => {
    const burger = block.querySelector('.nav-burger');
    const menu = block.querySelector('.nav-bar-menu');
    if (!burger || !menu) return;

    const closeMenu = () => {
      block.classList.remove('is-menu-open');
      block.classList.remove('force-visible');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
    };

    const openMenu = () => {
      block.classList.add('is-menu-open');
      block.classList.add('force-visible');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Close menu');
    };

    const toggleMenu = () => {
      if (block.classList.contains('is-menu-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    burger.addEventListener('click', toggleMenu);

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        closeMenu();
      }
    });

    const updateNavHeight = () => {
      block.style.setProperty('--nav-bar-height', `${block.offsetHeight}px`);
    };

    const handleResize = () => {
      updateNavHeight();
      if (!window.matchMedia('(max-width: 1199px)').matches) {
        closeMenu();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
  });
}

window.addEventListener('DOMContentLoaded', setupNavBurgerMenus);

/* eslint-enable no-console */
