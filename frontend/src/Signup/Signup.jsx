import React, { useState } from "react";
import PasswordInput from "../components/Input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      if (!name) {
        setError("Please enter your name");
        return;
      }
      if (!validateEmail(email)) {
        setError("Please enter a valid email");
        return;
      }

      if (!password) {
        setError("Please enter the password");
        return;
      }
      setError("");
    } catch (error) {
      console.log(`error ${error}`);
    }
  };
  return (
    <div className=" flex items-center justify-center mt-28">
      <div className=" w-96 border rounded bg-white px-7 py-10">
        <form action="" onSubmit={handleSignup}>
          <h4 className="text-2xl mb-7">Sign Up</h4>
          <input
            type="text"
            placeholder="Name"
            className="input-box"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />

          <PasswordInput
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          {error && <p className="text-red-500 text-sm pb-1">{error}</p>}
          <button type="submit" className="btn-primary">
            SIGN UP
          </button>
          <p className="text-sm text-center mt-4">
            Already have an account{" "}
            <Link
              to={"/signup"}
              className=" font-medium text-primary underline "
            >
              Login?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
