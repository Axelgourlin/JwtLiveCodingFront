import { useState, useContext } from "react";
import axios from "axios";
import { ContextUser } from "../context/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch, access_token } = useContext(ContextUser);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = { email: email, password: password };
      const response = await axios.post(
        "http://localhost:4000/auth/login",
        body
      );
      if (response.data.access_token) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.access_token,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <form className="container" onSubmit={(event) => handleSubmit(event)}>
      <h2>Login</h2>
      <div className="content-items">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="content-items">
        <label htmlFor="loginPassword">Password :</label>
        <input
          type="password"
          name="loginPassword"
          id="loginPassword"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <input type="submit" value="Login" />
      <input type="button" onClick={logout} value="Logout" />
    </form>
  );
};

export default Login;
