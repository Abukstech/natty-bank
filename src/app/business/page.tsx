"use client";

import Image from "next/image";
import Link from "next/link";

export default function BusinessBanking() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 pr-0 md:pr-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#EBD67B] font-medium mb-6">
                Business<br />Banking
              </h1>
              <p className="text-base md:text-lg mb-8 text-[#EBD67B]">
                At NattyBank, we understand the unique challenges and opportunities businesses face today. That's why we offer flexible, innovative banking services designed to help you manage cash flow, simplify operations, and enable growth opportunities—no matter your industry or size.
              </p>
              <button className="bg-[#EBD67B] hover:bg-[#c4a030] text-black px-6 py-3 rounded-[30px] font-medium text-lg transition-colors">
                Open Account
              </button>
            </div>
             <div className="md:w-2/3">
              <Image 
                src="/businessbank.png" 
                alt="Business Banking" 
                width={1200} 
                height={900}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Checking Accounts */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image 
                src="/ngnhero.jpg" 
                alt="Business Checking" 
                width={500} 
                height={800}
                className=" border-2 border-[#1a1a1a]"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-sm font-normal mb-2 text-[#EBD67B]">BUSINESS CHECKING ACCOUNTS</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#EBD67B]">
                Our Business Banking Services
              </h2>
              
              <ul className="space-y-4">
                {[
                  "Direct deposit and wage reporting made easy",
                  "Optimize liquidity and manage risks with advanced tools",
                  "ACH payments, wire transfers, and fraud prevention controls",
                  "Customized reporting and account reconciliation services",
                  "Dedicated treasury advisors for personalized strategies"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#EBD67B] mr-2">•</span>
                    <span className="text-[#EBD67B]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 space-y-3">
                {[
                  "Business Savings & Money Market Accounts",
                  "Treasury & Cash Management",
                  "Business Loans & Credit Lines",
                  "Payroll & Employee Benefits Solutions",
                  "Treasury & Cash Management"
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-[#EBD67B] flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#EBD67B]">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe. Simple. Reliable. */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 pr-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">
                Safe. Simple. Reliable.
              </h2>
              <p className="text-base md:text-lg mb-8 text-white">
                With robust security, responsive support, and a personalized approach, NattyBank gives you the freedom to manage your money your way, whenever you want, wherever you need.
              </p>
              <button className="bg-[#EBD67B] hover:bg-[#c4a030] text-black px-6 py-3 rounded-[30px] font-medium text-lg transition-colors">
                Join Us
              </button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-[#111] flex items-center justify-center">
                <div className="relative w-full h-0 pb-[56.25%]">
                  <Image 
                    src="/products3.svg" 
                    alt="Business Banking Video" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Banking Products */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#EBD67B]">
            Banking Solutions for Every Business
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "BUSINESS BANKING",
                description: "At NattyBank, we understand the unique challenges and opportunities businesses face today. That's why we offer flexible, innovative banking services designed to help you manage cash flow, simplify operations, and enable growth opportunities—no matter your industry or size.",
                image: "/products1.svg"
              },
              {
                title: "WEALTH MANAGEMENT",
                description: "At NattyBank, we believe wealth is more than just accumulation,it's about protection, growth, and legacy.",
                image: "/products2.svg"
              },
              {
                title: "PERSONAL BANKING",
                description: "At NattyBank, personal banking is more than just managing money. It's about giving you the tools, support, and confidence to thrive financially at every stage of life.",
                image: "/products3.svg"
              },
              {
                title: "MOBILE BANKING",
                description: "With the NattyBank Mobile App, you can manage your finances on the go whether you're paying bills, sending money, tracking expenses, or applying for a loan. It's fast, secure, and built to keep you in control, 24/7.",
                image: "/products1.svg"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white flex flex-col hover:shadow-lg transition-shadow h-full">
                {/* Text section */}
                <div className="p-6 flex-grow">
                  <h3 className="text-sm uppercase font-medium tracking-wider text-black mb-4">{product.title}</h3>
                  <p className="text-black text-sm">
                    {product.description}
                  </p>
                </div>
                
                {/* Image section */}
                <div className="h-48 relative mt-auto">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    style={{objectFit: "cover"}}
                  />
                </div>
                
                {/* View Details link */}
                <div className="p-4 bg-black">
                  <Link href="#" className="text-[#d4af37] hover:underline font-medium flex items-center">
                    <span>View Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <div className="flex space-x-2">
              <button className="w-3 h-3 rounded-full bg-[#d4af37]"></button>
              <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-400"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Get interest rate discount</h3>
              <p className="text-white">
                In just 30 minutes, an experienced banker will help you get a .25% interest rate discount with an eligible checking and savings account.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Exceptional service from specialists</h3>
              <p className="text-white">
                Get a dedicated expert who answers every question, works to make sure you have the solution that fits your life, and helps every step of the way.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Convenient payment options</h3>
              <p className="text-white">
                Make your payments quickly and easily through online and mobile banking, by phone or mail, with recurring automatic payments, or in a branch.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Secure online & mobile banking</h3>
              <p className="text-white">
                Sign on for 24/7 account access to make payments, transfer money, check balances, and view your statements online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#EBD67B]">HELP CENTER</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">Frequently asked questions</h3>
            <p className="text-white max-w-3xl mx-auto">
              Got a question about how we're organised, applying to work for us, or looking for financial or shareholder information? View more Q&A here
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-700 pb-6">
              <button className="flex justify-between items-center w-full text-left">
                <h4 className="text-xl font-medium text-[#EBD67B]">How do I apply for a loan?</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="border-b border-gray-700 pb-6">
              <button className="flex justify-between items-center w-full text-left">
                <h4 className="text-xl font-medium text-[#EBD67B]">Can I access my account abroad?</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="border-b border-gray-700 pb-6">
              <button className="flex justify-between items-center w-full text-left">
                <h4 className="text-xl font-medium text-[#EBD67B]">Is mobile and internet banking secure?</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="border-b border-gray-700 pb-6">
              <button className="flex justify-between items-center w-full text-left">
                <h4 className="text-xl font-medium text-[#EBD67B]">How do I contact the payment assistance team?</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="border-b border-gray-700 pb-6">
              <button className="flex justify-between items-center w-full text-left">
                <h4 className="text-xl font-medium text-[#EBD67B]">What should I do if I suspect fraud or unauthorized activity?</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#EBD67B]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Ready to Elevate Your Business Banking?</h2>
          <p className="text-base md:text-lg mb-8 text-black/80 max-w-3xl mx-auto">
            Join thousands of businesses that trust NattyBank for their financial needs.
          </p>
          <Link href="/contact" className="inline-block bg-black text-[#EBD67B] hover:bg-[#222] px-8 py-4 rounded-[30px] font-medium text-lg transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}