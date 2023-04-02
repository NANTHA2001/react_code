import { useState } from 'react'
import {useHistory} from 'react-router-dom';
import './style.css'


const Login  =() =>{
 

  var [username,setUsername]=useState('');
  var [password,setPassword]=useState('');

  const history =useHistory();
  const handelSubmit= (e) =>

  {
   
    console.log(password);
     if(username === 'Nantha kumar' && password ==='nanthu@2001')
     {
      alert("password is correct");
       username=" ";
       history.push('/Blog');
     }
     else{
      alert("password is wrong");
     }
  }

  
    const [passwordVisible, setPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
  
  return (
    
  


    <div class="container">
      <form >
        <h1>Login</h1>

        <input type="text" placeholder="Username..." id="username" required value={username} onChange={(e) => { setUsername(e.target.value); } } />

        <div class="password-container">
          <input type={passwordVisible ? "text" : "password"} placeholder="Password..." id="password" value={password} onChange={(e) => { setPassword(e.target.value); }}/>
          <i
        className={`fa ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
        onClick={togglePasswordVisibility}
      ></i>
        </div>

        <input type="button"  value="submit" id="button" onClick={handelSubmit}/>



      </form>
    </div>
   
  ); 
  
}
export default Login;


