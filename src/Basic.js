import React from "react";
import BlackBoard from "./BlackBoard";
import Calculator from "./Calculator";

const Basic = props => {
  // console.log(props.item.logo);
  // let logoName = props.items.logo

  return (
    <div className="basic">
      <BlackBoard count={props.count} exercises={props.exercises} />
      <Calculator itemChange={props.itemChange} />
    </div>
  );
};

export default Basic;
