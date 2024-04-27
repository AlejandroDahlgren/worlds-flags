import './Navbar.css'

export default function Navbar() {
    return (
        <div className="Navbar-layout">
                <nav className="navbar">
                    <h3>The Flag App</h3>
                    <img src="/assets/logo.png" alt="logo" />
                    <button>Dark Mode</button>
                </nav>
        </div>
    )
}