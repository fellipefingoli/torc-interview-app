const Item = ({ listIndex, item, dispatch }) => {
  return (
    <li>
      <button onClick={() => dispatch({ type: "MOVE_LEFT", listIndex, item })}>
        Left
      </button>
      {item}
      <button onClick={() => dispatch({ type: "MOVE_RIGHT", listIndex, item })}>
        Right
      </button>
    </li>
  );
};

export default Item;
