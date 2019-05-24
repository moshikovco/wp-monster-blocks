import MonsterList from '../../components/MonsterList';

// Internationalization
const { __ } = wp.i18n;

const { Component } = wp.element;

const {
	getBlockDefaultClassName,
} = wp.blocks;

const {
	FormToggle,
	Dashicon,
	SelectControl,
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

		const removeItem = obj => {
			const tempItems = this.props.attributes.items
				.filter( item => item.index !== obj.index )
				.map( _item => {
					if ( _item.index > obj.index ) {
						_item.index -= 1;
					}

					return _item;
				} );

			this.props.setAttributes( {
				items: tempItems,
			} );
		};

		const addItem = () => {
			this.props.setAttributes( {
				items: [
					...this.props.attributes.items,
					{
						index: this.props.attributes.items.length,
					},
				],
			} );
		};

		return [
			<InspectorControls key="1">
				<div className="editor-post-status__row">
				</div>
			</InspectorControls>,

			<div
				className={
					`${ getBlockDefaultClassName } row align-items-center`
				}
				key="2"
			>
				<MonsterList
					className="col-12"
					items={ attributes.items }
					onRemoveItem={ removeItem }
					onSetAttributes={ setAttributes }
				/>

				<div className="col-12 d-flex justify-content-center p-1">
					<button
						className="components-button is-button is-default is-large"
						onClick={ addItem }
					>
						<i className="fa fa-plus-circle"></i>
						<span>Добавить элемент</span>
					</button>
				</div>

			</div>,
		];
	}
}
