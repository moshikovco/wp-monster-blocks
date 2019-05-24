// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

const { RichText } = wp.editor;

// const { getBlockDefaultClassName } = wp.blocks;

export default class Save extends Component {
	render() {
		const {
			attributes,
			className,
		} = this.props;

		return (
			<div
				key="2"
				className={ ` ${ className } offer-block row-full mb-5` }
				style={ {
					backgroundImage: `url( ${ attributes.imgUrl } )`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				} }>
				<div className="container text-light">
					<div className="col-6">
						<RichText.Content
							tagName="h1"
							className={` font-weight-bold
								${ attributes.imgUrl ? 'text-light' : 'text-dark' }
							`}
							value={ attributes.heading }
						/>

						<RichText.Content
							tagName="p"
							className={
								attributes.imgUrl ? 'text-light' : 'text-dark'
							}
							value={ attributes.text }
						/>

						<div className="meta-date d-flex align-items-center">
							<div
								className="mr-2"
								style={
									attributes.imgUrl ? { filter: 'invert(1) brightness(2)' } : { filter: 'none' }
								}
								dangerouslySetInnerHTML={ { __html: attributes.iconLeft } }
							></div>
							<RichText.Content
								tagName="div"
								className={
									attributes.imgUrl ? 'text-light' : 'text-dark'
								}
								value={ attributes.date }
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
