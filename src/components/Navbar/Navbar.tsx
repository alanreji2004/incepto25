import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li><a>About</a></li>
        <li><a>Schedule</a></li>
        <li><a>Sponsors</a></li>
        <li><a>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
