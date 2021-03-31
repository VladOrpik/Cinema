
import './App.scss';
import logo from './images/logo.jpg';

function App() {
  return (
    <div className="App">
     <Header/>
    </div>
  );
}
function Header(){
  return(
    <header className="header">
      <div className="wrapper">
        <div className="header__inner">
        <div className="header__logo">
          <a className="header__logo-img" href="#">
            <img className="logo" src={logo} alt="my-logo" />
          </a>
        </div>
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <a  href="#"className="header__menu-link">Афиша</a></li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">Кинотеатры</a></li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">Инфо</a></li>
              <li className="header__menu-item">
                <button className="header__menu-sign-in"><span className="text__button">Sign in</span></button>
              </li>
              <li className="header__menu-item">
              <button className="header__menu-sign-up"> <span className="text__button">Sign up</span></button>
              </li>
            </ul>
          </nav>
      </div>
      </div>
    </header>
  );
}

export default App;
