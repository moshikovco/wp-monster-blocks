import MonsterText from '../../components/MonsterText';

// Internationalization
const { __ } = wp.i18n;

const { Component } = wp.element;

const {
} = wp.blocks;

const {
	FormToggle,
} = wp.components;

const {
	InspectorControls,
} = wp.editor;

export default class Edit extends Component {
	state = {
		checked: false,
	}

	render() {
		const {
			setAttributes,
			attributes,
			className,
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
					`${ className } row align-items-center p-1`
				}
				key="2"
			>
				<MonsterText
					className=""
					onChangeHeading={ changeHeading }
					onChangeBodyContent={ changeBodyContent }
					heading={ attributes.heading }
					bodyContent={ attributes.bodyContent }
				/>
			</div>,
		];
	}
}
