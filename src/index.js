import React from "react";
import ReactDOM from "react-dom";
import TeamUSA from "./components/TeamUSA";
import "./styles.css";

// import HogwartsStudents and display it inside App;
function App() {
  return (
    <div className="App">
      <TeamUSA />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
