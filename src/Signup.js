// Import necessary functions and libraries

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Validation from './signupValidation';
import axios from 'axios'
import { BASE_URL } from './constant';
export default function Signup() {
    // State to hold input values
    const [values,setValues]=useState({
        name : '',
        email : '',
        password : '',
        // confirmPassword : '',
        age : '',
        selectedBatch: ''
    })
    const navigate= useNavigate();

    // Function to handle changes in the choosing batch
    const handleBatchChange = (event) => {
        setValues((prev) => ({ ...prev, selectedBatch: event.target.value }));
      };


    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]: [event.target.value]}));
    }


    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values)); // Validating the input values using the imported validation function

        console.log(errors);
        if(errors.name==="" && errors.password==="" && errors.age===""){
             // If there are no validation errors, make a api call
            axios.post(`${BASE_URL}/signup`,values)
            .then(res=>{
                if(res.data==='This Email is already Registered'){
                    alert("This Email is already Registered");
                    navigate('/');
                }
                else{
                    alert("Registered successfully");
                    navigate('/');
                }
            })
            .catch(err=>console.log(err));
        }
    }
  return (
    <>
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <div className='mb-3' style={{ textAlign: 'center' }}>
  <h4>Register for Yoga Classes at YogaFlex</h4>
</div>

            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder='Enter Your Name' onChange={handleInput} className='form-control rounded-20' name='name'/>
                    {errors.name && <span className='text-danger' >{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Your Email' onChange={handleInput} className='form-control rounded-20' name='email'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' onChange={handleInput} className='form-control rounded-20' name='password'/>
                    {errors.password && <span className='text-danger' >{errors.password}</span>}
                </div>
                {/* <div className='mb-3'>
                    <label htmlFor="confirmPassword"><strong>Confirm Password</strong></label>
                    <input type="password" placeholder='Confirm your Password' onChange={handleInput} className='form-control rounded-20' name='confirmPassword'/>
                    {errors.confirmPassword && <span className='text-danger' >{errors.confirmPassword}</span>}
                </div> */}
                <div className='mb-3'>
                    <label htmlFor="Age"><strong>Age</strong></label>
                    <input type="number" placeholder='Enter Your Age' onChange={handleInput} className='form-control rounded-20' name='age'/>
                    {errors.age && <span className='text-danger' >{errors.age}</span>}
                </div>
                <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <label htmlFor='batchInput'><strong>Select Batch </strong></label>
  <select
    id='batchInput'
    value={values.selectedBatch}
    name='selectedBatch'
    onChange={handleBatchChange}
    style={{ width: '200px', borderRadius: '4px', borderColor: '#c0c0c0' }}
  >
    <option value='batch1'>6 - 7 AM</option>
    <option value='batch2'>7 - 8 AM</option>
    <option value='batch3'>8 - 9 AM</option>
    <option value='batch4'>5 - 6 PM</option>
  </select>
</div>


                <button type='submit' className='btn btn-success w-100 rounded-20'>Register</button>
                <p style={{ textAlign: 'center', marginTop: '10px' }}>Already registered? <Link to="/">Login here</Link></p>
            </form>
        </div>
    </div>
    </>
  )
}
