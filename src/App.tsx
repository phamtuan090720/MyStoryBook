import React from "react";
import Button from "components/core/Button/Button";
function App() {
  return (
    <div
      style={{ margin: 40, display: "flex", justifyContent: "space-around" }}
    >
      <div>
        <Button size="small" variant="text">
          Button
        </Button>
        <Button size="small" variant="outline">
          Button
        </Button>
      </div>
      <div>
        <Button size="medium" variant="text">
          Button
        </Button>
        <Button size="medium" variant="outline">
          Button
        </Button>
      </div>

      <div>
        <Button size="large" variant="text">
          Button
        </Button>
        <Button size="large" variant="outline">
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
