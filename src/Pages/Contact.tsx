import React from 'react';
import { RiTwitterXFill } from 'react-icons/ri';
import { SlSocialFacebook, SlSocialLinkedin } from 'react-icons/sl';

const Contact = () => {
    return (
        <section className="my-6">
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-black font-sans">
                <div>
                    <h1 className="text-3xl font-extrabold">Let's Talk</h1>
                    <p className="text-sm text-gray-500 mt-3">
                        Have some big idea or brand to develop and need help? Then reach out, we'd love to hear about your project and provide help.
                    </p>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#10B981" viewBox="0 0 479.058 479.058">
                                        <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                                    </svg>
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href="https://veilmail.io/e/FkKh7o" className="text-emerald-500 text-sm ml-3">
                                    <small className="block">Mail</small>
                                    <strong>flowpos@bd.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Socials</h2>
                        <ul className="flex mt-3 space-x-4">

                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://www.facebook.com/">
                                    <SlSocialFacebook className='text-emerald-500 w-5 h-5'/> 
                                </a>
                            </li>

                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://www.linkedin.com/" target="_blank">
                                    
                                    <SlSocialLinkedin className='text-emerald-500 w-5 h-5'/>
                                </a>
                            </li>

                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://x.com/" target="_blank">
                                    <RiTwitterXFill  className='text-emerald-500 w-5 h-5'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <form className="ml-auto space-y-4">
                    <input type="text" placeholder="Name" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#10B981]" />
                    <input type="email" placeholder="Email" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#10B981]" />
                    <input type="text" placeholder="Subject" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#10B981]" />
                    <textarea placeholder="Message" rows={6} className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#10B981]"></textarea>
                    <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;