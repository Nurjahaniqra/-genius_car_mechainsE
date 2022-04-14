import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import google from '../../../images/social/google.png';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    let errorElement;

    if (error) {
        errorElement=
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
       
      }

      if (user) {
       navigate('/home')
      }
    return (
        <div>
            <div className='d-flex align-item-center'>
                <div className='bg-primary w-50' style={{height:'1px'}}></div>
                <p>or</p>
                <div className='bg-primary w-50' style={{height:'1px'}}></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 mt-2'>
                <img className='imagestyle' src={google} alt="" />
                    Google Sign In
                </button>
            </div>
            {errorElement}
            <div>    

                <button className='btn btn-primary w-50 mt-2'>
                <img className='imagestyle' src={facebook} alt="" />
                    Facebook Sign In
                </button>
            </div> 
            <div> 
                <button className='btn btn-primary w-50 mt-2'>
                <img className='imagestyle' src={github} alt="" />
                    Github Sign In
                </button>
            </div>  
        </div>
       
    );
};

export default SocialLogin;