<?php
// This file is generated. Do not modify it manually.
return array(
	'redcow-angled-separator' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'redcow/redcow-angled-separator',
		'version' => '0.1.0',
		'title' => 'Redcow Angled Separator',
		'category' => 'theme',
		'icon' => 'block-default',
		'description' => 'Angled separator for page sections',
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
			'fromColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'toColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'transitionType' => array(
				'type' => 'string',
				'default' => 'arrow'
			)
		),
		'textdomain' => 'redcow-angled-separator',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
