import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer>
      <p>© 2025 Orion Rising — {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</p>
    </footer>
  );
}
