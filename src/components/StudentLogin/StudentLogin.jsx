import React, { useState } from 'react';
import styles from './StudentLogin.module.css';
import { useNavigate } from 'react-router-dom';

export const StudentLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
      alert('clicked');
  };  

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.backButton} onClick={() => navigate('/')}>
          <span className={styles.backArrow}>←</span> Back
        </div>
        
        <span className={styles.title}>Student Login</span>
        <span className={styles.subtitle}>
          View or reselect your preferred time slot. Please ensure you arrive 10 minutes before your time.
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

          <button type="submit" className={styles.submitButton}>
            Verify email to sign in
          </button>
        </form>
      </div>
    </div>
  );
};
