"use client";

import Image from "next/image";
import Link from "next/link";

export default function FraudReport() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4 text-sm">
        <div className="flex items-center space-x-2 text-[#EBD67B]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/cards" className="hover:underline">Cards</Link>
          <span>/</span>
          <span>Fraud Report</span>
        </div>
      </div>

      {/* Fraud Report Hero Section */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="mb-4 text-[#EBD67B] uppercase tracking-wider font-medium">SPOT SOMETHING SUSPICIOUS?</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">
                Let's Take Action Together.
              </h2>
              <p className="text-lg mb-8">
                Your security is our top priority. If you've seen unauthorized activity or think you've been targeted by a scam, report it now.
              </p>
              <Link 
                href="#report-form" 
                className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-6 py-3 rounded-md font-medium text-lg transition-colors inline-flex items-center"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/product1.png" 
                  alt="Person using credit card securely" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fraud Protection Details Section */}
      <section id="do-not-get-scammed" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">DO NOT GET SCAMMED</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#EBD67B] mb-8">Protecting What Matters Most</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              At NattyBank, your security is our highest priority. If you suspect fraudulent activity on your account or have been targeted by a scam, we're here to act fast, provide support, and restore your peace of mind.
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Fraud can take many forms—unauthorized transactions, identity theft, phishing messages, suspicious account access, or social engineering attempts. Regardless of how it happens, we treat every report seriously and confidentially.
            </p>
          </div>

          {/* Top products & services */}
          <h3 className="text-xl font-bold mb-8 text-[#EBD67B]">Top products & services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-[#111] p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3">BUSINESS BANKING</h4>
              <p className="text-gray-300 mb-4">
                At NattyBank, we understand the unique challenges and opportunities businesses face today. That's why we offer tailored, innovative banking services designed to help you manage cash flow, simplify operations, and seize growth opportunities—no matter your industry or size.
              </p>
              <Link href="#" className="text-[#EBD67B] hover:underline flex items-center">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[#111] p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3">WEALTH MANAGEMENT</h4>
              <p className="text-gray-300 mb-4">
                At NattyBank, we believe wealth is more than just accumulation; it's about protection, growth, and legacy.
              </p>
              <Link href="/wealth-management" className="text-[#EBD67B] hover:underline flex items-center">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[#111] p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3">PERSONAL BANKING</h4>
              <p className="text-gray-300 mb-4">
                At NattyBank, personal banking is more than just managing money; it's about giving you the tools, support, and confidence to thrive financially at every stage of life.
              </p>
              <Link href="/personal" className="text-[#EBD67B] hover:underline flex items-center">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-[#111] p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3">MOBILE BANKING</h4>
              <p className="text-gray-300 mb-4">
                With the NattyBank Mobile App, you can manage your finances on the go whether you're paying bills, sending money, tracking expenses, or just need to help you keep in control, 24/7.
              </p>
              <Link href="#" className="text-[#EBD67B] hover:underline flex items-center">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Report Form Section */}
      <section id="report-form" className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#EBD67B]">Report Suspicious Activity</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBD67B] focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBD67B] focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBD67B] focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="accountNumber" className="block text-sm font-medium mb-2">Account Number (if applicable)</label>
                <input 
                  type="text" 
                  id="accountNumber" 
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBD67B] focus:border-transparent"
                  placeholder="Enter your account number"
                />
              </div>
              
              <div>
                <label htmlFor="fraudType" className="block text-sm font-medium mb-2">Type of Suspicious Activity</label>
                <select 
                  id="fraudType" 
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBD67B] focus:border-transparent"
                >
                  <option value="">Select type of activity</option>
                  <option value="unauthorized">Unauthorized Transaction</option>
                  <option value="phishing">Phishing Email or Message</option>
                  <option value="identity">Identity Theft</option>
                  <option value="account">Suspicious Account Access</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">Description of Incident</label>
                <textarea 
                  id="description" 
                  rows={5} 
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBD67B] focus:border-transparent"
                  placeholder="Please provide details about the suspicious activity"
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-700 rounded bg-black focus:ring-2 focus:ring-[#EBD67B]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-300">I confirm that the information provided is accurate to the best of my knowledge</label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#EBD67B] hover:bg-[#d4af37] text-black px-6 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Submit Report
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#EBD67B]">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            If you believe you're a victim of fraud and need urgent help, please contact our 24/7 fraud prevention hotline.
          </p>
          <div className="inline-block bg-[#111] px-8 py-6 rounded-lg">
            <p className="text-[#EBD67B] font-bold text-xl mb-2">Fraud Prevention Hotline</p>
            <p className="text-2xl font-bold">+44 7441 428182</p>
          </div>
        </div>
      </section>
    </main>
  );
}