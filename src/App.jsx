import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./Route/ProtectedRoutes";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ChatPage from "./pages/ChatPage/ChatPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {

  return (
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
  );
}

export default App;
