<?php
// This file is generated. Do not modify it manually.
return array(
	'redcow-logo-scroller' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'redcow/redcow-logo-scroller',
		'version' => '0.1.0',
		'title' => 'Redcow Logo Scroller',
		'category' => 'theme',
		'icon' => 'block-default',
		'description' => 'Logo scroller.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'direction' => array(
				'type' => 'string',
				'default' => 'right-to-left'
			)
		),
		'textdomain' => 'redcow-logo-scroller',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
