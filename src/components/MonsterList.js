/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
const { Component } = wp.element;

const {
	Dashicon,
	SelectControl,
} = wp.components;

const {
	RichText,
} = wp.editor;

class MonsterList extends Component {
	render() {
		const list = this.props.items.sort(
			( a, b ) => a.index - b.index ).map(
			( item, i ) => {
				return (
					<div
						className="d-flex border-bottom py-1 w-100"
						style={ {
							position: 'relative',
						} }
						key={ i }>
						<div className="col-2 pl-0">
              <SelectControl
								value={ item.icon }
								options={ [
									{ label: 'Не выбрано', value: '' },
									{ label: 'Автобус', value: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><g stroke-linecap="round" stroke-linejoin="round" transform="translate(0 1)"><path d="M20 11H4M4 4h16M9 19v3H5v-3M19 19v3h-4v-3" stroke="#524A48" stroke-width="2"/><path d="M20 19H4V2c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2v17zM1 8v3M23 8v3" stroke="#524A48" stroke-width="2"/><circle fill="#524A48" cx="8" cy="15" r="1"/><circle fill="#524A48" cx="16" cy="15" r="1"/></g></g></svg>' },
									{ label: 'Календарь', value: '<svg width="24" height="23" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><g stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path stroke="#524A48" stroke-width="2" d="M4 11h2v1H4zM10 11h2v1h-2zM4 16h2v1H4zM10 16h2v1h-2zM16 11h2v1h-2z"/><path fill="#524A48" d="M4 11h2v1H4zM10 11h2v1h-2zM4 16h2v1H4zM10 16h2v1h-2zM16 11h2v1h-2z"/><rect stroke="#524A48" stroke-width="2" y="2" width="22" height="19" rx="2"/><path d="M5 0v3M17 0v3M0 7h22" stroke="#524A48" stroke-width="2"/></g></g></svg>' },
									{ label: 'Фотокамера', value: '<svg width="24" height="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0-1h24v24H0z"/><g stroke-linecap="round" stroke-linejoin="round" transform="translate(1)"><path stroke="#524A48" stroke-width="2" d="M22 21H0V4h22zM3 1h4"/><circle stroke="#524A48" stroke-width="2" cx="14" cy="13" r="4"/><circle fill="#524A48" cx="5" cy="9" r="1"/></g></g></svg>' },
									{ label: 'Кемпинг', value: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><g stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)" stroke="#524A48" stroke-width="2"><path d="M10 22v-4l-3-3.4L4 18v4M7 8l7 8v6"/><circle cx="19" cy="3" r="3"/><path d="M0 22v-6l7-8h8l7 8v6z"/></g></g></svg>' },
									{ label: 'Корзина', value: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><g stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path stroke="#524A48" stroke-width="2" d="M3 3h18l-3 10H3"/><circle fill="#524A48" cx="3" cy="21" r="2"/><circle fill="#524A48" cx="19" cy="21" r="2"/><path stroke="#524A48" stroke-width="2" d="M0 0l3 3v10l-2 4h21"/></g></g></svg>' },
									{ label: 'Лонгайленд', value: '<svg width="21" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-2 0h24v24H-2z"/><g stroke-linecap="round" stroke-linejoin="round" stroke="#524A48" stroke-width="2"><path d="M12 7c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"/><path d="M13 23H5c-1.7 0-3-1.3-3-3V7h14v13c0 1.7-1.3 3-3 3z"/><path d="M1 1h4l4 18M2 15h14"/></g></g></svg>' },
									{ label: 'Скидка', value: '<svg width="20" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-2 0h24v24H-2z"/><g stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)" stroke="#524A48" stroke-width="2"><circle cx="4" cy="4" r="4"/><circle cx="14" cy="18" r="4"/><path d="M1 19L17 3"/></g></g></svg>' },
									{ label: 'ЕСкидка', value: '<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-1-1h24v24H-1z"/><g stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path stroke="#524A48" stroke-width="2" d="M17 13l3-3-3-3V3h-4l-3-3-3 3H3v4l-3 3 3 3v4h4l3 3 3-3h4zM13 7l-6 6"/><circle fill="#524A48" cx="7.5" cy="7.5" r="1.5"/><circle fill="#524A48" cx="12.5" cy="12.5" r="1.5"/></g></g></svg>' },
									{ label: 'Отель', value: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><g stroke-linecap="round" stroke-linejoin="round" stroke="#524A48" stroke-width="2"><path d="M5 23H1v-9h4M19 23h4v-9h-4M5 1h14v22H5zM9 5h1M14 5h1M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1M12 23v-2"/></g></g></svg>' },
									{ label: 'Люди', value: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><g stroke-linecap="round" stroke-linejoin="round" stroke="#524A48" stroke-width="2"><path d="M4 7c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zM6 21H3v-4H1v-5c0-1.105.895-2 2-2h1M20 7c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM18 21h3v-4h2v-5c0-1.105-.895-2-2-2h-1M12 7c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM15 23H9v-6H7v-5c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2v6h-2v5z"/></g></g></svg>' },
									{ label: 'Билет', value: '<svg width="20" height="23" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-2-1h24v24H-2z"/><g stroke-linecap="round" stroke-linejoin="round" stroke="#524A48" stroke-width="2"><path d="M19 22H1V1l3 2 3-2 3 2 3-2 3 2 3-2z"/><path d="M7.048 16c.226 1.153 1.223 2 2.452 2h1c1.4 0 2.5-1.1 2.5-2.5 0-3.5-6-1.5-6-5C7 9.1 8.1 8 9.5 8h1c1.228 0 2.225.846 2.452 1.999M10 7v12"/></g></g></svg>' },
									{ label: 'Часы', value: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><g stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)" stroke="#524A48" stroke-width="2"><path d="M11 0v4M22 11h-4M11 22v-4M0 11h4"/><circle cx="11" cy="11" r="11"/><path d="M7 5l4 6h4"/></g></g></svg>' },
									// { label: 'Место', value: '<svg width="22" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-1 0h24v24H-1z"/><g stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)" stroke="#524A48" stroke-width="2"><path d="M3 16l-3 6h20l-3-6"/><path d="M17 7c0 4.32-7 11.375-7 11.375S3 11.32 3 7c0-4.43 3.617-7 7-7s7 2.57 7 7z"/><circle cx="10" cy="7" r="2"/></g></g></svg>' },
									{ label: 'Звезда', value: '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-2-2h24v24H-2z"/><path d="M10 1l2.234 7H19l-5.385 4.125L15.849 19 10 14.751 4.151 19l2.234-6.875L1 8h6.766z" stroke-linecap="round" stroke-linejoin="round" stroke="#524A48" stroke-width="2"/></g></svg>' },
									{ label: 'Флаг', value: '<svg width="22" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-1 0h24v24H-1z"/><g stroke-linecap="round" stroke-linejoin="round" stroke="#524A48" stroke-width="2"><path d="M1.3 5.8l9.5 16.4M20.7 9.5c-3.9 3.5-8.5-.8-11.4 4.3L4.9 6c2.9-5 7.6-.8 11.4-4.3l4.4 7.8z"/></g></g></svg>' },
									{ label: 'Снежинка', value: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><g stroke-linecap="round" stroke-linejoin="round" stroke="#524A48" stroke-width="2"><path d="M12 1v22M9 2l3 3 3-3M9 22l3-3 3 3M2.5 6.5l19 11M1.8 9.6l4.1-1.1-1.1-4.1M19.2 19.6l-1.1-4.1 4.1-1.1M21.5 6.5l-19 11M22.2 9.6l-4.1-1.1 1.1-4.1M4.8 19.6l1.1-4.1-4.1-1.1"/></g></g></svg>' },
									{ label: 'Солнышко', value: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><g stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)" stroke="#524A48" stroke-width="2"><path d="M0 11h1M3.2 3.2l.7.7M11 0v1M18.8 3.2l-.7.7M22 11h-1M18.8 18.8l-.7-.7M11 22v-1M3.2 18.8l.7-.7"/><circle cx="11" cy="11" r="6"/></g></g></svg>' },
									{ label: 'Попкорн', value: '<svg width="20" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-2 0h24v24H-2z"/><g stroke-linecap="round" stroke-linejoin="round" stroke="#524A48" stroke-width="2"><path d="M19 7H1l2 16h14zM17 5c0-1.65685425-1.3431458-3-3-3-.5164438.00325617-1.0231123.14112518-1.47.4C11.9839296 1.52888675 11.0281202.99996847 10 .99996847c-1.02812022 0-1.98392959.52891828-2.53 1.40003153-.44688765-.25887482-.95355625-.39674383-1.47-.4-1.65685425 0-3 1.34314575-3 3M7 23L6 7M13 23l1-16"/></g></g></svg>' },
								] }
                onChange={ icon => {
									const obj = Object.assign(
										{},
										item, {
											icon,
										}
									);
									this.props.onSetAttributes( {
										items: [ ...this.props.items.filter( _item => item.index !== _item.index ), obj ],
									} );
								}
								}
							/>
						</div>

						<div className="col-6 p-0">
							<RichText
								placeholder="Элемент 1"
								keepPlaceholderOnFocus={ true }
								value={ item.priceText }
								onChange={ text => {
									const obj = Object.assign(
										{},
										item, {
											priceText: text,
										}
									);
									this.props.onSetAttributes( {
										items: [ ...this.props.items.filter( _item => item.index !== _item.index ), obj ],
									} );
								} }
							/>
						</div>

						<div className="col-3 p-0">
							<RichText
								placeholder="Элемент 2"
								keepPlaceholderOnFocus={ true }
								value={ item.priceValue }
								onChange={ text => {
									const obj = Object.assign(
										{},
										item, {
											priceValue: text,
										}
									);
									this.props.onSetAttributes( {
										items: [ ...this.props.items.filter( _item => item.index !== _item.index ), obj ],
									} );
								} }
							/>
						</div>

						<button
							className="components-button is-button is-default is-large col-1"
							onClick={ () => this.props.onRemoveItem( item ) }
						>
							<Dashicon icon="trash" />
						</button>
					</div>
				);
			} );
		const {
			className,
		} = this.props;

		return (
			<div className={ className }>
				{ list }
			</div>
		);
	}
}

export default MonsterList;
