import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../ui/ThemeToggle';
import ColorSchemePicker from '../ui/ColorSchemePicker';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" onClick={closeMenu}>
            <h1>Nexark Studio</h1>
          </Link>
        </div>

        <div className={styles.mobileMenuToggle}>
          <button 
            onClick={toggleMenu} 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/services" 
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          
          <div className={styles.controls}>
            <ColorSchemePicker />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
