export default function HeroSection() {
  return (
    <>
      <style>{`
       
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
        
        .animate-float-badge {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <section className="hero-section relative overflow-hidden bg-slate-50 text-slate-900 ">  
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-black uppercase rounded-full bg-emerald-100 mb-4">
                Drive More Sales
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-emerald-500">Reimagine </span> <br /> the Way You {' '} <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-emerald-500">Sell and Grow</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                “From seamless transactions to powerful analytics, FlowPOS gives you everything you need to run your business smarter — anytime, anywhere.”
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-black to-emerald-500 hover:from-black hover:to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="px-8 py-3.5 rounded-lg border-2 border-emerald-500  text-emerald-500  font-semibold hover:bg-emerald-50 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>

              <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
                <div className="flex -space-x-2">
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Client" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/45.jpg" alt="Client" />
                </div>
                <div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Trusted by 500+ businesses worldwide</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-100 rounded-2xl animate-float" style={{ zIndex: 0 }}></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-100 rounded-2xl animate-float-reverse" style={{ zIndex: 0 }}></div>
                <img
                  className="relative rounded-xl shadow-2xl border-8 border-white"
                  src="/images/hero.png"
                  alt="Digital Marketing"
                  style={{ zIndex: 1 }}
                />
              </div>
              <div className="absolute -bottom-8 left-1/4 bg-white px-4 py-2 rounded-lg shadow-md flex items-center animate-float-badge" style={{ zIndex: 2 }}>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">+85% ROI</span>
              </div>
              <div className="absolute -top-8 right-1/4 bg-white px-4 py-2 rounded-lg shadow-md animate-float-badge" style={{ zIndex: 2 }}>
                <span className="text-sm font-medium">📈 3x Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}