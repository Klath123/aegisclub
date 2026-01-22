import { useState } from "react";
import { motion } from "framer-motion";
import MemberCard from "@/components/MemberCard";
import { members } from "@/constants/Members";
import {
  simpleFadeIn,
  container,
  item,
  testimonialHeading,
  decorativeElement,
  dividerVariants,
} from "@/styles/Animations";

type YearFilter = "All" | "2nd" | "3rd" | "4th";

const Members = () => {
  const [activeFilter, setActiveFilter] = useState<YearFilter>("All");

  // Filter members based on selected year
  const filteredMembers =
    activeFilter === "All"
      ? members
      : members.filter((member) => member.year === activeFilter);

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Section header with animations */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={testimonialHeading}
            >
              <motion.span
                className="text-red-500 font-pacifico"
                variants={decorativeElement}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Meet{" "}
              </motion.span>
              the Team Behind Aegis
            </motion.h2>

            <div className="flex justify-center">
              <motion.div
                className="h-1 w-32 bg-red-500 mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={dividerVariants}
              ></motion.div>
            </div>

            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={simpleFadeIn}
            >
              The "Aegis Cyber Club" is a student-run community where members
              work together to learn, share ideas, and grow their skills in
              cybersecurity and technology.
            </motion.p>

            {/* Filter Tabs */}
            <motion.div
              className="flex justify-center gap-4 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={simpleFadeIn}
            >
              {(["All", "2nd", "3rd", "4th"] as YearFilter[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    px-6 py-2.5 rounded-full font-medium transition-all duration-300
                    ${
                      activeFilter === filter
                        ? "bg-emerald-500 text-zinc-900 shadow-lg shadow-emerald-500/40 cursor-default"
                        : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white hover:shadow-md hover:shadow-zinc-500/20"
                    }
                  `}
                >
                  {filter === "All" ? "Present Team" : `${filter} Year`}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Members grid with equal height cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            key={activeFilter} // Re-animate when filter changes
          >
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <motion.div
                  key={member.id}
                  className="h-full"
                  variants={item}
                  whileHover="hover"
                >
                  <MemberCard member={member} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">
                  No members found for {activeFilter} year
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Members;
