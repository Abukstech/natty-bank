"use client";

import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white pt-20 md:px-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 md:mt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="/ngnhero.jpg" 
            alt="Modern Building" 
            fill
            className="object-cover opacity-50"
          />
        </div>
        
        <div className="container mx-auto z-10 h-[400px]">
          <div className="max-w-xl bg-[#EBD67B] p-8 md:p-12 absolute left-0 bottom-0 md:bottom-0 lg:bottom-0 ">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              We deliver more than just banking
            </h1>
            <p className="text-black">
              Whether you're planning savings or finances, protecting a business, or looking for ways to grow, we have all the tools and services to help you succeed—no matter what stage you're at.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase text-[#EBD67B] mb-2">PERSONAL BANKING SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">
            We cover all your financial needs
          </h2>
          <p className="text-lg mb-16 max-w-3xl text-[#EBD67B] mx-auto">
            Our banking services are here for you at every life stage, every time, every day.
          </p>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Checking Accounts */}
            <div className="bg-[#F5F5F5]  overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/product1.png" 
                  alt="Checking Accounts" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <p className="text-sm uppercase text-[#000000] mb-2">CHECKING ACCOUNTS</p>
                <h3 className="text-xl font-bold text-[#000000] mb-4">
                  At NattyBank, our Checking Accounts are designed to make your everyday banking easy, flexible, and efficient.
                </h3>
                <Link href="/checking" className="text-[#EBD67B] hover:underline inline-flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Credit Cards */}
            <div className="bg-[#F5F5F5]  overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/products2.svg" 
                  alt="Credit Cards" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <p className="text-sm uppercase text-[#000000] mb-2">CREDIT CARDS</p>
                <h3 className="text-xl font-bold text-[#000000] mb-4">
                  At NattyBank, our credit cards are designed to give you flexibility, rewards, and security — whether you're shopping online, traveling abroad, or managing everyday expenses.
                </h3>
                <Link href="/cards" className="text-[#EBD67B] hover:underline inline-flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Mobile Banking */}
            <div className="bg-[#F5F5F5] overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/products3.svg" 
                  alt="Mobile Banking" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <p className="text-sm uppercase text-[#000000] mb-2">MOBILE BANKING</p>
                <h3 className="text-xl font-bold text-[#000000] mb-4">
                  With the NattyBank Mobile App, you can manage your accounts on the go, pay bills, transfer funds, deposit checks, and track spending. It's fast, secure, and built to keep you in control.
                </h3>
                <Link href="/mobile" className="text-[#EBD67B] hover:underline inline-flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Personal Banking */}
            <div className="bg-[#F5F5F5]  overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/products1.svg" 
                  alt="Personal Banking" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <p className="text-sm uppercase text-[#000000] mb-2">PERSONAL BANKING</p>
                <h3 className="text-xl font-bold text-[#000000] mb-4">
                  At NattyBank, our personal banking solutions help you save, manage money, and build financial confidence to thrive at every stage of life.
                </h3>
                <Link href="/personal" className="text-[#EBD67B] hover:underline inline-flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Wealth Management */}
            <div className="bg-[#F5F5F5]  overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/products2.svg" 
                  alt="Wealth Management" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <p className="text-sm uppercase text-[#000000] mb-2">WEALTH MANAGEMENT</p>
                <h3 className="text-xl font-bold  text-[#000000] mb-4">
                  At NattyBank, we believe wealth is about accumulation, protection, growth, and legacy. Our advisors help you build a personalized strategy for your goals.
                </h3>
                <Link href="/wealth" className="text-[#EBD67B] hover:underline inline-flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Business Banking */}
            <div className="bg-[#F5F5F5]  overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/products3.svg" 
                  alt="Business Banking" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <p className="text-sm uppercase text-[#000000] mb-2">BUSINESS BANKING</p>
                <h3 className="text-xl font-bold text-[#000000] mb-4">
                  At NattyBank, we understand the unique challenges and opportunities businesses face. Our solutions help you manage cash flow, simplify operations, and enable growth regardless of industry or size.
                </h3>
                <Link href="/business" className="text-[#EBD67B] hover:underline inline-flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Advice Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#EBD67B]">
                Our service and knowledge can help you seize the moment
              </h2>
              <p className="text-base md:text-lg mb-8">
                You don't have to navigate the world alone — an NattyBank advisor can help you make the most of your money. We've got the expertise and tools to guide you along the way.
              </p>
              <Link href="/contact" className="bg-[#EBD67B] hover:bg-[#c4a030] text-black px-6 py-3 rounded-[30px] font-medium text-lg transition-colors inline-block">
                Find Out More
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full">
                <Image 
                  src="/product1.png" 
                  alt="Financial Advisor" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Finder Section */}
      <section className="py-16 bg-[#EBD67B]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
            Which solution is right for you?
          </h2>
          <p className="text-base md:text-lg mb-8 text-black max-w-3xl mx-auto">
            At NattyBank, we believe banking solutions work for you. That's why we've built a flexible range of services designed to fit your lifestyle and goals. Talk to one of our advisors today to find the right banking solution for what's next.
          </p>
          <Link href="/contact" className="bg-black text-[#EBD67B] hover:bg-[#222] px-6 py-3 rounded-[30px] font-medium text-lg transition-colors inline-block">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}