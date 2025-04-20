import React, { useEffect, useState } from 'react';
import styles from './ProfessorPortal.module.css';
import { getImageUrl } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from 'firebase/firestore';

export const ProfessorPortal = () => {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState([]);

  const defaultSlots = [
    '4/19/2070, 6:00 PM – 7:00 PM',
    '4/19/2070, 7:00 PM – 8:00 PM',
    '4/19/2070, 8:00 PM – 9:00 PM',
    '4/19/2070, 6:00 PM – 7:00 PM',
    '4/19/2070, 7:00 PM – 8:00 PM',
    '4/19/2070, 8:00 PM – 9:00 PM',
  ];

  const fetchRegistrations = async () => {
    const snapshot = await getDocs(collection(db, 'registrations'));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRegistrations(data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this registration?');
    if (!confirmDelete) return;

    await deleteDoc(doc(db, 'registrations', id));
    fetchRegistrations();
  };

  const handleResetTimeSlots = async () => {
    const confirmReset = window.confirm(
      'Are you sure you want to reset all time slots? This will DELETE ALL EXISTING REGISTRATIONS.'
    );
    if (!confirmReset) return;

    const timeSlotSnapshot = await getDocs(collection(db, 'timeSlots'));
    for (const docSnap of timeSlotSnapshot.docs) {
      await deleteDoc(doc(db, 'timeSlots', docSnap.id));
    }

    const registrationSnapshot = await getDocs(collection(db, 'registrations'));
    for (const docSnap of registrationSnapshot.docs) {
      await deleteDoc(doc(db, 'registrations', docSnap.id));
    }

    for (const slot of defaultSlots) {
      await addDoc(collection(db, 'timeSlots'), {
        label: slot,
        quantity: 6,
      });
    }

    fetchRegistrations();
    alert('Time slots and registrations have been reset.');
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return (
    <div className={styles.contain}>
      <div className={styles.view}>
        <img
          src={getImageUrl('professorportal/professorPortalBackground.png')}
          alt="Background"
          className={styles.backgroundImage}
        />

        <button className={styles.logoutButton} onClick={() => navigate('/')}>
          Logout
        </button>

        <div className={styles.scrollView}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Project Title</th>
                <th>Time Slot</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.studentId}</td>
                  <td>{entry.firstName}</td>
                  <td>{entry.lastName}</td>
                  <td>{entry.email}</td>
                  <td>{entry.phoneNumber}</td>
                  <td>{entry.projectTitle}</td>
                  <td>{entry.timeSlot}</td>
                  <td>
                    <button
                      className={styles.trashButton}
                      onClick={() => handleDelete(entry.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'center', margin: '20px' }}>
          <button
            onClick={handleResetTimeSlots}
            style={{
              backgroundColor: '#888',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Reset & Populate Time Slots (for demo purposes only)
          </button>
        </div>
      </div>
    </div>
  );
};
