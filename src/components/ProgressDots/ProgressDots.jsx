import './ProgressDots.css'

const STEP_COLORS = ['#60A5FA', '#34D399', '#FBBF24']

export default function ProgressDots({ currentStep }) {
  return (
    <div className="progress-dots" aria-hidden="true">
      {STEP_COLORS.map((color, i) => {
        const isDone = i < currentStep
        const isActive = i === currentStep
        return (
          <div
            key={i}
            className={`progress-dot ${isActive ? 'progress-dot--active' : ''} ${isDone ? 'progress-dot--done' : ''}`}
            style={{ '--dot-color': color }}
          />
        )
      })}
    </div>
  )
}
