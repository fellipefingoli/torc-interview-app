import Item from "./Item";

const List = ({ listIndex, list, dispatch }) => {
  const insertTask = () => {
    const item = prompt("What's your new task?");
    dispatch({ type: "INSERT", item, listIndex });
  };

  return (
    <div>
      <ul>
        {list &&
          list.map((item, index) => (
            <Item
              key={index}
              listIndex={listIndex}
              item={item}
              dispatch={dispatch}
            />
          ))}
      </ul>
      <footer>
        <button onClick={insertTask}>+Add task</button>
      </footer>
    </div>
  );
};

export default List;
