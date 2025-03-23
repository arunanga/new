import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-emerald-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Phone</h2>
              <a href="tel:+919876543210" className="text-gray-600 hover:text-emerald-600">
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-emerald-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Email</h2>
              <a href="mailto:info@nirmalfarmhouse.com" className="text-gray-600 hover:text-emerald-600">
                info@nirmalfarmhouse.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Address</h2>
              <p className="text-gray-600">
                Bypass Road, Backside Nirmal Sports Academy,<br />
                Nirmal, Telangana
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;