import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Policices & Certifications", href: "/certificate-and-policies" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "News", href: "/news" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ", href: "/faq" },
];

const services = [
  { label: "Gold Refining", href: "/services/gold-refining" },
  { label: "Assaying Services", href: "/services/assaying-services" },
  { label: "Metal Recycling", href: "/services/metal-recycling" },
  { label: "Silver Refining", href: "/services/silver-refining" },
];


export default function Footer() {
  return (
    <footer className="bg-[#294734] text-white">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* 1st Column - Logo and Newsletter */}
          <div className="space-y-6 md:col-span-2">
            <div className="h-12 w-32 mb-4">
              <Image 
                src="/images/home/logo.svg" 
                alt="Promise Gold Refinery" 
                width={128} 
                height={48}
                className="h-full w-auto"
                priority
              />
            </div>
            {/* <address className="not-italic text-white space-y-1 text-sm">
              <p>123 Gold Street, Industrial Area 15</p>
              <p>Sharjah, United Arab Emirates</p>
              <p>Email: info@promisegold.ae</p>
              <p>Phone: +971 6 123 4567</p>
            </address> */}
            <p className="text-white text-sm">
              Sharjah's trusted gold and precious metals refinery
            </p>
            <div className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 border-b-2 border-gray-300 px-4 py-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:bg-[#1f3627]"
                />
                <button className="px-4 py-3 bg-[#1f3627] border-b-2 border-gray-300 text-sm font-semibold text-white transition-colors hover:bg-[#1a2c20]">
                  
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </button>
              </div>
              <p className="text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* 2nd Column - Quick Links */}
          <div>
            <h3 className="mb-3 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#c0c0c0] hover:text-[#EBDECF] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3rd Column - More Links */}
          <div>
          <h3 className="mb-3 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm mb-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#c0c0c0] hover:text-[#EBDECF] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>          
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">
              © 2025 Promise Gold Refinery. All rights reserved
            </p>
            <div className="mt-4 flex space-x-6 text-sm text-gray-400 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-[#EBDECF] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#EBDECF] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}