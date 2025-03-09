import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import { DefaultLayout } from "./layouts/DefaultLayout.jsx";
import { Pharmacy } from "./pages/Pharmacy/Pharmacy.jsx";
import { Blog } from "./pages/Blog/Blog.jsx";
import { Drugs } from "./pages/Drugs/Drugs.jsx";
import { BlogDetail } from "./pages/Blog/BlogDetail.jsx";
import { DrugDetail } from "./pages/Drugs/DrugsDetail.jsx";

const App = () => {
	return (
		<Router>
			<DefaultLayout>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/pharmacy" element={<Pharmacy />} />
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
