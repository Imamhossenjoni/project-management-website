import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    //
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        sError,
    ] = useSignInWithEmailAndPassword(auth);

    // signInWith Google
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const handleGoogle = () => {

    }

    const handleLogin = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.pass.value;
        signInWithEmailAndPassword(email, pass);
    }
    //
    const [token] = useToken(user || gUser)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        if (token) {
            // navigate('/shop');
            navigate(from,{replace:true});
        }
    }, [token,from])
    return (
        <div>
            <div className='flex items-center justify-center py-5'>
                <div class="card w-96 bg-base-100 shadow-xl py-12 px-3">
                    <h2 className='text-3xl font-bold py-5'>Please Login</h2>
                    <form onSubmit={handleLogin} className='text-left items-center justify-center ml-4'>
                        <span className='mt-2 text-base-300 text-xl'>Your Name:</span>
                        <input type="text" name='name' placeholder="Enter Your Name" class="input input-bordered w-full max-w-xs mt-2" /><br />
                        <span className='mt-2 text-base-300 text-xl'>Your Email:</span>
                        <input type="email" name='email' placeholder="abc @ gmail.com" class="input input-bordered w-full max-w-xs mt-2" /><br />
                        <span className='mt-2 text-base-300 text-xl'>Password:</span>
                        <input type="password" name='pass' placeholder="Enter Your Password" class="input input-bordered w-full max-w-xs mt-2" /><br />
                        <input type='checkbox' class='checkbox my-2'></input><br />
                        <input type='submit' value='Sign Up' className='btn btn-info font-bold w-full max-w-xs'></input>
                    </form>
                    <span className='text-left mt-4 ml-3'>New visit here ? <Link to='/register' className='text-info'>Please Register</Link></span>
                    <span className='text-left ml-3'>Forget Password ? <Link to='' className='text-info'>Click to Reset</Link></span>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline text-xl'>Continue to Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;