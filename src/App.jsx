import { Col, Container, Row } from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ChatPage from "./pages/ChatPage/ChatPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";


// Function to determine whether to show the Navbar based on the current route

function App() {

  return (
    // <Container style={{ width: "100%" }}>
    //   <Row>
    //     <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/chat"
                element={
                  <ProtectedRoute>
                    <ChatPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
          </UserAuthContextProvider>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
