import React from 'react';
import { FaCashRegister, FaChartLine, FaMobileAlt, FaUtensils } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <FaUtensils size={40} className="text-emerald-500" />,
            title: "Restaurant POS",
            description:
                "Manage orders, tables, and payments seamlessly. Optimize your restaurant workflow with real-time sales tracking.",
        },
        {
            id: 2,
            icon: <FaCashRegister size={40} className="text-emerald-500" />,
            title: "Retail Management",
            description:
                "Track inventory, generate invoices, and monitor staff performance — all from one dashboard.",
        },
        {
            id: 3,
            icon: <FaChartLine size={40} className="text-emerald-500" />,
            title: "Sales Analytics",
            description:
                "Get detailed reports and insights to make smarter business decisions with your sales and profit data.",
        },
        {
            id: 4,
            icon: <FaMobileAlt size={40} className="text-emerald-500" />,
            title: "Multi-Device Access",
            description:
                "Access your POS system anytime, anywhere — on desktop, tablet, or mobile.",
        },
    ];
    return (
        <div>
            <section id="services" className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-emerald-500">Services</span>
                    </h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        Streamline your business operations with our all-in-one Point of Sale solutions — built for restaurants, retail stores, and cafés.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
                            >
                                <div className="flex justify-center mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;