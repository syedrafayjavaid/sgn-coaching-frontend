import { Route, Routes } from "react-router-dom";
import CoachesLP from "./components/Pages/CoachLP";
import CoachesListing from "./components/Pages/CoachesListing";
import CoachDetails from "./components/Pages/CoachDetails";
import SigninSignup from "./components/Pages/SigninSignup";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<CoachesLP />} />
      <Route exact path="/coaches" element={<CoachesListing />} />
      <Route exact path="/coachDetail" element={<CoachDetails />} />
      <Route exact path="/login" element={<SigninSignup />} />
    </Routes>
  );
}

export default App;
