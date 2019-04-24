import React from 'react';




function BlackBoard(props) {
  
  return (
    <div className='black-board'>
      <p className={props.classes[0].element}>{props.questions[3].question}</p>
      <p className={props.classes[1].element}>{props.questions[2].question}</p>
      <p 
        id='temp'
        className={props.classes[2].element} 
        onClick={() => props.moveElements(props.classes)}
      >{props.questions[1].question}</p>
      <p className={props.classes[3].element}>{props.questions[0].question}</p>
    </div>
  )
}

export default BlackBoard;