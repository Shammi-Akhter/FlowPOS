

const Pricing = () => {
    return (
        <div className="bg-white pt-20" id="pricing md:mb-32">
            <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8 mb-10">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    
                    <p className="mt-2 text-4xl font-bold tracking-tight text-black ">
                         <span className='bg-clip-text text-transparent bg-gradient-to-r from-black to-emerald-500'>Find the right plan for your</span>  business!!
                    </p>
                </div>
            </div>          
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-6">
                <div className="mt-16 flex justify-center">
                    <div className="flex items-center">
                        <button
                            className="bg-emerald-500 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                            role="switch"
                            aria-checked="true"
                        >
                            <span
                                aria-hidden="true"
                                className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            ></span>
                        </button>
                        <span className="ml-3 text-sm">
                            <span className="font-medium text-gray-900 ">
                                Annual billing
                            </span>{" "}
                            <span className="text-gray-500 ">
                                (Save 45%)
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-8">
                    <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
                        <div className="p-8 sm:p-10">
                            <h3
                                className="text-lg font-semibold leading-8 tracking-tight text-emerald-500 "
                                id="tier-basic"
                            >
                                Basic (For individuals)
                            </h3>
                            <div className="mt-4 flex items-baseline text-5xl font-semibold tracking-tight text-gray-900 ">
                                $49
                                 <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500 ">
                                    /month
                                </span>
                            </div>
                            <p className="mt-6 text-base leading-7 text-gray-600 ">
                                Designed for essential day-to-day needs for independent retailers.
                            </p>
                        </div>

                        <div className="flex flex-1 flex-col p-2">
                            <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                                <ul className="space-y-6">
                                    {[
                                        "Retail POS",
                                        "Inventory Management",
                                        "24/7 Chat Support",
                                        "Onboarding and professional service options",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-6 w-6 text-teal-600 "
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <p className="ml-3 text-sm leading-6 text-gray-600">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        href="#"
                                        className="inline-block w-full rounded-lg bg-emerald-500  px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-emerald-600 "
                                    >
                                        Get started today
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-3xl bg-white  border border-emerald-500 shadow-xl ring-1 ring-black/10  hover:scale-105 transform transition duration-300">
                        <div className="p-8 sm:p-10">
                            <div className="flex items-center">
                                <h3
                                    className="text-lg font-semibold leading-8 tracking-tight text-emerald-500 "
                                    id="tier-plus"
                                >
                                    Plus (For teams)
                                </h3>
                                <p className="ml-2 rounded-full bg-teal-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-emerald-500  ">
                                    45% OFF
                                </p>
                            </div>
                            <div className="mt-4 flex items-baseline text-5xl font-semibold tracking-tight text-gray-900 ">
                                $99
                                <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500 ">
                                    /month
                                </span>
                            </div>
                            <p className="mt-6 text-base leading-7 text-gray-600 ">
                           Ideal for retailers seeking management tools to facilitate business growth
                            </p>
                        </div>
                        <div className="flex flex-1 flex-col p-2">
                            <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                                <ul className="space-y-6">
                                    {[
                                        "Built-in FlowPOS eCommerce",
                                        "Advanced sales, staff and inventory reports",
                                        "Onboarding and professional service options",
                                        "24/7 Chat Support",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-6 w-6 text-teal-600 "
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <p className="ml-3 text-sm leading-6 text-gray-600 ">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        href="#"
                                        className="inline-block w-full rounded-lg bg-emerald-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-emerald-600 "
                                    >
                                        Get started today
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
                        <div className="p-8 sm:p-10">
                            <h3
                                className="text-lg font-semibold leading-8 tracking-tight text-emerald-500 "
                                id="tier-custom"
                            >
                                Custom (For enterprises)
                            </h3>
                            <div className="mt-4 flex items-baseline text-5xl font-semibold tracking-tight text-gray-900 ">
                                Contact us
                            </div>
                            <p className="mt-6 text-base leading-7 text-gray-600 ">
                                Tailored for advanced customization and ease of scalability in established retail operations.
                            </p>
                        </div>

                        <div className="flex flex-1 flex-col p-2">
                            <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-5 p-6 sm:p-8">
                                <ul className="space-y-6">
                                    {[
                                        "Advanced sales, staff and inventory reports",
                                        "Insights (Forecasting, order recommendations & custom reporting)",
                                        "Landed Costs",                                
                                        "Custom User Roles",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-6 w-6 text-teal-600 "
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <p className="ml-3 text-sm leading-6 text-gray-600 ">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        href="/contact"
                                        className="inline-block w-full rounded-lg bg-emerald-500  px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-emerald-600 "
                                    >
                                        Contact us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;