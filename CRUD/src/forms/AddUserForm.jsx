import React, { useState } from 'react';

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' };
	const [user, setUser] = useState(initialFormState);

	const handleInputChange = event => {
		const { name, value } = event.target;

		setUser({ ...user, [name]: value });
	};

	return (
		<div className='addForm'>
			<form
				onSubmit={event => {
					event.preventDefault();
					if (!user.name || !user.username) return;

					props.addUser(user);
					setUser(initialFormState);
				}}>
				<div className='form-group '>
					<label for='formGroupExampleInput'>Name</label>
					<input
						type='text'
						className='form-control w-50 p-3'
						id='formGroupExampleInput'
						placeholder='Example input'
						name='name'
						value={user.name}
						onChange={handleInputChange}
					/>
				</div>

				<div className='form-group '>
					<label for='formGroupExampleInput'>Username</label>
					<input
						type='text'
						className='form-control w-50 p-3 '
						id='formGroupExampleInput'
						placeholder='Example input'
						name='username'
						value={user.username}
						onChange={handleInputChange}
					/>
				</div>
				<br />
				<button className='btn btn-success'> Add new user </button>
			</form>
		</div>
	);
};

export default AddUserForm;
