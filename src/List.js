const List = ({list}) => {
    return <>
        {list.map((item) => {
            const {name, id} = item;
            return <p key={id}>{name}</p>
        })}
    </>
}

export default List;