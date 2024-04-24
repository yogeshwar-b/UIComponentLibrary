import { useState } from 'react'
import '../ArcadeButton/ArcadeButton.css'

const BtnId = 'Test'
const BtnLabel = 'X'

const ArcadeButton = () => {
  const [btnstate, changebtnstate] = useState('default') // default,pressed,released
  var cssclass = 'btn-fg btn-fg-color-default'
  return (
    <button
      className='btn-bg'
      onClick={() => {
        if (btnstate == 'default') {
          changebtnstate('pressed')
        } else {
          changebtnstate('default')
        }
      }}
    >
      <span
        className={
          cssclass +
          ' ' +
          (btnstate == 'pressed' ? 'btn-fg-pos-pressed' : 'btn-fg-pos-default')
        }
      >
        Click me
      </span>
    </button>
  )
}

export default ArcadeButton
