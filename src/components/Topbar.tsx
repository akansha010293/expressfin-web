import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Topbar: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const services = [
  //   "Car Loans",
  //   "Construction Loan",
  //   "Commercial Loan",
  //   "Equipment Loan",
  //   "First Home Buyer Loan",
  //   "Home Loan",
  //   "Investment Loan",
  //   "Personal Loan",
  //   "Refinancing Loan",
  //   "SMSF Loan",
  // ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <header className="text-white shadow-lg" style={{ backgroundColor: 'oklch(29.3% 0.066 243.157)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">

            <Link
              to="/"
             className="flex items-center gap-3 cursor-pointer"
            >
              <img src="/expressFin.svg" alt="Express Fin" className="h-12 w-auto" />
              <span className="text-3xl font-bold text-white">Express Fin</span>
            </Link>
           
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="hover:text-slate-300 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-slate-300 transition-colors font-medium"
            >
              About
            </Link>

            {/* Services Dropdown */}

            {/* <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="transition-colors font-medium flex items-center gap-1 bg-transparent"
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ease-out ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div
                  ref={ref}
                  className="absolute top-full left-0 mt-2 w-64 bg-white text-slate-700 rounded-lg shadow-xl py-2 z-50"
                >
                  {services.map((service, index) => (
                    <Link
                    key={index}
                      to={`/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2.5 hover:bg-slate-100 hover:text-slate-800 transition-colors text-slate-700"
                    >
                      {service}
                    </Link>
       
                  ))}
                </div>
              )}
            </div> */}

          <Link
              to="/contact"
              className="hover:text-slate-300 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3">
            <Link
              to="/"
              className="text-white hover:text-slate-300 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-slate-300 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-slate-300 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
