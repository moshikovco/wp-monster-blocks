import './style.scss';
import './editor.scss';

import Edit from './components/Edit.js';
import Save from './components/Save.js';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

registerBlockType( 'monster-blocks/monster-list', {
	title: 'Monster List',
	icon: 'list-view',
	category: 'monster-blocks',

	attributes: {
		items: {
			default: [],
		},
	},

	edit: Edit,
	save: Save,
} );
