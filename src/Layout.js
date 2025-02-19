import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="row">
          <div className="col-2">
            <Link to="/">
              <img className="logoo" src="/images/Nike_logo.jpg" alt="Nike Logo" />
            </Link>
          </div>
          <div className="col-6">
            <ul className="tag">
              <li className="box">
                <Link to="/home">Menu</Link>
              </li>
              <li className="box">
                <Link to="/location">Location</Link>
              </li>
              <li className="box">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="box">
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Link to="/login">
              <button className="loogin">Login</button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
