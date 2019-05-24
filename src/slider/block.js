/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './style.scss';
import './editor.scss';

const __ = wp.i18n.__;
const registerBlockType = wp.blocks.registerBlockType;
const { MediaUpload, InspectorControls } = wp.editor;

const {
	FormToggle,
} = wp.components;

registerBlockType( 'gts/mediaism-image-slider', {
	title: __( 'Image Slider' ),
	icon: 'format-quote',
	category: 'common',

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

	edit( props ) {
		const { slides } = props.attributes;

		if ( ! props.attributes.id ) {
			const id = `slide${ Math.floor( Math.random() * 100 ) }`;
			props.setAttributes( {
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

			props.setAttributes( {
				slides: tempSlides,
			} );
		};

		const slidesList = slides
			.sort( ( a, b ) => a.index - b.index )
			.map( ( slide, i ) => {
				return (
					<div
						style={ {
							height: '300px',
							position: 'relative',
						} }
						key={ i }>
						<button
							className="btn btn--circle btn--dark btn--opacity"
							style={ {
								position: 'absolute',
								top: '8px',
								right: '8px',
							} }
							onClick={ () => removeSlide( slide ) }
						>
							<i className="fa fa-trash" />
						</button>

						<MediaUpload
							onSelect={ media => {
								const image = media.sizes.full ?
									media.sizes.full.url :
									media.url;
								const newObject = Object.assign( {}, slide, {
									image: image,
								} );
								props.setAttributes( {
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
										className="btn btn--dark btn--circle btn--opacity"
										style={ {
											position: 'absolute',
											right: '8px',
											top: '64px',
										} }
										onClick={ open }
									>
										<i className="fa fa-edit"></i>
									</button>
								)
							}
						/>
					</div>
				);
			} );

		function changeRowFull() {
			props.setAttributes( {
				rowFull: ! props.attributes.rowFull,
			} );
		}

		function addSlide() {
			props.setAttributes( {
				slides: [
					...props.attributes.slides,
					{
						index: props.attributes.slides.length,
						link: '',
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
						checked={ props.attributes.rowFull === true }
						onChange={ changeRowFull }
					/>
				</div>
			</InspectorControls>,

			<div key="2" className={ `${ props.className } mediaism-slider-editor` }>
				{ slidesList }

				<button
					className="btn btn--opacity btn--dark btn--circle"
					style={ {
						position: 'absolute',
						bottom: '8px',
						right: '8px',
					} }
					
					onClick={ content => addSlide( content )}>
					<i className="fa fa-plus-circle"></i>
				</button>
			</div>,
		];
	},

	save: props => {
		const { id, slides } = props.attributes;
		const carouselIndicators = slides.map( ( slide, index ) => {
			return (
				<li
					key={ index }
					data-target={ '#carouselExampleIndicators' }
					data-slide-to={ slide.index }
					className={ slide.index === 0 ? 'active' : '' }
				/>
			);
		} );

		const slidesList = slides.map( ( slide, i ) => {
			const carouselClass =
        slide.index === 0 ? 'carousel-item active' : 'carousel-item';
			return (
				<div
					className={ `${ carouselClass } h-100` }
					key={ i }
					style={ {
						backgroundImage: `url(${ slide.image })`,
						backgroundSize: 'cover',
						width: '100%',
					} }
				>
				</div>
			);
		} );
		if ( slides.length > 0 ) {
			return (
				<div className={ `mediaism-slider mb-5 ${ props.attributes.rowFull ? 'row-full' : '' }` }>
					<div
						className="carousel slide h-100"
						data-ride="carousel"
						id="carouselExampleIndicators"
					>

						{/* Pagination */}
						<ol className="carousel-indicators">
							{ carouselIndicators }
						</ol>

						{/* Slides */}
						<div className="carousel-inner h-100">
							{ slidesList }
						</div>

						{/* Controls */}
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true">
								<i className="fa fa-chevron-left" />
							</span>
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true">
								<i className="fa fa-chevron-right" />
							</span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			);
		} else return null;
	},
} );