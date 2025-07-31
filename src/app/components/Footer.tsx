

import { Facebook, Twitter, Linkedin, AppleIcon, PlayCircle } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
   <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-4">
          {/* Top Banner - Only visible on desktop */}
          <div className="hidden md:flex mb-16 flex-col md:flex-row items-center justify-between bg-cover bg-center p-8 rounded-lg">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-[#EBD67B]">Open an account now and enjoy all<br />the benefits of modern banking</h3>
            </div>
            <button className="bg-[#EBD67B] hover:bg-[#c4a030] text-black px-6 py-3 rounded-full font-medium transition-colors">
              Open Account
            </button>
          </div>
          
          {/* Mobile Layout - Visible on mobile only */}
          <div className="md:hidden">
            {/* Logo and Info */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 w-full">
                <img src="/nattylogo.svg" alt="Natty Bank" className="h-10 w-10 mr-2" />
                <span className="text-4xl font-bold text-[#EBD67B]">NattyBank</span>
              </div>
              <p className="text-[#EBD67B] mb-4">We are a bank. A fully-fledged, bona fide bank. A business bank created and backed by business people.</p>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-[#EBD67B]">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-[#EBD67B]">
                  <Twitter size={20}  />
                </a>
                <a href="#" className="text-[#EBD67B]">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            {/* App Store and Google Play */}
            <div className="flex flex-col space-y-3 mb-8">
              <a href="#" className="flex items-center justify-center bg-black border border-gray-700 rounded-2xl  px-4 py-2 hover:border-[#EBD67B] transition-colors">
              <img src="/applestore.png" alt="Natty Bank" className="h-6 w-6 mr-2" />
                <div>
        
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center justify-center bg-[#EBD67B] text-black rounded-2xl px-4 py-2 hover:bg-[#c4a030] transition-colors">
 <img src="/playstore.png" alt="Natty Bank" className="h-6 w-6 mr-2" />
                <div>
           
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            
            {/* Footer Sections */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-8">
              {/* Explore NattyBank */}
              <div>
                <h4 className="text-base font-semibold mb-4 uppercase text-[#EBD67B]">Explore NattyBank</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/about" className="hover:text-[#EBD67B]">About Us</Link></li>
               <li><Link href="/coming-soon?feature=career" className="hover:text-[#EBD67B]">Careers</Link></li>
                <li><Link href="/coming-soon?feature=investor"className="hover:text-[#EBD67B]">Investor Relations</Link></li>
                <li><Link href="/coming-soon?feature=blog"className="hover:text-[#EBD67B]">Blog</Link></li>
                </ul>
              </div>
              
              {/* Card Services */}
              <div>
                <h4 className="text-base font-semibold mb-4 uppercase text-[#EBD67B]">Card Services</h4>
                <ul className="space-y-3 text-gray-400">
<li><Link href="/cards?type=credit" className="hover:text-[#EBD67B]">Credit Cards</Link></li>
                  <li><Link href="/cards?type=debit" className="hover:text-[#EBD67B]">Debit Cards</Link></li>
                  <li><Link href="/cards?type=prepaid" className="hover:text-[#EBD67B]">Prepaid Cards</Link></li>
                </ul>
              </div>
              
              {/* Banking Services */}
              <div>
                <h4 className="text-base font-semibold mb-4 uppercase text-[#EBD67B]">Banking Services</h4>
                <ul className="space-y-3 text-gray-400">
                <li><Link href="/personal" className="hover:text-[#EBD67B]">Personal Banking</Link></li>
                <li><Link href="/business" className="hover:text-[#EBD67B]">Business Banking</Link></li>
                <li><Link href="/commercial" className="hover:text-[#EBD67B]">Commercial Banking</Link></li>
                <li><Link href="/checking" className="hover:text-[#EBD67B]">Checking Accounts</Link></li>
                <li><Link href="/wealth-management" className="hover:text-[#EBD67B]">Wealth Management</Link></li>
                <li><Link href="/coming-soon?feature=Mobile-banking" className="hover:text-[#EBD67B]">Mobile Banking</Link></li>
                <li><Link href="/coming-soon?feature=open-account"className="hover:text-[#EBD67B]">Open an Account</Link></li>
                  {/* <li><Link href="#" className="hover:text-[#EBD67B]">Personal Banking</Link></li>
                  <li><Link href="/business" className="hover:text-[#EBD67B]">Business Banking</Link></li>
                  <li><Link href="#" className="hover:text-[#EBD67B]">Commercial Banking</Link></li>
                  <li><Link href="#" className="hover:text-[#EBD67B]">Checking Accounts</Link></li>
                  <li><Link href="#" className="hover:text-[#EBD67B]">Wealth Management</Link></li>
                  <li><Link href="#" className="hover:text-[#EBD67B]">Mobile Banking</Link></li>
                  <li><Link href="#" className="hover:text-[#EBD67B]">Open an Account</Link></li> */}
                </ul>
              </div>
              
              {/* Customer Support */}
              <div>
                <h4 className="text-base font-semibold mb-4 uppercase text-[#EBD67B]">Customer Support</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/contact" className="hover:text-[#EBD67B]">Contact Us</Link></li>
                  <li><Link href="/coming-soon?feature=privacy-policy" className="hover:text-[#EBD67B]">Privacy Policy</Link></li>
                  <li><Link href="/fraud-report" className="hover:text-[#EBD67B]">Report Fraud</Link></li>
                  <li><Link href="/contact#help" className="hover:text-[#EBD67B]">Help & Live Chat</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Contact */}
            <div className="mb-8">
              <h4 className="text-base font-semibold mb-4 uppercase text-[#EBD67B]">Contact</h4>
              <p className="text-gray-400 mb-2">Corporate Headquarters: Unit F, Winston Business Park, Churchill Way #34369, Sheffield, South Yorkshire ,S35 2PS.</p>
              <p className="text-gray-400 mb-2">+44 7441 428182</p>
              <p className="text-gray-400">support@nattybank.com</p>
            </div>
          </div>
          
          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Column 1 - Logo and Info */}
            <div>
              <div className="flex items-center mb-6">
                <img src="/nattylogo.svg" alt="Natty Bank" className="h-10 w-10 mr-2" />
                <span className="text-xl font-bold">NattyBank</span>
              </div>
              <p className="text-gray-400 mb-6">We are a bank. A fully-fledged, bona fide bank. A business bank created and backed by business people.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#EBD67B]">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#EBD67B]">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#EBD67B]">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            {/* Column 2 - Explore NattyBank */}
            <div>
              <h4 className="text-base font-semibold mb-5 uppercase">Explore NattyBank</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-[#EBD67B]">About Us</Link></li>
                <li><Link href="/coming-soon?feature=career" className="hover:text-[#EBD67B]">Careers</Link></li>
                <li><Link href="/coming-soon?feature=investor"className="hover:text-[#EBD67B]">Investor Relations</Link></li>
                <li><Link href="/coming-soon?feature=blog"className="hover:text-[#EBD67B]">Blog</Link></li>
              </ul>
            </div>
            
            {/* Column 3 - Banking Services */}
            <div>
              <h4 className="text-base font-semibold mb-5 uppercase">Banking Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/personal" className="hover:text-[#EBD67B]">Personal Banking</Link></li>
                <li><Link href="/business" className="hover:text-[#EBD67B]">Business Banking</Link></li>
                <li><Link href="/commercial" className="hover:text-[#EBD67B]">Commercial Banking</Link></li>
                <li><Link href="/checking" className="hover:text-[#EBD67B]">Checking Accounts</Link></li>
                <li><Link href="/wealth-management" className="hover:text-[#EBD67B]">Wealth Management</Link></li>
                <li><Link href="/coming-soon?feature=Mobile-banking" className="hover:text-[#EBD67B]">Mobile Banking</Link></li>
                <li><Link href="/coming-soon?feature=open-account"className="hover:text-[#EBD67B]">Open an Account</Link></li>
              </ul>
            </div>
            
            {/* Column 4 - Card Services & Customer Support */}
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h4 className="text-base font-semibold mb-5 uppercase">Card Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/cards?type=credit" className="hover:text-[#EBD67B]">Credit Cards</Link></li>
                  <li><Link href="/cards?type=debit" className="hover:text-[#EBD67B]">Debit Cards</Link></li>
                  <li><Link href="/cards?type=prepaid" className="hover:text-[#EBD67B]">Prepaid Cards</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-semibold mb-5 uppercase">Customer Support</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/contact" className="hover:text-[#EBD67B]">Contact Us</Link></li>
                  <li><Link href="/coming-soon?feature=privacy-policy" className="hover:text-[#EBD67B]">Privacy Policy</Link></li>
                  <li><Link href="/fraud-report" className="hover:text-[#EBD67B]">Report Fraud</Link></li>
                  <li><Link href="/contact#help" className="hover:text-[#EBD67B]">Help & Live Chat</Link></li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-base font-semibold mb-5 uppercase">Contact</h4>
                <p className="text-gray-400 mb-2">Corporate Headquarters: Unit F, Winston Business Park, Churchill Way #34369, Sheffield, South Yorkshire ,S35 2PS</p>
                <p className="text-gray-400 mb-2">+44 7441 428182</p>
                <p className="text-gray-400">support@nattybank.com</p>
              </div>
            </div>
          </div>
        
          {/* App Store and Google Play - Desktop */}

          {/* <div className="flex flex-col space-y-3 mb-8">
              <a href="#" className="flex items-center justify-center bg-black border border-gray-700 rounded-2xl  px-4 py-2 hover:border-[#EBD67B] transition-colors">
              <img src="/applestore.png" alt="Natty Bank" className="h-6 w-6 mr-2" />
                <div>
        
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center justify-center bg-[#EBD67B] text-black rounded-2xl px-4 py-2 hover:bg-[#c4a030] transition-colors">
 <img src="/playstore.png" alt="Natty Bank" className="h-6 w-6 mr-2" />
                <div>
           
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </a>
            </div> */}
          <div className="hidden md:flex flex-wrap gap-4 mb-8">
            <a href="#" className="flex items-center bg-black border border-gray-700 rounded-lg px-4 py-2 hover:border-[#EBD67B] transition-colors">
              <img src="/applestore.png" alt="Natty Bank" className="h-6 w-6 mr-2" />
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-base font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center bg-black border border-gray-700 rounded-lg px-4 py-2 hover:border-[#EBD67B] transition-colors">
            <img src="/playstore.png" alt="Natty Bank" className="h-6 w-6 mr-2" />
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="text-base font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-[#222] text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Natty Bank. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;