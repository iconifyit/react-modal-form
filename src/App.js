import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Container } from "./Container";
import { Filler } from "./Filler";

const App = () => {
  const triggerText = "Open form";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

  return ReactDOM.render(
    React.createElement(
      Container,
      { triggerText: triggerText, onSubmit: onSubmit },
      React.createElement("div", { className: "App" })
    ),
    document.getElementById("root")
  );

  // return (
  //   <div className="App">
  //     <Container triggerText={triggerText} onSubmit={onSubmit} />
  //   </div>
  // );
};

export default App;
