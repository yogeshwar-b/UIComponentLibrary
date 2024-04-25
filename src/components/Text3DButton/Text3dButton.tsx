import React from 'react'
import './Text3dButton.css'

interface Text3dButtonProps {
  ButtonText: string
  OnButtonClick: () => void //#change this if your method is different
}

const Text3dButton = (props: Text3dButtonProps) => {
  return (
    <button className='text-button' onClick={props.OnButtonClick}>
      {props.ButtonText}
    </button>
  )
}

export default Text3dButton
