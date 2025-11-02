
import { GoMail } from 'react-icons/go';
import { RiTwitterXFill } from 'react-icons/ri';
import { SlSocialFacebook, SlSocialLinkedin } from 'react-icons/sl';

const Contact = () => {
    return (
        <section className="my-6 md:my-30">
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-black ">
                <div>
                    <h1 className="text-3xl font-bold ">Let's Talk</h1>
                    <p className="text-sm text-gray-500 mt-3">
                        Have some big idea or brand to develop and need help? Then reach out, we'd love to hear about your project and provide help.
                    </p>
                    <div className="mt-12">
                        <h2 className="text-lg font-bold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <GoMail className='text-emerald-500  w-5 h-5' />
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/" className="text-emerald-500 text-sm ml-3">
                                    <small className="block">Mail</small>
                                    <strong>flowpos@bd.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-lg font-bold">Socials</h2>
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
                    <input type="text" placeholder="Name" className="w-full rounded-md py-2.5 px-4 shadow-md border border-emerald-500 text-sm outline-[#10B981]" />
                    <input type="email" placeholder="Email" className="w-full rounded-md py-2.5 px-4 shadow-md border border-emerald-500 text-sm outline-[#10B981]" />
                    <input type="text" placeholder="Subject" className="w-full rounded-md py-2.5 px-4 shadow-md border border-emerald-500 text-sm outline-[#10B981]" />
                    <textarea placeholder="Message" rows={6} className="w-full rounded-md px-4 shadow-md border border-emerald-500 text-sm pt-2.5 outline-[#10B981]"></textarea>
                    <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-600 shadow-md font-semibold rounded-md text-sm px-4 py-2.5 w-full">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;