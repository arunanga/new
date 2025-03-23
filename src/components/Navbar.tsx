import React from 'react';
import { Link } from 'react-router-dom';
import { Home, School as Pool, Camera, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Nirmal Farm House</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/farmhouse" className="text-gray-700 hover:text-emerald-600 flex items-center">
              <span>Farm House</span>
            </Link>
            <Link to="/swimming-pool" className="text-gray-700 hover:text-emerald-600 flex items-center">
              <Pool className="h-5 w-5 mr-1" />
              <span>Swimming Pool</span>
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-emerald-600 flex items-center">
              <Camera className="h-5 w-5 mr-1" />
              <span>Gallery</span>
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600 flex items-center">
              <Phone className="h-5 w-5 mr-1" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/farmhouse"
              className="text-gray-700 hover:text-emerald-600 block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Farm House
            </Link>
            <Link
              to="/swimming-pool"
              className="text-gray-700 hover:text-emerald-600 block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Swimming Pool
            </Link>
            <Link
              to="/gallery"
              className="text-gray-700 hover:text-emerald-600 block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-emerald-600 block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;