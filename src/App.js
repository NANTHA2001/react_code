import Login from './login.js';
import Blog from './Blog.js'
import { useState } from 'react';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';

function App() {

  const [employee,setEmployee] = useState([
    { name: 'John Smith', age: 30, gender: 'Male',id:1},
    { name: 'Jane Doe', age: 25, gender: 'Female',id:2},
    { name: 'Bob Johnson', age: 45, gender: 'Male',id:3},
  ]);

  const[Name,setName] = useState('');




  return (
    <Router>
    
    <Switch>
      <Route path="/" exact component={Login}/>
     
      <Route  path="/Blog" render={()=> <Blog employee= {employee} setEmployee={setEmployee} Name={Name} setName={setName}/>} />
        

      </Switch>
    
    </Router>
  );
}

export default App;
