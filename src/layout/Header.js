import logo from '../images/browntimer.svg';

function Header() {
  return (
    <header>
      <div className="container">
        <img src={logo} className="logo" alt="logo" />
        <a href="https://www.buymeacoffee.com/matouio" rel="noreferrer" target="_blank"><img className="buy-me-a-coffee" src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee" /></a>
      </div>
    </header>
  );
}

export default Header;
