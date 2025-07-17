import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

function Home() {
    return (
    <div className="bg-gray-50 min-h-screen">
    {/* Hero Section */}
    <div className="bg-gray-400 flex flex-col md:flex-row items-center gap-8 md:gap-40 p-6 md:p-12">
    
    {/* Image */}
    <img 
      src="/imageee1.jpg" 
      alt="Image" 
      className="w-full md:w-1/2 h-auto object-cover"
    />

    {/* Text Section */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold pt-4">Build. Grow. Succeed.</h1>
      <p className="pt-4 text-lg md:text-xl font-mono">We provide tools and support</p>
      <p className="text-lg md:text-xl font-mono">to turn your</p>
      <p className="text-lg md:text-xl font-mono">vision into reality.</p>

      <div className="pt-6">
        <Link to="Login">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transform transition duration-300 hover:bg-blue-600 hover:scale-105">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  </div>

  {/* Features Section */}
  <div className="py-10 px-4">
    <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Feature Card 1 */}
      <div className="bg-white rounded-lg shadow p-6 text-center transform transition duration-300 hover:bg-blue-50 hover:scale-105">
        <div className="text-4xl mb-4">⭐</div>
        <h3 className="text-xl font-semibold mb-2">Feature One</h3>
        <p className="text-gray-600">Delivering top-notch speed to enhance user experience and efficiency.</p>
      </div>

      {/* Feature Card 2 */}
      <div className="bg-white rounded-lg shadow p-6 text-center transform transition duration-300 hover:bg-blue-50 hover:scale-105">
        <div className="text-4xl mb-4">⚙️</div>
        <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
        <p className="text-gray-600">Connect effortlessly with your existing tools and platforms to streamline your workflow.</p>
      </div>

      {/* Feature Card 3 */}
      <div className="bg-white rounded-lg shadow p-6 text-center transform transition duration-300 hover:bg-blue-50 hover:scale-105">
        <div className="text-4xl mb-4">💬</div>
        <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
        <p className="text-gray-600">Get expert assistance anytime to keep your projects running smoothly without interruption.</p>
      </div>
    </div>
  </div>
</div>
  );
}

export default Home;