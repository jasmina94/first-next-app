import styles from '../styles/Layout.module.css'
import Nav from './Nav';
const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Hello</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;