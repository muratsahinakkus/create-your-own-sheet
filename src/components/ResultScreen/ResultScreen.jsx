import './ResultScreen.css'

function RestartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3v5h5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ResultScreen({ selections, onRestart }) {
  return (
    <div className="result-screen">
      <img
        src={selections.character.sheetPath}
        alt=""
        className="result-screen__sheet"
        onError={(e) => { e.target.style.display = 'none' }}
        draggable="false"
      />
      {/* Fallback placeholder shown when no image */}
      <div className="result-screen__placeholder" aria-hidden="true">
        <div className="result-screen__placeholder-inner" />
      </div>
      <button className="result-screen__restart" onClick={onRestart} aria-label="Restart">
        <RestartIcon />
      </button>
    </div>
  )
}
