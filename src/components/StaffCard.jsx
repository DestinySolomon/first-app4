import React from 'react';

function StaffCard({ staff }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 text-center border border-gray-100 max-w-sm">
      <img
        src={staff.photo}
        alt={staff.name}
        className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-500 shadow-md"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        {staff.name}
      </h2>
      <p className="text-indigo-600 font-medium">{staff.position}</p>
      <p className="text-gray-500 mt-2 text-sm">{staff.address}</p>

      <div className="mt-4 flex justify-center gap-3">
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all text-sm">
          Message
        </button>
        <button className="border border-indigo-500 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all text-sm">
          View
        </button>
      </div>
    </div>
  );
}

export default StaffCard;