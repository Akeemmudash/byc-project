import React, { useState } from "react";

const StateButton = () => {
  let [myState, setMyState] = useState("first");

  let myNumber = 0;
  const handleClick = () => {
    setMyState("clicked");
    console.log(myState)
  };
  console.log(myNumber);

  return (
    <button onClick={handleClick} className="btn btn-primary">
      {myState}
    </button>
  );
};

export default StateButton;
