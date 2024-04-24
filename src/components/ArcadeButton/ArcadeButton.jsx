import { useState } from 'react'
import '../ArcadeButton/ArcadeButton.css'

/**
 *
 * Maintains clicked state
 */
const ArcadeButton = () => {
  const [btnstate, changebtnstate] = useState('default') // default,pressed,released
  var cssclass = 'btn-fg btn-fg-color-default'
  return (
    <button
      className={
        'btn-bg' + ' ' + (btnstate == 'pressed' ? 'btn-bg-pressed' : '')
      }
      onMouseDown={() => {
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
          (btnstate == 'pressed'
            ? 'btn-fg-pos-pressed orange-colors'
            : 'btn-fg-pos-default default-colors')
        }
      >
        <div
          className={
            btnstate == 'pressed' ? 'txt-pos-pressed' : 'txt-pos-default'
          }
        >
          Click me
        </div>
      </span>
    </button>
  )
}

export default ArcadeButton
