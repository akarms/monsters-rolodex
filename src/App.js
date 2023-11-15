import {Component} from 'react' ;

import logo from './logo.svg';
import './App.css';


//1st method ----------------------------------------------------------------------------------

/*
class App extends Component {
constructor(){
  super();
  this.state = {
    monster1 : {
      name: 'Linda' ,
    },
    monster2 : {
      name : 'Frank'
    },
    monster3 : {
      name : 'Jacky' 
    }
  }
}


 render() {
  return (
    <div className="App">
   <h1>{this.state.monster1.name}</h1>
   <h1>{this.state.monster2.name}</h1>
   <h1>{this.state.monster3.name}</h1>

    </div>
  );
 }
}

*/


//2nd method ----------------------------------------------------------------------------------
//Array Method
//if you create an array it is compulsary to use key attribute like id or name or any other unique attribute
//if you dont use key attribute then it will give you warning in console


// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters :[
//          {
//           name: 'Linda' ,
//           id : '1' 
//         },
//           {
//           name : 'Frank',
//           id : '2'
//         },
//           {
//           name : 'Jacky' ,
//           id : '3'
//         },
//         {
//           name : 'Andrey',
//           id : '4'
//         }
//       ]
//     }
//   }
  
  
//    render() {
//     return (
//       <div className="App">{
//         this.state.monsters.map((monster)=> {
//           return <div key = {monster.id}> 
//             <h1>{monster.name}</h1>
//             </div>;
//         })
//       }
//       </div>
//     );
//    }
//   }




//3rd method ----------------------------------------------------------------------------------
//fetching data from api
//there are several key life cycle methods in react

// one is called componentDidMount() method which is called after the render method
//we can use this method to fetch data from api
//because it will execute only once after the render method

// If you need to load data from a remote endpoint, this is a good place to instantiate the network request.


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters :[
         {
          name: 'Linda' ,
          id : '1' 
        },
          {
          name : 'Frank',
          id : '2'
        },
          {
          name : 'Jacky' ,
          id : '3'
        },
        {
          name : 'Andrey',
          id : '4'
        }
      ]
    }
  }
  
  
   render() {
    return (
      <div className="App">{
        this.state.monsters.map((monster)=> {
          return <div key = {monster.id}> 
            <h1>{monster.name}</h1>
            </div>;
        })
      }
      </div>
    );
   }
  }

export default App;
