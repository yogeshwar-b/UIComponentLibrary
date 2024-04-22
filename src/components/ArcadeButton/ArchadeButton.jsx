import '../ArcadeButton/ArcadeButton.css'

const BtnId = 'Test'
const BtnLabel = 'X'

const ArcadeButton = () => {
  return (
    <div className='root-div'>
      <label htmlFor={BtnId} className='btn-box'>
        <input type='checkbox' id={BtnId} className='checkbox-hide' />
        <span></span>
        <div className='icon-div'>{BtnLabel}</div>
      </label>
    </div>
  )
}

export default ArcadeButton
