import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Forgetpassword from "./components/Forgetpassword";
import Newpassword from "./components/New-password";
import Test from "./components/test";
import Dashboard from "./components/dashboard";
import EditUser from "./components/Edit-user";
import Nullpage from "./components/404-page";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forget-password" element={<Forgetpassword />} />
        <Route exact path="/test" element={<Test />} />
        <Route
          exact
          path="/new-password/:userId/:token"
          element={<Newpassword />}
        />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route
          exact
          path="/dashboard/edit-user/:userId/:username/:email/:password/:role"
          element={<EditUser />}
        />

        <Route exact path="*" element={<Nullpage />} />
      </Routes>
    </>
  );
}

export default App;
