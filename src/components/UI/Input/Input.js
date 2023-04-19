import { useState } from 'react';
import './Input.scss';


function Input(props) {
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password" ) {
      setPasswordType("text");
      return;
    }   
    setPasswordType("password");
    console.log(passwordType);

  };
  return (    
    <label className="form__field">
        <span className="form__title">{props.title}</span>
        <input type={passwordType} className="form__input" placeholder={props.placeholder}/>
        <span onClick={togglePassword}>
          {props.icon}
        </span>
        
    </label>
    
    
  )
}

export default Input;