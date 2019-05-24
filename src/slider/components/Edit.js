/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

//Register editor components
const {
	MediaUpload,
	InspectorControls,
} = wp.editor;

// Register components
const {
	FormToggle,
	Dashicon,
} = wp.components;

export default class Edit extends Component {
	state = {
		initSlide: 0,
		time: 1000,
	}

	changeImg() {
		this.imageRef.src = 'ds';
	}

	render() {
		const { setAttributes } = this.props;
		const {
			slides,
			rowFull,
		} = this.props.attributes;

		if ( ! this.props.attributes.id ) {
			const id = `slide${ Math.floor( Math.random() * 100 ) }`;
			this.props.setAttributes( {
				id,
			} );
		}

		const removeSlide = ( obj ) => {
			const tempSlides = slides
				.filter( item => item.index !== obj.index )
				.map( slide => {
					if ( slide.index > obj.index ) {
						slide.index -= 1;
					}

					return slide;
				} );

			this.props.setAttributes( {
				slides: tempSlides,
			} );
		};

		const slidesList = slides
			.sort( ( a, b ) => a.index - b.index )
			.map( ( slide, i ) => {
				return (
					<div
						className="col-4"
						style={ {
							height: '100px',
							position: 'relative',
						} }
						key={ i }>
						<button
							className="components-button is-button is-default is-large"
							style={ {
								position: 'absolute',
								top: '8px',
								right: '8px',
							} }
							onClick={ () => removeSlide( slide ) }
						>
							<Dashicon icon="trash" />
						</button>

						<MediaUpload
							onSelect={ media => {
								const image = media.sizes.full ?
									media.sizes.full.url :
									media.url;
								const newObject = Object.assign( {}, slide, {
									image: image,
								} );
								this.props.setAttributes( {
									slides: [
										...slides.filter(
											item => item.index !== slide.index
										),
										newObject,
									],
								} );
							} }
							type="image"
							value={ slide.image }
							render={ ( { open } ) =>
								slide.image ? (
									<div
										style={ {
											backgroundImage: `url(${ slide.image })`,
											backgroundSize: 'cover',
											width: '100%',
											height: '100%',
											top: 0,
										} }
										onClick={ open }
									>
									</div>
								) : (
									<button
										className="components-button is-button is-default is-large"
										style={ {
											position: 'absolute',
											right: '8px',
											top: '64px',
										} }
										onClick={ open }
									>
										<Dashicon icon="edit" />
									</button>
								)
							}
						/>
					</div>
				);
			} );

		function changeRowFull() {
			setAttributes( {
				rowFull: ! rowFull,
			} );
		}

		function addSlide() {
			setAttributes( {
				slides: [
					...slides,
					{
						index: slides.length,
						link: 'https://via.placeholder.com/100',
					},
				],
			} );
		}

		return [
			<InspectorControls key="1">
				<div style={ { padding: '1em 0' } }>
					Options
				</div>
				<div className="editor-post-status__row">
					<div><b>Полная ширина</b></div>
					<FormToggle
						checked={ this.props.attributes.rowFull === true }
						onChange={ changeRowFull }
					/>
				</div>
			</InspectorControls>,

			<div key="2" className={ `${ this.props.className } mediaism-slider-editor` }>
				<div className="row">
					{ slidesList }
				</div>
				{ /* <img name="slider" width="100%" height="300px" alt="" ref={ this.imageRef } /> */ }

				<button
					className="components-button is-button is-default is-large"
					style={ {
						position: 'absolute',
						bottom: '8px',
						right: '8px',
					} }

					onClick={ content => addSlide( content ) }>
					<Dashicon icon="plus-alt" />
				</button>
			</div>,
		];
	}
}