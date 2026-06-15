import { Link } from "react-router-dom";
import { loanServices } from "./constants";

// Main Body Component
export const Dashboard: React.FC = () => {

  return (
    <main className="flex-1 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Your trusted financial partner
          </h1>
          <p className="text-xl text-slate-700 mb-4 max-w-3xl mx-auto">
            Expert financial solutions tailored to your unique needs. From first
            home buyers to seasoned investors, we're here to help you achieve
            your financial goals.
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Comprehensive loan services with competitive rates, personalized
            guidance, and seamless application processes.
          </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto btn text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg text-center"
              style={{ backgroundColor: 'oklch(29.3% 0.066 243.157)' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Contact us
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white text-slate-800 font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg text-center"
              style={{ border: '2px solid oklch(29.3% 0.066 243.157)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.95 0.01 306.71)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Loan Services
            </h2>
            <p className="text-lg text-slate-700">
              Comprehensive financing solutions for every stage of your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanServices.map((service, index) => {
              return (
                <div
                  key={index}
                  className={`bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-slate-200 group cursor-pointer`}
                  style={{ 
                    borderColor: 'oklch(0.85 0.02 306.71)'
                    
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'oklch(29.3% 0.066 243.157)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'oklch(0.85 0.02 306.71)'}
                >
                  <h3
                    className={`text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-700 transition-colors`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  {/* <button
                    className={`mt-4 text-slate-100 font-semibold text-sm hover:underline flex items-center gap-1 bg-slate-700`}
                     style={{ 
                    background: 'oklch(29.3% 0.066 243.157)'
                    
                  }}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button> */}
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="text-white p-12 rounded-2xl shadow-xl mb-16" style={{ backgroundColor: 'oklch(29.3% 0.066 243.157)' }}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Choose ExpressFin?</h2>
            <p className="text-slate-200 text-lg">
              Your success is our priority
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Fast Approval</h3>
              <p className="text-slate-200">
                Quick decisions and streamlined processes to get you funded
                faster
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
              <p className="text-slate-200">
                Professional advice from experienced finance specialists
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
              <p className="text-slate-200">
                Customized loan packages designed around your unique situation
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-50 p-10 rounded-xl shadow-md text-center border-2 border-slate-200">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
            Take the first step towards your financial goals. Our team is ready
            to help you find the perfect loan solution.
          </p>
          <Link
            to="/contact"
            className="inline-block w-full sm:w-auto btn text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg text-center"
            style={{ backgroundColor: 'oklch(29.3% 0.066 243.157)' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Get a Free Consultation
          </Link>
        </section>
      </div>
    </main>
  );
};
