import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-col gap-2">
      {profiles.map((p) => (
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-purple-700 bg-red-500" : "";
          }}
          key={p}
          to={`/profiles/${p}`}
        >
          profile {p}
        </NavLink>
      ))}
      {/* // Outlet is used to render the child routes */}
      <p className="bg-cyan-700">Child route: </p>
      <Outlet />
    </div>
  );
}

export default ProfilesPage;
