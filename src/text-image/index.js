import './style.scss';
import './editor.scss';

import Edit from './components/Edit.js';
import Save from './components/Save.js';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

registerBlockType( 'monster-blocks/monster-text-image', {
	title: 'Monster Text & image',
	icon: 'editor-justify',
	category: 'monster-blocks',

	attributes: {
		bodyContent: {
			type: 'string',
		},
		heading: {
			type: 'string',
		},
		imgUrl: {
			type: 'string',
			// default: 'http://placehold.it/500',
		},
		direction: {
			default: false,
		},
	},

	edit: Edit,
	save: Save,
} );
