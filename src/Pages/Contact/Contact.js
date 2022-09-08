import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Contact = () => {
    const [user, loading, error] = useAuthState(auth);
    const form = useRef();
    //handle sendEmail
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_xloldmw', 'template_76kdgoi', form.current, 'VboXTGETz_ekhiI9C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        toast('Thanks for your message')
    }
    return (
        <div>
            <div className='text-center bg-base-100 py-5'>
                <h1 className='text-3xl text-info  font-bold mb-4'>How can we help you?</h1>
                <div className='mt-5'>
                    <form ref={form} onSubmit={sendEmail} className='mt-2'>
                        <input type="text" name='name' placeholder="Enter Your Name..." value={user?.displayName} className="input input-bordered input-lg w-full max-w-xs " required /><br />
                        <input type="email" name='email' placeholder="abc @ gmail.com" value={user?.email} className="input input-bordered input-lg w-full max-w-xs mt-2 " required /><br />
                        <textarea type='text' name='message' placeholder={'' ? ` Dear ${''}. Please Write Your Message ...` : `Dear Mr/Ms. Please Write Your Message...`} cols='42' rows='5' className='rounded border w-full  max-w-xs mt-2 text-center' required></textarea><br />
                        <input type="submit" value='Send' className="input input-bordered btn btn-info input-lg w-full  text-white bg-info hover:bg-red-500 max-w-xs font-bold uppercase mt-2" /><br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;