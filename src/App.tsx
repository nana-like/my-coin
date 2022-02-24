import { useState } from 'react'
import "@adorable.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="p(10/20) m(10/20/30/40)">
        <p>Hello Vite + React!</p>
        <p>
          <button className="hover:bg(red) focus:ring(blue) .isSelected:underline mobile:vbox" type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
