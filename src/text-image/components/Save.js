// Internationalization
const { __ } = wp.i18n;
//

// Extend component
const { Component } = wp.element;

const {
	RichText,
} = wp.editor;

export default class Save extends Component {
	render() {
		const { className, attributes } = this.props;

		return (
			<div className="container mb-5">
				<div className={
					`${ className }
					row
					align-items-center
					flex-md-row${ attributes.direction ? '-reverse' : '' }
					` }>
					<div className="col-md-5 col-sm-12 p-sm-3">
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
							`col-md-7 col-sm-12 flex-column mt-sm-0 mt-3 p-sm-3
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
	}
}
