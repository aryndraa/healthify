import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Pharmacy } from './pages/Pharmacy/Pharmacy';

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
