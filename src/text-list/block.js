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
	RichText,
} = wp.editor;

const {
	FormToggle,
} = wp.components;

registerBlockType( 'common/mediaism-offer-description', {
	title: 'Offer description',
	icon: 'smiley',
	category: 'common',

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

	edit( props ) {
		const { className, setAttributes } = props;
		const { attributes } = props;

		const removeItem = obj => {
			const tempItems = props.attributes.items
				.filter( item => item.index !== obj.index )
				.map( _item => {
					if ( _item.index > obj.index ) {
						_item.index -= 1;
					}

					return _item;
				} );

			props.setAttributes( {
				items: tempItems,
			} );
		};

		const addItem = () => {
			props.setAttributes( {
				items: [
					...props.attributes.items,
					{
						index: props.attributes.items.length,
					},
				],
			} );
			console.log( attributes.items );
		};

		function changeBodyContent( changes ) {
			setAttributes( {
				bodyContent: changes,
			} );
		}

		function changeHeading( heading ) {
			setAttributes( { heading } );
		}

		const getRandomString = str => {
			return str[ `${ Math.round( Math.random() * ( str.length - 1 ) ) }` ];
		};

		const placeholderArray = [
			'Экономно',
			'Безопасно',
			'Фотограф',
			'Скидка',
		];

		// function changeDirection() {
		// 	setAttributes( {
		// 		direction: ! attributes.direction,
		// 	} );
		// }

		const featuresList = attributes.items.sort(
			( a, b ) => a.index - b.index ).map(
			( item, i ) => {
				return (
					<div
						style={ {
							position: 'relative',
						} }
						key={ i }>

						{/* <SelectControl
							value={ item.feature }
							options={ [
								{ label: '', value: 'fa-play' },
								{ label: 'Удобный автобус', value: '&#xf042' },
							] }
							onChange={ feature => {
								const obj = Object.assign(
									{},
									item, {
										feature,
									}
								);
								props.setAttributes( {
									items: [...attributes.items.filter( _item => item.index !== _item.index ), obj ],
								} );
							}
							}
						/> */}

						<RichText
							className="w-100"
							style={ {
								fontSize: '0.8rem',
								paddingRight: '20px',
							} }
							tagName="div"
							placeholder={ getRandomString( placeholderArray ) }
							keepPlaceholderOnFocus={ true }
							value={ item.featureText }
							onChange={ text => {
								const obj = Object.assign(
									{},
									item, {
										featureText: text,
									}
								);
								props.setAttributes( {
									items: [...attributes.items.filter( _item => item.index !== _item.index ), obj ],
								} );
								console.log( props.attributes );
							} }
						/>

						<button
							className="btn btn--circle btn--circle-sm btn--dark btn--opacity"
							style={ {
								position: 'absolute',
								right: '8px',
								top: '0',
							} }
							onClick={ () => removeItem( item ) }
						>
							<i className="fa fa-trash" />
						</button>
					</div>
				);
			} );

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
				<div className="col-md-4 col-12">
					{ featuresList }

					<button
						className="btn btn--dark btn-opacity"
						onClick={ addItem }
					>
						<i className="fa fa-plus-circle"></i>
						<span
						>Преимущество</span>
					</button>
				</div>
			</div>,
		];
	},

	save( props ) {
		const className = getBlockDefaultClassName( 'common/mediaism-text-image' );
		const { attributes } = props;

		const featuresList = attributes.items.map( ( item, i ) => {
			return (
				<div key={ i } className="d-flex">
					<div>
						{ item.feature }
					</div>
					<div style={ {
						fontWeight: '500',
						fontSize: '1.4rem',
					} }
					>
						{ item.featureText }
					</div>
				</div>
			);
		} );

		return (
			<div className={ `${ className } container mb-5 ` } >
				<div className="container">
					<div className="row d-flex align-items-center">
						<div className="col-md-8 col-sm-12 pl-md-0">
							<RichText.Content
								tagName="h2"
								value={ attributes.heading }
							/>
							<RichText.Content
								tagName="p"
								value={ attributes.bodyContent }
							/>
						</div>
						<div className="col-md-4 col-sm-12 pr-md-0">
							{ featuresList }
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
