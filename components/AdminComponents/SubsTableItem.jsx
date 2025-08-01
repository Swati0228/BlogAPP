import React from 'react';

const SubsTableItem = ({ email, mongoId, date, deleteEmail }) => {
  const emailDate = new Date(date);

  return (
    <tr className='bg-white border-b text-left'>
      <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        {email ? email : "No Email"}
      </th>
      <td className='px-6 py-4 hidden sm:block'>
        {emailDate.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
      </td>
      <td
        className='px-6 py-4 cursor-pointer text-red-500 hover:underline'
        onClick={() => deleteEmail(mongoId)}
      >
        x
      </td>
    </tr>
  );
};

export default SubsTableItem;

