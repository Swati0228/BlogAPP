'use client';

import SubsTableItem from '@/components/AdminComponents/SubsTableItem';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('/api/email');
      setEmails(response.data.emails);
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete('/api/email', {
      params: { id: mongoId },
    });

    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    } else {
      toast.error('Error');
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:px-0 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        All Subscriptions
      </h1>

      <div className="relative h-[80vh] max-w-[600px] w-full overflow-auto border rounded shadow mx-auto">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => (
              <SubsTableItem
                key={index}
                mongoId={item._id}
                deleteEmail={deleteEmail}
                email={item.email}
                date={item.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
