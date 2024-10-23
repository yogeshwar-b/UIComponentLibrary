import React, { useState } from 'react'

const fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Mango',
  'Grapes',
  'Pineapple',
  'Strawberry',
  'Blueberry',
  'Kiwi',
  'Watermelon'
]

const MultiSelect = () => {
  const [selectState, handleSelectState] = useState([])

  return (
    <div>
      <div>This is MultiSelect</div>
      <select
        name='FruitSelect'
        id='FruitSelectId'
        onChange={(e) => {
          var items = Array.from(e.target.selectedOptions)
          console.log(
            'something changed',
            items.map((i) => {
              return i.value
            })
          )
        }}
        multiple
      >
        {fruits.map((f) => {
          return <option value={`${f}`}>{f}</option>
        })}
      </select>
    </div>
  )
}

export default MultiSelect
