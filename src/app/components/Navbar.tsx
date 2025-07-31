"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { UKFlag, NigeriaFlag, GhanaFlag } from './Flags';
import { Search, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Define country type and content data
type Country = 'UK' | 'Nigeria' | 'Ghana';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>('UK');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter()

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to select country
  const selectCountry = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    
    // Store the selected country in localStorage
    localStorage.setItem('selectedCountry', country);
    
    // Dispatch a custom event to notify the page component
    const event = new CustomEvent('countryChange', { detail: { country } });
    window.dispatchEvent(event);
  };

  // Initialize from localStorage on client-side
  useEffect(() => {
    const storedCountry = localStorage.getItem('selectedCountry') as Country;
    if (storedCountry) {
      setSelectedCountry(storedCountry);
      // Dispatch event on initial load
      const event = new CustomEvent('countryChange', { detail: { country: storedCountry } });
      window.dispatchEvent(event);
    }
  }, []);

  // Render the flag based on selected country
  const renderSelectedFlag = () => {
    switch (selectedCountry) {
      case 'UK':
        return <UKFlag />;
      case 'Nigeria':
        return <NigeriaFlag />;
      case 'Ghana':
        return <GhanaFlag />;
      default:
        return <UKFlag />;
    }
  };

  return (
    <nav className="fixed w-full  z-50 bg-black border-b pt-8 md:pt-0 border-[#EBD67B]">
      {/* Top navigation bar - hidden on mobile */}
      <div className="md:hidden relative">
        <button 
          onClick={toggleDropdown}
          className="text-end w-full mr-10 text-[#EBD67B] text-[11px] flex justify-end items-center"
        >
          {selectedCountry === 'Nigeria' ? 'Nigeria' : selectedCountry}
          <span className="ml-1 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute right-10 mt-1 w-40 bg-black border border-gray-800 rounded-md shadow-lg z-50">
              <button 
              onClick={() => selectCountry('Nigeria')} 
              className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-800"
            >
              {/* <span className="mr-2"><NigeriaFlag /></span> */}
              <span>Nigeria</span>
            </button>
            <button 
              onClick={() => selectCountry('UK')} 
              className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-800"
            >
              {/* <span className="mr-2"><UKFlag /></span> */}
              <span>United Kingdom</span>
            </button>
          
            <button 
              onClick={() => selectCountry('Ghana')} 
              className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-800"
            >
              {/* <span className="mr-2"><GhanaFlag /></span> */}
              <span>Ghana</span>
            </button>
          </div>
        )}
      </div>
      <div className="hidden md:flex container mx-auto px-4 md:px-10 py-1 justify-between items-center text-xs">
        <div className="flex space-x-6">
          <Link href="/personal" className="text-[#EBD67B] transition-colors">
            For private customers
          </Link>
          <Link href="/business" className="text-[#EBD67B] transition-colors">
            For business
          </Link>
          <Link href="/commercial" className="text-[#EBD67B] transition-colors">
            Corporate clients
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <Link href="/coming-soon?feature=Transfers" className="text-[#EBD67B] transition-colors">
            Transfers and payments
          </Link>
        </div>
      </div>
      
      {/* Main navigation bar */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Desktop view */}
        <div className="hidden md:flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/nattylogo.svg" alt="Natty Bank" width={50} height={50} className="mr-2" />
          </Link>
          
          <div className="md:flex md:space-x-6 ml-8">
            <Link href="/" className="text-[#EBD67B] transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-[#EBD67B] transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-[#EBD67B] transition-colors">
              Contacts
            </Link>
          </div>
        </div>
        
        {/* Mobile view */}

        <div className="md:hidden sticky flex items-center gap-0">
      
          <Link href="/" className="flex items-center gap-0">
            <Image 
              src="/nattylogo.svg" 
              alt="Natty Bank" 
              width={60} 
              height={60} 
              className="" 
            />
            <div className="flex flex-col">
              <span className="text-[#EBD67B] text-xl font-semibold">NATTYBANK</span>
        
            </div>
          </Link>
        </div>
        
        {/* Desktop right side */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Flag dropdown */}
          <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="flex items-center justify-center rounded-full overflow-hidden w-8 h-8 border border-gray-700 hover:border-[#d4af37] transition-colors"
              aria-label="Select country"
            >
              {renderSelectedFlag()}
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-black border border-gray-800 rounded-md shadow-lg z-50">
                <button 
                  onClick={() => selectCountry('UK')} 
                  className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-800"
                >
                  <span className="mr-2"><UKFlag /></span>
                  <span>United Kingdom</span>
                </button>
                <button 
                  onClick={() => selectCountry('Nigeria')} 
                  className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-800"
                >
                  <span className="mr-2"><NigeriaFlag /></span>
                  <span>Nigeria</span>
                </button>
                <button 
                  onClick={() => selectCountry('Ghana')} 
                  className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-800"
                >
                  <span className="mr-2"><GhanaFlag /></span>
                  <span>Ghana</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Online Banking button */}
          <button onClick={()=> {router.push("/coming-soon?feature=Online-Banking")}} className="border border-[#d4af37] text-[#EBD67B] hover:bg-[#d4af37] hover:text-black px-4 py-2 rounded-sm font-medium transition-colors items-center flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Online Banking
          </button>
        </div>
        
        {/* Mobile right side */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Country selector */}
          {/* <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="flex items-center justify-center rounded-full overflow-hidden w-8 h-8 border border-gray-700 hover:border-[#d4af37] transition-colors"
              aria-label="Select country"
            >
              {renderSelectedFlag()}
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-black border border-gray-800 rounded-md shadow-lg z-50">
                <button 
                  onClick={() => selectCountry('UK')} 
                  className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-800"
                >
                  <span className="mr-2"><UKFlag /></span>
                  <span>United Kingdom</span>
                </button>
                <button 
                  onClick={() => selectCountry('Nigeria')} 
                  className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-800"
                >
                  <span className="mr-2"><NigeriaFlag /></span>
                  <span>Nigeria</span>
                </button>
                <button 
                  onClick={() => selectCountry('Ghana')} 
                  className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-800"
                >
                  <span className="mr-2"><GhanaFlag /></span>
                  <span>Ghana</span>
                </button>
              </div>
            )}
          </div> */}
          
          {/* Search icon */}
          <button 
            className="text-[#EBD67B] p-2"
            aria-label="Search"
          >
            <Search size={24} className="text-[#EBD67B]" />
          </button>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu} 
            className="text-[#EBD67B] p-2 bg-[#EBD67B] flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} className="text-black" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-[#EBD67B] py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="text-[#EBD67B] py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/contact" className="text-[#EBD67B] py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Contacts
              </Link>
              <div className="pt-2 border-t border-gray-800">
                <Link href="/personal" className="text-[#EBD67B] py-2 block transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  For private customers
                </Link>
                <Link href="/business" className="text-[#EBD67B] py-2 block transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  For business
                </Link>
                <Link href="/commercial" className="text-[#EBD67B] py-2 block transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Corporate clients
                </Link>
                <Link href="/coming-soon?feature=Transfers" className="text-[#EBD67B] py-2 block transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Transfers and payments
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      )}
      
      {/* Online Banking button for mobile - right after the navbar */}
      <div className="md:hidden w-full bg-black ">
        <div className="container mx-auto px-4 py-4">
          <button onClick={()=> {router.push("/coming-soon?feature=Online-Banking")}} className="w-full flex items-center justify-center bg-transparent border border-[#EBD67B] rounded-sm py-3 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#EBD67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-[#EBD67B] font-medium">Online Banking</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;