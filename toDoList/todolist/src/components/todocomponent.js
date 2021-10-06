import React,{Component} from 'react';

// class list extends React.Component{
// 	// constructor(){
// 	// 	super();
// 	// }

// 	render(){
// 		return(
// 		<div>
//              <div>
//              hello
//                  <h1>To Do List</h1>
//                  <input type="search" placeholder="write"/>
//              </div>
// 		</div>
// 		);
// 	}
// }

// export default list;

class MyComponent extends React.Component {  
  render() {  
    return (  
     <div>
        <div className="container">
             
            <h1>To Do List</h1>
            <div>
            <input type="search" placeholder="write"/>
            <button>Add</button>
            </div>
        </div>
	</div>
    );  
  }
  } 

export default MyComponent;