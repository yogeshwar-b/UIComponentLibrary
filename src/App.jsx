import "./App.css";
import ToggleSwitch from "./components/toggleswitch";
/**
 * Returns text Initial Project.
 * @todo Handle the default theme with checkbox
 */
function App() {
  document.body.classList.add("home-bg", "dark-home-bg");
  return (
    <div>
      <input
        type="checkbox"
        name="checkboxtheme"
        id="checkboxtheme"
        onChange={(e) => {
          if (e.target.checked) {
            document.body.classList.add("home-bg", "dark-home-bg");
          } else {
            document.body.classList.remove(...document.body.classList);
            document.body.classList.add("home-bg");
          }
        }}
      />
      <div className="text dark-text">Dark Mode</div>
      <ToggleSwitch></ToggleSwitch>
    </div>
  );
}

export default App;
