import { ButtonMessage } from "./BtnMsg";
export function Header({mode, setMode}) {
  const funFacts = [
    "W każdym rozmiarze i kształcie",
    "Blisko związane z niedźwiedziami i skunksami",
    "Wyjątkowo rozmowne",
    "Kochające wode",
    "Woda zimna > woda ciepła"
  ]
  let funFact =  funFacts[Math.floor(Math.random() * funFacts.length)];
  let givenName = localStorage.getItem("name");
  if(givenName) {
    givenName = "Witaj ponownie, " + givenName;
  }
  return (
    <header>
      <h1>Fokowisko</h1>
      <h2>Foki, fokowate i inne płetwonogie</h2>
      <h2>{funFact}</h2>
      <table>
        <tr>
          <td><ButtonMessage/></td>
          <td><button onClick={setMode} id="btnChangeMode">Tryb {mode ? "ciemny" : "jasny"}</button></td>
        </tr>
        <tr>
          <td colSpan={2}>{givenName}</td>
        </tr>
      </table>
    </header>
  )
}