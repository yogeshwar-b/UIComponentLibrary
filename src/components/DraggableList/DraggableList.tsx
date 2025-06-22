import React, { useState, useRef } from 'react'
import './DraggableList.css'

const DraggableList = ({ children }: { children: React.ReactNode }) => {
  const initialItems = React.Children.toArray(children)
  const [items, setItems] = useState(initialItems)
  const dragItem = useRef<number>(-1)
  const dragOverItem = useRef<number>(-1)

  const handleDragStart = (index: number) => {
    dragItem.current = index
  }

  const handleDragEnter = (index: number) => {
    dragOverItem.current = index
  }

  const handleDragEnd = () => {
    const from = dragItem.current
    const to = dragOverItem.current
    if (from !== -1 && to !== -1 && from !== to) {
      const updatedItems = [...items]
      const [removed] = updatedItems.splice(from, 1)
      updatedItems.splice(to, 0, removed)
      setItems(updatedItems)
    }
    dragItem.current = -1
    dragOverItem.current = -1
  }

  return (
    <div>
      <h1>Draggable List Component</h1>
      <div>
        {items.map((child, idx) => (
          <div
            key={idx}
            draggable
            onDragStart={() => handleDragStart(idx)}
            onDragEnter={() => handleDragEnter(idx)}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => e.preventDefault()}
            className='draggable-item'
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DraggableList
