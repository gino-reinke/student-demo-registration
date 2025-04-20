import React from 'react';
import styles from './ProfessorPortal.module.css';
import { getImageUrl } from '../../utils';

export const ProfessorPortal = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.view}>
        <img
          src={getImageUrl('professorportal/professorPortalBackground.png')}
          alt="Background"
          className={styles.backgroundImage}
        />
        
        <div className={styles.scrollView}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Time Slot</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, index) => (
                <tr key={index}>
                  <td>AA####</td>
                  <td>First</td>
                  <td>Last</td>
                  <td>email@address.com</td>
                  <td>##########</td>
                  <td>01/01/25 7:00PM - 8:00PM</td>
                  <td>
                    <button className={styles.trashButton}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
