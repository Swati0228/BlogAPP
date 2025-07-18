'use client';;

import { assets } from '@/Assets/assets';  // Correct casing

import Image from 'next/image'
import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Page = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Technology',
    image: null,
    author: 'Swati Singh',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Check if image exists before sending the request
    if (!data.image) {
      toast.error('⚠️ Please upload an image!');
      return;
    }

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('image', data.image);

    try {
      
      const res = await axios.post('/api/blog', formData);

      if (res.data.success) {
        toast.success(res.data.msg || '✅ Blog posted successfully!');
        setData({
          title: '',
          description: '',
          category: 'Technology',
          image: null,
          author: 'Swati Singh',
        });
      } else {
        toast.error(`❌ Failed: ${res.data.error || 'Something went wrong!'}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      if (error.response) {
        toast.error(`⚠️ Error: ${error.response.data.error || 'Something went wrong!'}`);
      } else {
        toast.error('⚠️ Something went wrong while uploading.');
      }
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <form onSubmit={onSubmitHandler} className="space-y-6">
          {/* Upload Thumbnail */}
          <div>
            <p className="text-lg font-medium mb-2">Upload thumbnail</p>
            <label
              htmlFor="image"
              className="cursor-pointer inline-block border-2 border-dashed border-gray-300 rounded-md p-4"
            >
              <Image
                src={
                  data.image
                    ? URL.createObjectURL(data.image)
                    : assets.upload_area
                }
                alt="Upload Thumbnail"
                width={140}
                height={140}
                className="object-cover"
              />
            </label>
            <input
              type="file"
              id="image"
              hidden
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>

          {/* Blog Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              required
            />
          </div>

          {/* Blog Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Blog Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              value={data.description}
              onChange={handleChange}
              placeholder="Write content here"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              required
            ></textarea>
          </div>

          {/* Blog Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1">
              Blog Category
            </label>
            <select
              id="category"
              name="category"
              value={data.category}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            >
              <option value="Technology">Technology</option>
              <option value="Startup">Startup</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
