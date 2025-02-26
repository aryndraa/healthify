import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx';
import { DefaultLayout } from './layouts/DefaultLayout.jsx';
import { Pharmacy } from './pages/Pharmacy/Pharmacy.jsx';

const App = () => {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default App;
