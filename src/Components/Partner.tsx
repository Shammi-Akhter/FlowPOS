
const Partner = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 lg:px-16">
            <div className="container mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-16">
                    <div className="flex justify-center">
                        <img
                            src="/images/partner1.avif"
                            alt="POS Support Team"
                            className="rounded-2xl shadow-md w-full max-w-md md:max-w-lg object-cover"
                        />
                    </div>
                   <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-emerald-500">
                            Your trusted partner in growth.
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our POS platform helps to simplify
                            sales, manage inventory, and serve customers faster — all in one
                            powerful dashboard. With 24/7 support, you’re never alone in running
                            your business.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition bg-gradient-to-r from-black to-emerald-500"
                        >
                            Meet our expert team →
                        </a>
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:pl-10 pl-0 ">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-emerald-500">
                            Empowering Your Business Through Seamless Collaboration
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our dedicated support and smart POS solutions work hand-in-hand with your team to simplify operations, boost efficiency, and drive long-term success.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition bg-gradient-to-r from-black to-emerald-500"
                        >
                            Meet our expert team →
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <img src="/images/partner2.jpg"
                            alt="POS Support Team"
                            className="rounded-2xl shadow-md w-full max-w-md md:max-w-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;