import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import mainLogo from './assets/bg-image.png'

function App() {
  return (
    <div>
      <div className='wrapper'>
          <div className="login">
            <Header />
            <div className="login__form"></div>

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
