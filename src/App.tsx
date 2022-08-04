import React from "react";
import Button from "components/core/Button/Button";
import { XCircleSmall } from "components/core/Icon";
function App() {
  return (
    <div
      style={{ margin: 40, display: "flex", justifyContent: "space-around" }}
    >
      <div>
        <Button
          size="small"
          variant="text"
          onClick={() => {
            alert("Hello world");
          }}
          endIcon={<XCircleSmall />}
        >
          Button
        </Button>
      </div>
      <div>
        <Button
          size="small"
          variant="text"
          onClick={() => {
            alert("Hello world");
          }}
        >
          Button
        </Button>
        <Button size="small" variant="outline">
          Button
        </Button>
      </div>
      <div>
        <Button size="medium" variant="text" endIcon={<XCircleSmall />}>
          Button
        </Button>
        <Button size="medium" variant="outline" endIcon={<XCircleSmall />}>
          Button
        </Button>
      </div>

      <div>
        <Button
          size="large"
          variant="text"
          endIcon={<XCircleSmall />}
        >
          Button
        </Button>
        <Button size="large" variant="outline" endIcon={<XCircleSmall />}>
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
