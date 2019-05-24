import './style.scss';
import './editor.scss';

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

registerBlockType( 'mediaism-blocks/mediaism-text-image', {
	title: 'Text & image',
	icon: 'editor-justify',
	category: 'mediaism-blocks',

	attributes: {
		bodyContent: {
			type: 'string',
		},
		heading: {
			type: 'string',
		},
		imgUrl: {
			type: 'string',
			default: 'http://placehold.it/500',
		},
		direction: {
			default: true,
		},
	},

	edit( props ) {
		const { className, setAttributes } = props;
		const { attributes } = props;

		// we create a function that will take the changes from RichText
		// and update the attributes
		function changeBodyContent( changes ) {
			setAttributes( {
				bodyContent: changes,
			} );
		}

		function changeHeading( heading ) {
			setAttributes( { heading } );
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
				<div className="editor-post-status__row">
					<div className="mb-2"><b>Направление</b></div>
					<FormToggle
						checked={ true }
						onChange={ changeDirection }
					/>
				</div>
			</InspectorControls>,

			<div
				className={
					`${ className } row align-items-center
					flex-md-row${ attributes.direction ? '-reverse' : '' }
					flex-column${ attributes.direction ? '-reverse' : '' }`
				}
				key="2"
			>
				<div className="col-5 d-flex align-items-center justify-content-center">
					<MediaUpload
						onSelect={ selectImage }
						render={ ( { open } ) => {
							return (
								<button
									className="w-100 border-0 bg-none p-0"
									onClick={ open }>
									<div className="aspect-container aspect-container-4-3 shape-rad-1">
										<img
											className="image aspect-item"
											src={ attributes.imgUrl }
											alt=""
										/>
									</div>
								</button>
							);
						} }
					/>
				</div>
				<div className="col-7">
					<RichText
						className="w-100"
						tagName="h2"
						placeholder="Заголовок"
						keepPlaceholderOnFocus={ true }
						value={ attributes.heading }
						onChange={ changeHeading }
					/>

					<RichText
						className="w-100"
						tagName="p"
						placeholder="Введите текст..."
						keepPlaceholderOnFocus={ true }
						value={ attributes.bodyContent }
						onChange={ changeBodyContent }
					/>
				</div>
			</div>,
		];
	},

	save( props ) {
		const className = getBlockDefaultClassName( 'common/mediaism-text-image' );
		const { attributes } = props;

		return (
			<div className="container mb-5">
				<div className={
					`${ className }
					row
					align-items-center
					flex-md-row${ attributes.direction ? '-reverse' : '' }
					flex-column${ attributes.direction ? '-reverse' : '' }
					` }>
					<div className="col-md-5 col-sm-12 p-0 p-sm-3">
						<div className="aspect-container aspect-container-4-3 shape-rad-2">
							<img
								src={ attributes.imgUrl }
								alt=""
								className="image aspect-item"
							/>
						</div>
					</div>

					<div
						className={
							`col-md-7 col-sm-12 row flex-column mt-sm-0 mt-3 p-sm-3
							${ attributes.direction ? '' : ' pl-md-5 pl-3' }`
						}>
						<RichText.Content
							tagName="h2"
							value={ attributes.heading }
						/>
						<RichText.Content
							tagName="p"
							value={ attributes.bodyContent }
						/>
					</div>
				</div>
			</div>
		);
	},
} );
