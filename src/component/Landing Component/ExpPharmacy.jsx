import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export const ExpPharmacy = () => {
    const navigate = useNavigate();
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 100 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className="flex flex-col xl:grid xl:grid-cols-6  gap-4  mb-4">
            <div className="items col-start-5  xl:col-span-2">
                <div onClick={() => navigate('/pharmacy')} className="BOX2 bg-[#C5E5FF] flex flex-col w-screen h-screen justify-between p-8 group  ">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between ">
                            <p className="text-3xl 2xl:text-5xl font-semibold  ">Explore Nearest Pharmacy</p>
                            <svg
                                className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-white  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="black"
                                    className=" group-hover:fill-[#C5E5FF]"
                                    fillRule="evenodd"
                                    d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <p className=" lg:text-lg text-base">Need a quick drugs or herbal?, Discover more listed pharmacy near you</p>
                    </div>
                    <div className="text-end">
                        <p className="text--7xl font-semibold ">3K+</p>
                        <p className=" lg:text-lg text-base ">Pharmacy near you!</p>
                    </div>
                </div>
            </div>
            <div className="items col-start-3  xl:col-span-2">
                <div onClick={() => navigate('/pharmacy/12')} className="BOX2  flex flex-col h-screen w-screen  justify-between bg-Jinx bg-cover   ">
                    <div className="p-4 lg:p-8 flex flex-col justify-between h-screen hover:bg-blue-300 hover:bg-opacity-40 rounded-[40px] group">
                        <svg
                            className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] self-end transition-transform duration-300 bg-white  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="black"
                                className=" group-hover:fill-[#C5E5FF]"
                                fillRule="evenodd"
                                d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <div className="flex flex-col bg-white rounded-[40px] p-[22px]">
                            <div className="flex items-center  justify-between ease-in-out duration-700 group-hover:mb-6">
                                <div>
                                    <p className="lg:text-2xl text-xl font-semibold">Sekar Pharmacy</p>
                                    <p className="text-base">General Medical Clinics</p>
                                </div>
                                <div>
                                    <p className="lg:text-2xl text-xl max-lg:hidden font-medium">2KM</p>
                                </div>
                            </div>
                            <p className="lg:text-lg text-base font-medium max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-700 ease-in-out group-hover:max-h-[200px] group-hover:opacity-100  ">
                                “Sekar Pharmacy is one of the premier Hospital Pharmacy located in East Denpasar.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items col-start-1 xl:col-span-2">
                <div onClick={() => navigate('/pharmacy/13')} className="BOX2  flex flex-col h-screen w-screen justify-between bg-Dyven bg-cover   ">
                    <div className="p-4 lg:p-8 flex flex-col justify-between h-screen hover:bg-blue-300 hover:bg-opacity-40 rounded-[40px] group">
                        <svg
                            className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px] self-end transition-transform duration-300 bg-white  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="black"
                                className=" group-hover:fill-[#C5E5FF]"
                                fillRule="evenodd"
                                d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <div className="flex flex-col  bg-white rounded-[40px] p-[22px]">
                            <div className="flex items-center justify-between ease-in-out duration-700 group-hover:mb-6">
                                <div>
                                    <p className="lg:text-2xl text-xl font-semibold">Dorea Pharmacy</p>
                                    <p className="text-base">General Medical Clinics</p>
                                </div>
                                <div>
                                    <p className="lg:text-2xl text-xl max-lg:hidden font-medium">2KM</p>
                                </div>
                            </div>

                            <p className="lg:text-lg text-base font-medium max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-700 ease-in-out group-hover:max-h-[200px] group-hover:opacity-100  ">
                                “Dorea Pharmacy is one of the premier Pharmacy located in South Denpasar.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
