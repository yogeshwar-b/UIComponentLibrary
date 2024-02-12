import './App.css';
import ToggleSwitch from './components/toggleswitch';
import ThemeButton from './components/ThemeButton/ThemeButton';
/**
 * Returns text Initial Project.
 * @todo Handle the default theme with checkbox
 */
function App() {
  document.body.classList.add('home-bg', 'dark-home-bg');
  return (
    <>
      {/* <ToggleSwitch></ToggleSwitch> */}
      <div style={{ width: '100px', aspectRatio: '1' }}>
        <ThemeButton name="test" sizeyo="10px"></ThemeButton>
      </div>
      <div style={{ width: '300px', aspectRatio: '1' }}>
        <ThemeButton name="test2" sizeyo="30px"></ThemeButton>
      </div>
    </>
  );
}

export default App;
