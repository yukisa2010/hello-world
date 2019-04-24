import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home' 
import HeadLine from './HeadLine'
import Basic from './Basic'
import Differencial from './Differencial'
// import Patient from './Patient' 
// import Doctor from './Doctor' 
// import Relations from './Relations' 
// import Staff from './Staff' 
// import Hospital from './Hospital' 
// import Schedule from './Schedule' 



class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { title: '基本演算', logo: 'coffee.png', link: '/patient', progress: 60, color: '#FF5252', backcolor: '#FFCAD0' },
        { title: '指数関数', logo: 'shoes.png', link: '/doctor', progress: 80, color: '#62CC56', backcolor: '#CAEFBF' },
        { title: '微分', logo: 'chicken.png', link: '/relations', progress: 20, color: '#6767E8', backcolor: '#B7D4E5' },
        { title: '統計学', logo: 'pig.png', link: '/staff', progress: 90, color: '#FFBE2E', backcolor: '#EFFF7B' }
      ],
      classes: [
        {element: 'begin'},
        {element: 'prev'},
        {element: 'center'},
        {element: 'next'}
      ],
      questions: [
        {question: '1 + 1 = 2'},
        {question: '2 + 3 = 5'},
        {question: '3 + 4 = 7'},
        {question: '3 + 5 = 8'} 
      ],
      hoge: {
        counter: 0
      }

    }//state
    
    this.moveElements = this.moveElements.bind(this);
  }//constructor


  countUp(){
    this.setState(prevState => {
      let hoge = prevState.hoge
      hoge.counter += 1 
      return {hoge: hoge}
    })


  }

  moveElements(cls){

    const arr = [
      '2 + 3 = 2',
      '2 + 3 = 5',
      '3 + 4 = 7',
      '3 + 5 = 8',
      '3 + 6 = 9',
      '3 + 7 = 10',
      '3 + 8 = 11'
    ];
  

    const changedclass = this.state.classes.map(cls => {
      return {element: cls.element + ' change'}
    });

    const unchangedclass = this.state.classes.map(cls => {
      return {element: cls.element}
    });

    this.setState({classes: changedclass});

    //ここからtransitionendイベントの処理
    const p = document.getElementsByTagName('p');
    const self = this

    function bbb(){
        for(let i=0; i<p.length; i++){
          p[i].style.transition = 'none';
        }
      self.setState(prevState => {
        const previousQuestions = prevState.questions.map(question => {
          return {question: question}
        });

        const addedQuestions = previousQuestions.map(question => {
          return {question: arr[prevState.hoge.counter]}
        })

        return {questions:addedQuestions}
      })
        self.setState({classes: unchangedclass})
        p[2].removeEventListener('transitionend', bbb) 
    }

    p[2].addEventListener('transitionend', bbb) 
    //↑ここまで



  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <HeadLine/>

          <div>
            <Route
              exact path='/'
              render={
                () => <Home items={this.state.items}/>
              }
            />
            <Route
             path='/basic' 
             render={
               () => <Basic 
                      questions={this.state.questions}
                      classes={this.state.classes}
                      moveElements={this.moveElements}
                      afterEvents={this.afterEvents}
                      />
             }
            />
            <Route path='/differencial' component={Differencial} />
          </div>
        </BrowserRouter>
      </div>
    );
  }//render
}//App



export default App;
