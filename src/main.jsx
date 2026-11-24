import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const sealData = [
  ["Szarytka morska", "Najbardziej pospolita foka w bałtyku, z bardzo charakterystycznym nosem!", "img/grey_seal.jpg"],
  ["Krabojad foczy", "Szacuje się że ich populacja znajduje się w zakresie od 5mln do nawet 75mln!", "img/crabeater_seal.jpg"],
  ["Foka pospolita", "Gotowe są do pływania już od urodzenia!", "img/harbour_seal.jpg"],
  ["Nerpa obrączkowana", "Najmniejsza z wszystkich gatunków fok!", "img/ringed_seal.jpg"],
  ["Weddelka arktyczna", "Nazwana po własnym odkrywcy, James'ie Weddlu!", "img/weddel_seal.jpg"],
  ["Foczka mała", "Ich oczy są ogromne w porównaniu do reszty ciała!", "img/ross_seal.jpg"],
  ["Mors arktyczny", "Mimo swojej ogromnej wagi, potrafią pływać nawet do 35km/h!", "img/artctic_walrus.jpg"],
  ["Otarka australijska", "Najmniej pospolity płetwonogi w Australii, jednocześnie jej jedyny rodziny gatunek płetwonogi!", "img/australlian_lion.jpg"],
  ["Mirunga", "Zwane też słoniami morskimi, noworodki potrafią ważyć nawet 50kg!", "img/elephant_seal.jpg"],
  ["Amfitryta lampardzka", "Mistrzowie polowania, samotni łowcy i szczytowi drapieżnicy antarktyki!", "img/leopard_seal.jpg"]

]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App sealData={sealData} />
  </StrictMode>,
)
