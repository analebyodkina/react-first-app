
import Input from '../UI/Input/Input';
import GoogleIcon from '../icons/GoogleIcon';
import './Login.scss';

function Login() {
  return (
    <>      
      <div className="login">
              <h1 className="login__title">NFT Access</h1>              
              <div className="login__desc">Please fill your detail to access your account.</div>

              <form action="get" className='form'>

                <Input title="Emai" placeholder="debra.holt@example.com" type="email"/>
                <Input title="Password" placeholder="••••••••" type="password"/>

                {/* <label class="form__field">
                  <span className="form__title">Password</span>
                  <input type="password" className="form__input" placeholder="••••••••" />
                </label>   */}
                <div className="form__row">
                  <label>                
                      <input type="checkbox" className='form__checkbox' />
                      <span className="form__title">Remember me</span>                    
                  </label> 
                  <a href="/">Forgot Password?</a> 
                </div>
                <input type="submit" className="form__submit" value="Sign in" />
                 
                
              </form>
              <a href="/" className="login__google">
                <GoogleIcon />
                <span>Sign in with Google</span>
              </a>
              <div className="login__sign-up">Don’t have an account? <span> <a href='/'>Sign up</a></span>
              </div>
            </div>
    </>
   
  )
}

export default Login;