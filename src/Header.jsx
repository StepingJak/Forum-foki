export function Header({mode, setMode}) {
  return (
    <header>
      <h1>Fokowisko</h1>
      <h2>Foki, fokowate i inne płetwonogie</h2>
      <button onClick={setMode} id="btnChangeMode">Tryb {mode ? "ciemny" : "jasny"}</button>
    </header>
  )
}