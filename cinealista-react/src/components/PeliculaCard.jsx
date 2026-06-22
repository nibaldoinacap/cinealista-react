import PropTypes from 'prop-types';
import './PeliculaCard.css';

// Recibe la nueva prop 'funcionHoy'
function PeliculaCard({ titulo, genero, duracion, clasificacion, sinopsis, horarios, funcionHoy }) {

  // Función para obtener la clase CSS correcta según la clasificación
  const getClasificacionClass = () => {
    if (clasificacion === 'TE') return 'tag-te';
    if (clasificacion === '+14') return 'tag-14';
    if (clasificacion === '+18') return 'tag-18';
    return ''; // Retorna una cadena vacía si no coincide
  };

  // Combina la clase base con la clase condicional si 'funcionHoy' es true
  const cardClasses = `pelicula-card ${funcionHoy ? 'funcion-hoy' : ''}`;

  return (
    <div className={cardClasses}>
      {/* Etiqueta de clasificación con estilo dinámico */}
      <div className={`clasificacion-tag ${getClasificacionClass()}`}>
        {clasificacion}
      </div>

      <h3>{titulo}</h3>
      <p><strong>Género:</strong> {genero}</p>
      <p><strong>Duración:</strong> {duracion} min.</p>
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
  funcionHoy: PropTypes.bool.isRequired, // Se añade la validación para la nueva prop
};

export default PeliculaCard;