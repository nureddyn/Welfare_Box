import React, { useState } from 'react';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleRedirect = () => {
    // Redirect to the provider page
    window.location.href = 'http://localhost:3000/provider';
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Tell us about you</h2>
      <form action='/signup' method='POST' onSubmit={(e) => e.preventDefault()} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="firstName" style={styles.label}>
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="lastName" style={styles.label}>
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="userType" style={styles.label}>
            Type of user: Provider/Receiver
          </label>
          <select
            name="userType"
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
            required
            style={styles.input}
          >
            <option value="">Select User Type</option>
            <option value="Provider">Provider</option>
            <option value="Receiver">Receiver</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <button type="submit" onClick={handleRedirect} style={styles.button}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    margin: '10px 0',
  },
  label: {
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default SignUp;