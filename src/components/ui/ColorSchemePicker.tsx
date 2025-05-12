import { useState } from 'react';
import { FaPalette } from 'react-icons/fa';
import { useColorScheme } from '../../context/ColorSchemeContext';
import type { ColorScheme } from '../../context/ColorSchemeContext';
import styles from './ColorSchemePicker.module.css';

// Color scheme options with their display names and colors
const colorSchemeOptions = [
  {
    id: 'teal-coral',
    name: 'Teal & Coral',
    primary: '#0d6e6e',
    secondary: '#e56b6f',
    accent: '#eeba0b'
  },
  {
    id: 'purple-orange',
    name: 'Purple & Orange',
    primary: '#7c3aed',
    secondary: '#f97316',
    accent: '#10b981'
  },
  {
    id: 'blue-amber',
    name: 'Blue & Amber',
    primary: '#2563eb',
    secondary: '#f59e0b',
    accent: '#ec4899'
  },
  {
    id: 'green-pink',
    name: 'Green & Pink',
    primary: '#059669',
    secondary: '#ec4899',
    accent: '#6366f1'
  },
  {
    id: 'indigo-red',
    name: 'Indigo & Red',
    primary: '#4f46e5',
    secondary: '#ef4444',
    accent: '#0ea5e9'
  },
  {
    id: 'slate-emerald',
    name: 'Slate & Emerald',
    primary: '#475569',
    secondary: '#10b981',
    accent: '#f43f5e'
  }
];

const ColorSchemePicker = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle color scheme selection
  const handleSelectScheme = (scheme: ColorScheme) => {
    setColorScheme(scheme);
    setIsOpen(false);
  };

  // Find the current color scheme
  const currentScheme = colorSchemeOptions.find(scheme => scheme.id === colorScheme);

  return (
    <div className={styles.container}>
      <button
        className={styles.toggleButton}
        onClick={toggleDropdown}
        aria-label="Select color scheme"
        aria-expanded={isOpen}
      >
        <FaPalette className={styles.paletteIcon} />
        <span className={styles.currentSchemeDot} style={{ backgroundColor: currentScheme?.primary }}></span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <h3>Color Schemes</h3>
          </div>
          <div className={styles.schemeList}>
            {colorSchemeOptions.map((scheme) => (
              <button
                key={scheme.id}
                className={`${styles.schemeOption} ${scheme.id === colorScheme ? styles.active : ''}`}
                onClick={() => handleSelectScheme(scheme.id as ColorScheme)}
                aria-label={`Select ${scheme.name} color scheme`}
              >
                <div className={styles.schemeColors}>
                  <span className={styles.schemeColor} style={{ backgroundColor: scheme.primary }}></span>
                  <span className={styles.schemeColor} style={{ backgroundColor: scheme.secondary }}></span>
                  <span className={styles.schemeColor} style={{ backgroundColor: scheme.accent }}></span>
                </div>
                <span className={styles.schemeName}>{scheme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorSchemePicker;
