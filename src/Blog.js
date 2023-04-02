// import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';





import React, { useState } from 'react'
import './App.js'
import './table.css';
import { Button, Modal } from "react-bootstrap";



const Blog=({employee,setEmployee,onDelete,onSubmit,value})=>
{
const[id,setId]=useState('');
const[name,setName]=useState('');
const[age,setAge]=useState('');
const[gender,setGender]=useState('');


// function handleAddEmployee(e) {
    
//   e.preventDefault();
//   const newEmployee={id:id, name:name, age:age, gender:gender}
//   setEmployee([...employee,newEmployee]);

//   // setEmployee( [...employee,newEmployeeData]);
//   // prevEmployee =>
// }


// const[id1,setId1]=useState('');
// const[name1,setName1]=useState('');
// const[age1,setAge1]=useState('');
// const[gender1,setGender1]=useState('');


const [showModal, setShowModal] = useState(false);
const [showModal1, setShowModal1] = useState(false);

const handleSave = () => {
    setShowModal(false);
    setShowModal1(false);
  };


const handleCancel = () => {
    setShowModal(false);
    setShowModal1(false);
    
  };

    const Addcolumn=(e)=>{
        e.preventDefault();
        // onaddemployee({id,name,age,gender});
        const newEmployee={id:id, name:name, age:age, gender:gender}
        setEmployee([...employee,newEmployee]);
        setName('');
        setAge('');
        setGender('');
        setId('');
       
}
function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ id,name,age,gender});
    setName('');
    setAge('');
    setGender('');
    setId('');
  }

    return(
          <div className='table'>
            <h1>Employee Details</h1>
            <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <td>modify column</td>
                    <td>Delete data</td>
                {/* Render new column header
                {employee.length > 0 && Object.keys(employee[0]).map(key => (
               key !== 'id' && <th key={key}>{key}</th>
                ))} */}
                </tr>
            </thead>
            <tbody>
                 {employee.map((setEmploye,index) => (
                    <tr key={index}>
                        <td>{setEmploye.id}</td>
                        <td>{setEmploye.name}</td>
                        <td>{setEmploye.age}</td>
                        <td>{setEmploye.gender}</td>
                        <td><button onClick={() => value(index) }>choose column to modify</button></td>
                        <td><button onClick={() => onDelete(index) }>Delete</button></td>
                        
                            </tr>
                ))}  
            </tbody>
        </table>
        <Modal show={showModal1} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>modify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >
        <label>
        id:
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        gender:
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <center><Button onClick={() => setShowModal1(true)}>Modify</Button><br></br></center>
     
        
    

        <Modal show={showModal} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <form>

            
                 <input type="number" value={id}  placeholder="Enter your id.." onChange={(e) => { setId(e.target.value); }} />
                
           
                 <input type="text" value={name}  placeholder="Enter your Name.." onChange={(e) => { setName(e.target.value); }} />
              
               
                 <input type="number" value={age}  placeholder="Enter your age..." onChange={(e) => { setAge(e.target.value); }} />
           
                 <input type="text" value={gender}  placeholder="Gender.." onChange={(e) => { setGender(e.target.value); }} />

                 <input type="button"  value="addcolumn" id="addcolumn"  onClick={Addcolumn}/>
                 </form>
                 </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
     <center><Button onClick={() => setShowModal(true)}>Add New Employee</Button></center> 
        </div> 
        
    );
}


  export default Blog;