import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseRole from "../pages/ChooseRolePage";
import StudentRegistration from "../pages/StudentRegistrationPage";
import ProfessorLogin from "../pages/ProfessorLoginPage";
import StudentLogin from "../pages/StudentLoginPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseRole />} />
        <Route path="/role" element={<ChooseRole />} />
        <Route path="/studentregistration" element={<StudentRegistration />} />
        <Route path="/professorlogin" element={<ProfessorLogin />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;