import List from "../List";
import "./Box.css";

const Box = ({ listIndex, list, boxTitle, dispatch }) => {
  return (
    <div className="Box">
      <h2>{boxTitle}</h2>
      <List listIndex={listIndex} list={list} dispatch={dispatch} />
    </div>
  );
};

export default Box;
