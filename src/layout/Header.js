import logo from '../images/browntimer.svg';

function Header() {
  return (
    <header>
      <div className="container">
        <img src={logo} className="logo" alt="logo" />
      </div>
    </header>
  );
}

export default Header;
