import React from 'react'
import './Text3dButton.css'

interface Text3dButtonProps {
  ButtonText: string
}

const Text3dButton = (props: Text3dButtonProps) => {
  return <button className='text-button'>{props.ButtonText}</button>
}

export default Text3dButton
