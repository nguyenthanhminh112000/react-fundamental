import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// //////////////////////////////////////////  RENDERING ELEMENTS
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello World!</h1>
//       <h2>Today is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);

// // //////////////////////////////////////////  COMPONENTS AND PROPS
// function ShowSomeThing(props) {
//   props.name = 'Ty';
//   return <h1>{props.name}</h1>;
// }
// ReactDOM.render(<ShowSomeThing name='Minh' />, document.getElementById('root'));

// // //////////////////////////////////////////  STATE AND LIFECYCLE
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1>Clock : {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
  tick() {
    this.setState({ date: new Date() });
  }
  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick();
    }, 1000);
    console.log(this.timeID);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
    console.log('reach it');
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));


reportWebVitals();
