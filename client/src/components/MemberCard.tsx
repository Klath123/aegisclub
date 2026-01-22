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
    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
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
  <div className="pt-4 pb-4 mt-auto border-t border-gray-700/50 w-full bg-[#1e293b] z-20">
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

  // Helper function to convert Google Drive view link to download link
  const getDownloadUrl = (url: string | undefined) => {
    if (!url) return "";

    // Check if it's a Google Drive link
    if (url.includes("drive.google.com")) {
      // Extract file ID from different Google Drive URL formats
      let fileId = "";

      // Format: https://drive.google.com/file/d/FILE_ID/view
      const viewMatch = url.match(/\/file\/d\/([^\/]+)/);
      if (viewMatch) {
        fileId = viewMatch[1];
      }

      // Format: https://drive.google.com/open?id=FILE_ID
      const openMatch = url.match(/[?&]id=([^&]+)/);
      if (openMatch) {
        fileId = openMatch[1];
      }

      // If we found a file ID, return the direct download link
      if (fileId) {
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
      }
    }

    // If not a Google Drive link or couldn't parse, return original URL
    return url;
  };

  return (
    <div className="group w-full h-full min-h-[420px] flex flex-col bg-[#2d3e50] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden border-l-4 border-red-500">
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
          `}</style>

          <div
            className="absolute inset-0 w-full h-full flex flex-col bg-[#2d3e50]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="flex flex-col flex-grow p-6 gap-3 items-center justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg mb-4">
                {showPlaceholder ? (
                  <div className="flex items-center justify-center w-full h-full bg-gray-600 text-gray-100 text-3xl font-bold">
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

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                {member.position && (
                  <p className="text-sm font-medium text-red-400 mt-1">
                    {member.position}
                  </p>
                )}
              </div>
              <div className="w-16 h-0.5 bg-gray-600 mx-auto mt-2"></div>
            </div>
          </div>

          <div
            className="absolute inset-0 w-full h-full flex flex-col bg-[#2d3e50] items-center justify-center gap-6 px-6"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h3 className="text-xl font-bold text-white">Resume</h3>

            {member.resumeUrl ? (
              <>
                <a
                  href={member.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-3 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Resume
                </a>

                <a
                  href={getDownloadUrl(member.resumeUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-3 rounded-md border-2 border-red-500 text-red-400 font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  Download Resume
                </a>
              </>
            ) : (
              <p className="text-sm text-gray-400">Resume not available</p>
            )}
          </div>
        </div>
      </div>

      <SocialFooter socialLinks={member.socialLinks} />
    </div>
  );
};

export default MemberCard;
