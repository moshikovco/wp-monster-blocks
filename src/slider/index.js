import './style.scss';
import './editor.scss';
// import dateIcon from './icons/calendar-date-2.svg';

import Edit from './components/Edit.js';
import Save from './components/Save.js';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

registerBlockType( 'monster-blocks/monster-slider', {
	title: 'Moster Slider',
	icon: 'images-alt2',
	category: 'monster-blocks',

	attributes: {
		id: {
			type: 'string',
		},
		rowFull: {
			default: true,
		},
		slides: {
			default: [],
		},
	},

	edit: Edit,
	save: Save,
} );
