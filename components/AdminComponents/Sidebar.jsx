import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-slate-800 text-white flex flex-col p-6 shadow-lg z-50">
      <div className="text-2xl font-bold mb-8">
        Admin Panel
      </div>

      <nav className="flex flex-col gap-4">
        <Link href="/admin">
          <span className="hover:bg-slate-700 p-2 rounded cursor-pointer transition-all">Dashboard</span>
        </Link>
        <Link href="/admin/addProduct">
          <span className="hover:bg-slate-700 p-2 rounded cursor-pointer transition-all">Add Product</span>
        </Link>
        <Link href="/admin/blogList">
          <span className="hover:bg-slate-700 p-2 rounded cursor-pointer transition-all">Blog List</span>
        </Link>
        <Link href="/admin/subscriptions">
          <span className="hover:bg-slate-700 p-2 rounded cursor-pointer transition-all">Subscriptions</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
