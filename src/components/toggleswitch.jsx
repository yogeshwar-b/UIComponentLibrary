import "../App.css";
import "./toggleswitch.css";
/**
 * @todo Add customization via Arguments , Add shadows and shapes
 * @returns Toggle Switch UI Component
 */
function ToggleSwitch() {
  return (
    <>
      <div className="text dark-text">This is Switch</div>
      <label className="switch">
        <input type="checkbox" />
        <span className="switch-shape"></span>
      </label>
    </>
  );
}

export default ToggleSwitch;
