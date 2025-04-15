import heal from '../assets/logo-white.svg';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const handleClear = () => {
        setEmail(''); // Clear input
    };
    return (
        <footer className="bg-[#213170] text-white p-10 lg:p-16 2xl:p-20 rounded-xl lg:rounded-[40px]">
            <div className="container mx-auto flex justify-between max-[1280px]:justify-start  gap-20">
                <div className=" hidden xl:flex flex-col gap-12 flex-1">
                    <div>
                        <img src={heal} alt=" healthify logo" />
                        <p className="max-w-[506px]">We provide accessible health information to empower informed decisions and enhance well-being.</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="text-lg 2xl:text-xl">Company</p>
                            <p className="text-3xl leading-[1.5] 2xl:text-4xl 2xl:leading-[1.5] font-semibold">Healthify.inc Health Information Center</p>
                        </div>

                        <div>
                            <p className="text-lg 2xl:text-xl">Explore</p>
                            <p className="text-3xl leading-[1.5] 2xl:text-4xl 2xl:leading-[1.5] font-semibold">Disease Information, Drugs Library, Pharmacy & Clinics</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="">
                        <div className="hidden xl:flex justify-between items-center mb-6">
                            <input
                                className="lg:text-2xl 2xl:text-3xl font-semibold bg-transparent placeholder-white focus:outline-none focus:ring-0 focus:border-none"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <div className="bg-[#C5E5FF] w-fit p-4 rounded-full " onClick={handleClear}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15">
                                    <path
                                        fill="black"
                                        fillRule="evenodd"
                                        d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <hr className="border-t border-gray-100 opacity-35 hidden xl:flex" />
                    </div>
                    <div className="flex flex-col  gap-16 xl:pt-12 sm:flex sm:flex-row  justify-between">
                        <ul className="   hover:text-white">
                            <li>
                                <p className="text--2xl font-semibold mb-4">Pages</p>
                            </li>
                            <div className="flex flex-col gap-3 text--lg ">
                                <li>
                                    <Link to="/" className="opacity-35 hover:opacity-100 transition-all duration-150">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/disease" className="opacity-35 hover:opacity-100 transition-all duration-150">
                                        Disease
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/drugs" className="opacity-35 hover:opacity-100 transition-all duration-150">
                                        Drugs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blogs" className="opacity-35 hover:opacity-100 transition-all duration-150">
                                        Blogs
                                    </Link>
                                </li>
                            </div>
                        </ul>

                        <ul>
                            <li>
                                <p className="text--2xl font-semibold mb-4">Find</p>
                            </li>
                            <div className="flex flex-col gap-3 text--lg">
                                <li>
                                    <Link to="/clinic" className="opacity-35 hover:opacity-100 transition-all duration-150">
                                        Clinics
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pharmacy" className="opacity-35 hover:opacity-100 transition-all duration-150">
                                        Pharmacy
                                    </Link>
                                </li>
                            </div>
                        </ul>
                        <ul>
                            <li>
                                <p className="text--2xl font-semibold mb-4">Contact</p>
                            </li>

                            <li>
                                <Link to="" className="opacity-35 hover:opacity-100 transition-all duration-150">
                                    331 Rhett Ville, Burleson <br /> 58799
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="opacity-35 hover:opacity-100 transition-all duration-150">
                                    1-449-709-9073 x5655
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="opacity-35 hover:opacity-100 transition-all duration-150">
                                    United State
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 mt-16 opacity-35">
                <hr />
                <div className="flex flex-col justify-between sm:flex sm:flex-row gap-4">
                    <p>Copyright © 2024 Healthify, inc. All Right Reserved</p>
                    <div className="flex flex-col gap-2 sm:flex sm:flex-row sm:gap-12 ">
                        <Link to="">Privacy Policy</Link>
                        <Link to="">FAQ</Link>
                        <Link to="">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
