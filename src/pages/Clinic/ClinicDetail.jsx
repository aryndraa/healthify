import { FacilityInfo } from '../../component/Clinic/FacilityInfo.jsx';
import { ServiceCard } from '../../component/Clinic/ServiceCard.jsx';
import { MoreLink } from '../../component/MoreLink.jsx';
import { PharmacyClinicCard } from '../../component/PharmacyClinicCard.jsx';
import { useParams } from 'react-router-dom';
import { clinics } from './clinicData.js';

export function ClinicDetail() {
    const { id } = useParams();

    const detail = clinics.find(p => p.id === parseInt(id));

    const randomClinic = clinics
        .filter(p => p.id !== parseInt(id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    return (
        <>
            <section className=" mb-2 lg:mb-4">
                <div className="lg:flex gap-4 mb-2 lg:mb-4">
                    <img src={detail.images[0]} alt="" className="hidden lg:block w-[420px] 2xl:w-[549px]  object-cover rounded-xxl" />
                    <iframe
                        title="Google Maps"
                        className="lg:hidden w-full h-[210px] mb-6 rounded-lg lg:rounded-xxl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3085457989765!2d115.20722717502803!3d-8.671614191356173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2406bdf12c3ad%3A0xe52b73004a96f7df!2sDyven%20Pharmacy!5e0!3m2!1sen!2sid!4v1709400000000!5m2!1sen!2sid"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="flex-1  ">
                        <div className="bg-white rounded-xl lg:rounded-xxl p-4 lg:p-8 2xl:p-12 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between mb-2 lg:mb-4">
                            <div className="flex flex-col gap-2 lg:gap-4 2xl:gap-6 lg:max-w-[60%]">
                                <h1 className="text-2xl lg:text-3xl 2xl:text-5xl font-semibold">{detail.name}</h1>
                                <p className="text-sm lg:text-base 2xl:text-lg">{detail.address}</p>
                            </div>
                            <div className="flex justify-between lg:justify-normal gap-4 items-center h-fit ">
                                <span className="text-sm lg:text-lg 2xl:text-2xl font-medium">06:00 - 22:00</span>
                                <span className="text-sm lg:text-lg 2xl:text-2xl font-medium px-6 py-1 text-white bg-secondary rounded-full ">Open</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2  items-stretch gap-2 lg:gap-4">
                            <img
                                src={detail.images[1]}
                                alt=""
                                className="md:min-w-full lg:max-w-[50%] md:min-h-48 h-[140px] lg:h-[260px] 2xl:h-[332px] rounded-xl lg:rounded-xxl flex-1  object-cover"
                            />
                            <img
                                src={detail.images[2]}
                                alt=""
                                className="md:min-w-full lg:max-w-[50%] md:min-h-48 h-[140px] lg:h-[260px] 2xl:h-[332px] rounded-xl lg:rounded-xxl flex-1 object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-4">
                    <div className="lg:w-[420px] 2xl:w-[549px]">
                        <h2 className="mb-2 lg:mb-3 2xl:mb-4 bg-white p-4 lg:py-5 lg:px-6 2xl:p-8 text-lg lg:text-xl 2xl:text-2xl font-semibold lg:font-semibold rounded-xl lg:rounded-xxl">
                            Clinic Facility
                        </h2>
                        <div className="grid grid-cols-2 gap-2 lg:gap-y-3 2xl:gap-3">
                            {detail.facilities.map((item, index) => (
                                <FacilityInfo key={index} info={item} />
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <iframe
                            title="Google Maps"
                            className="hidden lg:block w-full h-full rounded-lg lg:rounded-xxl"
                            src={detail.address_link}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="mb-6 lg:mb-12">
                <div className="p-4 lg:p-6 lg:px-8 2xl:p-8 bg-white rounded-xl lg:rounded-full mb-2 lg:mb-4">
                    <h2 className="text-lg lg:text-xl 2xl:text-2xl font-semibold">Clinics Services</h2>
                </div>
                <div className="flex overflow-scroll lg:overflow-hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
                    {detail.service.map((item, index) => (
                        <ServiceCard key={index} title={item.name} description={item.description} no={index + 1} />
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <MoreLink name={'More Clinics'} />
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-2 lg:mt-4 gap-2 lg:gap-4">
                    {randomClinic.map((item, index) => (
                        <PharmacyClinicCard name={item.name} type={item.type} id={`/clinic/${item.id}`} img={item.images[0]} time={item.time} />
                    ))}
                </div>
            </section>
        </>
    );
}
