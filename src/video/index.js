import './style.scss';
import './editor.scss';
// import dateIcon from './icons/calendar-date-2.svg';

import Edit from './components/Edit.js';
import Save from './components/Save.js';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

registerBlockType( 'monster-blocks/monster-video', {
	title: 'Monster video',
	icon: 'format-image',
	category: 'monster-blocks',

	attributes: {
		videoUrl: {
			type: 'string',
		},
		videoId: {
			type: 'string',
		},
	},

	edit: Edit,
	save: Save,
} );
