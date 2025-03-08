import React, { useState } from 'react'
import './App.css'
import ImageCard from './components/ImageCard'
import SelectedImageView from './components/SelectedImageView'
import IntroView from './components/IntroView'
import logo from './assets/logo.svg'
import vsIcon from './assets/vs-icon.svg'
import background from './assets/background.png'

// 테스트용 이미지 데이터 배열
const initialImages = [
  {
    id: 1,
    url: '/candidates/1.png',
    title: '배금주의',
    description: '화폐전시관, 율곡로3139번길, 강원특별자치도 강릉시',
    location: { lat: 37.779241, lng: 128.879846 }
  },
  {
    id: 2,
    url: '/candidates/2.png',
    title: '성돌이',
    description: '초도마을, 강원특별자치도 고성군 현내면 초도리 13-2',
    location: { lat: 38.484925, lng: 128.438323 }
  },
  {
    id: 3,
    url: '/candidates/3.png',
    title: '미래로의 비상',
    description: '인천공항 1여객터미널, 영종해안남로 중구 인천광역시',
    location: { lat: 37.444044, lng: 126.465183 }
  },
  {
    id: 4,
    url: '/candidates/4.png',
    title: '네발상어',
    description: '금수아파트 버스정류장, 부산광역시 동구 초량동 851-2',
    location: { lat: 35.118716, lng: 129.030094 }
  },
  {
    id: 5,
    url: '/candidates/5.png',
    title: '증평인삼상징탑',
    description: '충북 증평군 반탄교 앞, 증평읍 연탄리 903-18',
    location: { lat: 36.78355, lng: 127.572753 }
  },
  {
    id: 6,
    url: '/candidates/6.png',
    title: '그대가 꽃',
    description: '목원동 차 없는 거리, 전라남도 목포시 영산로75번길 26-1',
    location: { lat: 34.791697, lng: 126.384017 }
  },
  {
    id: 7,
    url: '/candidates/7.jpg',
    title: '人面蝴蝶 (인면나비)',
    description: '新竹市 新埔鎮旱坑路一段山壁上',
    location: { lat: 24.831472, lng: 121.07441 }
  },
  {
    id: 8,
    url: '/candidates/8.jpg',
    title: '虱目魚小子 (샤무어샤오쯔)',
    description: '台南市 北門虱目魚小鎮',
    location: { lat: 23.27016, lng: 120.126503 }
  }
]

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [images, setImages] = useState(initialImages)
  const [round, setRound] = useState(1) // 1: 8강, 2: 4강, 3: 결승
  const [selectedImages, setSelectedImages] = useState([])
  const [currentPair, setCurrentPair] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleStart = () => {
    setIsStarted(true)
  }

  const handleSelect = (image) => {
    if (round === 3) {  // 결승전인 경우
      setImages([image])  // 바로 최종 이미지 설정
      setRound(4)  // 결과 화면으로 이동
    } else {
      setSelectedImage(image)  // 기존처럼 중간 리뷰 화면으로
    }
  }

  const handleNext = () => {
    // 먼저 새로운 selectedImages 배열 생성
    const newSelectedImages = [...selectedImages, selectedImage]
    
    if (currentPair + 2 >= images.length) {
      // 현재 라운드의 모든 선택이 완료됨
      setImages(newSelectedImages)  // 선택된 이미지들로 새 라운드 시작
      setSelectedImages([])
      setCurrentPair(0)
      setRound(round + 1)
    } else {
      setSelectedImages(newSelectedImages)  // 다음 페어로 넘어갈 때 선택된 이미지 업데이트
      setCurrentPair(currentPair + 2)
    }
    setSelectedImage(null)
  }

  // LogoHeader 컴포넌트에 스타일 적용
  const LogoHeader = () => (
    <div className="logo-container" style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} alt="공공소공물 eight" className="logo" />
    </div>
  )

  if (!isStarted) {
    return (
      <>
        <LogoHeader />
        <IntroView onStart={handleStart} />
      </>
    )
  }

  if (selectedImage) {
    return (
      <>
        <LogoHeader />
        <SelectedImageView 
          image={selectedImage.url} 
          title={selectedImage.title}
          description={selectedImage.description}
          location={selectedImage.location}
          onNext={handleNext} 
        />
      </>
    )
  }

  if (round > 3) {
    return (
      <>
        <LogoHeader />
        <div className="final-result">
          <h2>최종 선택된 이미지</h2>
          <div className="final-image">
            <ImageCard 
              image={images[0].url}
              title={images[0].title}
              description={images[0].description}
              location={images[0].location}
              onClick={() => {}}
            />
          </div>
        </div>
      </>
    )
  }

  const pair = images.slice(currentPair, currentPair + 2)

  return (
    <>
      <LogoHeader />
      <div className="tournament-container">
        <h1>
          {round === 1 ? '8강' : round === 2 ? '4강' : '결승'}
          {' 라운드'}
        </h1>
        <div className="image-pair">
          {pair.map((image) => (
            <ImageCard
              key={image.id}
              image={image.url}
              title={image.title}
              description={image.description}
              location={image.location}
              onClick={() => handleSelect(image)}
            />
          ))}
          <div className="vs-text">
            <img src={vsIcon} alt="VS" className="vs-icon" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App 