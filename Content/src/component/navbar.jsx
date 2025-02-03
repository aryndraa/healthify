import Heal from "../assets/Logo.svg"
const Navbar = () => {

    return (
        <div className="flex items-center justify-between mx-5 my-2">
            <img src={Heal} alt="Healthify Logo" />
            <nav className="no-underline flex gap-6">
                <a href="">Home</a>
                <a href="">Disease</a>
                <a href="">Drugs</a>
                <a href="">Clinic</a>
                <a href="">Pharmacy</a>
                <a href="">Blogs</a>
            </nav>
        </div>
    )
}

export default Navbar