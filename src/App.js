import React, { Component, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import HeadLine from "./HeadLine";
import Menu from "./Menu";
import Basic from "./Basic";
import Login from "./Login";
import CreateNewAccount from "./CreateNewAccount";
import Differencial from "./Differencial";

const App = () => {
  const [items, setItems] = useState([
    {
      title: "基本演算",
      logo: "coffee.png",
      link: "/patient",
      progress: 60,
      color: "#FF5252",
      backcolor: "#FFCAD0"
    },
    {
      title: "指数関数",
      logo: "shoes.png",
      link: "/doctor",
      progress: 80,
      color: "#62CC56",
      backcolor: "#CAEFBF"
    },
    {
      title: "微分",
      logo: "chicken.png",
      link: "/relations",
      progress: 20,
      color: "#6767E8",
      backcolor: "#B7D4E5"
    },
    {
      title: "統計学",
      logo: "pig.png",
      link: "/staff",
      progress: 90,
      color: "#FFBE2E",
      backcolor: "#EFFF7B"
    }
  ]);

  const [flag, setFlag] = useState(false);

  const closeMenu = () => {
    setFlag(false);
  };

  const openMenu = () => {
    setFlag(true);
  };

  const [exercises, setExercises] = useState([
    { question: "1 + 1 = ?", answer: "2" },
    { question: "2 + 1 = ?", answer: "3" },
    { question: "3 + 1 = ?", answer: "4" },
    { question: "4 + 1 = ?", answer: "5" },
    { question: "5 + 1 = ?", answer: "6" },
    { question: "6 + 1 = ?", answer: "7" },
    { question: "7 + 1 = ?", answer: "8" }
  ]);

  const [value, setValue] = useState("");
  const changeValue = e => {
    setValue(e.target.value);
  };

  const judgeInput = () => {
    console.log(exercises[count + 1].answer, value + "");
    if (exercises[count + 1].answer === value + "") {
      console.log("ok");
      () => {
        itemChange();
      };
      setValue("");
    } else {
      console.log("NG");
    }
  };

  const [count, setCount] = useState(0);
  const itemChange = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <HeadLine openMenu={openMenu} />
        <Menu flag={flag} closeMenu={closeMenu} />

        <div>
          <Route exact path="/" render={() => <Home items={items} />} />
          <Route
            path="/basic"
            render={() => (
              <Basic
                itemChange={itemChange}
                exercises={exercises}
                judgeInput={judgeInput}
                changeValue={changeValue}
                setValue={setValue}
                value={value}
                count={count}
              />
            )}
          />
          <Route exact path="/Login" render={() => <Login />} />
          <Route
            exact
            path="/CreateNewAccount"
            render={() => <CreateNewAccount />}
          />

          <Route path="/differencial" component={Differencial} />
        </div>
      </BrowserRouter>
    </div>
  );
}; //App

export default App;
