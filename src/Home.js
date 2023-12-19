// Import necessary functions and libraries
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { BASE_URL } from './constant';

const Home = () => {
  // Using the useLocation hook to access state from the previous route
  const { state } = useLocation();
  const user = state?.user || null;

  const allBatches = [
    { id: 'batch1', time: '6 - 7 AM' },
    { id: 'batch2', time: '7 - 8 AM' },
    { id: 'batch3', time: '8 - 9 AM' },
    { id: 'batch4', time: '5 - 6 PM' },
  ];

  const [paymentStatus, setPaymentStatus] = useState(user?.paymentDone);
  const [remainingDays, setRemainingDays] = useState(0);
  const [selectedBatch, setSelectedBatch] = useState(user?.batchId);

  // useEffect to fetch payment status and remaining days
  useEffect(() => {
    // Make a request to your backend to fetch payment status based on user ID
    const fetchPaymentStatus = async () => {
      try {
        const response = await fetch(`${BASE_URL}/paymentStatus/${user.id}`);
        const data = await response.json();

        setPaymentStatus(data.paymentStatus);
        if (!data.paymentStatus) {
          const currentDate = new Date();
          const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
          const remainingDays = lastDayOfMonth - currentDate.getDate();
          setRemainingDays(remainingDays);
        }
      } catch (error) {
        console.error('Error fetching payment status', error);
      }
    };

    fetchPaymentStatus();
  }, [user]);


  // Function to handle making a payment
  const handleMakePayment = async () => {
    try {
      console.log('Making payment...');
      const response = await fetch(`${BASE_URL}/makePayment/${user.id}`, {
        method: 'POST',
      });
      const data = await response.json();

      console.log('Payment response:', data);

      setPaymentStatus(true);
      setRemainingDays(0);
      alert('Payment successful!');
    } catch (error) {
      console.error('Payment failed. Please try again.', error);
    }
  };

  // Function to handle batch change
  const handleBatchChange = async (e) => {
    const selectedBatchValue = e.target.value;

    // Only call batchChange if the selected batch is different from the current batch
    if (selectedBatchValue !== user.batchId) {
      alert("Your batch will be changed as soon as the next month starts");
      try {
        // Make a request to your backend to store the batch change request
        const response = await fetch(`${BASE_URL}/batchChangeRequest`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: user.id,
            batchChangeRequest: selectedBatchValue,
          }),
        });

        const data = await response.json();

        console.log('Batch change response:', data);
      } catch (error) {
        console.error('Batch change request failed. Please try again.', error);
      }
    }

    setSelectedBatch(selectedBatchValue);
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 rounded'>
      <div className='bg-white rounded w-25'>
        <div className='mb-3 p-2 rounded-top' style={{ textAlign: 'center', backgroundColor: 'green', color: 'white' }}>
          <h4>Welcome to YogaFlex</h4>
        </div>

        <div className='mb-3 p-4'>
          {user ? (
            <>
              <p><strong>User ID :</strong> {user.id}</p>
              <p><strong>Name :</strong> {user.name}</p>
              <p><strong>Email :</strong> {user.email}</p>
              <p><strong>Age :</strong> {user.age}</p>
              <p><strong>Batch ID :</strong> {user.batchId}</p>
              <p><strong>Time Slot :</strong> {allBatches.find(batch => batch.id === user.batchId)?.time || 'Not specified'}</p>
              <p><strong>Payment Status :</strong> {paymentStatus ? 'Paid' : `Pending (${remainingDays} days remaining)`}</p>
              <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label htmlFor='batchInput'>Do you want to change the Time Slot? </label>
                <select
                  id='batchInput'
                  name='selectedBatch'
                  value={selectedBatch}
                  onChange={handleBatchChange}
                  style={{ width: '200px', borderRadius: '4px', borderColor: '#c0c0c0' }}
                >
                  {allBatches.map(batch => (
                    <option key={batch.id} value={batch.id}>
                      {batch.time}
                    </option>
                  ))}
                </select>
              </div>
              {!paymentStatus && (
                <div className='mb-1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button onClick={handleMakePayment} className='btn btn-success'>
                  Make Payment
                </button>
              </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <p>Login/Register to access YogaFlex</p>
              <div className='mb-3'>
                <Link to="/" className="btn btn-primary">Login</Link>
                <Link to="/signup" className="btn btn-success">Register</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
