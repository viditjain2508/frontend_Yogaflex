// Import necessary functions and libraries

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './loginValidation';
import axios from 'axios';
import { BASE_URL } from './constant';

export default function Login() {
  // state for holding email and password
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Using useNavigate hook for navigation purpose
  const [errors, setErrors] = useState({});

  // update state based on user input
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    try {
      // api call for login
      const res = await axios.post(`${BASE_URL}/login`, values);

      if (res.data.status === 'Success') {
        // Passing user details directly to the Home component
        navigate('/home', { state: { user: res.data.user } });
      } else {
        alert('Enter your details correctly');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <div className='mb-3' style={{ textAlign: 'center' }}>
  <h4>Login at YogaFlex</h4>
</div>
            <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Your Email'  name='email'
                    onChange={handleInput} className='form-control rounded-20'/>
                    {errors.email && <span className='text-danger' >{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name ='password'
                    onChange={handleInput} className='form-control rounded-20'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <div>
  <button type='submit' className='btn btn-success w-100 rounded-20'>Log In</button>
  <p style={{ textAlign: 'center', marginTop: '10px' }}>Not registered? <Link to="/signup">Register here</Link></p>
</div>

            </form>
        </div>
    </div>
  );
}
