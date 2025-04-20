import styles from '../App.module.css';
import { LeftPane } from '../components/LeftPane/LeftPane';
import { StudentRegistration } from '../components/StudentRegistration/StudentRegistration';

function StudentRegistrationPage() {
    return (
      <div className={styles.App}>
        <div className={styles.leftPane}>
          <LeftPane />
        </div>
        <div className={styles.rightPane}>
          <StudentRegistration />
        </div>
      </div>
    );
}

export default StudentRegistrationPage;
