import { BlogCard } from '../../component/BlogCard';

export function BlogList({ blogs, onReset }) {
    if (blogs.length === 0) {
        return (
            <div className="w-full text-center py-10 text-zinc-500 text-lg">
                <h1 className="text-5xl mb-4">404 Not Found</h1>
                <p>No Blog found.</p>
                <button onClick={onReset} className="mt-4 underline text-blue-500">
                    Reset Search
                </button>
            </div>
        );
    }

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
            {blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
}
