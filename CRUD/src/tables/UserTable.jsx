import React from 'react';

const UserTable = props => (
	<table className='table'>
		<thead classname='thead-dark'>
			<tr>
				<th scope='col'>Name</th>
				<th scope='col'>Username</th>
				<th scope='col'>Actions</th>
			</tr>
		</thead>

		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr key={user.id}>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>
							<button
								type='button'
								className='btn btn-primary '
								onClick={() => {
									props.editRow(user);
								}}>
								Edit
							</button>

							<button
								type='button'
								className='btn btn-danger margin-left'
								onClick={() => props.deleteUser(user.id)}>
								Delete
							</button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3}>No users</td>
				</tr>
			)}
		</tbody>
	</table>
);

export default UserTable;
