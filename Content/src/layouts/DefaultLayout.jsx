import Footer from "../component/Footer"
import Navbar from "../component/navbar"
import PropTypes from "prop-types";

export const DefaultLayout = ({children}) => {
  return (
    <div className="w-full">
      <Navbar/>
      <main className="w-full">
        {children}
      </main>
      <Footer/>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}
