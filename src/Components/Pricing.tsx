import React from 'react';

const Pricing = () => {
    return (
        <div className="bg-white dark:bg-gray-800 pt-20" id="pricing">
            {/* Header */}
            <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8 mb-10">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-lg font-semibold leading-8 text-emerald-500 dark:text-emerald-400">
                        Pricing
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                        Find the right plan for your business!!
                    </p>
                </div>
            </div>

            {/* Toggle */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-6">
                <div className="mt-16 flex justify-center">
                    <div className="flex items-center">
                        <button
                            className="bg-teal-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
                            role="switch"
                            aria-checked="true"
                        >
                            <span
                                aria-hidden="true"
                                className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            ></span>
                        </button>
                        <span className="ml-3 text-sm">
                            <span className="font-medium text-gray-900 dark:text-gray-200">
                                Annual billing
                            </span>{" "}
                            <span className="text-gray-500 dark:text-gray-400">
                                (Save 45%)
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-8">

                    {/* Basic Plan */}
                    <div className="flex flex-col rounded-3xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/10">
                        <div className="p-8 sm:p-10">
                            <h3
                                className="text-lg font-semibold leading-8 tracking-tight text-teal-600 dark:text-teal-400"
                                id="tier-basic"
                            >
                                Basic (For individuals)
                            </h3>
                            <div className="mt-4 flex items-baseline text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
                                $0
                            </div>
                            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                                Great for getting started. Sign your first two documents for free.
                            </p>
                        </div>

                        <div className="flex flex-1 flex-col p-2">
                            <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-700 p-6 sm:p-8">
                                <ul className="space-y-6">
                                    {[
                                        "1 document",
                                        "10 signees / document",
                                        "Customize signatory name and role",
                                        "No credit card required",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-6 w-6 text-teal-600 dark:text-teal-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        href="#"
                                        className="inline-block w-full rounded-lg bg-teal-600 dark:bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700 dark:hover:bg-teal-500"
                                    >
                                        Get started today
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Plus Plan */}
                    <div className="flex flex-col rounded-3xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/10">
                        <div className="p-8 sm:p-10">
                            <div className="flex items-center">
                                <h3
                                    className="text-lg font-semibold leading-8 tracking-tight text-teal-600 dark:text-teal-400"
                                    id="tier-plus"
                                >
                                    Plus (For teams)
                                </h3>
                                <p className="ml-2 rounded-full bg-teal-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-teal-600 dark:bg-teal-400/10 dark:text-teal-400">
                                    45% OFF
                                </p>
                            </div>
                            <div className="mt-4 flex items-baseline text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
                                $5
                                <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>
                            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                                Need higher quotas? Upgrade and sign up to 10 documents.
                            </p>
                        </div>

                        <div className="flex flex-1 flex-col p-2">
                            <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-700 p-6 sm:p-8">
                                <ul className="space-y-6">
                                    {[
                                        "10 documents",
                                        "100 signees / document",
                                        "Export your signed documents",
                                        "Shared team accounts",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-6 w-6 text-teal-600 dark:text-teal-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        href="#"
                                        className="inline-block w-full rounded-lg bg-teal-600 dark:bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700 dark:hover:bg-teal-500"
                                    >
                                        Get started today
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Custom Plan */}
                    <div className="flex flex-col rounded-3xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/10">
                        <div className="p-8 sm:p-10">
                            <h3
                                className="text-lg font-semibold leading-8 tracking-tight text-teal-600 dark:text-teal-400"
                                id="tier-custom"
                            >
                                Custom (For enterprises)
                            </h3>
                            <div className="mt-4 flex items-baseline text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
                                Contact us
                            </div>
                            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                                Are you a business looking for higher quotas or custom features?
                                We can work with you to develop a solution.
                            </p>
                        </div>

                        <div className="flex flex-1 flex-col p-2">
                            <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-700 p-6 sm:p-8">
                                <ul className="space-y-6">
                                    {[
                                        "Custom usage quotas",
                                        "Customized document signing workflows",
                                        "Integration with third-party systems",
                                        "Dedicated account manager & priority support",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-6 w-6 text-teal-600 dark:text-teal-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        href="#"
                                        className="inline-block w-full rounded-lg bg-teal-600 dark:bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700 dark:hover:bg-teal-500"
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