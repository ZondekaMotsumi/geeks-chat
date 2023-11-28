import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoutes";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Navbar />
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/chat"
                element={
                  <ProtectedRoute>
                    <Chat />
                  </ProtectedRoute>
                }
              />
                <Route
                    path="/forgotpassword"
                    element={
                    <ProtectedRoute>
                        <ForgotPassword />
                    </ProtectedRoute>
                    }
                    />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
