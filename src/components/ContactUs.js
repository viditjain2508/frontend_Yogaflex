import React from 'react';

const ContactUs = () => {
  const phoneNumber = '7073005613';
  const linkedInUrl = 'https://www.linkedin.com/in/vidit-jain-13b703211/';
  const email = 'viditjain2508@gmail.com';

  return (
    <div className="text-center">
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us:</p>

      <div>
        <p><strong>Mobile No:</strong> {phoneNumber}</p>
        <p><strong>Email us at:</strong> <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">viditjain2508@gmail.com</a></p>
        <p><strong>Reach us out at:</strong> <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </div>
  );
};

export default ContactUs;
