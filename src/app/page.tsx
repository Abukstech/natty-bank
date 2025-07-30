"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight } from 'lucide-react';

// Define country-specific content
type Country = 'UK' | 'Nigeria' | 'Ghana';

interface CountryContent {
  heroImage: string;
  heroTitle: string;
  heroDescription: string;

}

const countryContent: Record<Country, CountryContent> = {
  UK: {
    heroImage: '/ukhero.jpg',
    heroTitle: 'Modern Banking with a Global Perspective',
    heroDescription: "Banking shouldn't be stuck in the past. At NattyBank UK, we deliver secure, sophisticated financial services with a digital-first approach that fits your lifestyle — whether you're saving for your first home, managing your day-to-day spending, or scaling a business across borders.",
   
  },
  Nigeria: {
    heroImage: '/ngnhero.jpg', // You would replace this with a Nigeria-specific image
    heroTitle: 'Banking Excellence in Nigeria',
    heroDescription: "Smart, secure, and sustainable financial solutions,empowering individuals, businesses, andcommunities across Africa.",
  
  },
  Ghana: {
    heroImage: '/ghanahero.jpg', // You would replace this with a Ghana-specific image
    heroTitle: 'Your Modern Banking Partner Secure, Fast & Made for You',
    heroDescription: "NattyBank is redefining banking in Ghana with powerful digital tools, world-class service, and the security you deserve. Whether you're managing personal finances or growing a business, NattyBank gives you the freedom to bank your way — anytime, anywhere.",
    
  },
};

export default function Home() {
  const [, setSelectedCountry] = useState<Country>('UK');
  const [content, setContent] = useState<CountryContent>(countryContent.UK);

  useEffect(() => {
    // Initialize from localStorage
    const storedCountry = localStorage.getItem('selectedCountry') as Country;
    if (storedCountry && countryContent[storedCountry]) {
      setSelectedCountry(storedCountry);
      setContent(countryContent[storedCountry]);
    }

    // Listen for country change events
    const handleCountryChange = (event: CustomEvent<{country: Country}>) => {
      const country = event.detail.country;
      if (countryContent[country]) {
        setSelectedCountry(country);
        setContent(countryContent[country]);
      }
    };

    window.addEventListener('countryChange', handleCountryChange as EventListener);

    return () => {
      window.removeEventListener('countryChange', handleCountryChange as EventListener);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            {/* Using the country-specific hero image */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${content.heroImage})` }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-10 z-10 relative">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-2xl md:text-5xl lg:text-6xl text-[#EBD67B] font-medium mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {content.heroTitle}
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-[#EBD67B]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {content.heroDescription}
            </motion.p>
            <motion.button 
              className="bg-[#EBD67B] hover:bg-[#c4a030] flex flex-row items-center text-black px-6 py-3 rounded-[30px] font-medium text-lg transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Choose what's right for you */}
      <section className="pb-8 bg-black">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p 
            className="text-sm font-normal mt-5 text-[#EBD67B] leading-1.5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            BANKING AT ITS FINEST
          </motion.p>
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold my-5 text-[#EBD67B]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Choose what&apos;s right for you
          </motion.h2>
          <motion.p 
            className="text-sm font-normal mb-6 text-[rgb(235,214,123)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            We help businesses and customers achieve more
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-2">
            {/* Replace each div with motion.div */}
            <motion.div 
              className="flex flex-col items-center justify-center px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <Image src={'/banking.svg'} alt="Banking" width={40} height={40} className="mb-2" />
              <p className="text-[#EBD67B] text-sm sm:text-base">Banking</p>
            </motion.div>
            
            {/* Apply similar motion.div to other items */}
            <motion.div 
              className="flex flex-col items-center justify-center px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <Image src={'/checking.svg'} alt="Checking" width={40} height={40} className="mb-2" />
              <p className="text-[#EBD67B] text-sm sm:text-base">Checking</p>
            </motion.div>
          
            {/* Continue with other items... */}
            <div className="flex flex-col items-center justify-center px-2">
              <Image src={'/savings.svg'} alt="Savings" width={40} height={40} className="mb-2" />
              <p className="text-[#EBD67B] text-sm sm:text-base">Savings</p>
            </div>
          
            <div className="flex flex-col items-center justify-center px-2">
              <Image src={'/cards.svg'} alt="Cards" width={40} height={40} className="mb-2" />
              <p className="text-[#EBD67B] text-sm sm:text-base">Cards</p>
            </div>
          
            <div className="flex flex-col items-center justify-center px-2">
              <Image src={'/mortgage.svg'} alt="Mortgages" width={40} height={40} className="mb-2" />
              <p className="text-[#EBD67B] text-sm sm:text-base">Mortgages</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Top products & services */}
      <section className="py-8 md:py-16 bg-[#0c0c0c]">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-start text-[#EBD67B]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Top products & services
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                title: "WEALTH MANAGEMENT",
                description: "At NattyBank, we believe wealth is more than accumulation,it&apos;s about protection, growth, and legacy.",
                image: "/products1.svg",
                alt: "Wealth Management"
              },
              {
                title: "PERSONAL BANKING",
                description: "At NattyBank, personal banking is more than just managing money, it&apos;s about giving you the tools, support, and confidence to thrive financially at every stage of life.",
                image: "/products2.svg",
                alt: "Personal Banking"
              },
              {
                title: "MOBILE BANKING",
                description: "With the NattyBank Mobile App, you can manage your finances on the go whether you&apos;re paying bills, sending money, tracking expenses, or applying for a loan. It's fast, secure, and built to keep you in control, 24/7.",
                image: "/products3.svg",
                alt: "Mobile Banking"
              },
              {
                title: "CREDIT CARDS",
                description: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn&apos;t listen.",
                image: "/products3.svg",
                alt: "Credit Cards"
              }
            ].map((product, index) => (
              <motion.div 
                key={index} 
                className="bg-white flex flex-col hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* Text section */}
                <div className="p-4 md:p-6">
                  <h3 className="text-xs md:text-sm uppercase font-medium tracking-wider text-black mb-2 md:mb-4">{product.title}</h3>
                  <p className="text-black text-xs md:text-sm">
                    {product.description}
                  </p>
                </div>
                
                {/* Image section */}
                <div className="h-36 md:h-48 relative mt-auto">
                  <Image 
                    src={product.image} 
                    alt={product.alt} 
                    fill 
                    style={{objectFit: "cover"}}
                  />
                </div>
                
                {/* View Details link */}
                <div className="p-3 md:p-4 bg-black">
                  <Link href="#" className="text-[#d4af37] hover:underline font-medium flex items-center text-sm md:text-base">
                    <span>View Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 md:mt-10">
            <div className="flex space-x-2">
              <button className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#d4af37]"></button>
              <button className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gray-600 hover:bg-gray-400"></button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grow with Finance */}
      <section className="py-10 md:py-20 bg-black">
        <motion.div 
          className="mx-auto px-4 md:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-6 text-start text-[#EBD67B] px-2 md:px-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Growth with Purpose
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base mb-6 text-[#EBD67B] px-2 md:px-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We are driven by a balanced commitment to profitability, environmental responsibility, and social impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image 
              src={'/growth2.png'} 
              alt="Growth" 
              height={500} 
              width={500} 
              className="object-contain w-full"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mobile Banking */}
      <section className="py-16 bg-[#EBD67B]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="text-3xl font-bold mb-6 text-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Your Bank, Your Way, Anytime.
              </motion.h2>
              <motion.p 
                className="text-black/80 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Experience the freedom of banking on your terms with our state-of-the-art mobile app. Manage your accounts, make payments, and track your spending—all from the palm of your hand.
              </motion.p>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  className="bg-black text-white px-4 py-2 rounded-md flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 8.42 7.31c1.33.07 2.25.78 3.04.79 1.21-.05 2.13-.79 3.61-.84 2.05.06 3.57 1.15 4.38 2.92-3.52 2.14-2.9 6.88.59 8.43-.7 1.96-1.66 3.67-2.99 5.67zm-5.03-15.7c-.12-2.34 1.91-4.58 4.06-4.58.21 2.06-1.84 4.66-4.06 4.58z"/>
                  </svg>
                  App Store
                </motion.button>
                <motion.button 
                  className="bg-black text-white px-4 py-2 rounded-md flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.684v.065c0 .253.103.49.282.667.179.178.415.277.666.277h.058c.253 0 .49-.103.667-.282L15.6 12.976a1.42 1.42 0 000-1.952L4.992 .404A.97.97 0 004.325.121h-.058a.948.948 0 00-.666.277.948.948 0 00-.282.667v.065c0 .261.109.503.29.684z"/>
                  </svg>
                  Google Play
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: [20, 0, 20] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
              >
                <Image 
                  src={"/nattypng.png"}
                  alt="Mobile Banking App" 
                  width={300} 
                  height={600}
                  className=" "
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-black">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-12 text-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience Banking with <span className="text-[#d4af37]">Freedom and Control</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 px-8 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "/banking.svg",
                alt: "Banking",
                title: "Banking",
                isBold: false,
                items: [
                  "Bank & savings accounts",
                  "Credit cards",
                  "Personal loans"
                ]
              },
              {
                icon: "/mortgage.svg",
                alt: "Home loans",
                title: "Home Loans",
                isBold: true,
                items: [
                  "Repayments calculator",
                  "Interest rates",
                  "Refinancing"
                ]
              },
              {
                icon: "/globe.svg",
                alt: "International",
                title: "International",
                isBold: true,
                items: [
                  "Overseas payment",
                  "Foreign exchange rates",
                  "Foreign exchange calculator"
                ]
              },
              {
                icon: "/Vector.svg",
                alt: "Business",
                title: "Business",
                isBold: true,
                items: [
                  "Bank accounts & cards",
                  "Business Banking",
                  "Business loans & finance"
                ]
              },
              {
                icon: "/cards.svg", // Changed from Vector.svg to cards.svg for variety
                alt: "Rates & Financial Tools",
                title: "Rates & Financial Tools",
                isBold: true,
                items: [
                  "Rates & fees",
                  "Tools & calculators",
                  "Savings calculator"
                ]
              },
              {
                icon: "/file.svg", // Changed from Vector.svg to file.svg for variety
                alt: "Insurance",
                title: "Insurance",
                isBold: true,
                items: [
                  "Home insurance",
                  "Car insurance",
                  "Health insurance"
                ]
              }
            ].map((category, index) => (
              <motion.div 
                key={index} 
                className="p-6 rounded-lg hover:border-[#d4af37] transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, borderColor: "#d4af37", borderWidth: 1 }}
              >
                <div className="mb-4 flex flex-row gap-3 items-center">
                  <motion.img 
                    src={category.icon} 
                    alt={category.alt} 
                    className="h-10 w-10 text-[#EBD67B]"
                    whileHover={{ rotate: 10 }}
                  />
                  <h3 className={`text-xl ${category.isBold ? 'font-semibold' : 'font-normal'} mb-2 text-[#EBD67B] transition-colors`}>
                    {category.title}
                  </h3>
                </div>
          
                <ul className="space-y-2 text-[#EBD67B]">
                  {category.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (0.1 * itemIndex), duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-[#0c0c0c]" style={{ backgroundImage: 'url("/make.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="text-3xl font-bold mb-6 md:mt-[400px] text-[#d4af37]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Make your money <br />work for you
              </motion.h2>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Manage all your financial needs anytime, anywhere with <br />NattyBank&apos;s secure and seamless digital banking tools.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 bg-white p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-black uppercase text-sm font-medium mb-6">
                FILL OUT THE FORM BELOW AND OUR TEAM WILL GET BACK TO YOU AS SOON AS POSSIBLE.
              </p>
              <form>
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-black">Subject</label>
                  <div className="relative">
                    <select id="subject" className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-md focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] text-black appearance-none">
                      <option>Select option</option>
                      <option>General Inquiry</option>
                      <option>Account Services</option>
                      <option>Investment Advice</option>
                      <option>Technical Support</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
                
                {/* Add similar motion.div wrappers for other form elements */}
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">Your Name *</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-md focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] text-black" required />
                </motion.div>
                
                {/* Continue with other form elements... */}
                
                <motion.button 
                  type="submit" 
                  className="bg-black hover:bg-[#222] text-[#d4af37] px-6 py-3 rounded-md font-medium transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently asked questions
          </motion.h2>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              "How do I open a new account?",
              "What are the benefits of your premium accounts?",
              "How secure is your mobile banking app?",
              "What investment options do you offer?"
            ].map((question, index) => (
              <motion.div 
                key={index}
                className="border border-[#333] rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ borderColor: "#d4af37" }}
              >
                <motion.button 
                  className="flex justify-between items-center w-full p-4 text-left font-medium hover:bg-[#1a1a1a] transition-colors"
                  whileHover={{ backgroundColor: "#1a1a1a" }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span>{question}</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-[#d4af37]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4">Still have questions? Contact our support team</p>
            <motion.button 
              className="bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black px-6 py-3 rounded-md font-medium transition-colors"
              whileHover={{ scale: 1.05, backgroundColor: "#d4af37", color: "#000" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

    
     
    </main>
  );
}
