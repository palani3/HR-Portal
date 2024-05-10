import React from "react";
import { Link } from "react-router-dom";
// import { IoMdArrowBack } from "react-icons/io";

export default function Forgetpassword() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        logo
        <div className="w-full text-center  rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight  text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forget Password?
            </h1>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Enter your email address to get the <br />
              password reset link.
            </p>
          </div>
          <form className="space-y-4 md:space-y-6 mt-4">
            <div className="text-start">
              <label
                htmlFor="email"
                className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full hover:delay-300 text-white bg-black p-3 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-600 dark:bg-blue-600  dark:hover:bg-white dark:hover:text-black dark:focus:ring-primary-800 "
            >
              Password Reset
            </button>

            <p className="mt-3 ">
                
              <Link to="/" className="text-center text-gray-500  ">
                Back to login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
