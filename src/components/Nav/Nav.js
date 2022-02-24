import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="inner">
        <div className="nav_logo">
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <h1>Instagram</h1>
          </a>
        </div>
        <div className="nav_search">
          <input type="text" placeholder="검색" />
          <i className="fas fa-search" />
        </div>
        <div className="nav_icon">
          <a href="#">
            <i className="far fa-compass" />
          </a>
          <a href="#">
            <i className="far fa-heart" />
          </a>
          <a href="#">
            <i className="far fa-user" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
