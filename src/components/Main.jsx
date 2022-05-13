import { useState } from 'react';

function Main() {
	const [open, setOpen] = useState(false);
  
	const [submittedForms, setSubmittedForms] = useState([]);
	const initialState = {
		colorRating: '',
		spendTime: {
			swimming: false,
			bathing: false,
			chatting: false,
			noTime: false,
		},
		comment: '',
		name: '',
		email: '',
	};

	const [duckForm, setDuckForm] = useState(initialState);

	const onColorRatingChange = (event) => {
		setDuckForm({ ...duckForm, colorRating: event.target.value });
	};

	const onSpendTimeSwimmingChange = (event) => {
		const duckFormCopy = { ...duckForm };
		duckFormCopy.spendTime.swimming = event.target.checked;
		setDuckForm(duckFormCopy);
	};

	const onSpendTimeBathingChange = (event) => {
		const duckFormCopy = { ...duckForm };
		duckFormCopy.spendTime.bathing = event.target.checked;
		setDuckForm(duckFormCopy);
	};

	const onSpendTimeChattingChange = (event) => {
		const duckFormCopy = { ...duckForm };
		duckFormCopy.spendTime.chatting = event.target.checked;
		setDuckForm(duckFormCopy);
	};

	const onSpendTimeNoTimeChange = (event) => {
		const duckFormCopy = { ...duckForm };
		duckFormCopy.spendTime.noTime = event.target.checked;
		setDuckForm(duckFormCopy);
	};

	const onCommentChange = (event) => {
		setDuckForm({ ...duckForm, comment: event.target.value });
	};

	const onNameChange = (event) => {
		setDuckForm({ ...duckForm, name: event.target.value });
	};

	const onEmailChange = (event) => {
		setDuckForm({ ...duckForm, email: event.target.value });
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		console.log('Form submission result: ', duckForm);
    setDuckForm(initialState)
		setSubmittedForms(submittedForms.push(duckForm));
	};

	return (
		<main className="main">
			<section className={`main__list ${open ? 'open' : ''}`}>
				<h2>Answers list</h2>
			</section>

			<section className="main__form">
				<form className="form" onSubmit={onFormSubmit}>
					<h2>Tell us what you think about your rubber duck!</h2>
					<div className="form__group radio">
						<h3>How do you rate your rubber duck's color?</h3>
						<ul>

							<li>
								<input
									id="color-one"
									type="radio"
									name="color"
									value="1"
									onChange={onColorRatingChange}
									checked={duckForm.colorRating === '1'}
								/>
								<label htmlFor="color-one">1</label>
							</li>

							<li>
								<input
									id="color-two"
									type="radio"
									name="color"
									value="2"
									onChange={onColorRatingChange}
									checked={duckForm.colorRating === '2'}
								/>
								<label htmlFor="color-two">2</label>
							</li>

							<li>
								<input
									id="color-three"
									type="radio"
									name="color"
									value="3"
									onChange={onColorRatingChange}
									checked={duckForm.colorRating === '3'}
								/>
								<label htmlFor="color-three">3</label>
							</li>

							<li>
								<input
									id="color-four"
									type="radio"
									name="color"
									value="4"
									onChange={onColorRatingChange}
									checked={duckForm.colorRating === '4'}
								/>
								<label htmlFor="color-four">4</label>
							</li>

              <li>
								<input
									id="color-five"
									type="radio"
									name="color"
									value="5"
									onChange={onColorRatingChange}
									checked={duckForm.colorRating === '5'}
								/>
								<label htmlFor="color-five">5</label>
							</li>

               <li>
								<input
									id="color-six"
									type="radio"
									name="color"
									value="6"
									onChange={onColorRatingChange}
									checked={duckForm.colorRating === '6'}
								/>
								<label htmlFor="color-six">6</label>
							</li>

               <li>
								<input
									id="color-seven"
									type="radio"
									name="color"
									value="7"
									onChange={onColorRatingChange}
									checked={duckForm.colorRating === '7'}
								/>
								<label htmlFor="color-seven">7</label>
							</li>

               <li>
								<input
									id="color-eight"
									type="radio"
									name="color"
									value="8"
									onChange={onColorRatingChange}
									checked={duckForm.colorRating === '8'}
								/>
								<label htmlFor="color-eight">8</label>
							</li>

						</ul>
					</div>
					<div className="form__group">
						<h3>How do you like to spend time with your rubber duck?</h3>
						<ul>

							<li>
								<label>
									<input
										name="spend-time"
										type="checkbox"
										value="swimming"
										onChange={onSpendTimeSwimmingChange}
										checked={duckForm.spendTime.swimming}
									/>
									Swimming
								</label>
							</li>

							<li>
								<label>
									<input
										name="spend-time"
										type="checkbox"
										value="bathing"
										onChange={onSpendTimeBathingChange}
										checked={duckForm.spendTime.bathing}
									/>
									Bathing
								</label>
							</li>

							<li>
								<label>
									<input
										name="spend-time"
										type="checkbox"
										value="chatting"
										onChange={onSpendTimeChattingChange}
										checked={duckForm.spendTime.chatting}
									/>
									Chatting
								</label>
							</li>

							<li>
								<label>
									<input
										name="spend-time"
										type="checkbox"
										value="noTime"
										onChange={onSpendTimeNoTimeChange}
										checked={duckForm.spendTime.noTime}
									/>
									I don't like to spend time with it 😐
								</label>
							</li>

						</ul>
					</div>

					<label>
						What else have you got to say about your rubber duck?
						<textarea
							name="review"
							cols="30"
							rows="10"
							value={duckForm.comment}
							onChange={onCommentChange}
						></textarea>
					</label>

					<label>
						Stay in touch? Name:
						<input
							type="text"
							name="username"
							value={duckForm.name}
							onChange={onNameChange}
						/>
					</label>

					<label>
						Stay in touch? Email:
						<input
							type="email"
							name="email"
							value={duckForm.email}
							onChange={onEmailChange}
						/>
					</label>

					<input
						className="form__submit"
						type="submit"
						value="Submit Survey!"
					/>

				</form>
			</section>
		</main>
	);
}

export default Main;