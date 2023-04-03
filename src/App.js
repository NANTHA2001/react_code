import Login from './login.js';
import Blog from './Blog.js'
import { useState} from 'react';


import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';

function App(){

  const [employee,setEmployee] = useState([
    { name: 'John Smith', age: 30, gender: 'Male',id:1},
    { name: 'Jane Doe', age: 25, gender: 'Female',id:2},
    { name: 'Bob Johnson', age: 45, gender: 'Male',id:3},
  ]);

  // const [employee, setEmployee] = useState(
  //   JSON.parse(localStorage.getItem('employee')) || [
  //     { name: 'John Smith', age: 30, gender: 'Male', id: 1 },
  //     { name: 'Jane Doe', age: 25, gender: 'Female', id: 2 },
  //     { name: 'Bob Johnson', age: 45, gender: 'Male', id: 3 },
  //   ]);

  //   useEffect(() => {
  //     localStorage.setItem('employee', JSON.stringify(employee));
  //   }, [employee]);


  function handleDelete(index) {
    const newData = [...employee];
    newData.splice(index, 1);
    setEmployee(newData);
   
  }
  
  
  var n;
  function handelSubmit(index)
  {
     n=index+1;
    console.log(n);
  }

 
  function handleModify({ id,name, age,gender}) {
   
    
    const newData1 = employee.map((item) =>
      item.id === n? {...item,id, name, age,gender } : item
    );
 
    const updatedEmployee =[...newData1];
    setEmployee( updatedEmployee);
    // localStorage.setItem('employee', JSON.stringify(updatedEmployee));

  
  }



  




  return(
    <Router>
    
    <Switch>
      <Route path="/" exact component={Login}/>
     
      <Route  path="/Blog" render={()=> <Blog employee= {employee} setEmployee={setEmployee}   onDelete={handleDelete}  onSubmit={handleModify} onChange={handelSubmit}/>} />
        

      </Switch>
    
    </Router>

  );


  

  }
  export default App;

  // onaddemployee={handleAddEmployee}