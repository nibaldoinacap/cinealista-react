import { useState } from 'react';
import './App.css';
import { peliculas } from './data/peliculas.js';
import ListaPeliculas from './components/ListaPeliculas.jsx';
import FiltroClasificacion from './components/FiltroClasificacion.jsx';

function App() {
  const [filtroClasificacion, setFiltroClasificacion] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  const peliculasFiltradas = peliculas.filter(pelicula => {
    const cumpleClasificacion = filtroClasificacion === 'Todas' || pelicula.clasificacion === filtroClasificacion;
    const cumpleBusqueda = pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase().trim());
    return cumpleClasificacion && cumpleBusqueda;
  });

  // Calcula el número de películas con función hoy
  const peliculasHoyCount = peliculas.filter(p => p.funcionHoy).length;

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value.slice(0, 50)); 
  };

  return (
    <>
      <h1>CineLista React</h1>

      {/* Muestra el contador de películas para hoy */}
      <div className="contador-hoy">
        Películas en cartelera hoy: <strong>{peliculasHoyCount}</strong>
      </div>

      <div className="filtros-container">
        <FiltroClasificacion onFiltroChange={setFiltroClasificacion} />
        <div className="busqueda-titulo">
          <input
            type="text"
            placeholder="Buscar por título..."
            value={busqueda}
            onChange={handleBusquedaChange}
          />
        </div>
      </div>

      {peliculasFiltradas.length > 0 ? (
        <ListaPeliculas peliculas={peliculasFiltradas} />
      ) : (
        <p>No hay películas que coincidan con los filtros seleccionados.</p>
      )}
    </>
  );
}

export default App;