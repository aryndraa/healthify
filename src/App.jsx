import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx';
import { DefaultLayout } from './layouts/DefaultLayout.jsx';
import { Pharmacies } from './pages/Pharmacy/Pharmacies.jsx';
import { Blog } from './pages/Blog/Blog.jsx';
import {PharmaciesSearched} from "./pages/Pharmacy/PharmaciesSearched.jsx";
import {PharmacyDetail} from "./pages/Pharmacy/PharmacyDetail.jsx";
import {BlogDetail} from "./pages/Blog/BlogDetail.jsx";
import {Drugs} from "./pages/Drugs/Drugs.jsx";
import {DrugDetail} from "./pages/Drugs/DrugsDetail.jsx";
import {Diseases} from "./pages/Disease/Diseases.jsx";
import {DiseasesSearched} from "./pages/Disease/DiseasesSearched.jsx";
import {DiseaseDetail} from "./pages/Disease/DiseaseDetail.jsx";
import {Clinics} from "./pages/Clinic/Clinics.jsx";
import {ClinicSearched} from "./pages/Clinic/ClinicSearched.jsx";

const App = () => {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/pharmacy/*">
            <Route path="" element={<Pharmacies />} />
            <Route path="searched" element={<PharmaciesSearched />} />
            <Route path="1" element={<PharmacyDetail />} />
          </Route>

          <Route path="/disease/*">
            <Route path="" element={<Diseases />} />
            <Route path="searched" element={<DiseasesSearched />} />
            <Route path="1" element={<DiseaseDetail />} />
          </Route>

          <Route path="/clinic/*">
            <Route path="" element={<Clinics />} />
            <Route path="searched" element={<ClinicSearched />} />
            <Route path="1" element={<ClinicSearched />} />
          </Route>

					<Route path="/blogs" element={<Blog />} />
					<Route path="/blog/:id" element={<BlogDetail />} />

					<Route path="/drugs" element={<Drugs />} />
					<Route path="/drugs/:id" element={<DrugDetail />} />

        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default App;
