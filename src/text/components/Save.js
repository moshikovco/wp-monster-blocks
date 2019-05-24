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
					`${ className } align-items-center` }>
					<div
						className="">
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
