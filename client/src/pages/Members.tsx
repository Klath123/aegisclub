import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

type MainCategory = "Faculty" | "Team" | null;
type TeamCategory = "Tech" | "Operations" | "Media" | "Cultural";

const Members = () => {
  const [mainCategory, setMainCategory] = useState<MainCategory>("Team");
  const [teamCategory, setTeamCategory] = useState<TeamCategory | null>("Tech");
  const [showTeamFilters, setShowTeamFilters] = useState(true);

  // Filter members based on all selections
  const getFilteredMembers = () => {
    // If no main category is selected, return empty array
    if (!mainCategory) {
      return [];
    }

    let filtered = members;

    if (mainCategory === "Faculty") {
      // Show only faculty members
      filtered = members.filter((member) => member.role === "Faculty");

      // Sort to show HOD first
      filtered = filtered.sort((a, b) => {
        if (a.position?.toLowerCase().includes("hod")) return -1;
        if (b.position?.toLowerCase().includes("hod")) return 1;
        return 0;
      });
    } else {
      // Team category - show all students or filtered by team
      filtered = members.filter((member) => member.role === "Student");

      // Filter by specific team if selected
      if (teamCategory) {
        filtered = filtered.filter((member) => member.team === teamCategory);
      }

      // Sort by team: Tech first, then alphabetically
      filtered = filtered.sort((a, b) => {
        if (a.team === "Tech" && b.team !== "Tech") return -1;
        if (a.team !== "Tech" && b.team === "Tech") return 1;
        return (a.team ?? "").localeCompare(b.team ?? "");
      });
    }

    return filtered;
  };

  const filteredMembers = getFilteredMembers();

  return (
    <div className="min-h-screen relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={testimonialHeading}
            >
              <motion.span
                className="text-blue-500 font-pacifico"
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

            {/* Main Category Filter (Faculty / Team) */}
            <motion.div
              className="flex justify-center gap-4 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={simpleFadeIn}
            >
              {(["Faculty", "Team"] as MainCategory[]).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    if (category === "Faculty") {
                      setMainCategory("Faculty");
                      setShowTeamFilters(false);
                      setTeamCategory(null);
                    } else {
                      // Team button clicked
                      if (mainCategory === "Team") {
                        // Already on Team - toggle the filters
                        setShowTeamFilters(!showTeamFilters);
                        if (showTeamFilters) {
                          // Collapsing - reset filters
                          setTeamCategory(null);
                        }
                      } else {
                        // Switching from Faculty to Team
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
              ))}
            </motion.div>

            {/* Team Category Filter (only for Team) - with expand/collapse animation */}
            <AnimatePresence>
              {mainCategory === "Team" && showTeamFilters && (
                <motion.div
                  key="team-categories"
                  className="flex flex-wrap justify-center gap-3 mb-6 overflow-hidden"
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    marginBottom: "1.5rem",
                  }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {(
                    [
                      "Tech",
                      "Operations",
                      "Media",
                      "Cultural",
                    ] as TeamCategory[]
                  ).map((team) => (
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
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Members grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            key={`${mainCategory}-${teamCategory}`}
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
                  {!mainCategory
                    ? "Please select Faculty or Team to view members"
                    : mainCategory === "Team" && !teamCategory
                      ? "Please select a team (Tech, Operations, Media, or Cultural)"
                      : "No members found for the selected filters"}
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