import React from 'react';
import styles from './LeftPane.module.css';
import { getImageUrl } from '../../utils';

export const LeftPane = () => {
  return (
    <div className={styles.contain}>
      <img
        src={getImageUrl("leftpane/detroitLeftPane.png")}
        alt="Background"
        className={styles.bgImage}
      />
      <div className={styles['scroll-view']}>
        <div className={styles.view}>
          <div className={styles.view2}>
            <span className={styles.text}>
              Project Demonstration Registration
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
