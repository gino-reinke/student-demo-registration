import React, { useState } from 'react';
import styles from './StudentRegistration.module.css';
import { useNavigate } from 'react-router-dom';

export const StudentRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentId: '',
    phoneNumber: '',
    email: '',
    projectTitle: '',
    timeSlot: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit logic goes here
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.backButton} onClick={() => navigate('/')}>
          <span className={styles.backArrow}>←</span> Back
        </div>
        
        <span className={styles.title}>Select Preferred Time Slot</span>
        <span className={styles.subtitle}>
          Select your preferred time slot. Please ensure you arrive 10 minutes before your time.
        </span>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.row}>
            <input
              type="text"
              name="studentId"
              placeholder="Student ID"
              value={formData.studentId}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="text"
            name="projectTitle"
            placeholder="Project Title"
            value={formData.projectTitle}
            onChange={handleChange}
            className={styles.input}
          />

          <select
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="" disabled>Select a time slot</option>
            <option value="4/19/2070, 6:00 PM – 7:00 PM, 6 seats remaining">
              4/19/2070, 6:00 PM – 7:00 PM, 6 seats remaining
            </option>
            <option value="4/19/2070, 7:00 PM – 8:00 PM, 5 seats remaining">
              4/19/2070, 7:00 PM – 8:00 PM, 5 seats remaining
            </option>
            <option value="4/19/2070, 8:00 PM – 9:00 PM, 3 seats remaining">
              4/19/2070, 8:00 PM – 9:00 PM, 3 seats remaining
            </option>
            <option value="4/19/2070, 6:00 PM – 7:00 PM, 2 seats remaining">
              4/19/2070, 6:00 PM – 7:00 PM, 2 seats remaining
            </option>
            <option value="4/19/2070, 7:00 PM – 8:00 PM, 4 seats remaining">
              4/19/2070, 7:00 PM – 8:00 PM, 4 seats remaining
            </option>
            <option value="4/19/2070, 8:00 PM – 9:00 PM, 0 seats remaining">
              4/19/2070, 8:00 PM – 9:00 PM, 0 seats remaining
            </option>
          </select>


          <button type="submit" className={styles.submitButton}>
            Submit Registration
          </button>

          <span className={styles.alreadyText}>
            Already registered for a time slot? <a href="#">Click here</a>
          </span>
        </form>
      </div>
    </div>
  );
};
