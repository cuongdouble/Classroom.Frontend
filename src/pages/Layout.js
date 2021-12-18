import { Outlet, Link } from "react-router-dom";
function Layout() {
    return(
        <>
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container"><Link className="navbar-brand logo" to="/">Classroom</Link><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer className="page-footer Light">
        <div className="footer-copyright">
          <p>© 2021 Copyright Text</p>
        </div>
      </footer>
    </>
    );
}

export default Layout;