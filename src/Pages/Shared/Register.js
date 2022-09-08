import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from './Loading';
const Register = () => {
    const [emails, setEmails] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');

    //
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        cError,
    ] = useCreateUserWithEmailAndPassword(auth);
    // signInWith Google
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    //useToken
    const [token] = useToken(user || gUser);
    const navigate = useNavigate();

    //   if(loading || gLoading){
    //     return <Loading></Loading>
    //   }
    console.log('token', token);

    // if (user?.user?.accessToken) {
    //     navigate('/shop');
    // }
    if (token) {
        navigate('/shop');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        setEmails(email);
        const pass = event.target.pass.value;
        const confirm = event.target.confirmPass.value;
        if (pass !== confirm) {
            setError("Don't match your password")
            return;
        } else {
            setPassword(confirm);
            createUserWithEmailAndPassword(emails, password);
        }
    }
    return (
        <div>
            <div className='flex   items-center justify-center py-5'>
                <div class="card w-96 bg-base-100 shadow-xl py-12 px-3">
                    <h2 className='text-3xl font-bold py-5'>Please Register</h2>
                    <form onSubmit={handleRegister} className='text-left items-center justify-center ml-4'>
                        <span className='mt-2 text-base-300 text-xl'>Your Name:</span>
                        <input type="text" placeholder="Enter Your Name" name='name' class="input input-bordered w-full max-w-xs mt-2" /><br />
                        <span className='mt-2 text-base-300 text-xl' >Your Email:</span>
                        <input type="email" placeholder="abc @ gmail.com" name='email' class="input input-bordered w-full max-w-xs mt-2" /><br />
                        <span className='mt-2 text-base-300 text-xl'>Password:</span>
                        <input type="password" placeholder="Enter Your Password" name='pass' class="input input-bordered w-full max-w-xs mt-2" /><br />
                        <span className='mt-2 text-base-300 text-xl'>Confirm Password:</span>
                        <input type="password" placeholder="Confirm Your Password" name='confirmPass' class="input input-bordered w-full max-w-xs mt-2 " /><br />
                        {/* <input type='checkbox' class='checkbox my-2'></input><br /> */}
                        <input type='submit' value='Sign Up' className='btn btn-info font-bold w-full max-w-xs'></input>
                    </form>
                    <span className='text-left mt-4 text-info text-xl' >Already signIn here ? <Link to='/login'>Go to Login</Link></span>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline text-xl'>Continue to Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;