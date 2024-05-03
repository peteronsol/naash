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
        <a href="#">Home</a>
        <a
          href="https://pump.fun/CdFU9ppVBBpMKanFNTkN5vS6Z9p9cBatqJ2bvN9kBpBu"
          target="_blank"
          rel="noopener noreferrer"
        >
          DEX
        </a>
        <a
          href="https://t.me/naashdaily"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>
    </div>
  );
};
