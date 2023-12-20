import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store";
import { toast } from "react-toastify";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { login } = authActions;
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login());
    navigate("/");
    toast.success("Giriş işlemi başarılı!");
    localStorage.setItem("auth", JSON.stringify(true));
  };

  return (
    <div className="auth-wrapper">
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
          alt=""
        />
      </div>
      <div className="text-center mt-4 name">Twitter</div>
      <form className="p-3 mt-3" onSubmit={handleLogin}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            required
          />
        </div>
        <button type="" className="btn mt-3">
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
  );
};

export default Login;
