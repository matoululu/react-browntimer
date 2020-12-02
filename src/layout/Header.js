import logo from '../images/browntimer.svg';

function Header() {
  return (
    <header className="container">
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
}

export default Header;
