'use client';

import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Header = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    try {
      const response = await axios.post('/api/email', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail('');
      } else {
        toast.error('Error');
      }
    } catch (err) {
      toast.error('Server error');
    }
  };

  return (
    <div className="py-8 px-5 md:px-16 lg:px-28">
      {/* Header Top Bar */}
      <div className="flex justify-between items-center">
        <span className="font-semibold text-2xl sm:text-3xl tracking-tight">Posts</span>

        <div className="flex justify-end">
          <Link href="http://localhost:3000/admin">
            <button className="relative inline-flex items-center gap-2 px-5 py-2 border-2 border-black font-semibold bg-white group hover:bg-black hover:text-white transition duration-200 rounded-md">
              Get started
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
              <span className="absolute bottom-0 right-0 w-full h-full bg-black -z-10 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-200"></span>
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center my-14">
        <h1 className="text-3xl sm:text-5xl font-semibold leading-snug text-gray-900">
          Hi <span className="inline-block animate-waving-hand">👋</span> What's up?
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-sm sm:text-lg text-gray-700">
          My name is <strong>Swati</strong>. I love <strong>UI/UX</strong> and frontend, but I also understand backend. So... that makes me a fullstack. In this blog, I talk about technology, and also about deeper topics.
        </p>

        {/* Subscription Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between items-center max-w-md mx-auto mt-10 gap-3 scale-90 sm:scale-100"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your better email"
            className="w-full px-4 py-3 border-b border-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="border border-black bg-black text-white px-5 py-3 rounded-md hover:bg-white hover:text-black transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
