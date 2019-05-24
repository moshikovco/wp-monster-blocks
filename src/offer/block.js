import './style.scss';
import './editor.scss';
// import dateIcon from './icons/calendar-date-2.svg';

const {
	registerBlockType,
	getBlockDefaultClassName,
} = wp.blocks;

const {
	InspectorControls,
	RichText,
	MediaUpload,
} = wp.editor;

const {
	FormToggle,
} = wp.components;

registerBlockType( 'common/mediaism-offer', {
	title: 'Offer',
	icon: 'smiley',
	category: 'common',

	attributes: {
		date: {
			type: 'string',
		},
		heading: {
			type: 'string',
		},
		imgUrl: {
			type: 'string',
			default: 'http://placehold.it/500',
		},
	},

	edit( props ) {
		const { className, setAttributes } = props;
		const { attributes } = props;

		// we create a function that will take the changes from RichText
		// and update the attributes
		function changeDate( changes ) {
			setAttributes( { date: changes } );
		}

		function changeHeading( changes ) {
			setAttributes( { heading: changes } );
		}

		function selectImage( value ) {
			setAttributes( {
				imgUrl: value.sizes.full.url,
			} );
		}

		function changeDirection() {
			setAttributes( {
				direction: ! attributes.direction,
			} );
		}

		return [
			<InspectorControls key="1">
				<div style={ { padding: '1em 0' } }>
					Options
				</div>
				<label className="editor-post-status__row">
					<div><b>Направление</b></div>
					<FormToggle
						checked={ attributes.direction === true }
						onChange={ changeDirection }
					/>
				</label>
			</InspectorControls>,

			<div
				key="2"
				className={ `${ className } offer-block position-relative overflow-hidden` }
			>
				<MediaUpload
					onSelect={ selectImage }
					render={ ( { open } ) => {
						return (
							<button
								className="w-100 h-100 position-absolute p-0 overflow-hidden t-0"
								onClick={ open }>
								<img
									className="image w-100 h-100 object-fit-cover"
									src={ attributes.imgUrl }
									alt=""
								/>
							</button>
						);
					} }
				/>

				<RichText
					tagName="h1"
					className="content"
					value={ attributes.heading }
					onChange={ changeHeading }
					placeholder="Заголовок"
					keepPlaceholderOnFocus={ true }
					style={ { color: '#ffffff' } }
				/>

				<RichText
					tagName="div"
					className="content"
					value={ attributes.date }
					onChange={ changeDate }
					placeholder="23-25 декабря"
					keepPlaceholderOnFocus={ true }
					style={ { color: '#ffffff' } }
				/>
			</div>,
		];
	},

	save( props ) {
		const className = getBlockDefaultClassName( 'common/mediaism-text-image' );
		const { attributes } = props;

		return (
			<div
				key="2"
				className={ ` ${ className } mb-5 offer-block row-full` }
				style={ {
					backgroundImage: `url( ${ attributes.imgUrl } )`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				} }>
				<div className="container">

					<RichText.Content
						tagName="h1"
						className="display-1 text-light font-weight-bold"
						value={ attributes.heading }
					/>

					<div className="meta-date">

						<RichText.Content
							tagName="div"
							className="text-light"
							value={ attributes.date }
						/>
					</div>
				</div>
			</div>
		);
	},
} );
