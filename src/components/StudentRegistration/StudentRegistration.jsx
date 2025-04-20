import React, { useState } from 'react';
import styles from './StudentRegistration.module.css';
import { getImageUrl } from '../../utils';

export const StudentRegistration = () => {

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <span className={styles.title}>Select Preferred Time Slot</span>
        <span className={styles.subtitle}>
          Select your preferred time slot. Please ensure you arrive 10 minutes before your time.
        </span>

        
      </div>
    </div>
  );
};
