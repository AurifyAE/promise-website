'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Contact() {
  const [phone, setPhone] = useState('');
  return (
    <section className="relative py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/gold-in-hand.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto p-4 rounded-xl relative z-10 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative bg-[#294734]/90 flex flex-col justify-between backdrop-blur-sm p-12 rounded-lg overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='mb-6'
            >
              <h2 className="text-2xl md:text-3xl text-white font-semibold mb-1">Contact Information</h2>
              <p className='text-base md:text-lg text-white'>Say something to start a live chat!</p>
            </motion.div>
            <div className="space-y-6 text-sm md:text-base">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center space-x-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className=""
                >
                <Image
                  src="/icons/phone-call.svg"
                  alt="instagram"
                  width={6}
                  height={6}
                  className="h-6 w-6 object-cover"
                  priority
                />
                </motion.div>
                <div className="flex items-center space-x-4">
                  <p className="text-[#FCF7F1]">+971 50 579 4931</p>
                  <p className="text-[#FCF7F1]">+971 65 28 8027</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start space-x-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-1"
                >
                <Image
                  src="/icons/email.svg"
                  alt="instagram"
                  width={6}
                  height={6}
                  className="h-6 w-6 object-cover"
                  priority
                />
                </motion.div>
                <div>
                  <p className="text-[#FCF7F1]">compliance@promisegoldrefinery.com<br />
                  promisegoldrefinery@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start space-x-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-1"
                >
                <Image
                  src="/icons/location-filled.svg"
                  alt="instagram"
                  width={6}
                  height={6}
                  className="h-6 w-6 object-cover"
                  priority
                />
                </motion.div>
                <div>
                  <p className="text-[#FCF7F1]">Q3-49, SAIF Zone Airport Freezone,</p>
                  <p className="text-[#FCF7F1]">Sharjah - UAE. P.O.Box: 124479</p>
                </div>
              </motion.div>
            </div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 flex space-x-4"
            >
              {[
                { href: "#", icon: "/icons/youtube.svg", label: "YouTube", bg: "bg-black" },
                { href: "instagram.com", icon: "/icons/instagram.svg", label: "Instagram", bg: "bg-white" },
                { href: "https://api.whatsapp.com/send/?phone=971505794931&text&type=phone_number&app_absent=0", icon: "/icons/whatsapp.svg", label: "WhatsApp", bg: "bg-black" },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.65 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={social.href}
                    target={social.label !== "YouTube" ? '_blank' : undefined}
                    className={`${social.bg} h-8 w-8 text-white hover:text-[#EBDECF] transition-colors flex items-center justify-center rounded-full`}
                  >
                    <span className="sr-only">{social.label}</span>
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={social.label === "YouTube" ? 6 : 5}
                      height={social.label === "YouTube" ? 6 : 5}
                      className={`h-5 w-5 ${social.label === "YouTube" ? "object-contain" : "object-cover"}`}
                      priority
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='absolute -bottom-8 -right-8 md:-bottom-15 md:-right-15 w-30 h-30 md:w-60 md:h-60 bg-[#133C22] rounded-full'
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='absolute bottom-8 right-10 md:bottom-22 md:right-23 lg:bottom-20 lg:right-23 w-16 h-16 md:w-32 md:h-32 bg-[#A869075C] rounded-full'
            />
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-lg"
          >
            <form className="space-y-6 text-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {["first-name|First Name", "last-name|Last Name"].map((field, index) => {
                  const [id, label] = field.split("|");
                  return (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative"
                    >
                      <input
                        type="text"
                        id={id}
                        required
                        className="
                          peer w-full px-0 py-3 bg-transparent border-0 border-b-2 
                          border-gray-300 text-black placeholder-transparent
                          focus:border-black focus:outline-none focus:ring-0
                          transition-colors duration-300
                        "
                        placeholder={label}
                      />
                      <label
                        htmlFor={id}
                        className="
                          absolute left-0 -top-6 text-sm font-medium text-gray-600 
                          peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                          peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black
                          transition-all duration-300 pointer-events-none
                        "
                      >
                        {label} <span className="text-red-500">*</span>
                      </label>
                    </motion.div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  <input
                    type="email"
                    id="email"
                    required
                    className="
                      peer w-full px-0 py-3 bg-transparent border-0 border-b-2 
                      border-gray-300 text-black placeholder-transparent
                      focus:border-black focus:outline-none focus:ring-0
                      transition-colors duration-300
                    "
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="
                      absolute left-0 -top-6 text-sm font-medium text-gray-600 
                      peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                      peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black
                      transition-all duration-300
                    "
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  <label className="absolute -top-3 left-0 text-xs font-medium text-gray-600 pointer-events-none transition-all duration-300">
                    Phone <span className="text-red-500">*</span>
                  </label>

                  <PhoneInput
                    country="ae"
                    value={phone}
                    onChange={setPhone}
                    enableSearch
                    inputProps={{ required: true }}
                    containerClass="mt-1"
                    inputClass="!w-full !h-12 !text-base !bg-transparent !border-0 !border-b-2 !border-gray-300 !outline-none !ring-0 !pl-14 !pr-4 !text-black focus:!border-black transition-colors duration-300"
                    buttonClass="!border-0 !border-b-2 !border-gray-300 !rounded-none !bg-transparent hover:!border-gray-400"
                    dropdownClass="!rounded-lg !shadow-lg"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className='mb-10'
              >
                <span className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </span>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                  {[
                    { value: "general", label: "General Inquiry" },
                    { value: "gold", label: "Gold Refining" },
                    { value: "assaying", label: "Assaying" },
                    { value: "silver", label: "Silver Refinery" },
                  ].map(({ value, label }, index) => (
                    <motion.label
                      key={value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.65 + index * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-flex items-center cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="subject"
                        value={value}
                        required
                        className="sr-only peer"
                      />
                      <span
                        className={`
                          w-3 h-3 rounded-full transition-all duration-200 flex items-center justify-center
                          bg-[#E0E0E0] peer-checked:bg-black 
                          border-none
                          group-hover:ring-2 group-hover:ring-[#EBDECF]
                        `}
                        
                      >
                        <span
                          className={`
                            block w-2.5 h-2.5 rounded-full transition-all duration-200
                            ${'peer-checked:bg-white bg-transparent'}
                          `}
                        ></span>
                      </span>
                      <span
                        className={
                          "ml-2 text-gray-700 transition-colors duration-200 " +
                          "peer-checked:text-black"
                        }
                      >
                        {label}
                      </span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="
                    peer w-full px-0 py-3 bg-transparent border-0 border-b-2 
                    border-gray-300 text-black placeholder-transparent resize-none
                    focus:border-black focus:outline-none focus:ring-0
                    transition-colors duration-300
                  "
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="
                    absolute left-0 -top-6 text-sm font-medium text-gray-600 
                    peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black
                    transition-all duration-300
                  " 
                >
                  Message <span className="text-red-500">*</span>
                </label>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <button
                  type="submit"
                  className="w-full bg-[#1A1A1A] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EBDECF]"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}