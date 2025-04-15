export const MapsView = ({ map }) => {
    return (
        <>
            <iframe
                title="Google Maps"
                className="w-full h-[210px] 2xl:h-[578px] lg:h-[460px] rounded-lg lg:rounded-xxl"
                src={map}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
    );
};
