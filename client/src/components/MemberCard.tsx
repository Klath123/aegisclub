import React, { useState } from "react";
import type {
  Member,
  MemberCardProps,
  SocialLinkProps,
} from "@/constants/Members";

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, aria, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
    aria-label={aria}
    onClick={(e) => e.stopPropagation()}
  >
    {icon}
  </a>
);

interface SocialFooterProps {
  socialLinks: Member["socialLinks"];
}

const SocialFooter: React.FC<SocialFooterProps> = ({ socialLinks }) => (
  <div className="w-full">
    <div className="flex items-center justify-center gap-4">
      {socialLinks?.linkedin && (
        <SocialLink
          href={socialLinks.linkedin}
          aria="LinkedIn"
          icon={<LinkedInIcon />}
        />
      )}
      {socialLinks?.github && (
        <SocialLink
          href={socialLinks.github}
          aria="GitHub"
          icon={<GitHubIcon />}
        />
      )}
      {socialLinks?.email && (
        <SocialLink
          href={`mailto:${socialLinks.email}`}
          aria="Email"
          icon={<MailIcon />}
        />
      )}
      {!socialLinks?.linkedin &&
        !socialLinks?.github &&
        !socialLinks?.email && (
          <span className="text-xs text-gray-500">
            No social links available
          </span>
        )}
    </div>
  </div>
);

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  const showPlaceholder = imageError || !member.imageUrl;

  return (
    <div className="group w-full h-full min-h-[480px] flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 relative overflow-hidden border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl">
      <div className="flex-grow relative z-0" style={{ perspective: "1000px" }}>
        <div
          className="relative w-full h-full transition-all duration-500"
          style={{ transformStyle: "preserve-3d" }}
        >
          <style>{`
            .group:hover .relative > div[style*="preserve-3d"], 
            .group:focus-within .relative > div[style*="preserve-3d"] {
              transform: rotateY(180deg);
            }
            /* Prevent flip when hovering social links */
            .group:has(.social-footer:hover) .relative > div[style*="preserve-3d"] {
              transform: rotateY(0deg) !important;
            }
          `}</style>

          {/* Front Side */}
          <div
            className="absolute inset-0 w-full h-full flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="flex flex-col flex-grow p-6 gap-4 items-center justify-center">
              {/* Rectangular Photo */}
              <div className="w-full h-full max-h-[300px] rounded-2xl overflow-hidden shadow-xl mb-2">
                {showPlaceholder ? (
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 text-white text-4xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                ) : (
                  <img
                    src={member.imageUrl}
                    alt={`${member.name}`}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>

              {/* Name and Position */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                {member.position && (
                  <p className="text-sm font-medium text-gray-400">
                    {member.position}
                  </p>
                )}
              </div>
            </div>

            {/* Social Links on Front - with click protection */}
            <div
              className="social-footer pt-4 pb-4 border-t border-white/10 w-full"
              onMouseEnter={(e) => e.stopPropagation()}
              onMouseLeave={(e) => e.stopPropagation()}
            >
              <SocialFooter socialLinks={member.socialLinks} />
            </div>
          </div>

          {/* Back Side - About */}
<div
  className="absolute inset-0 w-full h-full flex flex-col 
  bg-gradient-to-br from-[#0f172a]/95 via-[#020617]/95 to-[#020617]/95 
  backdrop-blur-xl"
  style={{
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
  }}
>
  <div className="relative flex flex-col h-full p-8">

   {/* Subtle static ambient accents */}
<div className="absolute top-[-40px] right-[-40px] w-56 h-56 bg-blue-500/8 blur-3xl rounded-full" />
<div className="absolute bottom-[-40px] left-[-40px] w-56 h-56 bg-blue-500/6 blur-3xl rounded-full" />

{/* Header */}
<div className="text-center mb-6 relative z-10">
  <h3 className="text-2xl font-semibold text-blue-400 tracking-tight">
    About Me
  </h3>

  {/* Static underline */}
  <div className="mt-2 w-12 h-[2px] bg-blue-400 mx-auto rounded-full" />
</div>


    {/* Bio */}
    <div className="relative z-10 flex-grow overflow-y-auto pr-3 custom-scrollbar">
  <p className="
    text-[0.95rem]
    leading-7
    text-gray-200
    text-left
    tracking-normal
    font-normal
    whitespace-pre-line
  ">
    {member.bio || "No details available."}
  </p>
</div>


    {/* Footer tags */}
    {(member.team || member.year) && (
      <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap justify-center gap-3 text-xs">
        {member.team && (
          <span className="px-3 py-1 rounded-full 
          bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            {member.team}
          </span>
        )}
        {member.year && (
          <span className="px-3 py-1 rounded-full 
          bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            {member.year} Year
          </span>
        )}
      </div>
    )}
  </div>
</div>

          </div>
        </div>
      </div>
    // </div>
  );
};

export default MemberCard;