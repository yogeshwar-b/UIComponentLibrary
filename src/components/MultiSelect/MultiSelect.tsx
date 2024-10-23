import React, { useState } from 'react'
import './MultiSelect.css'
interface optionsType {
  value: string
  label: string
}
const options: optionsType[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape' },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'mango', label: 'Mango' },
  { value: 'orange', label: 'Orange' },
  { value: 'peach', label: 'Peach' }
]

const selected: optionsType[] = [
  { value: 'pear', label: 'Pear' },
  { value: 'watermelon', label: 'Watermelon' }
]

const MultiSelect = () => {
  const [selectState, handleSelectState] = useState([])

  return (
    <div className='w-max pos-rel'>
      <div>This is MultiSelect</div>
      <div id='multi-select' className='flex-row multi-select padding-1'>
        <div className='flex-row flex-1 gap-1'>
          {selected.map((s) => {
            return <SelectedOption Option={s} />
          })}
        </div>
        <div>⬇</div>
      </div>
      <div className='w-max pos-abs'>
        <OptionsPanel Options={options} />
      </div>
      <div>DJSFHISJFH asudfh df</div>
    </div>
  )
}

interface OptionsPanelProps {
  Options: optionsType[]
}
const OptionsPanel = ({ Options }: OptionsPanelProps) => {
  return (
    <div className='padding-1'>
      {Options.map((o) => {
        return <div className='padding-0 option-highlight'>{o.label}</div>
      })}
    </div>
  )
}

interface SelectedOptionProps {
  Option: optionsType
}
const SelectedOption = ({ Option }: SelectedOptionProps) => {
  return (
    <div className='flex-row bg-color-white '>
      <div className='flex-1 padding-1'>{Option.label}</div>
      <div className='padding-1 bg-color-gray'>x</div>
    </div>
  )
}

export default MultiSelect
