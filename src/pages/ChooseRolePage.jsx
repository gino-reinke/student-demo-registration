import styles from '../App.module.css';
import { LeftPane } from '../components/LeftPane';
import { ChooseRole } from '../components/ChooseRole';

function HomePage() {
    return (
      <div className={styles.App}>
        <div className={styles.leftPane}>
          <LeftPane />
        </div>
        <div className={styles.rightPane}>
          <ChooseRole />
        </div>
      </div>
    );
  }
  
  export default HomePage;