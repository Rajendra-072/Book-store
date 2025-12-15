import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

function Logout() {
  const [AuthUser, setAuthUseer] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUseer(null);
      localStorage.removeItem("users");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      toast.error("Error : " + err.message);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
