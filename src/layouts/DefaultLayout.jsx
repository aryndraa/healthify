import Footer from "../component/Footer.jsx"
import Navbar from "../component/navbar.jsx"
import PropTypes from "prop-types";

export const DefaultLayout = ({children}) => {
  return (
		<div className="w-full max-w-[1920px] px-4 mb-4 md:px-8 lg:px-24  2xl:px-[140px]">
			<Navbar />
			<main className="w-full  pt-[100px]  lg:pt-36 2xl:pt-[164px]">{children}</main>
			<Footer />
		</div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}
