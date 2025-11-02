

const Blog = () => {
    return (
        <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3"></div>
            </div>
            <div className="relative mx-auto max-w-7xl">             
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Column me neatly.
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                        This is your life and it's ending one minute @ a time...
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                src="/images/smart.png"
                                alt="Boost conversion rate"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-emerald-500">
                                    <a href="#" className="hover:underline">
                                        Smart POS, anywhere
                                    </a>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">
                                        Deliver orders, print receipts, and sync inventory in real time across tablets, phones, and desktops.
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        Accept cards, QR, and wallets with offline mode that auto-syncs when back online.One dashboard tracks sales, tips, taxes, and employee shifts in seconds.
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="#">
                                        <span className="sr-only">Roel Aufderehar</span>
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="Roel Aufderehar"
                                        />
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a href="#" className="hover:underline">
                                            Roel Aufderehar
                                        </a>
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime="2020-03-16">Mar 16, 2020</time>
                                        <span aria-hidden="true">·</span>
                                        <span>6 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                src="/images/inventory.webp"
                                alt="SEO for sales"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-emerald-500">
                                    <a href="#" className="hover:underline">
                                       Inventory that updates itself
                                    </a>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">
                                        Stop stockouts and overordering with live counts that follow every sale.
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        Low‑stock alerts, variants, and batch/expiry tracking for kitchens and retail shelves.Auto‑purchase orders to preferred vendors keep your bestsellers always available.
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="#">
                                        <span className="sr-only">Brenna Goyette</span>
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="Brenna Goyette"
                                        />
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a href="#" className="hover:underline">
                                            Brenna Goyette
                                        </a>
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime="2020-03-10">Mar 10, 2022</time>
                                        <span aria-hidden="true">·</span>
                                        <span>4 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                src="/images/insights.png"
                                alt="Customer experience"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-emerald-500">
                                    <a href="#" className="hover:underline">
                                        Insights that grow revenue
                                    </a>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">
                                      Turn daily transactions into actions that boost margins and repeat visits.
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                       Visual KPIs for peak hours, menu/items, staff performance, and customer cohorts.Set promos and loyalty rules, then watch AOV and retention climb from the dashboard.
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="#">
                                        <span className="sr-only">Daniela Metz</span>
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="Daniela Metz"
                                        />
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a href="#" className="hover:underline">
                                            Daniela Metz
                                        </a>
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime="2020-02-12">Feb 12, 2024</time>
                                        <span aria-hidden="true">·</span>
                                        <span>11 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;