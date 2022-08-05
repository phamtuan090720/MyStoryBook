import React from "react";
// import Button from "components/core/Button/Button";
// import { XCircleSmall } from "components/core/Icon";
import Badge from "components/core/Badges/Badges";
import Circle from "components/core/Badges/Circle/Circle";
function App() {
  return (
    <div
      style={{ margin: 40, display: "flex", justifyContent: "space-around" }}
    >
      <Badge size="medium" selected endIcon={"X"} startIcon={"X"} />
      <Circle size="large" content={10} />
    </div>
  );
}

export default App;
