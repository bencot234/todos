import './App.css';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
	// const [day, setDay] = useState('Monday');
	const [days, setDays] = useState([
		{name: 'Monday', todos: [{name: 'monday todo 1', id: 1}]},
		{name: 'Tuesday', todos: []},
		{name: 'Wednsday', todos: []},
		{name: 'Thursday', todos: []},
		{name: 'Friday', todos: []},
		{name: 'Saturday', todos: []},
		{name: 'Sunday', todos: []},
	]);
	const [todos, setTodos] = useState([]);
	const [name, setName] = useState('Monday')
	return (
		<>
			{days.map(day => {
				return <button key={day.name} onClick={() => {setTodos(day.todos); setName(day.name)}}>{day.name}</button>
			})}
			<TodoList todos={todos} setTodos={setTodos} setDays={setDays} days={days} name={name} setName={setName}/>
		</>
	);
}

export default App;
