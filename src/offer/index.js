import './style.scss';
import './editor.scss';
// import dateIcon from './icons/calendar-date-2.svg';

import Edit from './components/Edit.js';
import Save from './components/Save.js';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

registerBlockType( 'monster-blocks/monster-offer', {
	title: 'Monster Offer',
	icon: 'format-image',
	category: 'monster-blocks',

	attributes: {
		date: {
			type: 'string',
		},
		heading: {
			type: 'string',
		},
		text: {
			type: 'string',
		},
		imgUrl: {
			type: 'string',
		},
		iconLeft: {
			type: 'string',
		},
		iconRight: {
			type: 'string',
		},
	},

	edit: Edit,
	save: Save,
} );
