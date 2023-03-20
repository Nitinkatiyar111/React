import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Namaste React</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

//React Component

//Composing Component
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h1>Namaste react functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

root.render(<HeaderComponent />);
