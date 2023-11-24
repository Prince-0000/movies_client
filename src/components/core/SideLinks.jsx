import React from 'react';

import { TbZodiacCancer } from "react-icons/tb";
import { GiKidneys } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { GiLiver } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";


import { NavLink, matchPath } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SideLinks = ({ link, iconName }) => {
  const location = useLocation();

  let Icon;

  switch (iconName) {
    case 'FaHeartbeat':
      Icon = FaHeartbeat;
      break;
    case 'GiKidneys':
      Icon = GiKidneys;
      break;
    case 'GiLiver':
      Icon = GiLiver;
      break;
    case 'FaProjectDiagram':
      Icon = FaProjectDiagram;
      break;
    case 'TbZodiacCancer':
        Icon = TbZodiacCancer;
        break;
    default:
      Icon = null;
  }

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <NavLink
      to={link.path}
      className={`  shadow-md shadow-richblack-700 rounded-md flex gap-[20px] text-center w-[222px] h-[38px]  ${
        matchRoute(link.path) ? ' bg-richblack-600 transition-all duration-100 font-semibold text-richblack-900' : 'bg-opacity-0 text-richblack-300'
      }`}
    >
      <span
        className={`h-full  w-[0.15rem] bg-richblack-900 ${
          matchRoute(link.path) ? 'opacity-100' : 'opacity-0 '
        }`}
      ></span>

      <div className='flex gap-[6px] text-[14px] leading-[22px] font-medium items-center'>
        {Icon && <Icon />}
        <span>{link?.name}</span>
      </div>

      
    </NavLink>
  );
};

export default SideLinks;
