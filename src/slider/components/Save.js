/* eslint-disable no-else-return */
// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

const { RichText } = wp.editor;

const { getBlockDefaultClassName } = wp.blocks;

export default class Save extends Component {
	render() {
		const { id, slides } = this.props.attributes;
		const carouselIndicators = slides.map( ( slide, index ) => {
			return (
				<li
					key={ index }
					data-target={ '#carouselExampleIndicators' }
					data-slide-to={ slide.index }
					className={ slide.index === 0 ? 'active' : '' }
				/>
			);
		} );

		const slidesList = slides.map( ( slide, i ) => {
			const carouselClass =
        slide.index === 0 ? 'carousel-item active' : 'carousel-item';
			return (
				<div
					className={ `${ carouselClass } h-100` }
					key={ i }
					style={ {
						backgroundImage: `url(${ slide.image })`,
						backgroundSize: 'cover',
						width: '100%',
					} }
				>
				</div>
			);
		} );
		if ( slides.length > 0 ) {
			return (
				<div className={ `px-3 mediaism-slider mb-5 ${ this.props.attributes.rowFull ? 'row-full' : '' }` }>
					<div
						className="carousel slide h-100"
						data-ride="carousel"
						id="carouselExampleIndicators"
					>

						{ /* Pagination */ }
						<ol className="carousel-indicators">
							{ carouselIndicators }
						</ol>

						{ /* Slides */ }
						<div className="carousel-inner h-100">
							{ slidesList }
						</div>

						{ /* Controls */ }
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true">
								<i className="fa fa-chevron-left" />
							</span>
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true">
								<i className="fa fa-chevron-right" />
							</span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			);
		} else {return null;}
	}
}
