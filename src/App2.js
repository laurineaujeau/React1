
import './App.css';
import React from "react";

function App() {
  let allTasks = ["task1","task2","task3"];

  
  const [tasks, setTasks] = React.useState(allTasks);

  function addTask(event) {
    event.preventDefault();
    console.log(event);
    setTasks(allTasks => [...allTasks, event.target.value]);
   
  }


  function removeTask(tasks,task) {
    console.log(task);
    setTasks(allTasks.filter((taskCurrent) => {
      if(taskCurrent === task){
        allTasks.slice(taskCurrent);
      }
    }));
  }

  return (
    <div className="App">
        <h1> You have {allTasks.length} tasks</h1>
        <ul id="listeTaches"  style={{ listStyle: "none"}}>
          {tasks.map((task, index) => (
            <li key={index}>
              {task} 
              <button type="submit" onClick={removeTask}>Supprimer</button>
            </li>
          ))}
        </ul>
        <div>
          <form>
            <input id="name" />
            <button type="submit" onClick={addTask}>Submit</button>
          </form>
        </div>
    </div>
  );
}



export default App;
