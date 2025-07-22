import styles from './Landing.module.css'
import logo from '../../assets/inceptologo.webp'

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.left}>
        <h2 className={styles.heading}>Hackathon for Innovators</h2>
        <p className={styles.subtext}>
          Join our hackathon to collaborate, create, and bring your ideas to life. Open to innovators of all skill levels.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Register</button>
          <button className={styles.buttonOutline}>Be a sponsor</button>
        </div>
      </div>
      <div className={styles.right}>
        <img src={logo} alt="Incepto Logo" className={styles.logo} />
        <h1 className={styles.title}>INCEPTO</h1>
      </div>
    </div>
  )
}

export default Landing
