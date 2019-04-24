import React from 'react';


function Calculator(props) {
  // console.log(props.item.logo);
  // let logoName = props.items.logo

  return (
    <div className='calculator'>
      <input type="text"/>
      <table>
        <tbody>
          <tr>
            <td>1</td><td>2</td><td>3</td>
          </tr>
          <tr>
            <td>4</td><td>5</td><td>6</td>
          </tr>
          <tr>
            <td>7</td><td>8</td><td>9</td>
          </tr>
          <tr>
            <td>0</td><td>000</td><td><i className="fas fa-arrow-left"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calculator;