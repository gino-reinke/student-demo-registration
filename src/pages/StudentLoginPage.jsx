import styles from '../App.module.css';
import { LeftPane } from '../components/LeftPane/LeftPane';
import { StudentLogin } from '../components/StudentLogin/StudentLogin';

function StudentLoginPage() {
    return (
      <div className={styles.App}>
        <div className={styles.leftPane}>
          <LeftPane />
        </div>
        <div className={styles.rightPane}>
          <StudentLogin />
        </div>
      </div>
    );
}

export default StudentLoginPage;
