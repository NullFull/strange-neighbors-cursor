import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './MiniMap.css'
import L from 'leaflet'

// Leaflet 기본 아이콘 문제 해결
delete L.Icon.Default.prototype._getIconUrl

// 심플한 마커 아이콘 생성
const simpleIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iOCIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
})

function MiniMap({ location }) {
  if (!location) return null

  return (
    <div className="mini-map">
      <MapContainer 
        center={[location.lat, location.lng]} 
        zoom={13} 
        zoomControl={false}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          // 또는 더 심플한 버전을 원한다면:
          // url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]} icon={simpleIcon} />
      </MapContainer>
    </div>
  )
}

export default MiniMap 