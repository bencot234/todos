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
		setListItem('');
	}

	return (
		<>
			<div className='title-container'>
				<h1 className='title'>Todo List</h1>
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
			<List list={list}/>
		</>
	);
}

export default App;
