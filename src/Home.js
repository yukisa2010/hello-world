import React from 'react';
// import { Link } from 'react-router-dom';
// import HeadLine from './HeadLine.js'
import WorkParts from './WorkParts.js'
import Calendar from './Calendar.js'
import Progress from './Progress.js'


// function Buttons(props) {
//   const items = props.items.slice()
//   let i = 0;
//   let j = 0
//   const buttons = items.map(item => {
//     return (
//       <Link
//         key={j++}
//         to={item.link}
//         style={{ textDecoration: 'none' }}
//       >
//         <p
//           key={i++}
//           className={'button ' + item.class}
//         >
//           {item.title}
//         </p>
//       </Link>
//     )
//   })

//   return buttons
// }


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
