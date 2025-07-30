"use client";

import Image from "next/image";
import Link from "next/link";

export default function CheckingAccounts() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4 text-sm">
        <div className="flex items-center space-x-2 text-[#EBD67B]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Checking Accounts</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-3">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-0"> 
              <h1 className="text-4xl md:text-5xl font-bold text-[#EBD67B] mb-6">Checking Accounts</h1>
              <p className="text-lg mb-8 text-[#EBD67B]">
                At NattyBank, our Checking Accounts are designed to make everyday banking flexible, easy, and efficient.
              </p>
              <Link 
                href="#open-account" 
                className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-6 py-3 rounded-full font-medium text-lg transition-colors inline-flex items-center"
              >
                Open Account
              </Link>
            </div>
            <div className="md:w-1/2 pl-0"> {/* No left padding for image */}
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/checkings.svg"  
                  alt="Checking Accounts" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">
            How to Get Checking Accounts with NattyBank
          </h2>
          <p className="text-lg mb-16 max-w-3xl mx-auto text-white">
            Banking with NattyBank is secure, built around you. Follow these easy steps to begin your financial journey with us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Choose Your Account Type</h3>
              <p className="text-white text-center">
                Decide if you need a personal, business, premium, or savings account.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Sign Up Online</h3>
              <p className="text-white text-center">
                Visit www.nattybank.ng through the NattyBank App or a valid ID and proof of address.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Smooth Closings</h3>
              <p className="text-white text-center">
                Stay connected 24/7. Manage your finances, more transfers, pay bills, and more from your phone.
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
                Get the advantage of low rates or convert equity into cash. We've got the personal service to guide you along the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#" 
                  className="bg-black border border-[#EBD67B] text-[#EBD67B] px-6 py-3 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
                >
                  <Image src="/applestore.png" alt="App Store" width={20} height={20} className="mr-2" />
                  App Store
                </Link>
                <Link 
                  href="#" 
                  className="bg-[#EBD67B] text-black px-6 py-3 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
                >
                  <Image src="/playstore.png" alt="Google Play" width={20} height={20} className="mr-2" />
                  Google Play
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[500px] w-full">
                <Image 
                  src="/footermobile.png" 
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
            Whether you're just starting or ready to expand, NattyBank is here to support your journey.
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
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Get Stay up to date</h3>
              <p className="text-center">
                Get time alerts and updates on your account — right from your mobile app.
              </p>
              <p className="text-center mt-2 font-bold text-[#EBD67B]">Transfer Funds</p>
              <p className="text-center">
                Send money internationally, local banks, and destinations.
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
              <h3 className="text-xl font-bold mb-3 text-[#EBD67B]">Access Stay informed</h3>
              <p className="text-center">
                Stay tips, security updates, and in managing your finances.
              </p>
              <p className="text-center mt-2 font-bold text-[#EBD67B]">Find Locations</p>
              <p className="text-center">
                NattyBank branches, ATMs, and partner agencies wherever you are.
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
                Say goodbye to clutter. View and download — safely and securely.
              </p>
              <p className="text-center mt-2 font-bold text-[#EBD67B]">Manage Data Security</p>
              <p className="text-center">
                We use extra protection with multi-factor to secure your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Optional, add if needed */}
      <section className="py-12 md:py-16 bg-[#EBD67B]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Ready to Open Your Checking Account?</h2>
          <p className="text-base md:text-lg mb-8 text-black/80 max-w-3xl mx-auto">
            Get started today with NattyBank's flexible checking options.
          </p>
          <Link href="/contact" className="inline-block bg-black text-[#EBD67B] hover:bg-[#222] px-8 py-4 rounded-full font-medium text-lg transition-colors">
            Get Started
          </Link>
        </div>
      </section>

    </main>
  );
}