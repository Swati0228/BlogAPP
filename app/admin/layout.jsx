import Sidebar from "@/components/AdminComponents/Sidebar";
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <ToastContainer theme="dark" />
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6 min-h-screen">
        {children}
      </main>
    </div>
  );
}
