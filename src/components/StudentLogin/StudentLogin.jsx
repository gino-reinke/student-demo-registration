import React, { useState } from 'react';
import styles from './StudentLogin.module.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export const StudentLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const snapshot = await getDocs(collection(db, 'registrations'));
      const entries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const user = entries.find((entry) => entry.email === formData.email.trim());

      if (!user) {
        setError('Email not found or incorrect. Please try again.');
        return;
      }

      const message = `
Registration Found!

Name: ${user.firstName} ${user.lastName}
Student ID: ${user.studentId}
Phone: ${user.phoneNumber}
Email: ${user.email}
Project Title: ${user.projectTitle}
Time Slot: ${user.timeSlot}

Click "OK" to keep your time slot or "Cancel" to change it.
      `;

      const userConfirmed = window.confirm(message);

      if (!userConfirmed) {
        // User wants to change time slot
        await deleteDoc(doc(db, 'registrations', user.id));
        navigate('/studentregistration');
      }

    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again later.');
    }
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
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />

          {error && <div className={styles.error}>{error}</div>}

          <button type="submit" className={styles.submitButton}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
