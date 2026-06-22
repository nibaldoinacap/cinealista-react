import './App.css'
import { peliculas } from './data/peliculas.js'
import PeliculaCard from './components/PeliculaCard.jsx'

function App() {
  // Tomamos la primera película del array para probar
  const peliculaDePrueba = peliculas[0];

  return (
    <>
      <h1>CineLista React</h1>
      <PeliculaCard
        titulo={peliculaDePrueba.titulo}
        genero={peliculaDePrueba.genero}
        duracion={peliculaDePrueba.duracion}
        clasificacion={peliculaDePrueba.clasificacion}
        sinopsis={peliculaDePrueba.sinopsis}
        horarios={peliculaDePrueba.horarios}
      />
    </>
  )
}

export default App