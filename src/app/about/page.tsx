"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section - You'll import the image */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('/aboutnatty.png')` }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-10 z-10 relative">
          <div className="max-w-3xl">
            <p className="text-sm font-normal mb-2 text-[#EBD67B]">MORE THAN A BANK</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#EBD67B] font-medium mb-6">
              A Financial Partner<br />You Can Trust.
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-[#EBD67B]">
              At NattyBank, we&apos;re building the future of finance rooted in integrity, powered by innovation, and driven by your success.
            </p>
            <button className="bg-[#EBD67B] hover:bg-[#c4a030] flex flex-row items-center text-black px-6 py-3 rounded-[30px] font-medium text-lg transition-colors">
              Get Started 
              <Image
                src="/vector.svg"
                alt="Arrow Icon"
                width={20}
                height={20}
                className="ml-2"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image 
                src="/product1.png" 
                alt="Our Mission" 
                width={500} 
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#EBD67B]">Our Mission</h2>
              <p className="text-base md:text-lg mb-6 text-white">
                To provide innovative, inclusive, and intelligent financial services that help people thrive in a digital-first world.
              </p>
              <p className="text-base md:text-lg mb-6 text-white">
                We&apos;re committed to responsible development and digital asset management, ensuring the financial well-being of our customers with agility and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-12 md:py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#EBD67B]">Our Vision</h2>
              <p className="text-base md:text-lg mb-6 text-white">
                We envision a world where banking is not a burden but a bridge to opportunities, security, and prosperity. Whether you&apos;re saving for the future, building your business, or navigating financial challenges, NattyBank is here to support you with clarity and confidence.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <Image 
                src="/products2.svg" 
                alt="Our Vision" 
                width={500} 
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#EBD67B]">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity First",
                description: "Trust is our foundation. We operate transparently, ethically, and with your best interests at heart.",
                icon: "/banking.svg"
              },
              {
                title: "Innovation Driven",
                description: "We embrace cutting-edge technology to simplify and strengthen your banking experience.",
                icon: "/cards.svg"
              },
              {
                title: "Customer Centric",
                description: "Your needs drive our decisions. We listen, adapt, and deliver personalized financial solutions.",
                icon: "/checking.svg"
              },
              {
                title: "Inclusion Matters",
                description: "We believe financial access is for all – regardless of background, income, or location.",
                icon: "/savings.svg"
              }
            ].map((value, index) => (
              <div key={index} className="bg-[#111] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Image 
                    src={value.icon} 
                    alt={value.title} 
                    width={40} 
                    height={40}
                    className="mr-3"
                  />
                  <h3 className="text-xl font-semibold text-[#EBD67B]">{value.title}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redefining Modern Day Banking */}
      <section className="py-12 md:py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image 
                src="/products3.svg" 
                alt="Modern Banking" 
                width={500} 
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-sm font-normal mb-2 text-[#EBD67B]">GROWTH WITH PURPOSE</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#EBD67B]">Redefining Modern Day Banking</h2>
              <p className="text-base md:text-lg mb-6 text-white">
                At NattyBank, we&apos;re redefining what it means to be a modern financial institution. Established with a vision to blend technology, personalized service, and ethical practices, we provide individuals and businesses with seamless, secure, and smart banking solutions.
              </p>
              <p className="text-base md:text-lg mb-6 text-white">
                In a world where finance moves faster than ever, we strive to be more than just a bank — we&apos;re your financial partner, your growth catalyst, and your advocate for financial wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#EBD67B]">Security Obsessed</h2>
          <p className="text-base md:text-lg mb-12 text-white max-w-3xl mx-auto">
            Your data, privacy, and assets are protected with the highest standards of digital security.
          </p>
          
          <div className="flex justify-center">
            <Image 
              src="/growth2.png" 
              alt="Security" 
              width={600} 
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#EBD67B]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Ready to Experience Modern Banking?</h2>
          <p className="text-base md:text-lg mb-8 text-black/80 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made the switch to NattyBank.
          </p>
          <Link href="/contact" className="inline-block bg-black text-[#EBD67B] hover:bg-[#222] px-8 py-4 rounded-[30px] font-medium text-lg transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}