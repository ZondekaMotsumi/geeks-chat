import React, { useState } from "react";
import { Alert, Button, Form, Col, Card, Container, Row, Image } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import "./Login.css"
// import logo from "../../images/logo.png";
import pic2 from "../../images/Conversation-rafiki.png"
import Footer from "../../components/Footer"
import Navbar from "../../components/NavBar/Navbar";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/chat");
    } catch (err) {
      console.error("Incorrect User details", err)
      // setError(err.message);
      setError(true)
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/chat");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login  ">
        <Container className="container">
          <Row className="vh-90 center">
            <Col className="left d-none d-md-block col-6 ">
              {/*<h1 className="center heading">Chat App</h1>*/}
              <p className="text" align="center">
                Welcome to Geeks Zone, where technology meets communication, and conversations become an art! We're
                all about connecting tech enthusiasts, gamers, and geeks from around the world in a chat platform
                designed just for you.
              </p>
              <Image className="pic" src={pic2} width="90%" alt="chat picture"/>
            </Col>
            <Col className="right col-12 col-md-6">
              {/*<h4 className="mb-6 form-title">LOGIN</h4>*/}
              <Card className="loginCard h-90 center">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form noValidate
                      onSubmit={handleSubmit}
                      className="form w-50">
                  <Form.Group className="email mb-3" controlId="formBasicEmail">
                      <Form.Control
                          type="email"
                          placeholder="Email address"
                          onChange={(e) => setEmail(e.target.value)}
                      />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="forgot-password mb-3 center" controlId="forgotPassword">
                      <Link
                          className="forgotpassword"
                          to="/forgotpassword">Forgot your Password?</Link>
                  </Form.Group>
                  <Form.Group className="submit-button mb-3 center" controlId="submitid-login">
                      <Button variant="primary" type="Submit">
                        Log In
                      </Button>

                  </Form.Group>
                  <div>
                    <GoogleButton
                        className="g-btn"
                        type="dark"
                        onClick={handleGoogleSignIn}
                    />
                  </div>
                  <Form.Group
                      className="create-account mb-3 center"
                      controlId="createAccount"
                  >
                  <div className="p-4 box mt-3 text-center">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                  </div>
                  </Form.Group>
                </Form>
              </Card>
            </Col><Footer/>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
