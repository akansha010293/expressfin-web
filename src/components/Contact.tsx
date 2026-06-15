import { useState, useRef, useEffect } from "react";
import { contactNumber, officeAddress, email, officePostcode, officeSuburb ,whatsAppNumber, web3FormsAccessKey} from "./constants";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    message: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const successMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitSuccess && successMessageRef.current) {
      successMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [submitSuccess]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
    // Clear success message when user starts editing
    if (submitSuccess) {
      setSubmitSuccess(false);
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      loanType: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }
    if (!formData.loanType) {
      newErrors.loanType = "Please select a loan type";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      // Using Web3Forms API to send email
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey, // Get this from https://web3forms.com
          subject: `Loan Inquiry - ${formData.loanType}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          loan_type: formData.loanType,
          message: formData.message,
          to_email: email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Show success message
        setSubmitSuccess(true);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          loanType: "",
          message: "",
        });
      } else {
        alert("Failed to send email. Please try WhatsApp instead.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try WhatsApp instead.");
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const message = `Hi, I'm ${formData.name}.%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ALoan Type: ${formData.loanType}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${whatsAppNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="flex-1 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Get in touch with our expert team. We're here to help you find the perfect loan solution.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Send us a Message</h2>
            
            {submitSuccess && (
              <div ref={successMessageRef} className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-green-800 font-semibold">Email sent successfully!</p>
                  <p className="text-green-700 text-sm">You will be contacted shortly.</p>
                </div>
              </div>
            )}
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-slate-800 ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-slate-700'
                  }`}
                  placeholder="John Smith"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-slate-800 ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-slate-700'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-slate-800 ${
                    errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-slate-700'
                  }`}
                  placeholder="04XX XXX XXX"
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="loanType" className="block text-sm font-semibold text-slate-700 mb-2">
                  Loan Type *
                </label>
                <select
                  id="loanType"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-slate-800 ${
                    errors.loanType ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-slate-700'
                  }`}
                >
                  <option value="">Select a loan type</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="First Home Buyer Loan">First Home Buyer Loan</option>
                  <option value="Investment Loan">Investment Loan</option>
                  <option value="Refinancing Loan">Refinancing Loan</option>
                  <option value="Car Loan">Car Loan</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Commercial Loan">Commercial Loan</option>
                  <option value="Construction Loan">Construction Loan</option>
                  <option value="Equipment Loan">Equipment Loan</option>
                  <option value="SMSF Loan">SMSF Loan</option>
                </select>
                {errors.loanType && <p className="text-red-600 text-sm mt-1">{errors.loanType}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-slate-800 ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-slate-700'
                  }`}
                  placeholder="Tell us about your loan requirements..."
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  onClick={handleEmailSubmit}
                  className="flex-1 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: 'oklch(0.33 0.06 306.71)' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-white p-8 rounded-xl shadow-lg" style={{ backgroundColor: 'oklch(0.33 0.06 306.71)' }}>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
                    <p className="text-slate-200">{officeAddress}</p>
                    <p className="text-slate-200">{officeSuburb}</p>
                    <p className="text-slate-200">{officePostcode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-slate-200">{contactNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-slate-200">{email}</p>
    
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-slate-200">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-200">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-slate-200">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Quick Response</h3>
              <p className="text-slate-700 mb-6">
                Need immediate assistance? Click below to start a conversation with us on WhatsApp.
              </p>
              <button
                onClick={() => {
                  window.open(`https://wa.me/${whatsAppNumber}?text=Hi, I need help with a loan inquiry.`, "_blank");
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};