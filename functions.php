<?php

# ========================================================
# Basic inclusions

// function enqueue_custom_editor_styles() {
//     add_editor_style('style.css');
// }
add_action('after_setup_theme', function() {
    add_editor_style('style.css');
});


add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('redcow-style', get_stylesheet_uri());
});


# ========================================================
# CUSTOM BLOCK CATEGORIES

add_filter( 'block_categories_all' , function( $categories ) {

	$categories[] = array(
		'slug'  => 'redcow-blocks',
		'title' => 'RedCow Blocks'
	);

	return $categories;
} );

# ========================================================
# CUSTOM BLOCKS

$customBlocks = [
    "redcow-hero-banner",
    "redcow-nav-bar",
    "redcow-logo-scroller",
    "redcow-angled-separator",
    "redcow-footer",
    "redcow-tile-link",
    "redcow-case-study-letterbox",
    "redcow-geometric-section",
];

foreach($customBlocks as $block){
    include(__DIR__ . "/blocks/".$block."/".$block.".php");
}

# ========================================================