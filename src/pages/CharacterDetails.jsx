import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import useCharacterFetch from '../hooks/useCharacterFetch';
import Loader from '../components/Loader';
import { motion } from 'motion/react';
import Spinner from '../components/Spinner';

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "alive": return "#66fcf1"; // Neon Cyan
    case "dead": return "#ff4c4c"; // Red
    default: return "#f1c40f"; // Yellow for Unknown
  }
};


const CharacterDetails = () => {

  const { id } = useParams();
  const { character, loading, error } = useCharacterFetch(id);
  const [showSpinner, setShowSpinner] = useState(true);

  // Ensure spinner is visible for at least 1 second
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowSpinner(false), 500);
      return () => clearTimeout(timer);
    } else {
      setShowSpinner(true);
    }
  }, [loading]);

  if (showSpinner) return <div className="container"><Spinner /></div>;
  if (error) return <p>Error: {error}</p>;
  if (!character) return <p>No character found</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      {/* Show Character Details */}
      <div className='character-details'>
        <motion.img
          src={character.image}
          alt={character.name}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1>{character.name}</h1>
        {/* Status Badge */}
        <span className="badge" style={{ backgroundColor: getStatusColor(character.status) }}>
          {character.status}
        </span>


        {/* Additional Badges */}
        <div className="badge-container">
          <span className="badge badge-secondary">{character.species}</span>
          <span className="badge badge-secondary">{character.gender}</span>
          <span className="badge badge-secondary">{character.origin.name}</span>
        </div>

        <br />

        <p><strong>Current Location:</strong> {character.location.name}</p>
        <p><strong>Episodes Appeared In:</strong> {character.episode.length}</p>
        <Link to='/'>
          <button>Back to Home</button>
        </Link>
      </div>
    </motion.div>

  )
}

export default CharacterDetails