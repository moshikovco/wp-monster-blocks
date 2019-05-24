import './style.scss';
import './editor.scss';

import Edit from './components/Edit.js';
import Save from './components/Save.js';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

registerBlockType( 'monster-blocks/monster-text', {
	title: 'Monster Text',
	icon: 'edit',
	category: 'monster-blocks',

	attributes: {
		bodyContent: {
			type: 'string',
		},
		heading: {
			type: 'string',
		},
		direction: {
			default: false,
		},
	},

	edit: Edit,
	save: Save,
} );
