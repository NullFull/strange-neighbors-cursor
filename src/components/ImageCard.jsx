import React from 'react'
import { motion } from 'framer-motion'
import MiniMap from './MiniMap'
import './ImageCard.css'

function ImageCard({ image, title, description, location, onClick }) {
  return (
    <motion.div
      className="image-card-wrapper"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="image-card">
        <div className="image-container">
          <img src={image} alt={title || "tournament"} />
          <MiniMap location={location} />
        </div>
        {(title || description) && (
          <div className="image-info">
            {title && <h3 className="image-title">{title}</h3>}
            {description && <p className="image-description">{description}</p>}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ImageCard 