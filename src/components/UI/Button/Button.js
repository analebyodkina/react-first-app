import "./Button.scss";

function Button(props) {
  return (
    <>
    {!props.linkTo && (
      <button className={`btn ${props.addClass || ""}`} type={props.type}>
      
      <span className="btn__text">{props.title}</span>      
    </button>
    )}

    {props.linkTo && (
    <a className={`btn ${props.addClass || ""}`} href={props.linkTo}>
      <span>{props.icon}</span>
      {props.title}
      
    </a>
    )}

    </>
   
  );
}

export default Button;