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
    "",
    "1 + 1 = ?",
    "2 + 1 = ?",
    "3 + 1 = ?",
    "4 + 1 = ?",
    "5 + 1 = ?",
    "6 + 1 = ?",
    "7 + 1 = ?",
    ""
  ]);

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
