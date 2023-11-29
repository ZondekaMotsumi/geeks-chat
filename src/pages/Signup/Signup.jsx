import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import "./Signup.css"
import NavBar from "../../components/NavBar/Navbar"

const Signup = () => {
    const [validate, setValidate] = useState(false);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [profilepic, setProfilepic] = useState('null')
    const { signUp } = useUserAuth();
    const [success, setSuccess] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            setErr(true);
            setErrMsg("All the fields are required")
            setValidate(true)
            return;
        }
        try {
            await signUp(email, password, userName, profilepic);
            setSuccess(true)
            navigate("/chat");
        } catch (error) {
            console.error("Firebase Error", error)
            setErr(true)

            if (!error?.response){
                setErrMsg("No server response");
            } else if (error.response){
                const msg = error.response.data.msg;
                setErrMsg(msg);
            } else {
                setErrMsg("Couldn't sign up");
            }
        }
        setValidate(true)
    };

    return (
        <>
            <NavBar />
            <div className="p-4 box">
                <Form noValidate
                      validated={validate}
                      onSubmit={handleSubmit} >
                    {
                        /*{error && <Alert variant="danger">{errMsg}</Alert>} */
                        err ?(<Alert key={"login error"} variant={"danger"} onClose={() => setErr(false)} dismissible>
                                {errMsg}
                            </Alert>
                        ):(
                            <></>
                        )}
                    {success && ( <Alert key={"signup success"} variant={"success"} >
                            Signup successful!
                        </Alert>
                        )}
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                            maxLength="30"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            maxLength="8"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Form.Text muted>
                            Password must be exactly 8 characters.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formbasicProfilePic">
                        <Form.Label>Profile Pic</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={(e) => setProfilepic(e.target.files[0])}
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
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    );
};

export default Signup;
