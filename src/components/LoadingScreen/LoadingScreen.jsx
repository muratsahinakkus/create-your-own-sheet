import { useEffect, useState } from 'react'
import SelectionCard from '../SelectionCard/SelectionCard.jsx'
import './LoadingScreen.css'

export default function LoadingScreen({ selections }) {
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    // One frame delay so the CSS transition actually plays
    const id = requestAnimationFrame(() => setAnimating(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const previews = [selections.character, selections.location, selections.activity]

  return (
    <div className={`loading-screen ${animating ? 'loading-screen--animating' : ''}`}>
      <div className="loading-screen__previews">
        {previews.map((item) => (
          <div key={item.id} className="loading-screen__preview-wrap">
            <SelectionCard item={item} onSelect={() => {}} index={0} size="small" />
          </div>
        ))}
      </div>
      <div className="loading-bar-track">
        <div className={`loading-bar-fill ${animating ? 'loading-bar-fill--animating' : ''}`} />
      </div>
    </div>
  )
}
