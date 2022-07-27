import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Adoption from "./pages/Adoption/Adoption";
import PutUpAdoption from "./pages/Adoption/PutUpAdoption/PutUpAdoption";
import AdoptAdoption from "./pages/Adoption/AdoptAdoption/AdoptAdoption";
import ApplyVolunteer from "./pages/ApplyVolunteer/ApplyVolunteer";
import FindVolunteer from "./pages/FindVolunteer/FindVolunteer";
import PetProducts from "./pages/PetProducts/PetProducts";
import Services from "./pages/Services/Services";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="services" element={<Services />} />
          <Route path="adoption" element={<Adoption />}>
            <Route path="putup" element={<PutUpAdoption />} />
            <Route path="adopt" element={<AdoptAdoption />} />
          </Route>
          <Route path="applyVolunteer" element={<ApplyVolunteer />} />
          <Route path="findVolunteer" element={<FindVolunteer />} />
          <Route path="petProducts" element={<PetProducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
