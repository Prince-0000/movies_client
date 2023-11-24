import React from 'react';
import { Outlet } from 'react-router-dom';
import { sidebarLinks } from '../../data/dashboard-links';
import SideLinks from '../core/SideLinks';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { result } = useSelector((state) => state.disease);

  console.log(result);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[222px] mt-[3.5rem] min-h-[calc(100vh-3.5rem)] flex flex-col gap-[10px] bg-richblack-800">
        <div className="w-[222px] mt-20 flex flex-col gap-[50px] justify-center items-stretch">
          {sidebarLinks.map((link) => (
            <SideLinks key={link?.id} link={link} iconName={link.icon} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow bg-richblack-900 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
