<?php
// This file is generated. Do not modify it manually.
return array(
	'redcow-nested-title' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'redcow/redcow-nested-title',
		'version' => '0.1.0',
		'title' => 'Redcow Nested Title',
		'category' => 'theme',
		'icon' => 'block-default',
		'description' => 'Nested Title',
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
		'textdomain' => 'redcow-nested-title',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
