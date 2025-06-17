
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  // Optional: Skip rendering while loading Auth0 session
  if (isLoading) return null;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <h1 className="text-richblack-100 font-bold text-lg">SortVision.com</h1>

      <div className="flex items-center gap-x-4">
        {isAuthenticated && <p className="text-richblack-100">{user.name}</p>}

        {!isAuthenticated && (
          <button
            onClick={() =>
              loginWithRedirect({
                appState: { returnTo: "/dashboard" }, // Redirect after login
              })
            }
            className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
          >
            Login
          </button>
        )}

        {isAuthenticated && (
          <>
            <Link to="/dashboard">
              <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                Dashboard
              </button>
            </Link>

            <button
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo: "https://richadas123.github.io/sort/",
                  },
                })
              }
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};npm

export default Navbar;







