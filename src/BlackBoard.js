import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function BlackBoard(props) {
  const prop0 = useSpring({
    from: {
      opacity: 0,
      fontSize: "12px",
      color: "#fff",
      padding: "0px auto",
      margin: "0 auto",
      textAlign: "center"
    },
    to: {
      opacity: 0.5,
      fontSize: "24px",
      color: "#fff",
      padding: "0px auto",
      textAlign: "center"
    },
    config: { duration: 500 },
    reset: true
  });

  const prop1 = useSpring({
    from: {
      opacity: 0.5,
      fontSize: "24px",
      color: "#fff",
      margin: "0px auto",
      textAlign: "center"
    },
    to: {
      opacity: 1,
      fontSize: "48px",
      color: "#fff",
      margin: "0px auto",
      textAlign: "center"
    },
    config: { duration: 500 },
    reset: true
  });

  const prop2 = useSpring({
    from: {
      opacity: 1,
      fontSize: "40px",
      color: "#fff",
      margin: "20px auto",
      textAlign: "center"
    },
    to: {
      opacity: 0.5,
      fontSize: "24px",
      color: "#fff",
      margin: "20px auto",
      textAlign: "center"
    },
    config: { duration: 500 },
    reset: true
  });

  return (
    <div className="black-board">
      <div className="math-content" onClick={() => itemChange()}>
        <animated.div style={prop0}>
          {props.exercises[props.count + 2]}
        </animated.div>
        ,
        <animated.div style={prop1}>
          {props.exercises[props.count + 1]}
        </animated.div>
        ,
        <animated.div style={prop2}>
          {props.exercises[props.count + 0]}
        </animated.div>
      </div>
    </div>
  );
}

export default BlackBoard;
