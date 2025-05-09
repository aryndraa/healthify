import patient from '../../assets/patient.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export const Feature = () => {
    const navigate = useNavigate();
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 h-full w-full  sm:grid-cols-2 xl:grid-cols-4 gap-4 "
        >
            <div className="items h-full self-stretch group " onClick={() => navigate('/clinic')}>
                <div className="BOX  hover:bg-[#213170] min-h-[350px]  flex flex-col justify-between w-full h-full hover:text-white  transition-all duration-300">
                    <div className="flex justify-between   ">
                        <p className="lg:text-2xl 2xl:text-4xl text-2xl  font-semibold w-1/2  ">Clinics Listed</p>
                        <svg
                            className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-[#C5E5FF]  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-white "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="black"
                                className=" group-hover:fill-[#213170]"
                                fillRule="evenodd"
                                d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p className="2xl:text-7xl  text-5xl font-semibold ">12K</p>
                        <p className="lg:text-lg text-base  ">
                            <strong className="">12K+</strong> Clinics have been listed into our services. Helping you find the perfect one
                        </p>
                    </div>
                </div>
            </div>

            <div className="items h-full self-stretch  group" onClick={() => navigate('/pharmacy')}>
                <div className="BOX  hover:bg-[#213170] min-h-[350px] flex flex-col justify-between  w-full h-full hover:text-white  transition-all duration-300">
                    <div className="flex justify-between ">
                        <p className="lg:text-2xl 2xl:text-4xl text-2xl  font-semibold w-1/2  ">Supported Pharmacy</p>
                        <svg
                            className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-[#C5E5FF]  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-white "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="black"
                                className=" group-hover:fill-[#213170]"
                                fillRule="evenodd"
                                d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p className="2xl:text-7xl  text-5xl font-semibold ">16K</p>
                        <p className="lg:text-lg text-base  ">
                            <strong className="">12K+</strong> Pharmacys have been listed into our services. Helping you find the perfect one
                        </p>
                    </div>
                </div>
            </div>

            <div className="items h-full self-stretch ">
                <div className="BOX min-h-[350px]  w-full h-full flex flex-col justify-between">
                    <div className="flex justify-between ">
                        <p className="lg:text-2xl 2xl:text-4xl text-2xl  font-semibold w-1/2  ">Our Patient</p>
                    </div>

                    <div className=" flex flex-col justify-between">
                        <img src={patient} alt="patient image" width={200} style={{ backgroundColor: 'white' }} className="my-4" />
                        <p className="lg:text-lg text-base  ">
                            Over <strong className="">200K+</strong> Patient we help to finding their best choice for healthy need
                        </p>
                    </div>
                </div>
            </div>

            <div className="items h-full self-stretch   group" onClick={() => navigate('/disease')}>
                <div className="BOX  hover:bg-[#213170] min-h-[350px]  flex flex-col justify-between  w-full h-full hover:text-white  transition-all duration-300">
                    <div className="flex justify-between ">
                        <p className="lg:text-2xl 2xl:text-4xl text-2xl  font-semibold w-1/2  ">Find More</p>
                        <svg
                            className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-[#C5E5FF]  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-white "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="black"
                                className=" group-hover:fill-[#213170]"
                                fillRule="evenodd"
                                d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <p className="lg:text-lg text-base  ">Browse Disease or find drugs on your nearest pharmacy!</p>
                </div>
            </div>
        </motion.div>
    );
};
