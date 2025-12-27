'use client'
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Devika Nair",
    position: "CEO / MANAGING DIRECTOR",
    image: "/images/team/team-dummy.png",
    description: "john doe is the ceo of the company and he is responsible for the overall direction of the company."
  },
  {
    name: "John Smith",
    position: "CHIEF OPERATING OFFICER",
    image: "/images/team/team-dummy.png",
    description: "john doe is the ceo of the company and he is responsible for the overall direction of the company."
  },
  {
    name: "Sarah Johnson",
    position: "HEAD OF QUALITY ASSURANCE",
    image: "/images/team/team-dummy.png",
    description: "john doe is the ceo of the company and he is responsible for the overall direction of the company."
  },
  {
    name: "Michael Chen",
    position: "SENIOR METALLURGIST",
    image: "/images/team/team-dummy.png",
    description: "john doe is the ceo of the company and he is responsible for the overall direction of the company."
  }
];

type TeamMember = {
  image: string;
  name: string;
  position: string;
  description: string;
};

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      className="group shrink-0 w-[280px] md:w-[320px] h-[360px] md:h-[380px] bg-[#ECC273] rounded-lg p-6 shadow-md overflow-hidden transition-colors duration-300 ease-out hover:bg-[#294734]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.13 }}
    >
      <div className="flex flex-col items-center h-full">
        {/* Circular Image */}
        <div className="relative w-44 h-44 md:w-52 md:h-52 mb-4">
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23ddd' width='200' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3E%3C/missing%3E%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg md:text-xl font-bold text-black group-hover:text-white mb-2 text-center transition-colors duration-300">
          {member.name}
        </h3>

        {/* Position */}
        <p className="text-xs md:text-base font-bold text-black group-hover:text-[#F6E6BF] text-center transition-colors duration-300 mb-3">
          {member.position}
        </p>

        {/* Description (shown on hover) */}
        <p className="text-xs md:text-sm text-black/80 group-hover:text-white/90 text-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20 md:pt-24">
        {/* OUR TEAM Section */}
        <section className="pt-20 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              OUR TEAM
            </motion.h2>

            <motion.p
              className="text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.3 }}
            >
              At Promise Gold Refinery, our team embodies the pinnacle of expertise and dedication in the precious metals industry. From our skilled technicians meticulously handling each step of the refining process to our astute analysts ensuring the highest standards of quality control, every member of our team is committed to delivering unparalleled results
            </motion.p>

            {/* Scrollable Team Cards */}
            {/* <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-6 min-w-max px-2">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} index={index} />
              ))}
              </div>
            </div> */}
          </div>
        </section>

        {/* QUALITY ASSURANCE Section */}
        <section className="py-5 pb-20 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-12 items-center">
              {/* Left Side - Text */}
              <motion.div
                className="text-center order-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  QUALITY ASSURANCE
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Conveying the gold refinery's unwavering dedication to prioritizing excellence and integrity in its refined gold products.
                </p>
              </motion.div>

              {/* Right Side - Group Photo */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/team/teams.jpg"
                    alt="Quality Assurance Team"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23ddd' width='600' height='400'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='24' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EQuality Assurance Team%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="w-[520px] h-[520px] absolute top-[50%] -translate-y-[50%] -left-80 bg-[#ECC273] rounded-full"></div>
                <div className="w-[520px] h-[520px] absolute top-[50%] -translate-y-[50%] -right-80 bg-[#ECC273] rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}
