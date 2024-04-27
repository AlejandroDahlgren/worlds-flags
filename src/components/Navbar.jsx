import './Navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <div className="Navbar-layout">
            <nav className="navbar">
                <h3 className='title'>The Flag App</h3>
                <img className='logo' src={logo} alt="Logo" />
                <button className='continent-button'>Dark Mode</button>
            </nav>
            <div className='search'>
                <form className='search-bar' action="">Search for a country</form>
                <div className='region-search'>Region</div>
            </div>
        </div>
    );
}