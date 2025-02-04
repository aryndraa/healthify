import Navbar from "../../component/navbar";
import "../Dashboard/Dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="Container  mt-9">
        <div className="item-1">
          <p className="font-Figtree font-semibold text-5xl">
            Where Health Meets Knowledge for a Brighter Future
          </p>
          <p className="font-Figtree text-xl">
            Explore a wealth of resources designed to empower you with the
            knowledge you need to make informed health decisions. From
            understanding medications and diseases to finding local healthcare
            services, we are dedicated to supporting your journey towards a
            healthier, happier life.
          </p>
          <div className="bg-inherit grid grid-cols-6 gap-5">
            <div className="Button bg-blue-900 text-white col-start-1">
              <p>Nearest Pharmacy</p>
              <svg
                className="bg-inherit"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 12h16m0 0l-6-6m6 6l-6 6"
                ></path>
              </svg>
            </div>
            <div className="Button bg-white text-black border-solid border-black border col-start-3 ">
              <p>Nearest Clinic</p>
              <svg
                className="bg-inherit"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 12h16m0 0l-6-6m6 6l-6 6"
                ></path>
              </svg>
            </div>
            <div className="Button bg-white text-black border-solid border-black border col-start-5">
              <p>Read our Blogs</p>
              <svg
                className="bg-inherit"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 12h16m0 0l-6-6m6 6l-6 6"
                ></path>
              </svg>
            </div>
            <div className="Button bg-white text-black border-solid border-black border  col-start-1">
              <p>BMI Calculator</p>
              <svg
                className="bg-inherit"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 12h16m0 0l-6-6m6 6l-6 6"
                ></path>
              </svg>
            </div>
          </div>

          <p className="font-Figtree font-medium mt-32">
            “Great health stems from great knowledge, as understanding our
            bodies and the factors that influence our well-being empowers us to
            make informed choices.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
