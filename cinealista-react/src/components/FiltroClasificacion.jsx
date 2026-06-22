import PropTypes from 'prop-types';
import './FiltroClasificacion.css';

function FiltroClasificacion({ onFiltroChange }) {
  const clasificaciones = ["Todas", "TE", "+14", "+18"];

  return (
    <div className="filtro-clasificacion">
      <span>Filtrar por clasificación: </span>
      {clasificaciones.map(cl => (
        <button key={cl} onClick={() => onFiltroChange(cl)}>
          {cl}
        </button>
      ))}
    </div>
  );
}

FiltroClasificacion.propTypes = {
  onFiltroChange: PropTypes.func.isRequired,
};

export default FiltroClasificacion;