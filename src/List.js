const List = ({list}) => {
    return <div className="list-container">
        {list.map((item) => {
            const {name, id} = item;
            return <p className='list-item' key={id}>{name}</p>
        })}
    </div>
}

export default List;