
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useUserAuth } from "../../context/UserAuthContext"
import { Link } from "react-router-dom"
import "./ForgotPassword.css"

const ForgotPassword = () =>  {
    const emailRef = useRef()
    const { resetPassword } = useUserAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }
        setLoading(false)
    }

    return (
        <>

        <Card>
            <div className="p-4 box">
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <div className="btnPassword">
                        <Button disabled={loading} className="w-100" type="submit">
                            Reset Password
                        </Button>
                        </div>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </div>
        </Card>
</>
    )
}

export default ForgotPassword;