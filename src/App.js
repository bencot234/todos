import './App.css';
import List from './List';
import { useState } from 'react';

function App() {
	const [listItem, setListItem] = useState('');
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let id = new Date().getTime().toString();
		setList([...list, {name: listItem, id: id}]);
	}

	return (
		<>
			<h1>Todo List</h1>
			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					value={listItem} 
					onChange={(e) => setListItem(e.target.value)}
				/>
				<button type="submit">Add</button>
			</form>
			<List list={list}/>
		</>
	);
}

export default App;
