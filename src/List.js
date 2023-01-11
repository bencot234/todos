const List = ({list, deleteItem}) => {
    return <div className="list-container">
        {list.map((item) => {
            const {name, id} = item;
            return <div key={id} className='list-item-container'>
                <p className='list-item' key={id}>{name}</p>
                <button 
                    className='delete-btn' 
                    onClick={() => deleteItem(id)}
                >
                    Delete
                </button>
            </div>
        })}
    </div>
}

export default List;