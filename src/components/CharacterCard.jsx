import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "motion/react"


const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "alive": return "#66fcf1"; // Neon Cyan
    case "dead": return "#ff4c4c"; // Red
    default: return "#f1c40f"; // Yellow for Unknown
  }
};


const CharacterCard = ({ character }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/character/${character.id}`} className="character-card">
        <motion.img
          src={character.image}
          alt={character.name}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <h2>{character.name}</h2>
        
        {/* Status Badge */}
        <span className="badge" style={{ backgroundColor: getStatusColor(character.status) }}>
          {character.status}
        </span>

      </Link>
    </motion.div>
  )
};

export default CharacterCard;