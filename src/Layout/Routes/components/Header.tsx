import "../../../App.css";

export const Header = () => {
  const navLinks = ["Home", "Menu", "About", "Contact"];
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <span>THOOKU</span>
          <span>BIRYANI</span>
        </div>
        <div className="links">
          {navLinks.map((link, index) => {
            return (
              <a href="" key={index}>
                {link}
              </a>
            );
          })}
          <div className="btn-container">
            <div className="cart"></div>
            <a href="" className="signup">
              SignUp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
