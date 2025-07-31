"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ComingSoon() {
  const searchParams = useSearchParams();
  const feature = searchParams.get("feature") || "this feature";

  return (
    <main className="min-h-screen bg-black text-white pt-20 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <Image
          src="/nattylogo.svg" // Use your logo or a relevant image
          alt="NattyBank Logo"
          width={200}
          height={100}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-[#EBD67B] mb-6">Coming Soon!</h1>
        <p className="text-lg mb-8">
          We're working hard to bring you {feature}. Stay tuned for updates!
        </p>
        <p className="text-sm mb-12 text-gray-400">
          In the meantime, explore our other services or sign up for notifications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/" 
            className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-6 py-3 rounded-md font-medium transition-colors"
          >
            Back to Home
          </Link>
          <Link 
            href="/contact" 
            className="border border-[#EBD67B] hover:bg-[#EBD67B] hover:text-black px-6 py-3 rounded-md font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
        {/* Optional Newsletter Signup */}
        <div className="mt-12">
          <p className="mb-4">Get notified when it's ready:</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400"
            />
            <button 
              type="submit" 
              className="bg-[#EBD67B] hover:bg-[#d4af37] text-black px-6 py-3 rounded-md font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}