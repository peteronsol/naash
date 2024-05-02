import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Naashdaily</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <a href="//github.io/jo_geek" target="_blank" rel="noopener noreferrer">
          Home
        </a>
        <a
          href="http://stackoverflow.com/users/4084003/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DEX
        </a>
        <a
          href="https://in.linkedin.com/in/jonesvinothjoseph"
          target="_blank"
          rel="noopener noreferrer"
        >
          CA(Contract Address)
        </a>
        <a
          href="https://codepen.io/jo_Geek/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>
    </div>
  );
};
