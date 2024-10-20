import { Link } from "react-router-dom";
import useAuth from "../../context/userContext/useAuth";
import React, { useState } from "react";

export const RegisterForm = () => {
  const { register, message, error, loading } = useAuth();
  const [hasKids, setHasKids] = useState<string | null>(null);
  const [hasPets, setHasPets] = useState<string | null>(null);

  const style1: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };
  const style2: React.CSSProperties = {
   paddingLeft: '10 px',
  };
  const style3: React.CSSProperties = {
    paddingRight: '10px'
  };


  const combinedStyles = { style1, style2, style3 };
  

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userData: RegisterUser = {
      username: (form.username as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      password: (form.password as HTMLInputElement).value,
    };

    register(userData);
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: `url('../../../uploads/sign up.jpg')` // Replace this with your actual image URL
      }}
    >
      <div className="container px-12">
        <div className="w-full max-w-md mx-auto">
          <form onSubmit={handleRegister} className="bg-black bg-opacity-50 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingRight: '10px', paddingLeft: '10px'}}>
            <h2 className="text-2xl font-bold mb-6 text-white text-center">Register</h2>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Username"
                disabled={loading}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email address"
                disabled={loading}
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                disabled={loading}
                required
              />
            </div>

            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2">Let us help you find the right pet:</h3>
              <p className="text-white mb-4">Tell us a bit about yourself so we can do a great job of finding a match for you!</p>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Kids</h4>
                <p className="text-white mb-2">Do you have children living in your household?</p>
                <div className="flex items-center mb-2">
                  <input 
                    type="radio" 
                    id="kids-yes" 
                    name="kids" 
                    value="yes" 
                    className="mr-2" 
                    onChange={() => setHasKids("yes")}
                    checked={hasKids === "yes"}
                  />
                  <label htmlFor="kids-yes" className="text-white">Yes</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="kids-no" 
                    name="kids" 
                    value="no" 
                    className="mr-2"
                    onChange={() => setHasKids("no")}
                    checked={hasKids === "no"}
                  />
                  <label htmlFor="kids-no" className="text-white">No</label>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Current pets</h4>
                <p className="text-white mb-2">Do you have any other pets?</p>
                <div className="flex items-center mb-2">
                  <input 
                    type="radio" 
                    id="pets-yes" 
                    name="pets" 
                    value="yes" 
                    className="mr-2"
                    onChange={() => setHasPets("yes")}
                    checked={hasPets === "yes"}
                  />
                  <label htmlFor="pets-yes" className="text-white">Yes</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="pets-no" 
                    name="pets" 
                    value="no" 
                    className="mr-2"
                    onChange={() => setHasPets("no")}
                    checked={hasPets === "no"}
                  />
                  <label htmlFor="pets-no" className="text-white">No</label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <Link
                to="/users/login"
                className="inline-block align-baseline font-bold text-sm text-white hover:text-blue-300"
              >
                Already have an account? Login!
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                disabled={loading}
              >
                Register
              </button>
            </div>
          </form>
          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{message}</span>
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};