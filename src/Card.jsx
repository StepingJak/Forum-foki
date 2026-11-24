export function Card(props) {
  return (
    <div className="card">
      <img
        src={props.zdjecie} alt={props.nazwa}/>

      <div>
        <h3>{props.nazwa}</h3>
        <p>{props.opis}</p>
      </div>
    </div>
  )
}