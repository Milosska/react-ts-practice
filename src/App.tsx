import React from "react";
import Card, { CardVariant } from "./components/Card";

function App() {
  return (
    <div>
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
        onClick={(num) => {
          console.log("Click! -", num);
        }}
      >
        <p>Add some text!</p>
        <button>Click me!</button>
      </Card>
    </div>
  );
}

export default App;
