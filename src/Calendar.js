import React from 'react'

function Calendar() {

  let headRow = (
    <tr>
    <th>月</th>
    <th>火</th>
    <th>水</th>
    <th>木</th>
    <th>金</th>
    <th>土</th>
    <th>日</th>
  </tr>
  )


  let dataRow = (
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  )


  return (
    <div className='calendar'>
      <h3>4月</h3>
      <table>
        <thead>
          {headRow}
        </thead>
        <tbody>
          {dataRow}
          {dataRow}
          {dataRow}
          {dataRow}
          {dataRow}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;