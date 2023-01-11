import './App.css';
import List from './List';
import { useState } from 'react';

const TodoList = ({todos, setTodos, setDays, days, name}) => {
    const [listItem, setListItem] = useState('');
	const [message, setMessage] = useState({text: '', show: false});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name && listItem === '') {
			showMessage('pick a day', true);
			return;
		}
		if (listItem === '') {
			showMessage('enter an item', true);
			return;
		}
		let id = new Date().getTime().toString();
		setTodos([...todos, {name: listItem, id: id}]);
		setListItem('');
	}

	const showMessage = (text = '', show = false) => {
		setMessage({text, show});
		let timeout = setTimeout(() => {
			setMessage({text: '', show: false});
		}, 3000);
		return clearTimeout(() => timeout);
	}

	const deleteItem = (id) => {
		let newTodos = todos.filter(todos => todos.id !== id);
		setTodos(newTodos);
	}

	return (
		<div>
			<div className='title-container'>
				<h1 className='title'>{name ? name : 'Todo list'}</h1>
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
						disabled={!name}
					/>
					<button type="submit">Add</button>

				</div>
			</form>
			<List list={todos} deleteItem={deleteItem}/>
		</div>
	);
}

export default TodoList;