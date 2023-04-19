import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import mainLogo from './assets/bg-image.png'
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <div className='wrapper'>
          <div className="container">
            <Header />
            <Login />
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
