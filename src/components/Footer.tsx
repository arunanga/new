import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Nirmal Farm House</h3>
            <div className="flex items-start space-x-2 mb-2">
              <MapPin className="h-5 w-5 mt-1" />
              <p>Bypass Road, Backside Nirmal Sports Academy, Nirmal, Telangana</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/farmhouse" className="hover:text-emerald-400">Farm House Booking</Link>
              </li>
              <li>
                <Link to="/swimming-pool" className="hover:text-emerald-400">Swimming Pool Booking</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+919876543210" className="hover:text-emerald-400">+91 98765 43210</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@nirmalfarmhouse.com" className="hover:text-emerald-400">
                  info@nirmalfarmhouse.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Nirmal Farm House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;