"use client";

import Image from "next/image";
import Link from "next/link";

export default function CreditCards() {
  return (
    <main className="min-h-screen bg-black text-white pt-40">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4 text-sm">
        <div className="flex items-center space-x-2 text-[#EBD67B]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Credit Cards</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#EBD67B] mb-6">Credit Cards</h1>
              <p className="text-lg mb-6">
                The Rio Combo added her list to do so, because there was thousands of that Combo, and Question Marks and Exclamation Marks ran down the street.
              </p>
              <Link 
                href="#open-account" 
                className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-6 py-3 rounded-md font-medium text-lg transition-colors inline-block"
              >
                Open Account
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/product1.png" 
                  alt="Woman with credit card" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Card Description */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="max-w-4xl mx-auto">
            <div className=" border-b border-[#EBD67B]">

            </div>
            <p className="text-xl text-[#EBD67B] px-8 md:text-2xl leading-relaxed mb-8">
              Whether you're building credit, earning rewards, or managing 
              business expenses, <span className="text-[#EBD67B] font-semibold">NattyBank's credit cards</span> are designed 
              to give you flexibility, security, and value. Choose the card that fits 
              your lifestyle — and apply in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Card Types Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#EBD67B]">
            The Right Card for Every Stage of Life
          </h2>
          
          {/* Navigation Icons */}
          <div className="flex justify-center space-x-8 md:space-x-16 mb-16 overflow-x-auto py-4">
            <div className="flex flex-col items-center min-w-[80px]">
              <div className="w-16 h-16 rounded-full border border-[#EBD67B] flex items-center justify-center mb-3">
                <Image src="/banking.svg" alt="Banking" width={32} height={32} />
              </div>
              <span className="text-sm text-[#EBD67B]">Banking</span>
            </div>
            
            <div className="flex flex-col items-center min-w-[80px]">
              <div className="w-16 h-16 rounded-full border border-[#EBD67B] flex items-center justify-center mb-3">
                <Image src="/checking.svg" alt="Checking" width={32} height={32} />
              </div>
              <span className="text-sm text-[#EBD67B]">Checking</span>
            </div>
            
            <div className="flex flex-col items-center min-w-[80px]">
              <div className="w-16 h-16 rounded-full border border-[#EBD67B] bg-[#EBD67B] flex items-center justify-center mb-3">
                <Image src="/cards.svg" alt="Payment Cards" width={32} height={32} />
              </div>
              <span className="text-sm text-[#EBD67B]">Payment Cards</span>
            </div>
            
            <div className="flex flex-col items-center min-w-[80px]">
              <div className="w-16 h-16 rounded-full border border-[#EBD67B] flex items-center justify-center mb-3">
                <Image src="/savings.svg" alt="Savings" width={32} height={32} />
              </div>
              <span className="text-sm text-[#EBD67B]">Savings</span>
            </div>
            
            <div className="flex flex-col items-center min-w-[80px]">
              <div className="w-16 h-16 rounded-full border border-[#EBD67B] flex items-center justify-center mb-3">
                <Image src="/mortgage.svg" alt="Mortgage" width={32} height={32} />
              </div>
              <span className="text-sm text-[#EBD67B]">Mortgage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Cards Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <span className="text-[#EBD67B] uppercase font-medium">GROWTH WITH PURPOSE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8">
              Entrepreneurs and growing businesses
            </h2>
            <p className="text-lg max-w-3xl">
              At NattyBank, we believe a credit card should be more than just a 
              way to pay it should be a powerful financial tool. Whether you're 
              building credit, earning rewards, or managing business expenses, 
              we have the perfect card for your needs.
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-[#EBD67B] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Get interest rate discount</h3>
              <p className="text-gray-300 text-center md:text-left">
                In just 30 minutes, an experienced banker will help you get the interest rate discount with simple eligibility checking and savings options.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-[#EBD67B] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Exceptional security from specialists</h3>
              <p className="text-gray-300 text-center md:text-left">
                Get a dedicated expert who understands your business needs, provides a personalized approach to make sure you're safe, and is with you all the way.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-[#EBD67B] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Convenient payment options</h3>
              <p className="text-gray-300 text-center md:text-left">
                Make your payments quickly and easily online and mobile, with recurring automatic payments, or in a branch.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-[#EBD67B] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure online & mobile banking</h3>
              <p className="text-gray-300 text-center md:text-left">
                Sign up for 24/7 account access to make payments, transfer money, check balances, and view your statements online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#EBD67B]">
            Ready to apply for your NattyBank credit card?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our application process is quick and secure. Get a decision in minutes and start enjoying the benefits of your new card right away.
          </p>
          <Link 
            href="/contact" 
            className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-8 py-4 rounded-md font-medium text-lg transition-colors inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
}