// Login system:
// Sign up
// 	Username
// 	Type of user: Provider/Receiver
// 	Submit button: redirect to Provider/Receiver Form

import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
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
      <h2 style={styles.heading}>Sign Up</h2>
      <form onSubmit={(e) => e.preventDefault()} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="userType" style={styles.label}>
            Type of user: Provider/Receiver
          </label>
          <select
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
          <button type="button" onClick={handleRedirect} style={styles.button}>
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