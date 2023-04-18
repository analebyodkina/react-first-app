import LogoIcon from '../icons/LogoIcon';
import './Header.scss';

function Header() {
  return (
    <div className='logo'>      
      <LogoIcon />
      <div className='logo__text'>PNFT Market</div>
    </div>
   
  )
}

export default Header;