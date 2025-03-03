import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx';
import { DefaultLayout } from './layouts/DefaultLayout.jsx';
import { Pharmacy } from './pages/Pharmacy/Pharmacy.jsx';
import { Blog } from './pages/Blog/Blog.jsx';
import {PharmacySearched} from "./pages/Pharmacy/PharmacySearched.jsx";

const App = () => {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/pharmacy/searched" element={<PharmacySearched />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default App;
