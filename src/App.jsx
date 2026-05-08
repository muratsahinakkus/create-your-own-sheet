import { useState, useEffect } from 'react'
import { ALL_STEPS } from './data/selections.js'
import SelectionGrid from './components/SelectionGrid/SelectionGrid.jsx'
import ProgressDots from './components/ProgressDots/ProgressDots.jsx'
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx'
import ResultScreen from './components/ResultScreen/ResultScreen.jsx'

const STEP_KEYS = ['character', 'location', 'activity']
// Steps 0-2: selection screens  |  3: loading  |  4: result

const emptySelections = { character: null, location: null, activity: null }

const selectSound = new Audio(import.meta.env.BASE_URL + 'sounds/select.mp3')
selectSound.preload = 'auto'

export default function App() {
  const [stepIndex, setStepIndex] = useState(0)
  const [selections, setSelections] = useState(emptySelections)

  // Advance from loading → result after 3 seconds
  useEffect(() => {
    if (stepIndex !== 3) return
    const timer = setTimeout(() => setStepIndex(4), 3000)
    return () => clearTimeout(timer)
  }, [stepIndex])

  function handleSelect(item) {
    selectSound.currentTime = 0
    selectSound.play().catch(() => {})
    const key = STEP_KEYS[stepIndex]
    setSelections((prev) => ({ ...prev, [key]: item }))
    setStepIndex((s) => s + 1)
  }

  function handleRestart() {
    setSelections(emptySelections)
    setStepIndex(0)
  }

  const isSelectionStep = stepIndex >= 0 && stepIndex <= 2

  return (
    <div className="app">
      {isSelectionStep && (
        <>
          <ProgressDots currentStep={stepIndex} />
          <SelectionGrid
            key={STEP_KEYS[stepIndex]}
            items={ALL_STEPS[stepIndex]}
            onSelect={handleSelect}
          />
        </>
      )}
      {stepIndex === 3 && <LoadingScreen selections={selections} />}
      {stepIndex === 4 && (
        <ResultScreen selections={selections} onRestart={handleRestart} />
      )}
    </div>
  )
}
