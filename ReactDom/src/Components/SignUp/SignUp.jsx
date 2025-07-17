import React from "react";
function SignUp() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
          
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default SignUp;