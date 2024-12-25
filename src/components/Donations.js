import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Donation.css';

function Donations(props) {
  const [donationDetails, setDonationDetails] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    contactNumber: '',
    email: '',
    address: '',
    country: '',
    city: '',
    state: '',
    pincode: '',
    donationCategory: 'Annadanam',
    donationAmount: '',
    idProofType: 'Aadhar',
    idProofNumber: '',
  
  });
  const [razorpayKey, setRazorpayKey] = useState('');

  useEffect(() => {
    const fetchKey = async () => {
      try {
        const { data } = await axios.get('http://localhost:3005/get-razorpay-key');
        setRazorpayKey(data.key);
      } catch (error) {
        console.error('Error fetching Razorpay key:', error);
      }
    };
    fetchKey();
  }, []);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setDonationDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value
    }));
  };

  const initPayment = (data) => {
    const options = {
      key: razorpayKey,
      amount: data.amount,
      currency: data.currency,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:3005/verify";
          const verifyData = {
            ...response,
            donationDetails
          };
          const { data } = await axios.post(verifyUrl, verifyData);
          window.location.href='/success'
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const orderUrl = "http://localhost:3005/orders";
      const { data } = await axios.post(orderUrl, { amount: donationDetails.donationAmount });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="formContainer">
      <h2 className="formTitle">Make a Donation</h2>
      <form onSubmit={handleSubmit} className="form">
        <fieldset className="fieldset">
          <legend className="legend">Add Personal Details</legend>
          <div className="column">
            <div className="formGroup">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                type="text"
                value={donationDetails.firstName}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="lastName">Last Name:</label>
              <input
                id="lastName"
                type="text"
                value={donationDetails.lastName}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="fatherName">Father's Name:</label>
              <input
                id="fatherName"
                type="text"
                value={donationDetails.fatherName}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="contactNumber">Contact Number:</label>
              <input
                id="contactNumber"
                type="tel"
                value={donationDetails.contactNumber}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={donationDetails.email}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Add Address Details</legend>
          <div className="column">
            <div className="formGroup">
              <label htmlFor="address">Address:</label>
              <input
                id="address"
                type="text"
                value={donationDetails.address}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="country">Country:</label>
              <input
                id="country"
                type="text"
                value={donationDetails.country}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="city">City:</label>
              <input
                id="city"
                type="text"
                value={donationDetails.city}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="state">State:</label>
              <input
                id="state"
                type="text"
                value={donationDetails.state}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="pincode">Pincode:</label>
              <input
                id="pincode"
                type="text"
                value={donationDetails.pincode}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Add Other Details</legend>
          <div className="column">
            <div className="formGroup">
              <label htmlFor="donationCategory">Donation Category:</label>
              <select
                id="donationCategory"
                value={donationDetails.donationCategory}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="Annadanam">Annadanam</option>
                <option value="Alaya Abhivrudhi">Alaya Abhivrudhi</option>
                <option value="Bangaru Ratha Nirmanam">Bangaru Ratha Nirmanam</option>
                <option value="Free Prasadam">Free Prasadam</option>
                <option value="Ehundi">Ehundi</option>
                <option value="Abhishekam">Abhishekam</option>
                <option value="General Donation">General Donation</option>
              </select>
            </div>
            <div className="formGroup">
              <label htmlFor="donationAmount">Donation Amount:</label>
              <input
                id="donationAmount"
                type="number"
                value={donationDetails.donationAmount}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="idProofType">ID Proof Type:</label>
              <select
                id="idProofType"
                value={donationDetails.idProofType}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="Aadhar">Aadhar</option>
                <option value="Pan">Pan</option>
                <option value="License">License</option>
                <option value="Passport">Passport</option>
                <option value="Election ID">Election ID</option>
              </select>
            </div>
            <div className="formGroup">
              <label htmlFor="idProofNumber">ID Proof Number:</label>
              <input
                id="idProofNumber"
                type="text"
                value={donationDetails.idProofNumber}
                onChange={handleChange}
                className="input"
                required
              />
            </div>

          </div>
        </fieldset>
        <button type="submit" className="button">Donate</button>
      </form>
    </div>
  );
}

export default Donations;
