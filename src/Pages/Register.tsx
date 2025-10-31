import React from 'react';

const Register = () => {
    return (
        <div className='bg-white dark:bg-gray-800'>
            <div className=" container mx-auto flex justify-center items-center w-screen h-screen p-5">
                <div className="flex flex-col lg:flex-row w-full min-h-screen">
                    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-tr from-black  to-emerald-700 justify-center items-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black opacity-20"></div>
                        <div className="relative z-10 px-10 text-center">
                            <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
                                <svg
                                    className="w-12 h-12 text-emerald-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                    />
                                </svg>
                            </div>
                            <h1 className="text-4xl font-bold text-white mb-4">Start your journey with us</h1>
                            <p className="text-white/80 text-lg mb-8">
                                Join our community and start exploring today                            </p>

                        </div>
                        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 border-white/30 rounded-full"></div>
                        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 border-white/30 rounded-full"></div>
                        <div className="absolute top-0 -right-20 w-80 h-80 border-4 border-white/30 rounded-full"></div>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
                        <div className="w-full max-w-md">
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome to FlowPOS!!</h2>
                                <p className="text-gray-600 mb-8">Fill in your details to get started</p>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="name"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="123@email.com"
                                        className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-tr from-black  to-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 cursor-pointer"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">or continue with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <button className="w-full inline-flex justify-center cursor-pointer py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                        <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        <span className="ml-2">Facebook</span>
                                    </button>

                                    <button className="w-full cursor-pointer inline-flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                        <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                        </svg>
                                        <span className="ml-2">Google</span>
                                    </button>
                                </div>
                            </div>

                            <p className="mt-8 text-center text-sm text-gray-600">
                                Already have an account?{" "}
                                <a href="/login" className="font-medium text-emerald-500 hover:text-emerald-600">
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;