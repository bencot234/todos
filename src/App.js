import './App.css';
import List from './List';
import { useState } from 'react';

function App() {
	const [listItem, setListItem] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`adding a ${listItem}`)
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
			<List/>
		</>
	);
}

export default App;
