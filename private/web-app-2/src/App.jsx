import React, { useState, useContext, useEffect } from 'react'
import orion_logo from '/orion_logo.png'
import ThemeContext from './context/ThemeContext'
import Clock from './components/Clock.jsx';
import JokeFetcher from './components/JokeFetcher.jsx';
import Footer from './components/Footer'
import './App.css'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [unreadCount, setUnreadCount] = useState(0);
  useEffect(() => {
    document.title = `Inbox (${unreadCount})`;
  }, [unreadCount]);
  const [name] = useState('Orion')
  const [count, setCount] = useState(0)
  const [showBio, setShowBio] = useState(false)
  const bioText = 'Dad Jokes. Gaming. Coding. Professional Napping Instructor.'
  const [hobbies, setHobbies] = useState(['Gaming', 'Coding'])
  const removeHobby = idx =>
    setHobbies(hobbies.filter((_, i) => i !== idx))
  const [newHobby, setNewHobby] = useState('')
  const handleAddHobby = e => {
    e.preventDefault()
    const hobby = newHobby.trim()
    if (hobby) {
      setHobbies([...hobbies, hobby])
      setNewHobby('')
    }
  }

  return (
    <div className={`App ${theme}`}>
      <header>
        <a
          href="https://orionrising.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={orion_logo}
            className="logo"
            alt="Orion Rising logo"
          />
        </a>
        <p><h1>Orion Rising</h1></p>
      </header>

      <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      <section>
        <h2>Hello, {name}!</h2>
      </section>

      <section>
        <Clock />
      </section>

      <section>
        <h2>You have {unreadCount} unread {unreadCount === 1 ? 'message' : 'messages'}</h2>
      </section>

      <section>
        <JokeFetcher />
      </section>



      <section>
        <h3>Click Counter</h3>
        <button onClick={() => setCount(c => c + 1)}>
          You’ve clicked {count} {count === 1 ? 'time' : 'times'}
        </button>
      </section>

      <section>
        <h3>Bio</h3>
        <button onClick={() => setShowBio(v => !v)}>
          {showBio ? 'Hide' : 'Show'} Bio
        </button>
        {showBio && <p>{bioText}</p>}
      </section>

      <section>
        <h3>My Hobbies</h3>
        <ul>
          {hobbies.map((hobby, idx) => (
            <li key={idx}>
              {hobby}{' '}
              <button
                onClick={() => removeHobby(idx)}
                style={{ marginLeft: '0.5rem' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Add a Hobby</h3>
        <form onSubmit={handleAddHobby}>
          <input
            type="text"
            value={newHobby}
            onChange={e => setNewHobby(e.target.value)}
            placeholder="e.g., Underwater Basket Weaving"
          />
          <button type="submit">Add</button>
        </form>
      </section>

      <Footer />
    </div>
  )
}

export default App
