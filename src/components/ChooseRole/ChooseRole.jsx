import React, { useState } from 'react';
import styles from './ChooseRole.module.css';
import { getImageUrl } from '../../utils';

export const ChooseRole = () => {
  const [hovered, setHovered] = useState(null);

  const handleClick = (role) => {
    alert(`${role} button pressed`);
  };

  return (
    <div className={styles.contain}>
      <div className={styles['scroll-view']}>
        <span className={styles.text}>Choose Your Role</span>
        <span className={styles.text2}>
          Select whether you are a student registering or the professor managing the schedule.
        </span>

        {/* Student Button */}
        <button
          className={`${styles['row-view']} ${hovered === 'student' ? styles.hovered : ''}`}
          onMouseEnter={() => setHovered('student')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleClick('Student')}
        >
          <div className={styles.octagon}>
            <img src={getImageUrl("chooserole/coffee.svg")} alt="Student icon" />
          </div>
          <div className={styles.column}>
            <span className={styles.text3}>Student</span>
            <span className={styles.text4}>
              Select your preferred time slot, or view/reselect your time slot.
            </span>
          </div>
          <div className={styles.arrowWrapper}>
            <img
              src={getImageUrl("chooserole/arrowRight.svg")}
              className={styles.image2}
              alt="Arrow"
              style={{
                opacity: hovered === 'student' ? 1 : 0,
                visibility: hovered === 'student' ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease',
              }}
            />
          </div>
        </button>

        {/* Professor Button */}
        <button
          className={`${styles['row-view2']} ${hovered === 'professor' ? styles.hovered : ''}`}
          onMouseEnter={() => setHovered('professor')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleClick('Professor')}
        >
          <div className={styles.octagon}>
            <img src={getImageUrl("chooserole/briefcase.svg")} alt="Professor icon" />
          </div>
          <div className={styles.column2}>
            <span className={styles.text3}>Professor</span>
            <span className={styles.text4}>
              Manage time slots and view all student project registrations.
            </span>
          </div>
          <div className={styles.arrowWrapper}>
            <img
              src={getImageUrl("chooserole/arrowRight.svg")}
              className={styles.image2}
              alt="Arrow"
              style={{
                opacity: hovered === 'professor' ? 1 : 0,
                visibility: hovered === 'professor' ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease',
              }}
            />
          </div>
        </button>
      </div>
    </div>
  );
};
