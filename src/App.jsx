import { useState } from 'react'
import './App.css'
import ToggleSwitch from './components/toggleswitch'
import ThemeButton from './components/ThemeButton/ThemeButton'
import { defaultselection, ComponentList } from './constants'
import ArcadeButton from './components/ArcadeButton/ArcadeButton'
import Text3dButton from './components/Text3DButton/Text3dButton'
import MultiSelect from './components/MultiSelect/MultiSelect'
/**
 * Returns text Initial Project.
 * @todo Handle the default theme with checkbox
 */
function App() {
  document.body.classList.add('home-bg', 'dark-home-bg')
  const [SelectedItem, SetSelection] = useState(defaultselection)
  return (
    <>
      <select
        defaultValue={defaultselection}
        onChange={(e) => {
          SetSelection(e.target.value)
        }}
      >
        {ComponentList.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          )
        })}
      </select>
      {RenderComponent(SelectedItem)}
    </>
  )
}

function RenderComponent(SelectedItem) {
  switch (SelectedItem) {
    case 'ThemeButton':
      return (
        <div>
          <div style={{ width: '100px', aspectRatio: '1' }}>
            <ThemeButton name='test' sizeyo='10px'></ThemeButton>
          </div>
          <div style={{ width: '300px', aspectRatio: '1' }}>
            <ThemeButton name='test2' sizeyo='30px'></ThemeButton>
          </div>
        </div>
      )
    case 'ToggleSwitch':
      return <ToggleSwitch></ToggleSwitch>
    case 'ArcadeButton':
      return <ArcadeButton></ArcadeButton>
    case 'Text3dButton':
      return (
        <Text3dButton
          OnButtonClick={() => {
            console.log('button clicked')
          }}
          ButtonText='Text 3d Button'
        />
      )
    case 'MultiSelect':
      return <MultiSelect />
    default:
      return (
        <div>
          <h1>Nothing selected</h1>
        </div>
      )
  }
}

export default App
