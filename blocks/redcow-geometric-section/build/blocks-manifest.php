<?php
// This file is generated. Do not modify it manually.
return array(
	'redcow-geometric-section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'redcow/redcow-geometric-section',
		'version' => '0.1.0',
		'title' => 'Redcow Geometric Section',
		'category' => 'theme',
		'icon' => 'block-default',
		'description' => 'Geometric content section',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => false,
				'text' => false
			)
		),
		'attributes' => array(
			'outerColor' => array(
				'type' => 'string',
				'default' => 'white'
			),
			'innerColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'shape' => array(
				'type' => 'string',
				'default' => 'semi-circle-top-left'
			),
			'topSpacing' => array(
				'type' => 'number',
				'default' => 0
			)
		),
		'textdomain' => 'redcow-geometric-section',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
