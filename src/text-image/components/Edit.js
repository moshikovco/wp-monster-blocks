import MonsterText from '../../components/MonsterText';

// Internationalization
const { __ } = wp.i18n;

const { Component } = wp.element;

const {
	getBlockDefaultClassName,
} = wp.blocks;

const {
	FormToggle,
	Dashicon,
} = wp.components;

const {
	InspectorControls,
	MediaUpload,
} = wp.editor;

export default class Edit extends Component {
	state = {
		checked: false,
	}

	render() {
		const {
			setAttributes,
			attributes,
		} = this.props;

		const changeBodyContent = bodyContent => {
			setAttributes( { bodyContent } );
		};

		const changeHeading = heading => {
			setAttributes( { heading } );
		};

		return [
			<InspectorControls key="1">
				<div className="editor-post-status__row">
					<div className="mb-2"><b>Направление</b></div>
					<FormToggle
						checked={ this.state.checked }
						onChange={ () => {
							this.setState( { checked: ! this.state.checked } );
							setAttributes( { direction: ! attributes.direction } );
						} }
					/>
				</div>
			</InspectorControls>,

			<div
				className={
					`${ getBlockDefaultClassName } row align-items-center
					flex-md-row${ attributes.direction ? '-reverse' : '' }
					flex-column${ attributes.direction ? '-reverse' : '' }`
				}
				key="2"
			>
				<div className="col-5 d-flex align-items-center justify-content-center">
					<MediaUpload
						onSelect={ value => setAttributes( { imgUrl: value.sizes.full.url } ) }
						render={ ( { open } ) => {
							return (
								<button
									className="w-100 border-0 bg-none p-0"
									onClick={ open }>
									<div className="aspect-container aspect-container-4-3">
										{ attributes.imgUrl ?
											<img
												className="image aspect-item"
												src={ attributes.imgUrl }
												alt=""
											/> :
											<div className="aspect-item d-flex align-items-center justify-content-center">
												<Dashicon icon="edit" size="32" />
											</div>
										}
									</div>
								</button>
							);
						} }
					/>
				</div>
				<MonsterText
					className="col-7"
					onChangeHeading={ changeHeading }
					onChangeBodyContent={ changeBodyContent }
					heading={ attributes.heading }
					bodyContent={ attributes.bodyContent }
				/>
			</div>,
		];
	}
}
