import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle theme toggle with animation
  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
  };

  // Reset animation state after animation completes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Match this with your CSS animation duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <button
      className={`${styles.toggleButton} ${isAnimating ? styles.animate : ''}`}
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <FaMoon className={styles.icon} />
      ) : (
        <FaSun className={styles.icon} />
      )}
    </button>
  );
};

export default ThemeToggle;
