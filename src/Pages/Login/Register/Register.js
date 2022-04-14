import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const navigate=useNavigate();
     const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);

    const navigatelogin=event=>{
        navigate('/login');
    }
    const handleRegister =event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        createUserWithEmailAndPassword(name,email, password);
        console.log(event.target.name.value,event.target.email.value,event.target.password.value);

    }
    if(user)
    {
        navigate('/home');
    }
    return (     
            
           <div  className='form-control'>
           <h2 style={{textAlign:'center'}}> This is Register page</h2>
           <form onSubmit={handleRegister}>
               <input type="text" name="name" id="" placeholder='Your Name' required />
               <input type="email" name="email" id="" placeholder='Email Address'  required/>
               <input type="password" name="password" id="" placeholder='PassWord' required />
              <input type='submit' value="Register"/>
           </form>
           <p className='mt-4'>Already have an account? <Link to='/login' className='text-success pe-auto text-decoration-none' onClick={navigatelogin}>Please Login.</Link> </p>
           <SocialLogin></SocialLogin> 
           </div>
           
        
    );
};

export default Register;