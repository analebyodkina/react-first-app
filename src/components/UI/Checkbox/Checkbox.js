
import CheckIcon from "../../icons/CheckIcon";
import "./Checkbox.scss";

function Checkbox(props) {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" />
      <span className="checkbox__checkmark"><CheckIcon /></span>
      <span className="checkbox__title">{props.title}</span>
      
    </label>
  );
}

export default Checkbox;
