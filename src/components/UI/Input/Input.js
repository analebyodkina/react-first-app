import { useState } from 'react';
import './Input.scss';

  
function Input(props) {
  const [passwordType, setPasswordType] = useState("password");
  const [inputValue, setInputValue] = useState('');

  const togglePassword = () => {
    if (passwordType === "password" ) {
      setPasswordType("text");
      return;
    }   
    setPasswordType("password");
    console.log(passwordType);

  };


  function handleClearClick() {
    setInputValue('');
  }
  return (    
    <label className="form__field">
        <span className="form__title">{props.title}</span>        

        {props.type === 'password' &&
          <>
            <input type={passwordType}
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}      
              className="form__input" 
              placeholder={props.placeholder}
            />
            <span className='form__icon' onClick={togglePassword}>
              {props.icon}
            </span>
          </>          
        }


        {props.type !== 'password' &&
            <>
            <input type={props.type}
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}      
              className="form__input" 
              placeholder={props.placeholder}
            />
            <span className='form__icon' onClick={handleClearClick}>
                {props.icon}
            </span>
          </>          
        }  
        
    </label>
    
  )
}

export default Input;