import React from "react";

const HeadLine = props => {
  return (
    <div className="header">
      <img src="./logo/whitebear.png" alt="logo" />
      <i
        className="fas fa-bars skyblue"
        onClick={() => {
          props.openMenu();
        }}
      />
    </div>
  );
};

export default HeadLine;
