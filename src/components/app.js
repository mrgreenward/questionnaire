import { h, Component } from 'preact';
import Form from '../container/Form';

if (module.hot) {
	require('preact/debug');
}
export default class App extends Component {
	constructor() {
		super()
		this.state = {
			service: "",
			userId: "",
			screenRadios: true,
			date: '',
			questRadio: "",
			comment: "",
			errorComment: "",
			screenResult: false,
		}
	}
	onChangeValue = (e) => {
		let state = this.state;
		state[e.target.name] = e.target.value
		this.setState(state)
		if (this.state.questRadio < 7) {
			this.setState({
				screenRadios: false
			})
		}
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.setState({
			date: new Date()
		});
		if (!this.state.screenRadios) {
			if (!this.state.comment.length) {
				this.setState({
					errorComment: "Оставляя комментарий, вы помогаете нам сделать сервис лучше"
				})
				return
			} else {
				this.setState({
					errorComment: ""
				})
			}
		}
		this.setState({
			screenResult: true,
		})
	}
	render(props, state) {
		const resultScreen = () => {
			return (
				<div class="question-form">
				<div class="question-group">
				<p className="question-form__text">Ваш запрос принят. Спасибо!</p>
				<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667"><path d="M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.157 0 213.333 0zm-39.134 322.918l-93.935-93.931 31.309-31.309 62.626 62.622 140.894-140.898 31.309 31.309-172.203 172.207z" fill="#6ac259"/></svg>
				</div>
				</div>
			)
		}
		const formScreen = () => {
			return (
					<form class="question-form" action="">
						{!state.screenRadios ?
							<div className="question-form__col">
								<div class="quest-form__comment">
									<p class="quest-text" htmlFor="area">Пожалуйста дайте комментарий оценке и мы постараемся улучшить сервис, или <a onClick={(e) => { e.preventDefault(); this.setState({ screenRadios: true, comment: "" }) }} class="quest-link" href="#">переголосовать</a></p>
									<div class="quest-form__wrap">
										<input onChange={this.onChangeValue} name="comment" id="area" class="quest-input quest-area" type="textArea" />
										<button onClick={this.onSubmit} class="quest-form__btn">Отправить</button>
									</div>
									<span class="quest-text--sm">{this.state.errorComment}</span>
								</div>
							</div>
							:
							<div className="question-form__col">
								<div class="quest-form__radios">
									<p class="quest-text question-form__title">Насколько вероятно,что вы порекомендуете Оптеум своим друзьям?</p>
									<div class="quest-form__wrap">
										<input onChange={this.onChangeValue} name="questRadio" id="radio_0" value={0} type="radio" class="quest-radio" />
										<label class="quest-label quest-label--0" htmlFor="radio_0">0</label>
										<input onChange={this.onChangeValue} name="questRadio" id="radio_1" value={1} type="radio" class="quest-radio" />
										<label class="quest-label quest-label--1" htmlFor="radio_1">1</label>
										<input onChange={this.onChangeValue} name="questRadio" id="radio_2" value={2} type="radio" class="quest-radio" />
										<label class="quest-label quest-label--2" htmlFor="radio_2">2</label>
										<input onChange={this.onChangeValue} name="questRadio" id="radio_3" value={3} type="radio" class="quest-radio" />
										<label class="quest-label quest-label--3" htmlFor="radio_3">3</label>
										<input onChange={this.onChangeValue} name="questRadio" id="radio_4" value={4} type="radio" class="quest-radio" />
										<label class="quest-label quest-label--4" htmlFor="radio_4">4</label>
										<input onChange={this.onChangeValue} name="questRadio" id="radio_5" value={5} type="radio" class="quest-radio" />
										<label class="quest-label quest-label--5" htmlFor="radio_5">5</label>
										<input onChange={this.onChangeValue} name="questRadio" id="radio_6" value={6} type="radio" class="quest-radio" />
										<label class="quest-label quest-label--6" htmlFor="radio_6">6</label>
										<input onChange={this.onChangeValue} name="questRadio" id="radio_7" value={7} type="radio" class="quest-radio" />
										<label class="quest-label quest-label--7" htmlFor="radio_7">7</label>
										<input onChange={this.onChangeValue} name="questRadio" id="radio_8" value={8} type="radio" class="quest-radio" />
										<label class="quest-label quest-label--8" htmlFor="radio_8">8</label>
										<input onChange={this.onChangeValue} name="questRadio" id="radio_9" value={9} type="radio" class="quest-radio" />
										<label class="quest-label quest-label--9" htmlFor="radio_9">9</label>
										<input onChange={this.onChangeValue} name="questRadio" id="radio_10" value={10} type="radio" class="quest-radio" />
										<label class="quest-label quest-label--10" htmlFor="radio_10">10</label>
										<button onClick={this.onSubmit} disabled={!this.state.questRadio} class="quest-form__btn">Отправить</button>
									</div>
								</div>
							</div>
						}
					</form>
			)
		}
		if (state.screenResult){
			return (
				resultScreen()
			)
		}else{
			return formScreen()
		}
	
	}
}
