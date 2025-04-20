import React, { useState, useEffect } from 'react';
import styles from './StudentRegistration.module.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

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

  const [timeSlots, setTimeSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(true);

  const defaultSlots = [
    '4/19/2070, 6:00 PM – 7:00 PM',
    '4/19/2070, 7:00 PM – 8:00 PM',
    '4/19/2070, 8:00 PM – 9:00 PM',
    '4/19/2070, 6:00 PM – 7:00 PM',
    '4/19/2070, 7:00 PM – 8:00 PM',
    '4/19/2070, 8:00 PM – 9:00 PM',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchTimeSlots = async () => {
    const snapshot = await getDocs(collection(db, 'timeSlots'));
    const slots = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTimeSlots(slots);
    setLoadingSlots(false);
  };

  useEffect(() => {
    fetchTimeSlots();
  }, []);

  const handleResetTimeSlots = async () => {
    const confirmReset = window.confirm(
      'Are you sure you want to reset all time slots? This will DELETE ALL EXISTING REGISTRATIONS.'
    );
    if (!confirmReset) return;

    // Delete all timeSlots
    const timeSlotSnapshot = await getDocs(collection(db, 'timeSlots'));
    for (const docSnap of timeSlotSnapshot.docs) {
      await deleteDoc(doc(db, 'timeSlots', docSnap.id));
    }

    // Delete all registrations
    const registrationSnapshot = await getDocs(collection(db, 'registrations'));
    for (const docSnap of registrationSnapshot.docs) {
      await deleteDoc(doc(db, 'registrations', docSnap.id));
    }

    // Recreate default slots
    for (const slot of defaultSlots) {
      await addDoc(collection(db, 'timeSlots'), {
        label: slot,
        quantity: 6,
      });
    }

    fetchTimeSlots();
    alert('Time slots and registrations have been reset.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedSlotObj = timeSlots.find(
      (slot) => `${slot.label}, ${slot.quantity} seats remaining` === formData.timeSlot
    );

    if (!selectedSlotObj || selectedSlotObj.quantity <= 0) {
      alert('Selected time slot is full. Please choose another one.');
      return;
    }

    try {
      // Save registration with just the label
      const registrationData = {
        ...formData,
        timeSlot: selectedSlotObj.label,
      };

      await addDoc(collection(db, 'registrations'), registrationData);

      // Decrement slot quantity
      const slotRef = doc(db, 'timeSlots', selectedSlotObj.id);
      await updateDoc(slotRef, {
        quantity: selectedSlotObj.quantity - 1,
      });

      alert('Registration submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }

    fetchTimeSlots();
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
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.input}
              required
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
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <input
            type="text"
            name="projectTitle"
            placeholder="Project Title"
            value={formData.projectTitle}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <select
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="" disabled>Select a time slot</option>
            {timeSlots.map((slot) => {
              const optionValue = `${slot.label}, ${slot.quantity} seats remaining`;
              return (
                <option
                  key={slot.id}
                  value={optionValue}
                  disabled={slot.quantity === 0}
                >
                  {slot.quantity === 0
                    ? `${slot.label}, 0 seats remaining (Full)`
                    : optionValue}
                </option>
              );
            })}
          </select>

          <button type="submit" className={styles.submitButton}>
            Submit Registration
          </button>

          <button
            type="button"
            className={styles.submitButton}
            style={{ backgroundColor: '#888', marginTop: '10px' }}
            onClick={handleResetTimeSlots}
          >
            Reset & Populate Time Slots (for demo purposes only)
          </button>

          <span className={styles.alreadyText}>
            Already registered for a time slot?{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/studentlogin');
              }}
            >
              Click here
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};
