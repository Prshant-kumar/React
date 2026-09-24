import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increament } from "./ReduxReducer/Actions/counterAction";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  console.log(store);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => dispatch(increament())}>increment</button>
    </div>
  );
}

export default App;
