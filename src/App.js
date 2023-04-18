import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import mainLogo from './assets/bg-image.png'
import GoogleIcon from '../src/components/icons/GoogleIcon';

function App() {
  return (
    <div>
      <div className='wrapper'>
          <div className="container">
            <Header />
            <div className="login">
              <h1 className="login__title">NFT Access</h1>
              <div className="login__desc">Please fill your detail to access your account.</div>

              <form action="get" className='form'>

                <label className="form__field">
                  <span className="form__title">Email</span>
                  <input type="email" className="form__input" placeholder='debra.holt@example.com'/>
                </label>

                <label class="form__field">
                  <span className="form__title">Password</span>
                  <input type="password" className="form__input" placeholder="••••••••" />
                </label>  
                <div className="form__row">
                  <label>                
                      <input type="checkbox" className='form__checkbox' />
                      <span className="form__title">Remember me</span>                    
                  </label> 
                  <a href="#">Forgot Password?</a> 
                </div>
                <input type="submit" className="form__submit" value="Sign in" />
                 
                
              </form>
              <a href="#" className="login__google">
                <GoogleIcon />
                <span>Sign in with Google</span>
              </a>
              <div className="login__sign-up">Don’t have an account? <span>Sign up</span>
              </div>
            </div>
            <Footer />
          </div>
          <div className="image">
            <img src={mainLogo} alt="background" />
          </div>
    </div>

      </div>
      
   
  )
}

export default App;
