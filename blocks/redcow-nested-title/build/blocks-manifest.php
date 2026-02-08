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
			'upperText' => array(
				'type' => 'string',
				'default' => ''
			),
			'middleText' => array(
				'type' => 'string',
				'default' => 'Title'
			),
			'lowerText' => array(
				'type' => 'string',
				'default' => ''
			),
			'upperAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'middleAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'lowerAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'tag' => array(
				'type' => 'string',
				'default' => 'h2'
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
