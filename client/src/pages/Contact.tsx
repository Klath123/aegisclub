import { motion } from "framer-motion";
import {
  simpleFadeIn,
  testimonialHeading,
  dividerVariants,
  container,
  item,
} from "@/styles/Animations";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
} from "lucide-react";
import Footer from "@/components/layout/Footer";



const Contact = () => {
     return (
    <div className="min-h-screen relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>

      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">

          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={testimonialHeading}
            >
              Contact{" "}
              <span className="text-blue-500">
                AEGIS
              </span>
            </motion.h2>

            <div className="flex justify-center">
              <motion.div
                className="h-1 bg-blue-500 mb-8"
                style={{ width: "140px" }}
                variants={dividerVariants}
              />
            </div>

            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={simpleFadeIn}
            >
              Cyber Security Club
            </motion.p>
          </div>

          {/* College Info */}
          <motion.div
            className="bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-2xl p-8 mb-12"
            variants={simpleFadeIn}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Dayananda Sagar College of Engineering
            </h3>

            <p className="text-gray-300 mb-2">
              Accredited by NAAC with 'A' Grade · Autonomous · VTU Belagavi
            </p>
            <p className="text-gray-400 mb-4">
              ISO 9001-2015 Certified Institution
            </p>

            <div className="flex items-start gap-3 text-gray-300">
              <MapPin className="text-blue-400 mt-1" />
              <a
                href="https://maps.app.goo.gl/gaDFj5JwREW7jxNL7"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru - 560111
              </a>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            {/* Faculty */}
            <motion.div variants={item} className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Faculty Coordinator</h4>
              <p className="text-gray-300">Dr. Deepthi V S</p>
              <p className="text-gray-400">Asst. Professor, CSE (Cyber Security)</p>
            </motion.div>

            {/* Student Coordinators */}
            <motion.div variants={item} className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Student Coordinators</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Lochan A</li>
                <li>Dhruthi G P</li>
                <li>Samarth B C</li>
              </ul>
            </motion.div>

            {/* Contact Numbers */}
            <motion.div variants={item} className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Contact Numbers</h4>

              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2"><Phone size={16}/> Kewal Dharamshi – +91 99804 70040</p>
                <p className="flex items-center gap-2"><Phone size={16}/> Likitha Yogesh – +91 91416 44822</p>
                <p className="flex items-center gap-2"><Phone size={16}/> Sahil Raj – +91 91138 31425</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={item} className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Official Email</h4>
              <a
                href="mailto:aegis-cscyber@dayanandsagar.edu"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
              >
                <Mail size={18}/> aegis-cscyber@dayanandsagar.edu
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 md:col-span-2">
              <h4 className="text-xl font-semibold text-white mb-4">Social Presence</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/company/aegis-cs-cyber-dsce/"
                  target="_blank"
                  className="flex items-center gap-3 p-4 rounded-lg bg-zinc-800 hover:bg-blue-500/20 border border-zinc-700 hover:border-blue-500 transition"
                >
                  <Linkedin className="text-blue-400"/> AEGIS Club LinkedIn
                </a>

                <a
                  href="https://www.linkedin.com/in/department-of-cse-cyber-security-714ba4389/"
                  target="_blank"
                  className="flex items-center gap-3 p-4 rounded-lg bg-zinc-800 hover:bg-blue-500/20 border border-zinc-700 hover:border-blue-500 transition"
                >
                  <Linkedin className="text-blue-400"/> Department LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/dsce_cscy"
                  target="_blank"
                  className="flex items-center gap-3 p-4 rounded-lg bg-zinc-800 hover:bg-pink-500/20 border border-zinc-700 hover:border-pink-500 transition sm:col-span-2"
                >
                  <Instagram className="text-pink-400"/> Instagram
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
           </section>
           <Footer />
    </div>
  );
};

export default Contact;