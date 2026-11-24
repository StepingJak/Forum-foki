import { Card } from "./Card"
export function Main(props) {
  console.log("Dane w Main:", props.sealData)
  return (
    <main>
      {props.sealData.map((foka, index) => (
        <Card key={index} nazwa={foka[0]} opis={foka[1]} zdjecie={foka[2]}/>
      ))}
    </main>
  )
}