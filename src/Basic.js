import React from 'react';
import BlackBoard from './BlackBoard';
import Calculator from './Calculator';

const Basic =(props) => {
  // console.log(props.item.logo);
  // let logoName = props.items.logo

  return (
    <div className='basic'>
      <BlackBoard
        classes={props.classes}
        questions={props.questions}
        moveElements={props.moveElements}
        afterEvents={props.afterEvents}
      />
      <Calculator/>
    </div>
  )
}

export default Basic;