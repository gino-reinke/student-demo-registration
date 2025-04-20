import styles from '../App.module.css';
import { LeftPane } from '../components/LeftPane/LeftPane';
import { ProfessorLogin } from '../components/ProfessorLogin/ProfessorLogin';

function ProfessorLoginPage() {
    return (
      <div className={styles.App}>
        <div className={styles.leftPane}>
          <LeftPane />
        </div>
        <div className={styles.rightPane}>
          <ProfessorLogin />
        </div>
      </div>
    );
}

export default ProfessorLoginPage;
