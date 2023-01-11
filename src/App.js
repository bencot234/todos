import './App.css';
import TodoList from './TodoList';
import { useState, useEffect } from 'react';

const getLocalStorage = () => {
	const data = localStorage.getItem('days');
	if (data) {
		return JSON.parse(localStorage.getItem('days'));
	}
	else return [
		{name: 'Monday', todos: []},
		{name: 'Tuesday', todos: []},
		{name: 'Wednesday', todos: []},
		{name: 'Thursday', todos: []},
		{name: 'Friday', todos: []},
		{name: 'Saturday', todos: []},
		{name: 'Sunday', todos: []},
	];
}

function App() {

	const [days, setDays] = useState(getLocalStorage());
	const [todos, setTodos] = useState([]);
	const [name, setName] = useState('');

	useEffect(() => {
		localStorage.setItem('days', JSON.stringify(days));
	}, [days]);

	const getNewDays = () => {
		let newDays = days.map((day) => {
			if (day.name === name) {
				day.todos = todos;
				return day;
			}
			return day;
		});
		setDays(newDays);
	}

	useEffect(() => {
		getNewDays();
	}, [todos]);

	return (
		<div className='container'>
			<div className='days-container'>
				{days.map(day => {
					return <button 
						key={day.name} 
						onClick={() => {setTodos(day.todos); setName(day.name)}}
					>
						{day.name}
					</button>
				})}
			</div>
			<TodoList 
				todos={todos} 
				setTodos={setTodos} 
				setDays={setDays} 
				days={days} 
				name={name}
			/>
		</div>
	);
}

export default App;
