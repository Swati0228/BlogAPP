import { blog_data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import axios from 'axios';

const BlogList = () => {

    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/api/blog');
            setBlogs(response.data.blogs);
            console.log(response.data.blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false); // Set loading to false after fetch
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show loading while data is fetching
    }

    return (
        <div>
            <div className='flex justify-center gap-6 sm:gap-8 my-10'>
                <button onClick={() => setMenu('All')} className={menu === "All" ? 'text-blue-700 rounded-full bg-blue-100 px-3 py-1' : ""}>All</button>
                <button onClick={() => setMenu('Technology')} className={menu === "Technology" ? 'text-blue-700 rounded-full px-3 py-1 bg-blue-100' : ""}>Technology</button>
                <button onClick={() => setMenu('Thoughts')} className={menu === "Thoughts" ? 'text-blue-700 rounded-full px-3 py-1 bg-blue-100' : ""}>Thoughts</button>
                <button onClick={() => setMenu('Lifestyle')} className={menu === "Lifestyle" ? 'text-blue-700 rounded-full px-3 py-1 bg-blue-100' : ""}>Lifestyle</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blogs && blogs.length > 0 ? (
                    blogs.filter((item) => menu === "All" ? true : item.category === menu)
                        .map((item, index) => {
                            return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
                        })
                ) : (
                    <div>No blogs available</div> // If no blogs are found
                )}
            </div>
        </div>
    );
};

export default BlogList;
