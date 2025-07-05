

const Footer = () => {
  return (
   <footer className="py-8 bg-[url('/make.jpg')] bg-cover">
        <div className="container mx-auto px-4">
          {/* Top Banner */}
          <div className="mb-16 flex flex-col md:flex-row items-center justify-between  bg-cover bg-center p-8 rounded-lg">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-[#d4af37]">Open an account now and enjoy all<br />the benefits of modern banking</h3>
            </div>
            <button className="bg-[#d4af37] hover:bg-[#c4a030] text-black px-6 py-3 rounded-full font-medium transition-colors">
              Open Account
            </button>
          </div>
          
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Column 1 - Logo and Info */}
            <div>
              <div className="flex items-center mb-6">
                <img src="/nattypng.png" alt="Natty Bank" className="h-10 w-10 mr-2" />
                <span className="text-xl font-bold">NattyBank</span>
              </div>
              <p className="text-gray-400 mb-6">We are a bank. A fully-fledged, bona fide bank. A business bank created and backed by business people.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#d4af37]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#d4af37]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#d4af37]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Column 2 - Explore NattyBank */}
            <div>
              <h4 className="text-base font-semibold mb-5 uppercase">Explore NattyBank</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#d4af37]">About Us</a></li>
                <li><a href="#" className="hover:text-[#d4af37]">Careers</a></li>
                <li><a href="#" className="hover:text-[#d4af37]">Investor Relations</a></li>
                <li><a href="#" className="hover:text-[#d4af37]">Blog</a></li>
              </ul>
            </div>
            
            {/* Column 3 - Banking Services */}
            <div>
              <h4 className="text-base font-semibold mb-5 uppercase">Banking Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#d4af37]">Personal Banking</a></li>
                <li><a href="#" className="hover:text-[#d4af37]">Business Banking</a></li>
                <li><a href="#" className="hover:text-[#d4af37]">Commercial Banking</a></li>
                <li><a href="#" className="hover:text-[#d4af37]">Checking Accounts</a></li>
                <li><a href="#" className="hover:text-[#d4af37]">Wealth Management</a></li>
                <li><a href="#" className="hover:text-[#d4af37]">Mobile Banking</a></li>
                <li><a href="#" className="hover:text-[#d4af37]">Open an Account</a></li>
              </ul>
            </div>
            
            {/* Column 4 - Card Services & Customer Support */}
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h4 className="text-base font-semibold mb-5 uppercase">Card Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-[#d4af37]">Credit Cards</a></li>
                  <li><a href="#" className="hover:text-[#d4af37]">Debit Cards</a></li>
                  <li><a href="#" className="hover:text-[#d4af37]">Prepaid Cards</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-semibold mb-5 uppercase">Customer Support</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-[#d4af37]">Contact Us</a></li>
                  <li><a href="#" className="hover:text-[#d4af37]">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-[#d4af37]">Report Fraud</a></li>
                  <li><a href="#" className="hover:text-[#d4af37]">Help & Live Chat</a></li>
                </ul>
              </div>

                 <div className="mb-8">
            <h4 className="text-base font-semibold mb-5 uppercase">Contact</h4>
            <p className="text-gray-400 mb-2">Corporate Headquarters: 65 Broad Street, New York, NY 10004</p>
            <p className="text-gray-400 mb-2">+44 7441 428182</p>
            <p className="text-gray-400">support@nattybank.com</p>
          </div>
            </div>
          </div>
        
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#" className="flex items-center bg-black border border-gray-700 rounded-lg px-4 py-2 hover:border-[#d4af37] transition-colors">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-base font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center bg-black border border-gray-700 rounded-lg px-4 py-2 hover:border-[#d4af37] transition-colors">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="text-base font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-[#222] text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Natty Bank. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;