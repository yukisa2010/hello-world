import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./style.scss";

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

  const outer = useSpring({
    from: {
      backgroundColor: "red",
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      zIndex: "-1"
    },
    to: {
      backgroundColor: "red",
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      textAlign: "center",
      zIndex: "1"
    }
  });

  const inner = useSpring({
    from: {
      width: "120%",
      height: "120%"
    },
    to: {
      width: "50%",
      height: "50%"
    }
  });

  // return <AnimatedDonut percent={props.value} />
  return (
    <div className="black-board">
      <div className="math-content" onClick={() => itemChange()}>
        <animated.div style={prop0}>
          {props.exercises[props.count + 2]}
        </animated.div>
        <animated.div style={outer} className="outer">
          <div className="inner" />
        </animated.div>
        ,
        <animated.div style={prop1}>
          {props.exercises[props.count + 1]}
        </animated.div>
        <animated.div>〇</animated.div>,
        <animated.div style={prop2}>
          {props.exercises[props.count + 0]}
        </animated.div>
        <animated.div>〇</animated.div>
      </div>
    </div>
  );
}

export default BlackBoard;
