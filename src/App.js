import "./App.css";
import { useReducer } from "react";
import listReducer from "./reducers/lists";
import Box from "./components/Box";

function App() {
  const list1 = ["milk", "cookies", "orange"];
  const list2 = ["candy", "lolipop"];

  const [state, dispatch] = useReducer(listReducer, [
    { title: "foods", list: list1 },
    { title: "candies", list: list2 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Torc Interview</h1>
      </header>
      <section className="Box-Container">
        {state &&
          state.map((box, index) => (
            <Box
              className="Box"
              key={index}
              listIndex={index}
              list={box.list}
              boxTitle={box.title}
              dispatch={dispatch}
            />
          ))}
      </section>
    </div>
  );
}

export default App;
