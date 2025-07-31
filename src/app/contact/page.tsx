"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    topic: "",
    email: "",
    name: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form or show success message
  };

  return (
    <main className="min-h-screen bg-black text-white pt-20 md:px-20">
      {/* Hero Section with Background Image */}
      {/* <section className="relative py-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="/ngnhero.jpg" 
            alt="Modern Building" 
            fill
            className="object-cover opacity-50"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 h-[400px]">
        
          <div className="md:w-1/2 bg-black p-8 md:p-12 absolute left-0 bottom-0 md:bottom-0 lg:bottom-0">
            <div className="mb-6">
              <p className="text-sm uppercase text-[#EBD67B]">CONTACT US</p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#EBD67B] mb-4">Customer Service and Support</h1>
              <p className="text-[#EBD67B]">Contact us for answers to all of your banking questions.</p>
            </div>
          </div>
        </div>
      </section> */}


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
          <div className="max-w-xl bg-black p-8 md:p-12 absolute left-0 bottom-0 md:bottom-0 lg:bottom-0 ">
            <h1 className="text-3xl md:text-4xl font-bold text-[#EBD67B] mb-4">
            CONTACT US
            </h1>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#EBD67B] mb-4">Customer Service and Support</h1>
              <p className="text-[#EBD67B]">Contact us for answers to all of your banking questions.</p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">You can reach us by:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Contact */}
            <div className="border border-[#333] p-6 rounded-lg text-center hover:border-[#EBD67B] transition-colors">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <Image 
                    src="/Vector.svg" 
                    alt="Email" 
                    width={24} 
                    height={24}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#EBD67B]">Email</h3>
              
              <div className="mb-4">
                <p className="text-sm font-bold mb-1">United Kingdom</p>
                <p className="text-sm text-[#EBD67B]">support@nattybank.com</p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-bold mb-1">Nigeria</p>
                <p className="text-sm text-[#EBD67B]">support@nattybank.com</p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-bold mb-1">Ghana</p>
                <p className="text-sm text-[#EBD67B]">support@nattybank.com</p>
              </div>
            </div>
            
            {/* Phone Contact */}
            <div className="border border-[#333] p-6 rounded-lg text-center hover:border-[#EBD67B] transition-colors">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <Image 
                    src="/Vector.svg" 
                    alt="Phone" 
                    width={24} 
                    height={24}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#EBD67B]">Phone</h3>
              
              <div className="mb-4">
                <p className="text-sm font-bold mb-1">Customer Care Center</p>
                <p className="text-sm text-[#EBD67B]">+44 7441 428182</p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-bold mb-1">Monday through Friday</p>
                <p className="text-sm text-[#EBD67B]">7:00 a.m. to 10:00 p.m. EST</p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-bold mb-1">Saturday and Sunday</p>
                <p className="text-sm text-[#EBD67B]">8:00 a.m. to 5:00 p.m. EST</p>
              </div>
            </div>
            
            {/* Mail Contact */}
            <div className="border border-[#333] p-6 rounded-lg text-center hover:border-[#EBD67B] transition-colors">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <Image 
                    src="/Vector.svg" 
                    alt="Mail" 
                    width={24} 
                    height={24}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#EBD67B]">Mail</h3>
              
              <div className="mb-4">
                <p className="text-sm font-bold mb-1">Customer Care Center</p>
                <p className="text-sm text-[#EBD67B]">Unit F, Winston Business Park, Churchill Way #34369, Sheffield, South Yorkshire ,S35 2PS</p>
              </div>
              
              <div className="mb-8">
                <p className="text-xs text-gray-400">For information about accounts and services, send your mail to the address listed on your statement / bill or call us at:</p>
                <p className="text-sm text-[#EBD67B] mt-2">+44 7441 428182</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="help" className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-lg text-center mb-2 text-gray-400">ANY OTHER INQUIRY? TRY HERE:</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#EBD67B]">Send us an inquiry</h3>
            <p className="text-center mb-10 text-gray-300">A question? An issue? Drop us a line and we'll see how we can help.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <select 
                  name="topic" 
                  value={formData.topic} 
                  onChange={handleChange}
                  className="w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBD67B]"
                  required
                >
                  <option value="" disabled>Select option</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="Your email address" 
                  className="w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBD67B]"
                  required
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Your name" 
                  className="w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBD67B]"
                  required
                />
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Your message" 
                  rows={5} 
                  className="w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBD67B]"
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="bg-[#EBD67B] hover:bg-[#c4a030] text-black px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}