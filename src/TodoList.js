import './App.css';
import List from './List';
import { useState, useEffect } from 'react';

const TodoList = ({todos, setTodos, setDays, days, name, setName}) => {
    const [listItem, setListItem] = useState('');
	const [message, setMessage] = useState({text: '', show: false});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (listItem === '') {
			setMessage({text: 'please enter an item', show: true});
			setTimeout(() => {
				setMessage({text: '', show: false});
			}, 3000);
			return;
		}
		let id = new Date().getTime().toString();
		setTodos([...todos, {name: listItem, id: id}]);
		setListItem('');
	}

	useEffect(() => {
		let newDays = days.map((day) => {
			if (day.name === name) {
				day.todos = todos;
				return day;
			}
			return day;
		});
		setDays(newDays);
	}, [todos]);

	return (
		<>
			<div className='title-container'>
				<h1 className='title'>{name}</h1>
			</div>
			<div className={`${message.show ? 'message-container show-message' : 'message-container'}`}>
				<p>{message.text}</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="input-container">
					<input 
						type="text" 
						value={listItem} 
						onChange={(e) => setListItem(e.target.value)}
					/>
					<button type="submit">Add</button>

				</div>
			</form>
			<List list={todos}/>
		</>
	);
}

export default TodoList;