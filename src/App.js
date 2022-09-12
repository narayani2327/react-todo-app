// import './App.css';
// import React,{ Component } from 'react';
// import { TiTick } from 'react-icons/ti';
// import { RiEdit2Fill, RiDeleteBin5Fill } from 'react-icons/ri'
// class App extends Component {
//   render() { 
//     return (
//       <>
//         <a href="" target="_blank"><TiTick/> Phone No.</a>
//         <a href="" target="_blank"><RiEdit2Fill/> Phone No.</a>
//         <a href="" target="_blank"><RiDeleteBin5Fill/> Phone No.</a>
//         <h2>Hello world</h2>
//         <h3>Hello world</h3>
//       </>
//       );
//   }
// }

// export default App;
import './App.css';
import  Todo from "./components/Todo";
import React,{ Component } from 'react';
class App extends Component {
  render() { 
    return (
      <Todo/>
      );
  }
}
export default App;