
import Landing from '../../components/Landing/Landing';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Home.module.css'


export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <Navbar />
      <Landing />
    </div>
  );
}
