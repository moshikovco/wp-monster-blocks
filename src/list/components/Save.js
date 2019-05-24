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
		const {
			attributes,
			className,
		 } = this.props;

		const priceList = attributes.items.map( ( item, i ) => {
			return (
				<div key={ i } className="d-flex border-bottom py-2">
					{
						item.icon ?
							<div
								className="pr-2"
								dangerouslySetInnerHTML={ { __html: item.icon } }
							>
							</div> :
							''
					}

					<div
						style={ {
							fontWeight: '500',
							fontSize: '1.2rem',
						} }
						className="col pl-0"
					>
						{ item.priceText }
					</div>
					{
						item.priceValue.length > 1 ?
							<div
								className="col-4 pr-0"
								style={ {
									fontWeight: '500',
									fontSize: '1.2rem',
								} }
							>
								{ item.priceValue }
							</div> :
							''
					}

				</div>
			);
		} );

		return (
			<div className={ `${ className } container mb-5 ` } >
				<div className="container">
					<div className="row p-0">
						<div className="col-12 p-0">
							{ priceList }
						</div>
					</div>
				</div>
			</div>
		);
	}
}
