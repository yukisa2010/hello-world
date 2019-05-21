import React from "react";

function Calculator(props) {
  // console.log(props.item.logo);
  // let logoName = props.items.logo

  return (
    <div className="calculator">
      <input
        type="text"
        value={props.value}
        setValue={() => {
          props.setValue();
        }}
        onChange={() => {
          props.changeValue(event);
        }}
      />
      <table>
        <tbody>
          <tr>
            <td
              onClick={() => {
                props.setValue(props.value + 1);
              }}
            >
              1
            </td>
            <td
              onClick={() => {
                props.setValue(props.value + 2);
              }}
            >
              2
            </td>
            <td
              onClick={() => {
                props.setValue(props.value + 3);
              }}
            >
              3
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                props.setValue(props.value + 4);
              }}
            >
              4
            </td>
            <td
              onClick={() => {
                props.setValue(props.value + 5);
              }}
            >
              5
            </td>
            <td
              onClick={() => {
                props.setValue(props.value + 6);
              }}
            >
              6
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                props.setValue(props.value + 7);
              }}
            >
              7
            </td>
            <td
              onClick={() => {
                props.setValue(props.value + 8);
              }}
            >
              8
            </td>
            <td
              onClick={() => {
                props.setValue(props.value + 9);
              }}
            >
              9
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                props.setValue(props.value + 0);
              }}
            >
              0
            </td>
            <td
              onClick={() => {
                props.setValue(props.value + "000");
              }}
            >
              000
            </td>
            <td>
              <i
                className="fas fa-arrow-left"
                onClick={() => {
                  props.setValue(props.value.slice(0, -1));
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p
        id="enter"
        className="button"
        onClick={() => {
          props.judgeInput();
        }}
      >
        ⇦
      </p>
    </div>
  );
}

export default Calculator;
