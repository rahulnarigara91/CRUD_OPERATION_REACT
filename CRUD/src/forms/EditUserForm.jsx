import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
	const [user, setUser] = useState(props.currentUser);

	useEffect(() => {
		setUser(props.currentUser);
	}, [props]);
	// You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

	const handleInputChange = event => {
		const { name, value } = event.target;

		setUser({ ...user, [name]: value });
	};

	return (
		<form
			onSubmit={event => {
				event.preventDefault();

				props.updateUser(user.id, user);
			}}>
			<label>Name</label>
			<input
				type='text'
				className='form-control'
				name='name'
				value={user.name}
				onChange={handleInputChange}
			/>
			<label>Username</label>
			<input
				type='text'
				className='form-control'
				name='username'
				value={user.username}
				onChange={handleInputChange}
			/>

			<br />
			<button class='btn btn-secondary margin-left'>Update user</button>
			<button
				onClick={() => props.setEditing(false)}
				className='btn btn-secondary margin-left'>
				Cancel
			</button>
		</form>
	);
};

export default EditUserForm;
