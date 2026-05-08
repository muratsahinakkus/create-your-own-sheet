import { useState } from 'react'
import './SelectionCard.css'

function PlaceholderShape({ shape }) {
  return <div className={`shape shape--${shape}`} aria-hidden="true" />
}

export default function SelectionCard({ item, onSelect, index, size = 'normal' }) {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <button
      className={`selection-card selection-card--${size}`}
      data-transparent={item.placeholderColor === 'transparent' || undefined}
      style={{
        backgroundColor: item.placeholderColor,
        animationDelay: `${index * 60}ms`,
      }}
      onClick={() => onSelect(item)}
      aria-label={item.id}
    >
      <PlaceholderShape shape={item.placeholderShape} />
      <img
        src={item.imagePath}
        alt=""
        className={`selection-card__img ${imgLoaded ? 'selection-card__img--loaded' : ''}`}
        onLoad={() => setImgLoaded(true)}
        onError={(e) => { e.target.style.display = 'none' }}
        draggable="false"
      />
    </button>
  )
}
