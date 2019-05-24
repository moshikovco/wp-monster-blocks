// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

//Register editor components
const {
	InspectorControls,
} = wp.editor;

const {
	TextControl,
} = wp.components;

export default class Edit extends Component {
	render() {
		const { className, setAttributes } = this.props;
		const { attributes } = this.props;

		const getVideoId = ( url ) => {
			const urlArray = url.split( '/' );
			return urlArray[ urlArray.length - 1 ].replace( /watch\?v=/, '' );
		};

		function changeVideoUrl( url ) {
			setAttributes( {
				videoUrl: url,
				videoId: getVideoId( url ),
			} );
		}

		return [
			<InspectorControls key="1">
				{/* <div className="editor-post-status__row">
					<div className="mb-2"><b>Направление</b></div>
					<FormToggle
						checked={ true }
						// onChange={ changeDirection }
					/>
				</div> */}
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
						} }
					/>
				</div>
			</div>,
		];
	}
}
