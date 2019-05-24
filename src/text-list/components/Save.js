// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

const { RichText } = wp.editor;

export default class Save extends Component {
	render() {
		const { attributes, className } = this.props;

		const featuresList = attributes.items.map( ( item, i ) => {
			return (
				<div key={ i } className="d-flex">
					<div
						className="mr-3"
						dangerouslySetInnerHTML={ { __html: item.icon } }></div>
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
						<div className="col-md-8 col-sm-12 pl-md-0 p-0">
							<RichText.Content
								tagName="h2"
								value={ attributes.heading }
							/>
							<RichText.Content
								tagName="p"
								value={ attributes.bodyContent }
							/>
						</div>
						<div className="col-md-4 col-sm-12 pr-md-0 p-0 p-md-3">
							{ featuresList }
						</div>
					</div>
				</div>
			</div>
		);
	}
}
