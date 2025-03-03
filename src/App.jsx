import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx';
import { DefaultLayout } from './layouts/DefaultLayout.jsx';
import { Index } from './pages/Pharmacy/Index.jsx';
import { Blog } from './pages/Blog/Blog.jsx';
import {Searched} from "./pages/Pharmacy/Searched.jsx";
import {Detail} from "./pages/Pharmacy/Detail.jsx";

const App = () => {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/pharmacy/*">
            <Route path="" element={<Index />} />
            <Route path="searched" element={<Searched />} />
            <Route path="1" element={<Detail />} />
          </Route>

          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default App;
