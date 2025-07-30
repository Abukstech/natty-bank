"use client";

import Image from "next/image";
import Link from "next/link";

export default function CommercialBanking() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4 text-sm">
        <div className="flex items-center space-x-2 text-[#EBD67B]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Commercial Banking</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-black pt-48 md:pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <p className="text-sm font-normal mb-2 text-[#EBD67B]">MORE THAN A BANK</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#EBD67B] mb-6">Empowering Your Business to Scale and Succeed</h1>
              <p className="text-lg mb-8 text-[#EBD67B]">
                At NattyBank, our Commercial Banking services are crafted to support the complex financial needs of growing companies and corporate enterprises.
              </p>
              <Link 
                href="#get-started" 
                className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-6 py-3 rounded-full font-medium text-lg transition-colors inline-flex items-center"
              >
                Get Started
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/businessbank.png" 
                  alt="Commercial Banking" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Banking Services Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/ngnhero.jpg" 
                  alt="Commercial Banking Services" 
                  fill
                  className="object-cover rounded-lg border-2 border-[#1a1a1a]"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-sm font-normal mb-2 text-[#EBD67B]">IDENTITY WITH PURPOSE</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#EBD67B]">
                Our Commercial Banking Services
              </h2>
              
              <ul className="space-y-4">
                {[
                  "Corporate Checking & Deposit Accounts: Flexible account structures tailored to your business size and needs",
                  "Cash management solutions with advanced security controls",
                  "Comprehensive online banking with detailed reporting and integration capabilities",
                  "International trade services and foreign exchange solutions",
                  "Specialized industry expertise for sector-specific financial strategies"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#EBD67B] mr-2">•</span>
                    <span className="text-[#EBD67B]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 space-y-3">
                {[
                  "Treasury Management Services",
                  "Commercial Lending Solutions",
                  "Equipment Financing",
                  "Commercial Real Estate",
                  "International Banking Services"
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

      {/* Top Products & Services */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#EBD67B]">
            Top products & services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-sm uppercase font-medium tracking-wider text-black mb-4">BUSINESS TO BUSINESS</h3>
                <p className="text-black text-sm">
                  At NattyBank, we understand the unique challenges and opportunities businesses face today. That's why we offer flexible, innovative banking services designed to simplify operations, and enable growth opportunities.
                </p>
              </div>
              <div className="h-48 relative mt-auto">
                <Image 
                  src="/products1.svg" 
                  alt="Business to Business" 
                  fill 
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-4 bg-black">
                <Link href="#" className="text-[#d4af37] hover:underline font-medium flex items-center">
                  <span>View Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-sm uppercase font-medium tracking-wider text-black mb-4">WEALTH MANAGEMENT</h3>
                <p className="text-black text-sm">
                  At NattyBank, we believe wealth is more than just accumulation, it's about protection, growth, and legacy.
                </p>
              </div>
              <div className="h-48 relative mt-auto">
                <Image 
                  src="/products2.svg" 
                  alt="Wealth Management" 
                  fill 
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-4 bg-black">
                <Link href="#" className="text-[#d4af37] hover:underline font-medium flex items-center">
                  <span>View Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-sm uppercase font-medium tracking-wider text-black mb-4">TREASURY BANKING</h3>
                <p className="text-black text-sm">
                  At NattyBank, treasury banking is more than just managing money. It's about giving you the tools, support, and confidence to thrive financially at every stage of growth.
                </p>
              </div>
              <div className="h-48 relative mt-auto">
                <Image 
                  src="/products3.svg" 
                  alt="Treasury Banking" 
                  fill 
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-4 bg-black">
                <Link href="#" className="text-[#d4af37] hover:underline font-medium flex items-center">
                  <span>View Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-sm uppercase font-medium tracking-wider text-black mb-4">MOBILE BANKING</h3>
                <p className="text-black text-sm">
                  With the NattyBank Mobile App, you can manage your finances on the go whether you're paying bills, sending money, tracking expenses, or applying for a loan. It's fast, secure, and built to keep you in control, 24/7.
                </p>
              </div>
              <div className="h-48 relative mt-auto">
                <Image 
                  src="/products1.svg" 
                  alt="Mobile Banking" 
                  fill 
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-4 bg-black">
                <Link href="#" className="text-[#d4af37] hover:underline font-medium flex items-center">
                  <span>View Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe. Simple. Reliable. */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 pr-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">
                Safe. Simple. Reliable.
              </h2>
              <p className="text-base md:text-lg mb-8 text-white">
                With robust security, responsive support, and a personalized approach, NattyBank gives your business the freedom to manage finances your way, whenever you want, wherever you need.
              </p>
              <Link 
                href="#join-us" 
                className="bg-[#EBD67B] hover:bg-[#c4a030] text-black px-6 py-3 rounded-full font-medium text-lg transition-colors inline-block"
              >
                Join Us
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-[#111] flex items-center justify-center">
                <div className="relative w-full h-0 pb-[56.25%]">
                  <Image 
                    src="/products3.svg" 
                    alt="Commercial Banking Video" 
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
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Competitive Financing</h3>
              <p className="text-white">
                Access tailored lending solutions with competitive rates designed specifically for commercial enterprises of all sizes.
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
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Dedicated Relationship Managers</h3>
              <p className="text-white">
                Work with experienced commercial banking specialists who understand your industry and business objectives.
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
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Advanced Treasury Management</h3>
              <p className="text-white">
                Optimize cash flow with our comprehensive suite of treasury management tools designed for complex business operations.
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
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Enterprise-Grade Security</h3>
              <p className="text-white">
                Protect your business with our advanced fraud prevention systems and multi-layered security protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#EBD67B]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Ready to Transform Your Commercial Banking?</h2>
          <p className="text-base md:text-lg mb-8 text-black/80 max-w-3xl mx-auto">
            Join leading enterprises that trust NattyBank for their complex financial operations.
          </p>
          <Link href="/contact" className="inline-block bg-black text-[#EBD67B] hover:bg-[#222] px-8 py-4 rounded-full font-medium text-lg transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}