import React from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';

const BlogTableComponent = ({ title,author,date ,deleteBlog,mongoId}) => {
  const BlogDate=new Date(date);
  return (
    <tr className="bg-white border-b">
      <th
  scope="row"
  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
>
  <div className="flex items-center gap-2 sm:gap-3">
    <Image
      src={assets.profile_icon}
      alt="Author"
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
    />
    <p className="text-sm sm:text-base text-gray-800 whitespace-normal break-words max-w-[80px] sm:max-w-none">
      {author ? author : "No author"}
    </p>
  </div>
</th>

      <td className="px-6 py-4">
        {title ? title : 'no title'}
      </td>
      <td className="px-6 py-4">
       {BlogDate.toDateString()}
      </td>
      <td onClick={()=> deleteBlog(mongoId)}
        
      className="px-6 py-4">
        x
      </td>
    </tr>
  );
};

export default BlogTableComponent;




