import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

    return (
        <header className="header">
            <div>Logo</div>
            <nav>
                <MenuIcon />
                <ul className="header__list">
                    <a href='#about'>About</a>
                    <a href='#Projects'>Projects</a>
                    <a href='#Languages'>Languages</a>
                </ul>
            </nav>
        </header>
    )
}

export { Header };