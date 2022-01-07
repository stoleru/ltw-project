import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
        
          Project done by <strong>&nbsp;Andrei Stoleru&nbsp;</strong> and Powered by{' '}
          <strong>
            <span className={styles.logo}>
              NextJS
            </span>
          </strong>
        
      </footer>
    )
}

export default Footer;