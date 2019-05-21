import React, { useState } from "react";
import { useSpring, config, animated } from "react-spring";
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

  const turnAround = useSpring({
    transformStyle: "preserve-3d",
    from: {
      transform: "rotateY(0deg)"
    },
    to: {
      transform: "rotateY(1080deg)"
    },
    config: config.gentle,
    reset: true
  });

  const sparkling = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(0px) scale(1)"
    },
    to: async next => {
      while (1)
        await next({
          radians: 2 * Math.PI,
          opacity: 1,
          transform: "translateY(-20px) scale(1.5)"
        });
    },
    // to: {
    //   opacity: 1,
    //   transform: 'translateY(0px)'
    // },
    config: { duration: 1000 },
    reset: true
  });

  // return <AnimatedDonut percent={props.value} />
  return (
    <div className="black-board">
      <div className="math-content" onClick={() => itemChange()}>
        <animated.div style={prop0}>
          {props.exercises[props.count + 2].question}
        </animated.div>
        <animated.div style={prop1}>
          {props.exercises[props.count + 1].question}
        </animated.div>
        <animated.div style={prop2}>
          {props.exercises[props.count + 0].question}
        </animated.div>
        <animated.i style={turnAround} className="far fa-circle" />
        <animated.i style={sparkling} className="fas fa-star" />
        <animated.i style={sparkling} className="fas fa-star" />
        <animated.i style={sparkling} className="fas fa-star" />
      </div>
    </div>
  );
}

export default BlackBoard;
