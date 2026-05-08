import SelectionCard from '../SelectionCard/SelectionCard.jsx'
import './SelectionGrid.css'

export default function SelectionGrid({ items, onSelect }) {
  return (
    <div className="selection-grid">
      {items.map((item, index) => (
        <SelectionCard
          key={item.id}
          item={item}
          onSelect={onSelect}
          index={index}
        />
      ))}
    </div>
  )
}
