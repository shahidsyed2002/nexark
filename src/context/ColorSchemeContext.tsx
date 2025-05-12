import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Define the available color schemes
export type ColorScheme = 'teal-coral' | 'purple-orange' | 'blue-amber' | 'green-pink' | 'indigo-red' | 'slate-emerald';

// Define the context type
type ColorSchemeContextType = {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
};

// Create the context with default values
const ColorSchemeContext = createContext<ColorSchemeContextType>({
  colorScheme: 'teal-coral',
  setColorScheme: () => {},
});

// Custom hook to use the color scheme context
export const useColorScheme = () => useContext(ColorSchemeContext);

// Props for the provider component
type ColorSchemeProviderProps = {
  children: ReactNode;
};

// Provider component
export const ColorSchemeProvider = ({ children }: ColorSchemeProviderProps) => {
  // Get the saved color scheme from localStorage or use default
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    const savedScheme = localStorage.getItem('color-scheme');
    return (savedScheme as ColorScheme) || 'teal-coral';
  });

  // Update the document with the selected color scheme
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('color-scheme', colorScheme);

    // Apply the color scheme to the document
    document.documentElement.setAttribute('data-color-scheme', colorScheme);
  }, [colorScheme]);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeContext;
