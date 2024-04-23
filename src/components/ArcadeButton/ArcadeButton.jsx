import '../ArcadeButton/ArcadeButton.css'

const BtnId = 'Test'
const BtnLabel = 'X'

const ArcadeButton = () => {
  return (
    <button className='btn-bg'>
      <span className='btn-fg'> Click me</span>
    </button>
  )
}

export default ArcadeButton
