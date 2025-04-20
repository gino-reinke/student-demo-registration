import React from 'react';
import styles from './ChooseRole.module.css';

export const ChooseRole = () => {
  return (
    <div className={styles.contain}>
      <div className={styles['scroll-view']}>
        <span className={styles.text}>Choose Your Role</span>
        <span className={styles.text2}>
          Select whether you are a student registering or the professor managing the schedule.
        </span>

        <div className={styles['row-view']}>
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5nCltVnIbi/wzocncxx_expires_30_days.png"
            className={styles.image}
            alt="Student icon"
          />
          <div className={styles.column}>
            <span className={styles.text3}>Student</span>
            <span className={styles.text4}>
              Select your preferred time slot, or view/reselect your time slot.
            </span>
          </div>
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5nCltVnIbi/21z8ztzv_expires_30_days.png"
            className={styles.image2}
            alt="Student icon 2"
          />
        </div>

        <div className={styles['row-view2']}>
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5nCltVnIbi/2f4aa70o_expires_30_days.png"
            className={styles.image}
            alt="Professor icon"
          />
          <div className={styles.column2}>
            <span className={styles.text3}>Professor</span>
            <span className={styles.text4}>
              Manage time slots and view all student project registrations.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
