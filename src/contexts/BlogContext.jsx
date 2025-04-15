import { createContext, useContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [tag, setTag] = useState('');
    const [topic, setTopic] = useState('');
    const [disease, setDisease] = useState('');
    const [author, setAuthor] = useState('');
    const [search, setSearch] = useState('');

    return (
        <BlogContext.Provider
            value={{
                tag,
                setTag,
                topic,
                setTopic,
                search,
                setSearch,
                disease,
                setDisease,
                author,
                setAuthor,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => useContext(BlogContext);
