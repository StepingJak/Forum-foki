export function ButtonMessage() {
  function IntroduceYourself() {
    const name = prompt("Jak się nazywasz?");
    if(name) {
      localStorage.setItem("name", name);
    }
  }
  return (
    <button onClick={IntroduceYourself}>Przedstaw się!</button>
  )
}