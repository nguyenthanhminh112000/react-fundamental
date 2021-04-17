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

// // // //////////////////////////////////////////  STATE AND LIFECYCLE
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Clock : {this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
//   tick() {
//     this.setState({ date: new Date() });
//   }
//   componentDidMount() {
//     this.timeID = setInterval(() => {
//       this.tick();
//     }, 1000);
//     console.log(this.timeID);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timeID);
//     console.log('reach it');
//   }
// }
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Clock />
//         <Clock />
//         <Clock />
//       </div>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'));

// // // // ////////////////////////////////////////// HANDLING EVENTS
// function ActionLink() {
//   function handler(e) {
//     e.preventDefault();
//     console.log(e);
//     console.log('Clicked');
//   }
//   return (
//     <a href='/meantea' onClick={handler}>
//       Clicker
//     </a>
//   );
// }

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { toggle: false };
//   }
//   handler = () => {
//     this.setState({ toggle: !this.state.toggle });
//   };
//   render() {
//     return (
//       <button onClick={this.handler}>{this.state.toggle ? 'ON' : 'OFF'}</button>
//     );
//   }
// }
// ReactDOM.render(<Toggle />, document.getElementById('root'));

// ////////////////////////////////////////// CONDITIONAL RENDERING

// class Guest extends React.Component {
//   render() {
//     return <h1>Please Sign in</h1>;
//   }
// }

// class User extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hi there, Welcome back</h1>
//       </div>
//     );
//   }
// }

// class Greeting extends React.Component {
//   render() {
//     if (this.props.isLoggedIn) {
//       return <User />;
//     }
//     return <Guest />;
//   }
// }

// ReactDOM.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );

// ////////////////////////////////////////// LISTS and KEYS

// const NumberLists = (props) => {
//   const numbers = props.numbers;
//   const lists = numbers.map((number) => (
//     <List key={number.toString()} number={number} />
//   ));
//   return <ul>{lists}</ul>;
// };

// const List = (props) => {
//   return <li>{props.number}</li>;
// };

// const numbers = [1, 2, 3, 4, 5];

// ReactDOM.render(
//   <NumberLists numbers={numbers} />,
//   document.getElementById('root')
// );

////////////////////////////////////////// FORMS

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Name' };
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  };
  onSubmitHandler = (e) => {
    console.log(`This is the new state ${this.state.value}`);
    e.preventDefault();
  };

  render() {
    // return (
    //   <form onSubmit={this.onSubmitHandler}>
    //     <label>
    //       Name:
    //       <input
    //         type='text'
    //         value={this.state.value}
    //         onChange={this.onChangeHandler}
    //       ></input>
    //     </label>
    //     <input type='submit' value='Submit'></input>
    //   </form>
    // );
    return (
      <select>
        <option value='grapefruit'>Grapefruit</option>
        <option value='lime'>Lime</option>
        <option selected value='coconut'>
          Coconut
        </option>
        <option value='mango'>Mango</option>
      </select>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select
            multiple={true}
            value={['mango', 'coconut']}
            onChange={this.handleChange}
          >
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}
// ReactDOM.render(<FlavorForm />, document.getElementById('root'));
ReactDOM.render(<input value='hi' />, document.getElementById('root'));

setTimeout(function () {
  ReactDOM.render(<input value={null} />, document.getElementById('root'));
}, 5000);

reportWebVitals();
