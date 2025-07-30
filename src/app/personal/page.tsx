"use client";

import Image from "next/image";
import Link from "next/link";

export default function PersonalBanking() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4 text-sm">
        <div className="flex items-center space-x-2 text-[#EBD67B]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Personal Banking</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-black pt-48 md:pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-[#EBD67B] mb-6">Personal Banking</h1>
              <p className="text-lg mb-8 text-[#EBD67B]">
                At NattyBank, personal banking is more than just managing money. It's about giving you the tools, support, and confidence to thrive financially at every stage of life.
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
                  src="/personal.svg" 
                  alt="Person using mobile banking" 
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
          <h2 className="text-xl uppercase text-[#EBD67B] mb-4">PERSONAL BANKING</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">
            How to Get Started with NattyBank
          </h3>
          <p className="text-lg mb-16 max-w-3xl mx-auto">
            Banking with NattyBank is simple, secure, and built around you. Follow these easy steps to begin your financial journey with us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#EBD67B]">Choose Your Account Type</h4>
              <p className="text-center">
                Whether you need a personal, business, savings, or premium account, we have flexible options for your lifestyle and goals.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#EBD67B]">Sign Up Online</h4>
              <p className="text-center">
                via www.nattybank.ng Through the NattyBank Mobile App or with a valid ID and proof of address
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#EBD67B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#EBD67B]">Smooth Closings</h4>
              <p className="text-center">
                Stay connected 24/7. Manage your finances, make transfers, pay bills, and more — all from your smartphone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-[500px] w-full">
                <Image 
                  src="/product1.png" 
                  alt="Modern banking building" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-sm uppercase text-[#EBD67B] mb-2">FEATURES & BENEFITS</h2>
              <h3 className="text-3xl font-bold mb-6 text-[#EBD67B]">
                Our Personal Banking Services
              </h3>
              <p className="text-lg mb-8">
                From your first savings account to planning for retirement, we offer flexible, secure, and easy-to-use solutions tailored to your goals.
              </p>
              
              <div className="space-y-6">
                {/* Service 1 */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#EBD67B]">Savings Accounts</h4>
                    <p className="text-sm">Grow your money safely with interest-earning accounts, designed for short or long-term savings.</p>
                  </div>
                </div>
                
                {/* Service 2 */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#EBD67B]">Current Accounts</h4>
                    <p className="text-sm">Enjoy everyday banking with easy access, competitive rates, and no hidden fees.</p>
                  </div>
                </div>
                
                {/* Service 3 */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#EBD67B]">Fixed Deposits</h4>
                    <p className="text-sm">Lock in your funds and earn competitive interest rates with our secure fixed deposit options.</p>
                  </div>
                </div>
                
                {/* Service 4 */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#EBD67B]">Personal Loans</h4>
                    <p className="text-sm">Quick, flexible loans for education, emergencies, travel, or big purchases — with low interest and convenient repayment.</p>
                  </div>
                </div>
                
                {/* Service 5 */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#EBD67B]">Target Savings Plans</h4>
                    <p className="text-sm">Set and reach your savings goals with automated contributions and higher returns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe. Simple. Reliable. Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 pr-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBD67B]">
                Safe. Simple. Reliable.
              </h2>
              <p className="text-lg mb-8">
                With robust security, responsive support, and a personalized approach, NattyBank gives you the freedom to manage your money your way wherever you are, whenever you need.
              </p>
              <Link 
                href="#get-started" 
                className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-6 py-3 rounded-full font-medium text-lg transition-colors inline-block"
              >
                Get Started
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/product1.png" 
                  alt="Person using mobile banking" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#EBD67B]">
              Find the Right Loan for Your Needs
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Whether you're buying a home, financing education, or need funds for a major purchase, we have loan options designed to fit your life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Loan Type 1 */}
            <div className="bg-black p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#EBD67B]">Fixed-rate Loans</h3>
              <p className="text-sm mb-4 text-gray-400">Predictable monthly payments</p>
              <p className="mb-6">
                A fixed-rate mortgage comes with an interest rate that won't change for the life of your loan. A consistent rate means predictable monthly payments for the life of the loan and your financial situation.
              </p>
              <div className="flex justify-between mt-auto pt-4 border-t border-gray-800">
                <Link href="#" className="text-[#EBD67B] hover:underline font-medium">Learn More</Link>
                <Link href="#" className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors">Apply Now</Link>
              </div>
            </div>
            
            {/* Loan Type 2 */}
            <div className="bg-black p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#EBD67B]">FHA Loans</h3>
              <p className="text-sm mb-4 text-gray-400">Lower minimum down payment</p>
              <p className="mb-6">
                A Federal Housing Administration (FHA) loan is a government-backed home mortgage loan with more flexible lending requirements than conventional loans. The buyer will also have to pay monthly mortgage insurance.
              </p>
              <div className="flex justify-between mt-auto pt-4 border-t border-gray-800">
                <Link href="#" className="text-[#EBD67B] hover:underline font-medium">Learn More</Link>
                <Link href="#" className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors">Apply Now</Link>
              </div>
            </div>
            
            {/* Loan Type 3 */}
            <div className="bg-black p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#EBD67B]">Loans</h3>
              <p className="text-sm mb-4 text-gray-400">No down payment needed</p>
              <p className="mb-6">
                VA loans are home mortgages backed by the Department of Veterans Affairs (VA). With a VA loan, eligible service members and veterans can buy a home with little or no down payment, or refinance an existing home to get cash out or a lower monthly payment.
              </p>
              <div className="flex justify-between mt-auto pt-4 border-t border-gray-800">
                <Link href="#" className="text-[#EBD67B] hover:underline font-medium">Learn More</Link>
                <Link href="#" className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why borrow with NattyBank */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase text-[#EBD67B] mb-2">TAILORED FINANCIAL STRATEGIES FOR HIGH-NET WORTH INDIVIDUALS</p>
            <h2 className="text-3xl font-bold mb-6 text-[#EBD67B]">
              Why borrow with NattyBank
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#0c0c0c] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#EBD67B]">Get interest rate discount</h3>
              <p className="text-sm">
                In your 30 minutes, an experienced banker will help you get a 25% interest rate discount with an eligible checking and savings account.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#0c0c0c] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#EBD67B]">Exceptional service from specialists</h3>
              <p className="text-sm">
                Get a dedicated expert who answers every question, works to make sure you have the solution that fits your life, and stays with you every step of the way.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#0c0c0c] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#EBD67B]">Convenient payment options</h3>
              <p className="text-sm">
                Make your payments quickly and easily through online and mobile banking, by phone or mail, with recurring automatic payments, or at a branch.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#0c0c0c] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#EBD67B]">Secure online & mobile banking</h3>
              <p className="text-sm">
                Sign on for 24/7 account access to make payments, transfer money, check balances, and view your statements online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}