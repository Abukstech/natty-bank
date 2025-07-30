"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { UKFlag, NigeriaFlag, GhanaFlag } from './Flags';

// Define country type and content data
type Country = 'UK' | 'Nigeria' | 'Ghana';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>('UK');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="fixed w-full z-50 bg-black border-b border-[#EBD67B]">
      {/* Top navigation bar - hidden on mobile */}
      <div className="hidden md:flex container mx-auto px-4 md:px-10 py-1 justify-between items-center text-xs">
        <div className="flex space-x-6">
          <Link href="/private" className="text-[#EBD67B] transition-colors">
            For private customers
          </Link>
          <Link href="/business" className="text-[#EBD67B] transition-colors">
            For business
          </Link>
          <Link href="/corporate" className="text-[#EBD67B] transition-colors">
            Corporate clients
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <Link href="/transfers" className="text-[#EBD67B] transition-colors">
            Transfers and payments
          </Link>
        </div>
      </div>
      
      {/* Main navigation bar */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center border-t border-gray-800">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/nattylogo.svg" alt="Natty Bank" width={50} height={50} className="mr-2" />
          </Link>
          
          {/* Desktop navigation links */}
          <div className="hidden md:flex md:space-x-6 ml-8">
            <Link href="/" className="text-[#EBD67B] transition-colors">
              Home
            </Link>
            <Link href="/service" className="text-[#EBD67B] transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-[#EBD67B] transition-colors">
              Contacts
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
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
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-[#EBD67B] p-2"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Online Banking button - hidden on smallest screens */}
          <button className="hidden sm:flex border border-[#d4af37] text-[#EBD67B] hover:bg-[#d4af37] hover:text-black px-4 py-2 rounded-sm font-medium transition-colors items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Online Banking
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-[#EBD67B] py-2 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-[#EBD67B] py-2 transition-colors">
                Services
              </Link>
              <Link href="/contacts" className="text-[#EBD67B] py-2 transition-colors">
                Contacts
              </Link>
              <div className="pt-2 border-t border-gray-800">
                <Link href="/private" className="text-[#EBD67B] py-2 block transition-colors">
                  For private customers
                </Link>
                <Link href="/business" className="text-[#EBD67B] py-2 block transition-colors">
                  For business
                </Link>
                <Link href="/corporate" className="text-[#EBD67B] py-2 block transition-colors">
                  Corporate clients
                </Link>
                <Link href="/transfers" className="text-[#EBD67B] py-2 block transition-colors">
                  Transfers and payments
                </Link>
              </div>
              <button className="w-full border border-[#d4af37] text-[#EBD67B] hover:bg-[#d4af37] hover:text-black px-4 py-2 rounded-sm font-medium transition-colors flex items-center justify-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Online Banking
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;