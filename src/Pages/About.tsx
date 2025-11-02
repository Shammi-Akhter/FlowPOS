
import FAQ from '../Components/FAQ';

const About = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Our platform is a modern Point of Sale (POS) SaaS solution designed for restaurants, retail stores, and cafes. We help businesses streamline their sales, inventory, and customer management, all in one easy-to-use interface. With real-time analytics, secure transactions, and intuitive dashboards, our solution empowers businesses to grow efficiently and serve customers better.
            </p>
            <div className="mt-8">
              <a
                href="/contact" target="_blank"
                className="text-emerald-500 hover:text-emerald-600 font-medium"
              >
                Learn more about us <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="/images/About.webp"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md w-full h-96"
            />
          </div>
        </div>
      </div>
      <FAQ />
    </section>
  );
};

export default About;