import Navbar from 'react-bootstrap/Navbar';
import ComboBox from '../ComboBox/ComboBox';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar className="navbar-red">
        <div className="Header-Container">
          <Navbar.Brand className='text-white' href="#home">React Test App</Navbar.Brand>
          <div>
            <ComboBox />
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;