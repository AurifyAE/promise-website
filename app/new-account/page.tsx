"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

const documents = [
    "Trade Licence Copy",
    "Memorandum of Association",
    "Certificate of Incorporation",
    "Share Certificates",
    "TRN and CTRN Certificate",
    "Latest Audited Financials of the Company",
    "Latest Bank Statement",
    "Letter of Good Standing",
    "Proof of Go AML Registration",
    "Tenancy Contract | Utility Bills Under the name of Entity",
    "AML-CFT Policy of Entity",
    "Supply Chain Policy",
    "Valid Passport Copy All Shareholder and Manager",
    "Emirate ID of All Shareholder and Manager",
    "Visa copy of All Shareholder and Manager",
    "Residency Proof Tenancy Contract | Utility Bill of all Shareholders",
    "Duly Filled signed and Stamped copy of Account Opening Form",
    "Duly Filled signed and Stamped copy of all Declarations",
];

export default function NewAccountPage() {
    return (
        <div className="min-h-screen bg-white font-instrument">
            <Navbar />

            {/* Main Content */}
            <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Open an <span className="text-gold-600">Account</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                        To open an account, your company must first contact the Compliance Department of Promise Gold Refinery FZE through the email address provided in the “Contact Us” section of our website.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Instructions & Important Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <section>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Our Compliance Team will provide you with the Account Opening Form and required declarations, which must be completed and submitted along with the supporting documents listed below for initial compliance assessment.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                                    <span>We only accept documents in English or Arabic.</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                                    <span>The list above are basic minimum requirements, we may request for additional supporting documents.</span>
                                </div>
                            </div>
                        </section>

                        <section className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Important Information</h2>
                            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                                <p>
                                    Documents and information including the company, shareholders, beneficial owners, and person/s who will operate the account are processed and checked against the Screening database and other third-party due diligence software and service providers as part of our compliance procedure.
                                </p>
                                <p className="text-gold-700 font-medium">
                                    Promise Gold  reserves the right to reject or deny an application without disclosing the reason.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Document List */}
                    <div className="lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documentation</h2>
                        <div className="grid grid-cols-1 gap-2">
                            {documents.map((doc, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 px-4 py-3 rounded-lg border border-gray-50 bg-white hover:border-gold-100 hover:bg-gold-50/20 transition-all"
                                >
                                    <span className="shrink-0 w-6 h-6 rounded-md bg-gold-50 text-gold-700 font-bold text-xs flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-700 text-sm">{doc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Contact />
            <Footer />
        </div>
    );
}

