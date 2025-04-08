import Footer from "../component/Footer.jsx"
import Navbar from "../component/navbar.jsx"
import PropTypes from "prop-types";

export const DefaultLayout = ({children}) => {
  return (
		<div className="w-full max-w-[1920px] px-4 mb-4  md:px-32 ">
			<Navbar />
			<main className="w-full">{children}</main>
			<Footer />
		</div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}
