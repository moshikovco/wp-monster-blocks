/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
const { Component } = wp.element;

const {
	RichText,
} = wp.editor;

class MonsterText extends Component {
	render() {
		return (
			<div className={ this.props.className }>
				<RichText
					className="w-100"
					tagName="h2"
          placeholder="Заголовок"
          keepPlaceholderOnFocus={ true }
					value={ this.props.heading }
          onChange={ this.props.onChangeHeading }
				/>

				<RichText
					className="w-100"
					tagName="p"
					placeholder="Введите текст..."
					keepPlaceholderOnFocus={ true }
					value={ this.props.bodyContent }
					onChange={ this.props.onChangeBodyContent }
				/>
			</div>
		);
	}
}

export default MonsterText;
