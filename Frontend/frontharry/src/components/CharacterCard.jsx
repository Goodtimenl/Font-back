import PropTypes from "prop-types";
import "./CharacterCard.css";

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <p>House: {character.house}</p>
      <p>dateOfBirth: {character.dateOfBirth}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;
