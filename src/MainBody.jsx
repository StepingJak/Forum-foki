import { useState } from 'react'
import { Card } from "./Card"

export function Main(props) {
  const [search, setSearch] = useState("")

  const searchedSeals = props.sealData.filter((foka) =>
    foka[0].toLowerCase().includes(search.toLowerCase())
  )
  return (
    <main>
      <input type="text" placeholder="Szukaj..." value={search}onChange={(e) => setSearch(e.target.value)}/>
      <div id="sealContainer">
      {searchedSeals.map((foka, index) => (
        <Card key={index} nazwa={foka[0]} opis={foka[1]} zdjecie={foka[2]}/>
      ))}
      </div>
    </main>
  )
}