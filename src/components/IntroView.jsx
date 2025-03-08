import React from 'react'
import { motion } from 'framer-motion'
import './IntroView.css'

function IntroView({ onStart }) {
  return (
    <div className="intro-page">
      <motion.div 
        className="intro-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>공공조흉물 월드컵</h1>
        <p>가장 마음에 드는 조형물을 선택해주세요!</p>
        <p className="description">
          총 8장의 이미지 중에서<br />
          토너먼트 방식으로 진행되어<br />
          최종 1장의 이미지를 선택하게 됩니다.
        </p>
        <button className="button start-button" onClick={onStart}>
          시작하기
        </button>
      </motion.div>
    </div>
  )
}

export default IntroView 