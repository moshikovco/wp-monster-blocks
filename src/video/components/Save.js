// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

const { getBlockDefaultClassName } = wp.blocks;

export default class Save extends Component {
	render() {
		const className = getBlockDefaultClassName( 'common/mediaism-text-image' );
		const { attributes } = this.props;
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
	}
}
