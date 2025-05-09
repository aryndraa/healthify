import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { blogData } from '../../pages/Blog/blogdta';
import { BlogCard } from '../BlogCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Blogs = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const randomBlogs = blogData
        .filter(b => b.id !== parseInt(id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const randomBlogs1 = blogData
        .filter(b => b.id !== parseInt(id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 1);

    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 100 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className=" flex  flex-col gap-4 ">
            <div className="items">
                <div
                    onClick={() => navigate('/blogs')}
                    className=" flex justify-between min-[1441px]:max-w-[1920px] w-screen py-[32px] px-[48px] bg-white rounded-[40px] xl:rounded-full items-center gap-2 group  "
                >
                    <p className="text-3xl 2xl:text-5xl font-semibold">Explore Our Blogs</p>
                    <svg
                        className="rounded-full p-[10px] w-[50px] h-[50px] md:w-[72px] md:h-[72px] md:p-[20px]  transition-transform duration-300 bg-[#C5E5FF]  group-hover:border-solid group-hover:border-[#C5E5FF]  group-hover:border-[3px] group-hover:rotate-45  group-hover:bg-[#213170] "
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
            </div>
            <div className="w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4  mt-4 ">
                {randomBlogs.map(blog => (
                    <div className=" h-full">
                        <BlogCard key={blog.id} blog={blog} />
                    </div>
                ))}

                {randomBlogs1.map(blog => (
                    <div className=" block xl:hidden h-full">
                        <BlogCard key={blog.id} blog={blog} />
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
