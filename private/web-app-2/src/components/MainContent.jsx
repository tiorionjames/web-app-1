import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function MainContent() {
  const { theme } = useContext(ThemeContext);
  const style = {
    padding: '1rem',
    borderRadius: '0.5rem',
    background: theme === 'light' ? '#fff' : '#333',
    color:     theme === 'light' ? '#000' : '#fff',
    margin:    '1rem 0',
  };

  return (
    <main style={style}>
      <p>You are currently in <strong>{theme}</strong> mode.</p>
    </main>
  );
}
