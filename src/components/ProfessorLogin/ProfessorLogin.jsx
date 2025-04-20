import React, { useState } from 'react';
import styles from './ProfessorLogin.module.css';
import { useNavigate } from 'react-router-dom';

export const ProfessorLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const validEmail = 'professor@wayne.edu';
    const validPassword = 'Password123';
  
    if (formData.email === validEmail && formData.password === validPassword) {
      navigate('/'); // Navigate to homepage or dashboard for now
    } else {
      alert('Incorrect email address or password, please try again.');
    }
  };  

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.backButton} onClick={() => navigate('/')}>
          <span className={styles.backArrow}>←</span> Back
        </div>
        
        <span className={styles.title}>Professor Login</span>
        <span className={styles.subtitle}>
          Manage time slots and view all student project registrations.
        </span>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="**********"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
          />

          <button type="submit" className={styles.submitButton}>
            Sign in
          </button>

          <span className={styles.alreadyText}>
            FOR DEMO PURPOSES: email:  'professor@wayne.edu'; password: 'Password123'
          </span>
        </form>
      </div>
    </div>
  );
};
