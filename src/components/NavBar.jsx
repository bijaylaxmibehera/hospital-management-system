import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const getStyle=({isActive})=>({
        color:isActive?"#FFFF00":"",
        fontWeight:isActive?"500":"",
        fontSize:isActive?"18px":"",
        textDecoration:isActive?"underline":""
    })
  return (
    <>
      <div className="flex justify-between items-center px-4 bg-blue-600 text-white h-[10vh]">
        <div className="text-xl font-medium cursor-pointer font-sans w-[40%]">
          <NavLink to="/">Hospital Management System</NavLink>
        </div>
        <nav className="flex justify-evenly text-lg font-[400] w-[60%]">
          <NavLink to="/" style={getStyle}>patients</NavLink>
          <NavLink to="/wards"style={getStyle}>wards</NavLink>
          <NavLink to="/hospital" style={getStyle}>hospital</NavLink>
        </nav>
      </div>
    </>
  );
};
