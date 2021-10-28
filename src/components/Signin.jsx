import { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = { email: email, password: password };
      const response = await axios.post(
        "http://localhost:4000/auth/signin",
        body
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="container" onSubmit={(event) => handleSubmit(event)}>
      <h2>SignIn</h2>
      <div className="content-items">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="content-items">
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <input type="submit" value="SignIn" />
    </form>
  );
};

export default Signin;
