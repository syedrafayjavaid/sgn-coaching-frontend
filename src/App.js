import { Route, Routes } from "react-router-dom";
import CoachesLP from "./components/Pages/CoachLP";
import CoachesListing from "./components/Pages/CoachesListing";
import CoachDetails from "./components/Pages/CoachDetails";
import SigninSignup from "./components/Pages/SigninSignup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CoachesLP />} />
      <Route path="https://sgn-coaching-frontend.onrender.com/coaches" element={<CoachesListing />} />
      <Route path="/coachDetail" element={<CoachDetails />} />
      <Route path="/login" element={<SigninSignup />} />
    </Routes>
  );
}

export default App;
