import './style.scss';
import './editor.scss';

import Edit from './components/Edit.js';
import Save from './components/Save.js';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

registerBlockType( 'moster-blocks/monster-text-list', {
	title: 'Monster Text & List',
	icon: 'align-right',
	category: 'monster-blocks',

	attributes: {
		bodyContent: {
			type: 'string',
		},
		heading: {
			type: 'string',
		},
		items: {
			default: [],
		},
	},

	edit: Edit,
	save: Save,
} );
