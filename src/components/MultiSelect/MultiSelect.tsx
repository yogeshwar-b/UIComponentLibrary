import React, { Dispatch, SetStateAction, useReducer, useState } from 'react'
import './MultiSelect.css'
interface optionsType {
  value: string
  label: string
}

interface selectStateType {
  value: string
  label: string
  isSelected: boolean
}
interface MultiSelectProps {
  options: optionsType[]
  defaultSelected: string[]
}
const MultiSelect = ({ options, defaultSelected }: MultiSelectProps) => {
  const defaultSelectionState: selectStateType[] = options.map((o) => {
    if (defaultSelected.includes(o.value)) {
      return { ...o, isSelected: true }
    } else {
      return { ...o, isSelected: false }
    }
  })

  const [selectState, dispatch] = useReducer(
    selectStateReducer,
    defaultSelectionState
  )
  const [showOptions, changeShowOptions]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false)
  function handleSelect(selectValue: string) {
    dispatch({ type: 'selected', selectedValue: selectValue })
  }
  function handleUnselect(selectValue: string) {
    dispatch({ type: 'unselected', selectedValue: selectValue })
  }
  return (
    <div className='w-max pos-rel'>
      <div id='multi-select' className='flex-row multi-select padding-1'>
        <div className='flex-row flex-1 gap-1 flex-wrap'>
          {selectState.map((s) => {
            if (s.isSelected)
              return (
                <SelectedOption Option={s} handleUnselect={handleUnselect} />
              )
          })}
        </div>
        {showOptions ? (
          <div
            onClick={() => {
              changeShowOptions(!showOptions)
            }}
            className='mouse-pointer'
          >
            ✖
          </div>
        ) : (
          <div
            onClick={() => {
              changeShowOptions(!showOptions)
            }}
            className='mouse-pointer'
          >
            ⬇
          </div>
        )}
      </div>
      {showOptions ? (
        <div className='w-max pos-abs'>
          <OptionsPanel Options={selectState} handleSelect={handleSelect} />
        </div>
      ) : (
        <></>
      )}
    </div>
  )

  function selectStateReducer(selectState: selectStateType[], action) {
    switch (action.type) {
      case 'selected': {
        return selectState.map((s) => {
          if (s.value == action.selectedValue) {
            return { ...s, isSelected: true }
          } else {
            return s
          }
        })
      }
      case 'unselected': {
        return selectState.map((s) => {
          if (s.value == action.selectedValue) {
            return { ...s, isSelected: false }
          } else {
            return s
          }
        })
      }
      default:
        return selectState
    }
  }
}

interface OptionsPanelProps {
  Options: selectStateType[]
  handleSelect: (selectedvalue: string) => void
}
const OptionsPanel = ({ Options, handleSelect }: OptionsPanelProps) => {
  return (
    <div className='padding-1'>
      {Options.map((o) => {
        if (!o.isSelected)
          return (
            <option
              className='padding-0 option-highlight'
              onClick={(e: React.MouseEvent<HTMLOptionElement>) => {
                handleSelect((e.target as HTMLOptionElement).value)
              }}
              value={o.value}
            >
              {o.label}
            </option>
          )
      })}
    </div>
  )
}

interface SelectedOptionProps {
  Option: selectStateType
  handleUnselect: (selectedvalue: string) => void
}
const SelectedOption = ({ Option, handleUnselect }: SelectedOptionProps) => {
  return (
    <div className='flex-row bg-color-white '>
      <div className='flex-1 padding-1'>{Option.label}</div>
      <button
        className='padding-1 bg-color-gray'
        onClick={() => {
          handleUnselect(Option.value)
        }}
      >
        x
      </button>
    </div>
  )
}

export default MultiSelect
