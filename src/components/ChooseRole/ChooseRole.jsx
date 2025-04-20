import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ChooseRole.module.css';
import { getImageUrl } from '../../utils';

export const ChooseRole = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleClick = (role) => {
    if (role === 'Student') {
      navigate('/studentregistration'); // Navigate to student registration
    } else if (role === 'Professor') {
      navigate('/professorlogin'); // Navigate to professor login
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <span className={styles.title}>Choose Your Role</span>
        <span className={styles.subtitle}>
          Select whether you are a student registering or the professor managing the schedule.
        </span>

        {/* Student Button */}
        <button
          className={`${styles.roleCard} ${hovered === 'student' ? styles.hovered : ''}`}
          onMouseEnter={() => setHovered('student')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleClick('Student')}
        >
          <div className={styles.iconContainer}>
            <img src={getImageUrl("chooserole/coffee.svg")} alt="Student icon" />
          </div>
          <div className={styles.roleDetails}>
            <span className={styles.roleTitle}>Student</span>
            <span className={styles.roleDescription}>
              Select your preferred time slot, or view/reselect your time slot.
            </span>
          </div>
          <div className={styles.arrowContainer}>
            <img
              src={getImageUrl("chooserole/arrowRight.svg")}
              className={styles.arrowIcon}
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
          className={`${styles.roleCard} ${hovered === 'professor' ? styles.hovered : ''}`}
          onMouseEnter={() => setHovered('professor')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleClick('Professor')}
        >
          <div className={styles.iconContainer}>
            <img src={getImageUrl("chooserole/briefcase.svg")} alt="Professor icon" />
          </div>
          <div className={styles.roleDetails}>
            <span className={styles.roleTitle}>Professor</span>
            <span className={styles.roleDescription}>
              Manage time slots and view all student project registrations.
            </span>
          </div>
          <div className={styles.arrowContainer}>
            <img
              src={getImageUrl("chooserole/arrowRight.svg")}
              className={styles.arrowIcon}
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
