"use client";

import Image from "next/image";
import Link from "next/link";

export default function WealthManagement() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4 text-sm">
        <div className="flex items-center space-x-2 text-[#EBD67B]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Wealth Management</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-black pt-48 md:pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-[#EBD67B] mb-6">Wealth Management</h1>
              <p className="text-lg mb-8 text-[#EBD67B]">
                At NattyBank, we believe wealth is more than just accumulation, it's about protection, growth, and legacy.
              </p>
              <Link 
                href="#open-account" 
                className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-6 py-3 rounded-full font-medium text-lg transition-colors inline-flex items-center"
              >
                Open Account
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/product1.png" 
                  alt="Wealth Management" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Wealth Solutions Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/product1.png" 
                  alt="Wealth Management Professional" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-sm font-normal mb-2 text-[#EBD67B]">LET NATTYBANK HELP YOU PRESERVE, GROW, AND PROTECT YOUR WEALTH</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#EBD67B]">
                Strategic Wealth Solutions for Visionary Clients
              </h2>
              <p className="text-base md:text-lg mb-6 text-white">
                At NattyBank, our Wealth Management service is designed for individuals and families seeking more than just growth; they want security, legacy, and financial leadership. Whether you're building your wealth, managing multi-generational assets, or planning for retirement, our team of experts delivers personalized solutions that align with your vision.
              </p>
              <Link 
                href="#learn-more" 
                className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-6 py-3 rounded-full font-medium text-lg transition-colors inline-flex items-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wealth Management Services */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl uppercase text-[#EBD67B] mb-4">OUR SERVICES</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">
            Comprehensive Wealth Management Solutions
          </h3>
          <p className="text-lg mb-16 max-w-3xl mx-auto">
            Our wealth management approach is tailored to your unique financial goals, risk tolerance, and timeline.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[#0c0c0c] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#EBD67B]">Investment Management</h4>
              <p className="text-center">
                Customized investment strategies aligned with your goals, risk tolerance, and time horizon. Our team actively manages your portfolio to optimize returns while managing risk.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-[#0c0c0c] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#EBD67B]">Estate Planning</h4>
              <p className="text-center">
                Comprehensive estate planning services to ensure your wealth is preserved and transferred according to your wishes, minimizing tax implications and maximizing your legacy.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-[#0c0c0c] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#EBD67B]">Retirement Planning</h4>
              <p className="text-center">
                Strategic retirement planning to help you achieve financial independence and maintain your desired lifestyle throughout your retirement years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">
              Why Choose NattyBank for Wealth Management
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our approach to wealth management is built on expertise, personalization, and a commitment to your long-term success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Personalized Approach</h3>
              <p className="text-white">
                We take the time to understand your unique financial situation, goals, and values to create a tailored wealth management strategy.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Experienced Advisors</h3>
              <p className="text-white">
                Our team of certified financial advisors brings decades of experience and expertise to help navigate complex financial landscapes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Holistic Planning</h3>
              <p className="text-white">
                We consider all aspects of your financial life—from investments and insurance to tax strategies and estate planning—for a comprehensive approach.
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
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Advanced Technology</h3>
              <p className="text-white">
                Access to cutting-edge financial tools and platforms that provide real-time insights into your portfolio performance and financial progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">Download the Mobile Banking App</h2>
              <p className="text-lg mb-8 text-[#EBD67B]">
                Get the right mortgage to buy your new home — or refinance to take advantage of low rates or convert equity into cash. We've got the personal service to guide you along the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#" 
                  className="bg-black border border-[#EBD67B] text-[#EBD67B] px-6 py-3 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  App Store
                </Link>
                <Link 
                  href="#" 
                  className="bg-[#EBD67B] text-black px-6 py-3 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Google Play
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[500px] w-full">
                <Image 
                  src="/product1.png" 
                  alt="Mobile Banking App" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start, Grow, and Thrive Section */}
      <section className="py-16 bg-[#0c0c0c] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">Start, Grow, and Thrive with NattyBank</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Whether you're just launching or ready to expand, <span className="text-[#EBD67B]">NattyBank</span> is here to support your journey with reliable banking, smart capital, and human support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Stay up to date</h3>
              <p className="text-center">
                Get real-time alerts and updates on your account activity, transactions, and financial goals — right from your mobile app.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Stay informed</h3>
              <p className="text-center">
                Access banking tips, security updates, and market news so you're always one step ahead in managing your finances.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Paperless documents</h3>
              <p className="text-center">
                Say goodbye to clutter. View and download all your statements and documents digitally — safely and securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#EBD67B]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Ready to Secure Your Financial Future?</h2>
          <p className="text-base md:text-lg mb-8 text-black/80 max-w-3xl mx-auto">
            Schedule a consultation with one of our wealth management advisors today.
          </p>
          <Link href="/contact" className="inline-block bg-black text-[#EBD67B] hover:bg-[#222] px-8 py-4 rounded-full font-medium text-lg transition-colors">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}