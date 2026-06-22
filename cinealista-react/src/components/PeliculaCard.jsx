import PropTypes from 'prop-types';

// Componente para mostrar la información de una sola película
function PeliculaCard({ titulo, genero, duracion, clasificacion, sinopsis, horarios }) {
  return (
    <div className="pelicula-card">
      <h3>{titulo}</h3>
      <p><strong>Género:</strong> {genero}</p>
      <p><strong>Duración:</strong> {duracion} min.</p>
      <p><strong>Clasificación:</strong> {clasificacion}</p>
      <p>{sinopsis}</p>
      <p><strong>Horarios:</strong> {horarios.join(', ')}</p>
    </div>
  );
}

// Definición de PropTypes para validar las props del componente
PeliculaCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  genero: PropTypes.string.isRequired,
  duracion: PropTypes.number.isRequired,
  clasificacion: PropTypes.string.isRequired,
  sinopsis: PropTypes.string.isRequired,
  horarios: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PeliculaCard;