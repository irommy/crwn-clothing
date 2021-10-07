import React, { useState } from "react";
import "./signIn.scss";
import FormInput from "../form input/formInput";
import Button from "../custom-button/button";
import { signInWithGoogle } from "../../firebase/firebase";

const SignIn = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setloginDetails({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    // console.log(loginDetails)
    setloginDetails({ ...loginDetails, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          id="email"
          label="email"
          handleChange={handleChange}
          value={loginDetails.email}
          required
        />
        {/* <label htmlFor="email">Email</label> */}
        <FormInput
          name="password"
          id="pass"
          type="password"
          label="password"
          handleChange={handleChange}
          value={loginDetails.password}
          required
        />
        {/* <label htmlFor="pass">password</label> */}
        <div className='button'>
        <Button type="submit">
          Sign In
        </Button>
        <Button onClick={signInWithGoogle}  isGoogleSignIn>
          Sign In With Google
        </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
