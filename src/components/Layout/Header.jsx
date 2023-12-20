import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { isThemeMode, setIsThemeMode } = useContext(ThemeContext);

  const handleLogout = () => {
    if (window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {
      localStorage.removeItem("auth");
      navigate("/login");
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-primary" : "nav-link"
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-primary" : "nav-link"
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-primary" : "nav-link"
                }
                to="/cart"
              >
                Cart
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <span
            type="button"
            className="position-relative ms-2"
            onClick={() => navigate("/cart")}
          >
            <BsCart4 size={28} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </span>
          <button
            className="btn btn-outline"
            onClick={() => setIsThemeMode(!isThemeMode)}
          >
            {isThemeMode ? (
              <IoPartlySunnyOutline size={24} />
            ) : (
              <CiDark size={24} />
            )}
          </button>
          <IoMdExit size={24} onClick={handleLogout} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
