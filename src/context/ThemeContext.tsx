import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Define the theme types
type Theme = 'light' | 'dark';

// Define the context type
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create the context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Props for the provider component
type ThemeProviderProps = {
  children: ReactNode;
};

// Provider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Get the saved theme from localStorage or use default
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Update the document with the selected theme
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme', theme);

    // Apply the theme to the document
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
