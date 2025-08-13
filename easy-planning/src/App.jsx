import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState(["walk dog", "do hw", "Clean room"]);

  const [incomingTask, setIncomingTask] = useState("");

  function updateTasks() {
    let dummyList = tasks;
    dummyList.push(incomingTask);
    setTasks(dummyList);
    console.log(tasks);
  }

  function handleInput(e) {
    setIncomingTask(e.target.value);
  }

  return (
    <>
      <input type="text" placeholder="type here" onChange={handleInput} />
      <button Type="submit" onClick={updateTasks}>
        submit
      </button>
      {tasks.map((task, index) => (
        <h3 key={index}>{task}</h3>
      ))}

      <div className="container grid">
        <h1>
          <p>Welcome To Easy Planning</p>
        </h1>
        <h3>
          <p1>A Easy Way For Planning</p1>
        </h3>
        <h3>
          {" "}
          <button className="btn secondary-btn" type="button">
            Menu{" "}
          </button>{" "}
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
          <h2>To-Do list </h2>

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
        </ul>{" "}
        {/* <input
          placeholder="type your task here"
          type="task"
          onChange={setIncomingTask}
        /> */}
        <button className="btn primary-btn" type="button">
          add task{" "}
        </button>
        {/* <h3>{username}</h3> */}
        {tasks.map((task) => (
          <h3>{task}</h3>
        ))}
      </div>
    </>
  );
}

export default App;
