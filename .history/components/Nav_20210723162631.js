import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav = () => {
    <nav> className={navStyles.nav}
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/'>About</Link>
            </li>
        </ul>
    </nav>
}

export default Nav;