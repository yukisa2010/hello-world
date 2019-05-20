import React, { useState } from "react";

function Calculator(props) {
  // console.log(props.item.logo);
  // let logoName = props.items.logo

  const [value, setValue] = useState('');
  const changeValue = e => {
    setValue(e.target.value)
  };


  return (
    <div className="calculator">
      <input 
        type="text" 
        value={value} 
        onChange={() => {changeValue(event)}}/>
      <table>
        <tbody>
          <tr>
            <td onClick={() => {setValue(value + 1)}}>1</td>
            <td onClick={() => {setValue(value + 2)}}>2</td>
            <td onClick={() => {setValue(value + 3)}}>3</td>
          </tr>
          <tr>
            <td onClick={() => {setValue(value + 4)}}>4</td>
            <td onClick={() => {setValue(value + 5)}}>5</td>
            <td onClick={() => {setValue(value + 6)}}>6</td>
          </tr>
          <tr>
            <td onClick={() => {setValue(value + 7)}}>7</td>
            <td onClick={() => {setValue(value + 8)}}>8</td>
            <td onClick={() => {setValue(value + 9)}}>9</td>
          </tr>
          <tr>
            <td onClick={() => {setValue(value + 0)}}>0</td>
            <td onClick={() => {setValue(value + '000')}}>000</td>
            <td>
              <i 
              className="fas fa-arrow-left"  
              onClick={() => {setValue(value.slice(0,-1))}}/>
            </td>
          </tr>
        </tbody>
      </table>
      <p
        id="enter"
        className="button"
        onClick={() => {
          props.itemChange();
        }}
      >
        ⇦
      </p>
    </div>
  );
}

export default Calculator;
