import PeliculaCard from './PeliculaCard';
import PropTypes from 'prop-types';

function ListaPeliculas({ peliculas }) {
  return (
    <div className="lista-peliculas">
      {peliculas.map(pelicula => (
        <PeliculaCard
          key={pelicula.id} // Prop 'key' es crucial para React
          titulo={pelicula.titulo}
          genero={pelicula.genero}
          duracion={pelicula.duracion}
          clasificacion={pelicula.clasificacion}
          sinopsis={pelicula.sinopsis}
          horarios={pelicula.horarios}
          funcionHoy={pelicula.funcionHoy} // Se pasa la prop funcionHoy
        />
      ))}
    </div>
  );
}

ListaPeliculas.propTypes = {
  peliculas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListaPeliculas;