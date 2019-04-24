import React from 'react'

function ProgressBar(props) {

    console.log(props.item.backcolor)

  return (
    <tr className='progress'>
      <td>{props.item.title}</td>
      <td>
        <div className='progress-bar' 
            style={{backgroundColor: props.item.backcolor}}
        >
          <div className='backgray' 
                style={{backgroundColor: props.item.color,
                width: props.item.progress + '%' }}
          ></div>
        </div>
      </td>
    </tr>
  )
}



function Progress(props) {
  return (
    <table id='progress'>
      <tbody>
        <ProgressBar item={props.items[0]}/>
        <ProgressBar item={props.items[1]}/>
        <ProgressBar item={props.items[2]}/>
        <ProgressBar item={props.items[3]}/>
      </tbody>
    </table>
    )
}

export default Progress;