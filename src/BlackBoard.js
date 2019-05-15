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

  const exercises = [
    "",
    "1 + 1 = ?",
    "2 + 1 = ?",
    "3 + 1 = ?",
    "4 + 1 = ?",
    "5 + 1 = ?",
    "6 + 1 = ?",
    "7 + 1 = ?",
    ""
  ];

  const [count, setCount] = useState(0);
  const itemChange = () => {
    setCount(count + 1);
  };

  return (
    <div
      className="black-board"
      onClick={() => {
        itemChange();
      }}
    >
      <div className="math-content">
        <animated.div style={prop0}>{exercises[count + 2]}</animated.div>,
        <animated.div style={prop1}>{exercises[count + 1]}</animated.div>,
        <animated.div style={prop2}>{exercises[count + 0]}</animated.div>
      </div>
    </div>
  );
}

export default BlackBoard;
