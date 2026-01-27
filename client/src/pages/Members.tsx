import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MemberCard from "@/components/MemberCard";
import { members } from "@/constants/Members";
import {
  simpleFadeIn,
  container,
  item,
  testimonialHeading,
  dividerVariants,
} from "@/styles/Animations";

type MainCategory = "Faculty" | "Co-Convener" | "Team" | null;
type TeamCategory = "Tech" | "Operations" | "Media" | "Cultural";

const Members = () => {
  const [mainCategory, setMainCategory] = useState<MainCategory>("Team");
  const [teamCategory, setTeamCategory] = useState<TeamCategory | null>("Tech");
  const [showTeamFilters, setShowTeamFilters] = useState(true);

  // Filter members based on main selection and team selection
  const getFilteredMembers = () => {
    if (!mainCategory) return [];

    if (mainCategory === "Faculty") {
      return members
        .filter((member) => member.role === "Faculty")
        .sort((a, b) => {
          const posA = a.position?.toLowerCase() || "";
          const posB = b.position?.toLowerCase() || "";
          if (posA.includes("hod") || posA.includes("head")) return -1;
          if (posB.includes("hod") || posB.includes("head")) return 1;
          return 0;
        });
    }

    if (mainCategory === "Co-Convener") {
      return members.filter((member) => member.role === "Co-Convener");
    }

    if (mainCategory === "Team") {
      if (!teamCategory) return [];
      return members.filter(
        (member) => member.role === "Student" && member.team === teamCategory
      );
    }

    return [];
  };

  const filteredMembers = getFilteredMembers();

  // Helper to structure team members into sections
  const getTeamSections = () => {
    if (mainCategory !== "Team")
      return { leads: [], fourthYears: [], thirdYears: [], secondYears: [] };

    const leads = filteredMembers.filter(
      (m) =>
        m.position?.toLowerCase().includes("lead") ||
        m.position?.toLowerCase().includes("co-lead")
    );

    const nonLeads = filteredMembers.filter(
      (m) =>
        !m.position?.toLowerCase().includes("lead") &&
        !m.position?.toLowerCase().includes("co-lead")
    );

    const fourthYears = nonLeads.filter((m) => m.year === "4th");
    const thirdYears = nonLeads.filter((m) => m.year === "3rd");
    const secondYears = nonLeads.filter((m) => m.year === "2nd");

    return { leads, fourthYears, thirdYears, secondYears };
  };

  const { leads, fourthYears, thirdYears, secondYears } = getTeamSections();

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>
      
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-blue-500  mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={testimonialHeading}
            >
              Meet{" "}
              <span className="text-white">
                the Team Behind Aegis
              </span>
            </motion.h2>

            <div className="flex justify-center">
              <motion.div
                className="h-1 bg-blue-500 mb-8"
                style={{ width: "150px", transformOrigin: "center" }}
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

            {/* Main Category Tabs */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={simpleFadeIn}
            >
              {(["Faculty", "Co-Convener", "Team"] as MainCategory[]).map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => {
                      if (category !== "Team") {
                        setMainCategory(category);
                        setShowTeamFilters(false);
                        setTeamCategory(null);
                      } else {
                        // Team button clicked
                        if (mainCategory === "Team") {
                          // Already on Team - toggle the filters
                          setShowTeamFilters(!showTeamFilters);
                          if (showTeamFilters) {
                            setTeamCategory(null);
                          }
                        } else {
                          // Switching to Team
                          setMainCategory("Team");
                          setShowTeamFilters(true);
                          setTeamCategory("Tech");
                        }
                      }
                    }}
                    className={`
                      px-8 py-3 rounded-full font-semibold transition-all duration-300
                      ${
                        mainCategory === category
                          ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                          : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white"
                      }
                    `}
                  >
                    {category}
                  </button>
                )
              )}
            </motion.div>

            {/* Team Category Filter */}
            <AnimatePresence>
              {mainCategory === "Team" && showTeamFilters && (
                <motion.div
                  className="flex flex-wrap justify-center gap-3 mb-6"
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: "1.5rem" }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {(["Tech", "Operations", "Media", "Cultural"] as TeamCategory[]).map(
                    (team) => (
                      <motion.button
                        key={team}
                        onClick={() => {
                          setTeamCategory(teamCategory === team ? null : team);
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`
                          px-6 py-2.5 rounded-full font-medium transition-all duration-300
                          ${
                            teamCategory === team
                              ? "bg-blue-500 text-white shadow-md shadow-blue-500/50"
                              : "bg-zinc-800/50 text-gray-400 hover:bg-zinc-700 hover:text-white border border-zinc-700"
                          }
                        `}
                      >
                        {team}
                      </motion.button>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Members Display */}
          <div className="min-h-[400px]">
            {/* 1. Team selected but no subteam */}
            {mainCategory === "Team" && !teamCategory && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">
                  Please select a team to view members
                </p>
              </div>
            )}

            {/* 2. Faculty View with Head separated */}
            {mainCategory === "Faculty" && (
              <div className="space-y-12">
                {/* Head Section */}
                {filteredMembers
                  .filter((m) => {
                    const pos = m.position?.toLowerCase() || "";
                    return pos.includes("hod") || pos.includes("head");
                  })
                  .map((head) => (
                    <div key={head.id} className="flex justify-center">
                      <motion.div
                        className="w-full md:w-[350px]"
                        variants={item}
                        whileHover="hover"
                      >
                        <MemberCard member={head} />
                      </motion.div>
                    </div>
                  ))}

                {/* Other Faculty Grid */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {filteredMembers
                    .filter((m) => {
                      const pos = m.position?.toLowerCase() || "";
                      return !pos.includes("hod") && !pos.includes("head");
                    })
                    .map((member) => (
                      <motion.div
                        key={member.id}
                        className="h-full"
                        variants={item}
                        whileHover="hover"
                      >
                        <MemberCard member={member} />
                      </motion.div>
                    ))}
                </motion.div>
              </div>
            )}

            {/* 3. Co-Convener View */}
            {mainCategory === "Co-Convener" && (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {filteredMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    className="h-full w-full md:w-[350px]"
                    variants={item}
                    whileHover="hover"
                  >
                    <MemberCard member={member} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* 4. Team Sections */}
            {mainCategory === "Team" && teamCategory && (
              <div className="space-y-20">
                {/* Leads Section */}
                {leads.length > 0 && (
                  <div className="w-full">
                    <motion.h3
                      className="text-3xl font-bold text-white mb-10 text-center relative inline-block left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      Current Leads
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                    </motion.h3>
                    <motion.div 
                      className="flex flex-wrap justify-center gap-8"
                      variants={container}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {leads.map((member) => (
                        <motion.div
                          key={member.id}
                          className="w-full md:w-[350px]"
                          variants={item}
                          whileHover="hover"
                        >
                          <MemberCard member={member} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* 4th Year Section */}
                {fourthYears.length > 0 && (
                  <div className="w-full">
                    <motion.h3
                      className="text-3xl font-bold text-white mb-10 text-center relative inline-block left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      4th Year
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                    </motion.h3>
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                      variants={container}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {fourthYears.map((member) => (
                        <motion.div
                          key={member.id}
                          className="h-full"
                          variants={item}
                          whileHover="hover"
                        >
                          <MemberCard member={member} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* 3rd Year Section */}
                {thirdYears.length > 0 && (
                  <div className="w-full">
                    <motion.h3
                      className="text-3xl font-bold text-white mb-10 text-center relative inline-block left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      3rd Year
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                    </motion.h3>
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                      variants={container}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {thirdYears.map((member) => (
                        <motion.div
                          key={member.id}
                          className="h-full"
                          variants={item}
                          whileHover="hover"
                        >
                          <MemberCard member={member} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* 2nd Year Section */}
                {secondYears.length > 0 && (
                  <div className="w-full">
                    <motion.h3
                      className="text-3xl font-bold text-white mb-10 text-center relative inline-block left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      2nd Year
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                    </motion.h3>
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                      variants={container}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {secondYears.map((member) => (
                        <motion.div
                          key={member.id}
                          className="h-full"
                          variants={item}
                          whileHover="hover"
                        >
                          <MemberCard member={member} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* Empty State for Team */}
                {leads.length === 0 &&
                  fourthYears.length === 0 &&
                  thirdYears.length === 0 &&
                  secondYears.length === 0 && (
                    <div className="text-center text-gray-400 text-lg py-12">
                      No members found for this team.
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;