import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";

const Header = () => {
  const { logout } = useAuth();
  const totalQuantity = useAppSelector((state: RootState) => state.cart.totalQuantity);
  const handleLogout = () => {
    logout()
  };
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/dashboard">
        <h1 className="text-xl font-semibold">E-Commerce</h1>
      </Link>

      <div className="flex items-center space-x-6">
        <Link to="/cart" className="relative flex items-center space-x-2">
          <span>🛒</span>
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {totalQuantity}
            </span>
          )}
        </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
          >
            Logout
          </button>
      </div>
    </nav>
  );
};

export default Header;
