import { useState } from 'react'
import reactLogo from './assets/react.svg'
import linkedInLogo from './assets/linkedin.svg'
import mediumLogo from './assets/medium.svg'
import githubLogo from './assets/github.svg'
import blueskyLogo from './assets/bluesky.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Header />
      <footer>
        <a href="https://linkedin.com/in/ericness" target="_blank">
          <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://medium.com/@ericness" target="_blank">
          <img src={mediumLogo} className="logo" alt="Medium logo" />
        </a>
        <a href="https://github.com/ericness" target="_blank">
          <img src={githubLogo} className="logo" alt="GitHub logo" />
        </a>
        <a href="https://blueskydigital.io" target="_blank">
          <img src={blueskyLogo} className="logo" alt="Blue Sky Digital logo" />
        </a>
      </footer>
    </>
  )
}

export default App
