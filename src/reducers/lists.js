const listReducer = (state, action) => {
  switch (action.type) {
    case "INSERT":
      const currentList = state[action.listIndex];
      if (currentList.list.indexOf(action.item) === -1)
        currentList.list.push(action.item);
      return [...state];
    case "MOVE_RIGHT":
      return [...moveItem(state, action)];
    case "MOVE_LEFT":
      return [...moveItem(state, action)];
    default:
      return state;
  }
};

const moveItem = (state, action) => {
  const { listIndex, item } = action;
  const currentList = state[action.listIndex];
  const itemIndex = currentList.list.indexOf(item);
  let nextList;
  if (action.type === "MOVE_RIGHT") nextList = state[listIndex + 1];
  else if (action.type === "MOVE_LEFT") nextList = state[listIndex - 1];

  if (itemIndex > -1 && nextList) {
    currentList.list.splice(itemIndex, 1);
    nextList.list.splice(itemIndex, 0, item);
  }

  return state;
};

export default listReducer;
