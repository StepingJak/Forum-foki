import './App.css'
import { useState } from 'react'
import { Header } from './Header'
import { Main } from './MainBody'
function App(props) {
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
    <div className={mode ? "light" : "dark"}>
      <Header mode={mode} setMode={ChangeMode}/>
      <Main sealData={props.sealData}></Main>
    </div>
  </>
  )
}

export default App
