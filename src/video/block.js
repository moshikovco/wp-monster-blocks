/* eslint-disable space-in-parens */
/* eslint-disable array-bracket-spacing */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './style.scss';
import './editor.scss';

const {
	registerBlockType,
	getBlockDefaultClassName,
} = wp.blocks;

const {
	InspectorControls,
} = wp.editor;

const {
	FormToggle,
	TextControl,
} = wp.components;

registerBlockType( 'common/mediaism-video', {
	title: 'Video',
	icon: 'smiley',
	category: 'common',

	attributes: {
		videoUrl: {
			type: 'string',
		},
		videoId: {
			type: 'string',
		},
	},

	edit( props ) {
		const { className, setAttributes } = props;
		const { attributes } = props;

		const getVideoId = ( url ) => {
			const urlArray = url.split( '/' );
			return urlArray[ urlArray.length - 1 ].replace(/watch\?v=/, '');
		};

		function changeVideoUrl( url ) {
			setAttributes( {
				videoUrl: url,
				videoId: getVideoId( url ),
			} );
		}

		return [
			<InspectorControls key="1">
				<div className="editor-post-status__row">
					<div className="mb-2"><b>Направление</b></div>
					<FormToggle
						checked={ true }
						// onChange={ changeDirection }
					/>
				</div>
			</InspectorControls>,

			<div className={ `${ className } row` } key="2">
				<div className="col-md-8 col-12">
					<TextControl
						className="w-100"
						label="Video URL"
						placeholder="Заголовок"
						keepPlaceholderOnFocus={ true }
						value={ attributes.videoUrl }
						onChange={ url => {
							changeVideoUrl( url );
							console.log(props.attributes);
						} }
					/>
				</div>
			</div>,
		];
	},

	save( props ) {
		const className = getBlockDefaultClassName( 'common/mediaism-text-image' );
		const { attributes } = props;

		return (
			<div className={ `${ className } mb-5 container` } >
				<div className="aspect-container aspect-container-16-9 shape-rad-2">
					<iframe
						title="Video block"
						className="aspect-item w-100 h-100 border-0"
						src={ `https://www.youtube.com/embed/${ attributes.videoId }` } />
				</div>
			</div>
		);
	},
} );
