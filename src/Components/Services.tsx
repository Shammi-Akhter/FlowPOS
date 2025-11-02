
import {FaCashRegister,FaChartLine,FaMobileAlt,FaUtensils,FaCloud,FaUsersCog,} from "react-icons/fa";

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      icon: <FaUtensils size={40} className="text-emerald-500" />,
      title: "Restaurant POS",
      description:
        "Manage tables, orders, and payments effortlessly. Deliver faster service and improve customer satisfaction.",
    },
    {
      id: 2,
      icon: <FaCashRegister size={40} className="text-emerald-500" />,
      title: "Retail Management",
      description:
        "Simplify billing, stock tracking, and staff monitoring—all from a single, intuitive dashboard.",
    },
    {
      id: 3,
      icon: <FaChartLine size={40} className="text-emerald-500" />,
      title: "Sales Insights",
      description:
        "Visualize key metrics and identify trends with in-depth analytics and real-time performance reports.",
    },
    {
      id: 4,
      icon: <FaMobileAlt size={40} className="text-emerald-500" />,
      title: "Multi-Device Access",
      description:
        "Stay connected anywhere with seamless access across desktop, tablet, and mobile devices.",
    },
    {
      id: 5,
      icon: <FaCloud size={40} className="text-emerald-500" />,
      title: "Cloud Backup",
      description:
        "Your business data is automatically backed up on secure cloud servers to prevent loss and ensure continuity.",
    },
    {
      id: 6,
      icon: <FaUsersCog size={40} className="text-emerald-500" />,
      title: "Team Management",
      description:
        "Assign roles, track performance, and enhance collaboration among your staff with built-in management tools.",
    },
  ];

  return (
    <section id="solutions" className="py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-4">
          Smart <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-emerald-500">Solutions for Modern</span>  Businesses
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Discover a suite of tools designed to simplify operations, boost efficiency,
          and drive growth — all from one powerful platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
