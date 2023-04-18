import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import mainLogo from './assets/bg-image.png'

function App() {
  return (
    <div>
      <div className='wrapper'>
          <div className="container">
            <Header />
            <div className="login">
              <h1 className="login__title">NFT Access</h1>
              <div className="login__desc">Please fill your detail to access your account.</div>

              <form action="get">

                <label className="login__field">
                  <span className="login__field_title">Email</span>
                  <input type="email" className="login__field_input" placeholder='debra.holt@example.com'/>
                </label>

                <label class="login__field">
                  <span className="field__title">Password</span>
                  <input type="password" className="login__field_input" placeholder="••••••••" />
                </label>  
                <label className="remember">                
                    <input type="checkbox" />
                    <span>Remember me</span>
                    
                </label>  
                
              </form>
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
