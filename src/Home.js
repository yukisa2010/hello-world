import React from 'react';
import WorkParts from './WorkParts.js'
import Calendar from './Calendar.js'
import Progress from './Progress.js'




const Home = (props) => {
  

  return (
    <div id="container">
      <div className="wrapper">
        <div className='work-menus'>
          <WorkParts
            item={props.items[0]}
          />
          <WorkParts
            item={props.items[1]}
          />
          <WorkParts
            item={props.items[2]}
          />
          <WorkParts
            item={props.items[3]}
          />
        </div>
        <div className='status'>
          <Calendar/>
          <Progress items={props.items}/>
        </div>
      </div>
    </div>
  )
}

export default Home;
