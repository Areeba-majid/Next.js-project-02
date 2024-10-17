import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.link}><Link href="/">Home</Link></li>
                    <li className={styles.link}><Link href="/about">About</Link></li>
                    <li className={styles.link}><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
