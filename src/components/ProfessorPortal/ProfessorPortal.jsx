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
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
        />
        <div className={styles.scrollView}>

        </div>
      </div>
    </div>
  );
};
