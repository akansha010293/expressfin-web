export const About: React.FC = () => { 
    return (    
      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">About ExpressFin</h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Your trusted partner in achieving financial freedom and realizing your dreams
            </p>
          </section>

          {/* Company Story */}
          <section className="mb-16">
            <div className="bg-slate-50 p-10 rounded-xl border-2 border-slate-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  ExpressFin was founded with a simple mission: to make quality financial services accessible to every Australian. 
                  We understand that securing a loan can be overwhelming, which is why we've built a company focused on transparency, 
                  speed, and personalized service.
                </p>
                <p>
                  With years of combined experience in the finance industry, our team of expert brokers has helped thousands of 
                  Australians secure their dream homes, grow their businesses, and achieve financial stability. We pride ourselves 
                  on building lasting relationships with our clients, guiding them through every step of their financial journey.
                </p>
                <p>
                  Whether you're a first-home buyer navigating the property market for the first time, an investor building your 
                  portfolio, or a business owner seeking growth capital, ExpressFin has the expertise and industry connections to 
                  find the right solution for you.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Values */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-white p-8 rounded-xl shadow-lg" style={{ backgroundColor: 'oklch(0.33 0.06 306.71)' }}>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-slate-200 leading-relaxed">
                  To empower Australians with accessible, transparent, and tailored financial solutions that help them 
                  achieve their life goals. We strive to simplify the lending process and provide exceptional service 
                  that exceeds expectations.
                </p>
              </div>
              
              <div className="text-white p-8 rounded-xl shadow-lg" style={{ backgroundColor: 'oklch(0.33 0.06 306.71)' }}>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="text-slate-200 space-y-2">
                  <li>✓ <strong>Integrity:</strong> Honest and transparent advice</li>
                  <li>✓ <strong>Excellence:</strong> Exceptional service every time</li>
                  <li>✓ <strong>Trust:</strong> Building lasting relationships</li>
                  <li>✓ <strong>Innovation:</strong> Modern solutions for modern needs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Stats/Achievements */}
          {/* <section className="mb-16">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                <div className="text-4xl font-bold text-slate-800 mb-2">1000+</div>
                <div className="text-slate-600">Happy Clients</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                <div className="text-4xl font-bold text-slate-800 mb-2">$500M+</div>
                <div className="text-slate-600">Loans Settled</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                <div className="text-4xl font-bold text-slate-800 mb-2">50+</div>
                <div className="text-slate-600">Lender Partners</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                <div className="text-4xl font-bold text-slate-800 mb-2">24/7</div>
                <div className="text-slate-600">Support Available</div>
              </div>
            </div>
          </section> */}

          {/* CTA */}
          <section className="bg-slate-50 p-10 rounded-xl shadow-md text-center border-2 border-slate-200">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Let's work together to find the perfect financial solution for your needs. 
              Contact us today for a free, no-obligation consultation.
            </p>
            <button 
              className="text-white font-semibold px-10 py-4 rounded-lg transition-colors shadow-lg text-lg"
              style={{ backgroundColor: 'oklch(0.33 0.06 306.71)' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us Today
            </button>
          </section>
        </div>
      </main>
    );
}