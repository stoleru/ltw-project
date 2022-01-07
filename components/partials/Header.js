import Link from "next/link"
import styles from '../../styles/Home.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/">
              <a>Notes</a>
            </Link>
          </li>
          <li>
            <Link href="/add-notes">
              <a>Add Note</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;