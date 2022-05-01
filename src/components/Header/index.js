import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link
        className="App-link"
        to="/about"
        target="_self"
        rel="noopener noreferrer"
      >
        Go to about
      </Link>
    </div>
  );
};

export default Header;