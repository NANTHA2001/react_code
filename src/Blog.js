import { useState } from 'react'
import './App.js'
import './table.css'



const Blog=({employee,setEmployee,Name,setName})=>
{

   

    const Addcolumn=()=>{

        setEmployee(preData => [...preData,{id:4,[Name]:''}])
        console.log("hi");
       
}

const handlecolumn=(e)=>
{
  setName(e.target.value);
}
      
    return(
          <div className='table'>
            <h1>Employee Details</h1>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                 {employee.map((setEmploye, index) => (
                    <tr key={index}>
                        <td>{setEmploye.name}</td>
                        <td>{setEmploye.age}</td>
                        <td>{setEmploye.gender}</td>
                    </tr>
                ))}  
            </tbody>
        </table>
        
        <form >
            <label>
                New Column Name: 
                 <input type="text" value={Name} onChange={handlecolumn} />
                 </label>
                 <input type="button"  value="addcolumn" id="addcolumn" onClick={Addcolumn}/>
                 </form>
        
       
        </div>
       
    );
}


  export default Blog;