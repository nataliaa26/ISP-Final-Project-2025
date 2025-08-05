import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

const [username, setUsername] = useState("");

  const [tasks, setTasks] = useState(["Walk Dog ", "Do HW", "Clean Room"]);

  return (
    <>
      {tasks.map(task => (
        <h1>{task}</h1>
      ))}
    </>
  );

  return (
    <>
      <h1>
        <p>Welcome To Easy Planning</p>
      </h1>
      <h3>
        <p1>A Easy Way For Planning</p1>
      </h3>
      <h3>
        {" "}
        <button type="button">Menu! </button>{" "}
      </h3>
      <ul>
        <li>
          <button type="button">brainstorm </button>{" "}
        </li>
        <li>
          {" "}
          <button type="button">To-Do List </button>{" "}
        </li>
        <li>
          {" "}
          <button type="button"> Actions </button>{" "}
        </li>
        <li>
          {" "}
          <button type="button"> plans </button>{" "}
        </li>
        <h3>To-Do list </h3>

        <button type="button">+ new task </button>

        <ul>
          <li>
            <input type="checkbox" />
            walk dog{" "}
          </li>
          <li>
            {" "}
            <input type="checkbox" />
            do Hw{" "}
          </li>
          <li>
            {" "}
            <input type="checkbox" />
            clean room{" "}
          </li>
          <li> </li>
        </ul>
      </ul>
      <input type="checkbox" />
    </>
  );
}

export default App;
