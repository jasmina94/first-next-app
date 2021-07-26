import headerStyles from '../styles/Header.module.css';

const Header = () => {
    const x = 10
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span>News
            </h1>
        </div>
    )
}

export default Header;