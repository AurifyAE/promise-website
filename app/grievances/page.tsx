'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Download } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Grievances() {
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<Status>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'Grievances Form',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, phone, subject: 'Grievances Form' }),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', subject: 'Grievances Form', message: '' });
                setPhone('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }

        // Reset status after 4 seconds
        setTimeout(() => setStatus('idle'), 4000);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/home/gold-in-hand.jpg"
                        alt="Contact Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="container mx-auto relative z-10">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-8 md:p-12 rounded-t-2xl border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 mb-0"
                    >
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Grievances</h1>
                            <p className="text-gray-600 max-w-2xl text-lg">
                                We are committed to transparency and accountability. If you have any concerns or grievances, please use the form below or download our official form.
                            </p>
                        </div>
                        <Link
                            href="/docs/grievances-form.pdf"
                            target="_blank"
                            className="flex items-center gap-3 bg-[#e09b4d] hover:bg-[#c77b30] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-gold-600/20 whitespace-nowrap"
                        >
                            <Download size={20} />
                            Download Grievances Form (PDF)
                        </Link>
                    </motion.div>

                    <div className="bg-white px-4 pb-4 md:px-8 md:pb-8 rounded-b-2xl overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-xl p-4">

                            {/* Left Side - Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative bg-[#294734] flex flex-col justify-between p-12 rounded-xl overflow-hidden min-h-[500px]"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className='mb-6'
                                >
                                    <h2 className="text-2xl md:text-3xl text-white font-semibold mb-4">Raise your grievances</h2>
                                    <p className='text-sm md:text-base max-w-lg text-white opacity-90 leading-relaxed'>
                                        Our dedicated compliance team is ready to address your concerns and ensure a prompt resolution following our established procedures.
                                    </p>
                                </motion.div>

                                <div className="space-y-8 text-sm md:text-base">
                                    <div className="flex items-center space-x-6">
                                        <div className="bg-white/10 p-3 rounded-full">
                                            <Image src="/icons/phone-call.svg" alt="phone" width={24} height={24} className="h-6 w-6 brightness-0 invert" priority />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-white">+971 50 579 4931</p>
                                            <p className="text-white">+971 65 28 8027</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6">
                                        <div className="bg-white/10 p-3 rounded-full">
                                            <Image src="/icons/email.svg" alt="email" width={24} height={24} className="h-6 w-6 brightness-0 invert" priority />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-white">compliance@promisegoldrefinery.com</p>
                                            <p className="text-white">promisegoldrefinery@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6">
                                        <div className="bg-white/10 p-3 rounded-full">
                                            <Image src="/icons/location-filled.svg" alt="location" width={24} height={24} className="h-6 w-6 brightness-0 invert" priority />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-white">Q3-49, SAIF Zone Airport Freezone</p>
                                            <p className="text-white">Sharjah - UAE. P.O.Box: 124479</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Icons */}
                                <div className="mt-12 flex space-x-4 relative z-20">
                                    {[
                                        { href: "#", icon: "/icons/youtube.svg", label: "YouTube", bg: "bg-white/10" },
                                        { href: "instagram.com", icon: "/icons/instagram.svg", label: "Instagram", bg: "bg-white/10" },
                                        { href: "https://api.whatsapp.com/send/?phone=971505794931&text&type=phone_number&app_absent=0", icon: "/icons/whatsapp.svg", label: "WhatsApp", bg: "bg-white/10" },
                                    ].map((social) => (
                                        <Link
                                            key={social.label}
                                            href={social.href}
                                            target={social.label !== "YouTube" ? '_blank' : undefined}
                                            className={`${social.bg} h-10 w-10 text-white hover:bg-gold-600 transition-all flex items-center justify-center rounded-full backdrop-blur-md`}
                                        >
                                            <Image
                                                src={social.icon}
                                                alt={social.label}
                                                width={20}
                                                height={20}
                                                className="h-5 w-5 brightness-0 invert"
                                                priority
                                            />
                                        </Link>
                                    ))}
                                </div>

                                {/* Decorative circles */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className='absolute -bottom-8 -right-8 md:-bottom-15 md:-right-15 w-30 h-30 md:w-60 md:h-60 bg-[#133C22] rounded-full'
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className='absolute bottom-8 right-10 md:bottom-22 md:right-23 lg:bottom-20 lg:right-23 w-16 h-16 md:w-32 md:h-32 bg-[#A869075C] rounded-full'
                                />
                            </motion.div>

                            {/* Right Side - Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white p-4 md:p-8"
                            >
                                <form onSubmit={handleSubmit} className="space-y-8 text-black">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {[
                                            { id: 'firstName', label: 'First Name', required: true },
                                            { id: 'lastName', label: 'Last Name', required: true },
                                        ].map(({ id, label, required }) => (
                                            <div key={id} className="relative">
                                                <input
                                                    type="text"
                                                    id={id}
                                                    name={id}
                                                    value={formData[id as keyof typeof formData]}
                                                    onChange={handleChange}
                                                    required={required}
                                                    className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-transparent focus:border-gold-600 focus:outline-none focus:ring-0 transition-colors duration-300"
                                                    placeholder={label}
                                                />
                                                <label
                                                    htmlFor={id}
                                                    className="absolute left-0 -top-6 text-sm font-medium text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-gold-600 transition-all duration-300"
                                                >
                                                    {label} {required && <span className="text-red-500">*</span>}
                                                </label>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Email + Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-transparent focus:border-gold-600 focus:outline-none focus:ring-0 transition-colors duration-300"
                                                placeholder="Email"
                                            />
                                            <label
                                                htmlFor="email"
                                                className="absolute left-0 -top-6 text-sm font-medium text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-gold-600 transition-all duration-300"
                                            >
                                                Email
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <label className="absolute -top-6 left-0 text-xs font-medium text-gray-500 transition-all duration-300">
                                                Phone
                                            </label>
                                            <PhoneInput
                                                country="ae"
                                                value={phone}
                                                onChange={setPhone}
                                                enableSearch
                                                countryCodeEditable={false}
                                                containerClass="mt-1"
                                                inputClass="!w-full !h-12 !text-base !bg-transparent !border-0 !border-b-2 !border-gray-200 !outline-none !ring-0 !pl-14 !pr-4 !text-black focus:!border-gold-600 transition-colors duration-300"
                                                buttonClass="!border-0 !border-b-2 !border-gray-200 !rounded-none !bg-transparent hover:!border-gray-400"
                                                dropdownClass="!rounded-lg !shadow-lg"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="relative mt-4">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-transparent resize-none focus:border-gold-600 focus:outline-none focus:ring-0 transition-colors duration-300"
                                            placeholder="Message"
                                        />
                                        <label
                                            htmlFor="message"
                                            className="absolute left-0 -top-6 text-sm font-medium text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-gold-600 transition-all duration-300"
                                        >
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className={`
                                                w-full py-4 px-8 rounded-full font-bold transition-all duration-300 shadow-xl
                                                ${status === 'success'
                                                    ? 'bg-green-600 text-white shadow-green-600/20'
                                                    : status === 'error'
                                                        ? 'bg-red-600 text-white shadow-red-600/20'
                                                        : 'bg-black text-white hover:bg-gold-600 shadow-black/20'
                                                }
                                                ${status === 'loading' ? 'opacity-70 cursor-not-allowed text-transparent' : ''}
                                                relative
                                            `}
                                        >
                                            {status === 'loading' && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24" fill="none">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                    </svg>
                                                </div>
                                            )}
                                            {status === 'success' && 'Message Sent Successfully ✓'}
                                            {status === 'error' && 'Failed — Please Try Again ✕'}
                                            {status === 'idle' && 'Submit Grievance'}
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
