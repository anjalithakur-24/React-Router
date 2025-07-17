import React from "react";
function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center">
      
      {/* Company Info */}
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold">Your Company</h2>
        <p className="text-gray-400">© 2024 All rights reserved.</p>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <a href="#home" className="text-gray-400 hover:text-white transition">Home</a>
        <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
        <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
        <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
      </div>

    </div>
  </div>
</footer>

 );
  }
  
  export default Footer;