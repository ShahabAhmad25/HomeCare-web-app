import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen = false, toggleSidebar = () => {} }) {
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-blue-700 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between p-4 border-b border-blue-600">
          <h2 className="text-2xl text-white font-bold">Menu</h2>
          <button
            className="text-white p-2"
            aria-label="Close menu"
            onClick={toggleSidebar}
          >
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" onClick={toggleSidebar} className="text-white block hover:text-blue-200 py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleSidebar} className="text-white block hover:text-blue-200 py-2">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={toggleSidebar} className="text-white block hover:text-blue-200 py-2">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={toggleSidebar} className="text-white block hover:text-blue-200 py-2">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
