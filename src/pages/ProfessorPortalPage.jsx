import styles from '../App.module.css';
import { ProfessorPortal } from '../components/ProfessorPortal/ProfessorPortal';

function ProfessorPortalPage() {
    return (
      <div className={styles.portal}>
        <ProfessorPortal /> 
      </div>
    );
}

export default ProfessorPortalPage;
