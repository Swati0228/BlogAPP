'use client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogTableComponent from '@/components/AdminComponents/BlogTableComponent';

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
  };

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete('/api/blog', {
      params: {
        id: mongoId,
      },
    });
    toast.success(response.data.msg);
    fetchBlogs(); // update list after deletion
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-2xl font-semibold text-gray-800">ALL BLOGS</h1>

      <div className="flex justify-center mt-4">
        <div className="relative h-[80vh] w-full max-w-[850px] overflow-x-auto border rounded-lg shadow-sm">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-100 text-xs uppercase text-gray-500">
              <tr>
                <th scope="col" className="px-6 py-3 text-left">
                  Author Name
                </th>
                <th scope="col" className="px-6 py-3 text-left">
                  Blog Title
                </th>
                <th scope="col" className="px-6 py-3 text-left">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((item, index) => (
                <BlogTableComponent
                  key={index}
                  mongoId={item._id}
                  title={item.title}
                  author={item.author}
                  date={item.date}
                  deleteBlog={deleteBlog}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
