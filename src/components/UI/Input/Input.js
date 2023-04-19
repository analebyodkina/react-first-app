import './Input.scss';


function Input(props) {
  return (    
    <label className="form__field">
        <span className="form__title">{props.title}</span>
        <input type={props.type} className="form__input" placeholder={props.placeholder}/>
    </label>
    
  )
}

export default Input;