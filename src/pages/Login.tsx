import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        logo
        <div className="w-full  md:mt-0  sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1> */}
          </div>
          <form className="space-y-4 md:space-y-6">
            <div>
                <label htmlFor="email" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
            </div>
            <div>
                <label htmlFor="password" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="*********" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="flex items-center justify-end">
                <Link to="reset" className="text-sm font-medium hover:underline text-black hover:text-red-600 dark:text-white">Forget password</Link>
            </div>
            <button type="submit" className="w-full text-white hover:delay-300 bg-black p-3 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-600 dark:bg-blue-600  dark:hover:bg-white dark:hover:text-black dark:focus:ring-primary-800 ">Login</button>
            {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">Don’t have an account yet?</p> */}
          </form>
        </div>
      </div>
    </section>
  );
}
