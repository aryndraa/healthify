import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export const ExpClinic = () => {
    const navigate = useNavigate();
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 100 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className="flex flex-col xl:grid xl:grid-cols-6  gap-4  mb-4">
            <div className="items   xl:col-span-2">
                <div onClick={() => navigate('/clinic')} className="BOX2 bg-[#213170] w-screen flex flex-col h-screen justify-between p-8 group   ">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between ">
                            <p className="text-3xl 2xl:text-5xl font-semibold text-white  ">Explore Clinics Nearby</p>
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
                        <p className="text-white  lg:text-lg text-base">Need medical checkup?, we make it easy to find nearby clinics for you</p>
                    </div>
                    <div className="text-end">
                        <p className="text--7xl font-semibold text-white">12K+</p>
                        <p className="  lg:text-lg text-base text-white">Clinics near you!</p>
                    </div>
                </div>
            </div>
            <div className="items   xl:col-span-2">
                <div onClick={() => navigate('/clinic')} className="BOX2  flex flex-col h-screen w-screen justify-between bg-Clinic2 bg-cover   ">
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
                        <div className="flex flex-col  bg-white rounded-[40px] p-[22px]" onClick={() => navigate('/clinic/1')}>
                            <div className="flex items-center justify-between ease-in-out duration-700 group-hover:mb-6">
                                <div>
                                    <p className="lg:text-2xl text-lg  font-semibold">Nusa Medica Clinic</p>
                                    <p className="text-base">General Medical Clinics</p>
                                </div>
                                <div>
                                    <p className="lg:text-2xl text-lg max-lg:hidden font-medium">2KM</p>
                                </div>
                            </div>
                            <p className=" lg:text-lg text-base font-medium max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-700 ease-in-out group-hover:max-h-[200px] group-hover:opacity-100  ">
                                “Nusa Medica Clinic is one of the premier dental clinics located in East Denpasar.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items   xl:col-span-2">
                <div onClick={() => navigate('/clinic/4')} className="BOX2  flex flex-col h-screen w-screen justify-between bg-vaelclinic bg-cover    ">
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
                                    <p className="lg:text-2xl text-lg  font-semibold">Mata Bali Clinic</p>
                                    <p className="text-base">General Medical Clinics</p>
                                </div>
                                <div>
                                    <p className="lg:text-2xl text-lg max-lg:hidden font-medium">2KM</p>
                                </div>
                            </div>
                            <p className=" lg:text-lg text-base font-medium max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-700 ease-in-out group-hover:max-h-[200px] group-hover:opacity-100  ">
                                “Clinic mata bali is one of the General Medical Clinics located in South Denpasar.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
