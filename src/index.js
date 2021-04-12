import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

// //////////////////////////////////////////  COMPONENTS AND PROPS
function ShowSomeThing(props) {
  props.name = 'Ty';
  return <h1>{props.name}</h1>;
}
ReactDOM.render(<ShowSomeThing name='Minh' />, document.getElementById('root'));

reportWebVitals();
