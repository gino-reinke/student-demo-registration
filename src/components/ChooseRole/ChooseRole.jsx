import React from 'react';
import styles from './ChooseRole.module.css';
import { getImageUrl } from '../../utils';

export const ChooseRole = () => {
  return (
    <div className={styles.contain}>
      <div className={styles['scroll-view']}>
        <span className={styles.text}>Choose Your Role</span>
        <span className={styles.text2}>
          Select whether you are a student registering or the professor managing the schedule.
        </span>

        <div className={styles['row-view']}>
        <div className={styles.octagon}>
            <img
                src={getImageUrl("chooserole/coffee.svg")}
                alt="Student icon"
            />
        </div>
          <div className={styles.column}>
            <span className={styles.text3}>Student</span>
            <span className={styles.text4}>
              Select your preferred time slot, or view/reselect your time slot.
            </span>
          </div>
          <img
            src={getImageUrl("chooserole/arrowRight.svg")}
            className={styles.image2}
            alt="Student icon 2"
          />
        </div>

        <div className={styles['row-view2']}>
        <div className={styles.octagon}>
            <img
                src={getImageUrl("chooserole/briefcase.svg")}
                alt="Professor icon"
            />
        </div>
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
