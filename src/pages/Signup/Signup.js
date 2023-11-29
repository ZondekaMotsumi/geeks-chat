import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import "./Signup.css"


const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [profilepic, setProfilePic] = useState("null")
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(true);
    setErrMsg("All the fields are required")
    try {
      await signUp(email, password, userName, profilepic);
      navigate("/Login");
      setError(false)
      setErrMsg("Sign Up successful")
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Geeks Chat</h2>

        {error && <Alert variant="danger">{errMsg}</Alert>}

        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setUserName(e.target.value)}
              maxLength="30"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formbasicProfilePic">
            <Form.Label>Profile Pic</Form.Label>
            <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => setProfilePic(e.target.files[0])}
            />
          </Form.Group>

          <Form.Group className="terms mb-3 center shadow-none ">
            <Form.Check
                className="check"
                required
                label="I agree with terms and conditions"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
