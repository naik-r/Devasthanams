import React from 'react';
import './Donationsuccess.css';


const ThankYouPage = ({ donorName }) => {
    donorName = "Jinde Sai Upesh";
  return (
    <body className='ttd-donation-body'>
            <div className="container">
            <h1 className="heading">Thank You for Your Donation!</h1>
            <p className="subheading">Dear {donorName},</p>

            </div>
    </body>
  );
};


export default ThankYouPage;
