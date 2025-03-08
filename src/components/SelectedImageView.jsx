import React from 'react'
import { motion } from 'framer-motion'
import MiniMap from './MiniMap'
import './SelectedImageView.css'

function SelectedImageView({ image, title, description, location, onNext }) {
  return (
    <div className="selected-image-page">
      <motion.div 
        className="selected-image-container"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="image-container">
          <img src={image} alt={title || "선택된 이미지"} />
          <MiniMap location={location} />
        </div>
        {(title || description) && (
          <div className="image-info">
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
          </div>
        )}
      </motion.div>
      <motion.button
        className="button next-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={onNext}
      >
        다음 라운드로
      </motion.button>
    </div>
  )
}

export default SelectedImageView 