import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseRole from "../pages/ChooseRolePage";
// import StudentRegistration from "../pages/StudentRegistrationPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseRole />} />
        <Route path="/role" element={<ChooseRole />} />
        {/* <Route path="/studentregistration" element={<StudentRegistration />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;