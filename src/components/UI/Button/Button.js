import "./Button.scss";

function Button(props) {
  return (
    <button className={`btn ${props.addClass || ""}`} type={props.type}>
      <span>{props.icon}</span>
      <span className="btn__text">{props.title}</span>      
    </button>
  );
}

export default Button;