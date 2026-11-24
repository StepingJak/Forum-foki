import './App.css'
import { useState } from 'react'
import { Header } from './Header'
function App() {
  const [mode, setMode] = useState(true)
  function ChangeMode() {
    if(mode) {
      setMode(false)
    } else {
      setMode(true)
    }
  }
  return (
  <>
    <head>

    </head>
    <body className={mode ? "light" : "dark"}>
      <Header mode={mode} setMode={ChangeMode}/>
    </body>
  </>
  )
}

export default App
