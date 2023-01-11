import './App.css';
import List from './List';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('adding a list item...')
  }

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
      <List/>
    </>
  );
}

export default App;
