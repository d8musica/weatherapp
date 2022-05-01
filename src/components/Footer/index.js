// @packages
import { Link } from 'react-router-dom';

// @own
import './styles.css';

const Footer = () => {
  return (
    <>
      <p>
        Weather app. Create-React-App, Redux and MaterialUI.
      </p>
      <a
        className="App-link"
        href="https://github.com/d8musica/weatherapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developed by d8musica
      </a>
      <div className="App-navigation">
        <span >
          <Link
            className="App-link App-nav"
            to="/"
            target="_self"
            rel="noopener noreferrer"
          >
            Go to app
          </Link>
        </span>
        <span>
          <Link
            className="App-link App-nav"
            to="/about"
            target="_self"
            rel="noopener noreferrer"
          >
            Go to about
          </Link>
        </span>
      </div>
    </>
  );
};

export default Footer;
