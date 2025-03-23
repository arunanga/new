import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Nirmal Farm House</h1>
            <p className="text-xl md:text-2xl mb-8">Your perfect getaway for relaxation and recreation</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                to="/farmhouse"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition duration-300"
              >
                Book Farm House
              </Link>
              <Link
                to="/swimming-pool"
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Book Swimming Pool
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
            </div>
            <p className="mt-4 text-xl text-gray-600">
              Bypass Road, Backside Nirmal Sports Academy,<br />
              Nirmal, Telangana
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Farm House Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Farm House"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Farm House</h3>
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                  <p className="text-gray-600">24-hour booking available</p>
                </div>
                <p className="text-gray-600 mb-4">
                  ₹5,000 per day (Mon-Fri)<br />
                  ₹6,000 per day (Sat-Sun)
                </p>
                <Link
                  to="/farmhouse"
                  className="block text-center bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Swimming Pool Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Swimming Pool"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Swimming Pool</h3>
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-emerald-600 mr-2" />
                  <p className="text-gray-600">6:00 AM to 8:00 PM</p>
                </div>
                <p className="text-gray-600 mb-4">₹150 per hour</p>
                <Link
                  to="/swimming-pool"
                  className="block text-center bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;