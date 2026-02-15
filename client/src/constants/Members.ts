export interface Member {
  id: number;
  name: string;
  position?: string;
  imageUrl?: string;
  bio?: string;
  resumeUrl?: string;
  role?: "Faculty" | "Student" | "Co-Convener" | "Founder Leads";
  team?: "Tech" | "Operations" | "Media" | "Cultural";
  year?: "2nd" | "3rd" | "4th";
  socialLinks?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface MemberCardProps {
  member: Member;
}

export interface SocialLinkProps {
  href: string;
  aria: string;
  icon: React.ReactNode;
}

// Aegis Cyber Club Members 2025-26
export const members: Member[] = [
  // ==================== TECH TEAM ====================
  // Lead & Co-Lea
  {
    id: 201,
    name: "Dr. Mohammed Tajuddin",
    position: "Professor & Head, \n CSCY & Convenor Aegis Club",
    role: "Faculty",
    team: undefined,
    year: undefined,
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769964042/uploads/ghudgafp9zmmadtyjx82.jpg", // Add image URL if available
    // bio: "Qualification: M.Tech, Ph.D",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dr-mohammed-tajuddin-14666883/",
      // Add email/socials if available
    },
  },
  {
    id: 202,
    name: "Dr. Deepthi VS",
    position: "Assistant Professor,\nCSCY & Co-Convenor Aegis Club",
    role: "Faculty",
    team: undefined,
    year: undefined,
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769964175/uploads/nincxkvtaofgehzckd7b.jpg", // Add image URL if available
    // bio: "Qualification: M.Tech, Ph.D",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dr-deepthi-vs-224a5199/",
    },
  },
  {
    id: 205,
    name: "Dr. Rakshitha Kiran P",
    position: "Assistant Professor, CSCY & Event Co-Ordinator",
    role: "Faculty",
    team: undefined,
    year: undefined,
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769964839/uploads/mrv60nlxqgvpbqp6u4f0.jpg", // Add image URL if available
    // bio: "Qualification: M.Tech, Ph.D",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dr-rakshitha-kiran-b41979a3/",
    },
  },

  {
    id: 206,
    name: "Dr. Pallavi Bindagi",
    position: "Assistant Professor",
    role: "Faculty",
    team: undefined,
    year: undefined,
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1770363188/uploads/gta8l52teotgccjcirjt.jpg", // Add image URL if available
    // bio: "Qualification: M.Tech, Ph.D",
    socialLinks: {},
  },
  {
    id: 203,
    name: "Padmavathi S",
    position: "Assistant Professor",
    role: "Faculty",
    team: undefined,
    year: undefined,
    imageUrl: 
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091863/WhatsApp_Image_2026-02-13_at_9.36.20_PM_mjce1v.jpg", // Add image URL if available
    // bio: "Qualification: M.Tech, (Ph.D)",
    socialLinks: {},
  },
  {
    id: 204,
    name: "Shresta Mangala L",
    position: "Assistant Professor",
    role: "Faculty",
    team: undefined,
    year: undefined,
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769965232/uploads/rw7wggvimeyudl50xxnr.jpg", // Add image URL if available
    // bio: "Qualification: M.Tech",
    socialLinks: {},
  },
  {
    id: 207,
    name: "Nida Afreen Rizvi",
    position: "Assistant Professor",
    role: "Faculty",
    team: undefined,
    year: undefined,
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769965454/uploads/aqdotq9xpvayzixabwzp.jpg", // Add image URL if available
    // bio: "Qualification: M.Tech",
    socialLinks: {linkedin : "https://www.linkedin.com/in/nida-afreen-rizvi-245112181/"},
  },

  {
    id: 100,
    name: "Kewal",
    position: "Lead 2024-2025",
    role: "Founder Leads",
    team: undefined, // Or assign a team if known, but Co-Convener is a main role
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771164643/b054639e-4191-4ca2-8d8d-4564b9408b82_peakyk.jpg",
    bio: "Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shreyasreddyb",
      email: "shreyasreddyb@gmail.com",
      github: "https://x.com/shreyasreddyb", // Using x as github link placeholder as per screenshot column? Or just putting it somewhere.
    },
  },
  {
    id: 100,
    name: "Shreyas Reddy B",
    position: "Co-Lead 2024-2025",
    role: "Founder Leads",
    team: undefined, // Or assign a team if known, but Co-Convener is a main role
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769533680/aegis/Tech/4th/shreyas.jpg",
    bio: "Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shreyasreddyb",
      email: "shreyasreddyb@gmail.com",
      github: "https://x.com/shreyasreddyb", // Using x as github link placeholder as per screenshot column? Or just putting it somewhere.
    },
  },

  //tech
  {
    id: 312,
    name: "Sahil Raj",
    position: "Technical Lead 2024-2025",
    role: "Founder Leads",
    team: undefined,
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1770363573/uploads/whsqx3sbpesi76odv5pr.jpg",
    bio: "buidling",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/sahil-raj-in?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      github: "github.com/sahil-raj",
      email: "sahilrajaaru@gmail.com",
    },
  },
  {
    id: 302,
    name: "R Aswin",
    position: "Technical Co-Lead 2024-2025",
    role: "Founder Leads",
    team: undefined,
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769533739/aegis/Tech/4th/ashwin.webp",
    bio: "in pursuit of odyssey and craft",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/r-aswin242004",
      github: "https://github.com/Aswinr24",
      email: "aswinr242004@gmail.com",
    },
  },

  // OPERATIONS
  {
    id: 29,
    name: "Likitha Yogesh",
    position: "Operations Lead 2024-2025",
    role: "Founder Leads",
    team: undefined,
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769534365/aegis/Operations/4th/likitha.webp",
    bio: "Passionate about driving innovation, building strong teams, and turning ideas into impactful outcomes. Always eager to learn, collaborate, and take on new challenges.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/likitha-yogesh-b61b25261",
      github: "https://github.com/LikithaYogesh",
      email: "likithayogesh17@gmail.com",
    },
  },
  {
    id: 3000,
    name: "Arantha Shreya",
    position: "Operations Co-Lead 2024-2025",
    role: "Founder Leads",
    team: undefined,
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1770363321/uploads/br6xwgzzeslv1k17gsfy.jpg",
    bio: "",
    socialLinks: {
      email: "aranthashreya@gmail.com",
    },
  },
  {
    id: 30, // Amareshwar Sai
    name: "Amareshwar Sai",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091863/WhatsApp_Image_2026-02-13_at_9.36.29_PM_iuujgw.jpg",
    bio: "Just a 21-year-old figuring out life—one line of code (and one emcee script) at a time. Probably overthinking my next big idea while pretending I've got it all together!",
    socialLinks: {
      linkedin: "http://linkedin.com/in/amareshwar-sai-a42b5622b",
      github: "https://github.com/Amareshwar-Sai",
      email: "amareshwarsai3@gmail.com",
    },
  },
  {
    id: 33, // Dharaneesh Kuruba
    name: "K Dharaneesh",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769534608/aegis/Operations/4th/dharneesj.webp",
    bio: "Hi, I'm Dharaneesh! I'm always excited to collaborate on events, projects, or any innovative ideas. Whether it's organizing, planning, or brainstorming, I'm passionate about creating impactful experiences. If you're looking for someone to team up with, feel free to connect with me—let's make something great together!",
    socialLinks: {
      email: "dharaneeshkuruba.2005@gmail.com",
    },
  },
  {
    id: 35,
    name: "Nidhi N",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771097248/Nidhi_N_mcwnj3.png",
    bio: "Efficiently juggling tasks with a smile and a bit of magic.",
    socialLinks: {
      linkedin: "www.linkedin.com/in/nidhi-n-652a692b0",
      email: "nidhinagesh01@gmail.com",
    },
  },

  // MEDIA
  {
    id: 14,
    name: "Shyam S Bharadwaj",
    position: "Media Lead 2024-2025",
    role: "Founder Leads",
    team: undefined,
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769534808/aegis/Media/4th/shyam.webp",
    bio: "A passionate cyber security and computer science enthusiast, I'm driven by curiosity and a love for innovation. Outside of tech, you can find me capturing life's moments through photography, exploring new destinations as a travel enthusiast, or hitting the trails on my bike, always seeking the next adventure.",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/shyam-s-bharadwaj-a87b4a336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailshyamsb@gmail.com",
    },
  },
  {
    id: 15,
    name: "Sanjit",
    position: "Media Co-Lead 2024-2025",
    role: "Founder Leads",
    team: undefined,
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091864/WhatsApp_Image_2026-02-13_at_9.36.20_PM_1_ib17ue.jpg",
    bio: "An enthusiastic individual with a passion for coding and a knack for creativity. Actively engaged in multiple events, bringing innovative ideas and dedication to every project.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sanjitkamath",
      github: "https://github.com/SanjitKamath",
      email: "sanjitkamathu@gmail com",
    },
  },
  {
    id: 18, // Divyanshi
    name: "Divyanshi",
    position: "Member",
    role: "Student",
    team: "Media",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091863/WhatsApp_Image_2026-02-13_at_9.36.26_PM_h0zlb6.jpg",
    bio: "I might seem lazy at times, but when it matters, I go all in.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/divyanshi-chaudhary-103851259/",
      github: "https://github.com/DivyanshiChau",
      email: "chaudharydivyanshi238@gmail.com",
    },
  },
  {
    id: 19, // Janikaa Sureshkumar
    name: "Janikaa Sureshkumar",
    position: "Member",
    role: "Student",
    team: "Media",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769534929/aegis/Media/4th/janika.webp",
    bio: "I'm Janikaa – a cybersecurity enthusiast who enjoys solving problems and learning along the way. I like to keep things relaxed, take on challenges as they come, and always find a little joy in the process! When I'm not deep in tech, I'm probably making everyone laugh with my random thoughts and quirky sense of humor!",
    socialLinks: {
      linkedin: "www.linkedin.com/in/janikaa-sureshkumar",
      github: "https://github.com/Janikaa17",
      email: "janikaa.sureshkumar@gmail.com",
    },
  },
  {
    id: 16, // Abhinav Varma
    name: "Abhinav Varma",
    position: "Member",
    role: "Student",
    team: "Media",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771096312/IMG-20251212-WA0002_-_Abhinav_Varma_lnaiwd.jpg",
    bio: "I am an intuitive learner who takes pride in seeing tasks through to completion. I'm supportive and always ready to contribute, and as a member of the content team, I bring creativity and precision to everything I work on.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abhinav-varma-28132a27a",
      github: "https://github.com/Abhinav-Varma",
      email: "abhinavvarma03@gmail.com",
    },
  },
  {
    id: 20, // Mohammed Jiyad Herial
    name: "Mohammed Jiyad Herial",
    position: "Member",
    role: "Student",
    team: "Media",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769535332/aegis/Operations/4th/jiyhad.webp",
    bio: '"Creative problem solver and visual narrative artist." combining creative coding with the skill of moment capture.',
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mohammed-jiyad-herial",
      github: "https://github.com/mohammed-jiyad",
      email: "mjiyad119@gmail.com",
    },
  },

  // CULTURAL
  {
    id: 1, // T Harika
    name: "T Harika",
    position: "Cultural Lead 2024-2025",
    role: "Founder Leads",
    team: undefined,
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769535645/aegis/Cultural/4th/harika.webp",
    bio: "I am a creative and curious learner, always eager to explore new ideas and bring them to life. With a knack for innovation and storytelling, I excel at blending knowledge with imagination.",
    socialLinks: {
      email: "hharikat@gmail.com",
    },
  },
{
  id: 2,
  name: "UMME AAMINA",
  position: "Cultural Co-Lead 2024-2025",
  role: "Founder Leads",
  team: undefined,
  year: "4th",
  imageUrl: "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091875/Aamina.jpg_vsfy0u.jpg",
  bio: "Co-lead of the Cultural Team. Just a girl who loves fashion and dance.",
  socialLinks: { email: "ummeaamina19@gmail.com" },
},

  {
    id: 5, // Anubhuti jain
    name: "Anubhuti jain",
    position: "Member",
    role: "Student",
    team: "Cultural",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769535736/aegis/Cultural/4th/anubhuti.webp",
    bio: "To live is the rarest thing in the world. Most people exist, that is all. (Oscar Wilde)",
    socialLinks: {
      email: "anubhutijain.20d@gmail.com",
    },
  },
  {
    id: 12, // Tanu
    name: "Tanu",
    position: "Member",
    role: "Student",
    team: "Cultural",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091863/WhatsApp_Image_2026-02-13_at_9.36.32_PM_d1g5dx.jpg",
    bio: "Passionate member of Aegis Cyber Club's Cultural team.",
    socialLinks: {
      email: "ttanurajput2568@gmail.com",
    },
  },
  {
    id: 102, // Nidhi N
    name: "Nidhi N",
    position: "Member",
    role: "Student",
    team: "Cultural",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771163193/1747065102090_uwcc9h.jpg",
    bio: "", // Placeholder bio if none
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nidhi-narayan-",
      email: "nidhinarayan2004@gmail.com",
    },
  },
   
  {
    id: 1,
    name: "Samarth BC",
    position: "Lead",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769285384/aegis/Tech/2nd/samarth_bc.webp",
    bio: '"Waiting for AGI to take over...."',
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/samarthbc",
      github: "https://github.com/samarthbc",
      email: "samarthbellam@gmail.com",
    },
  },
  {
    id: 2,
    name: "Z35Tyyyy",
    position: "Co-Lead",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769534092/aegis/Tech/4th/kanoshk.webp",
    bio: "~$ whoami\nroot@aegis Unauthorized escalation detected.\nW3lc0mE Z35Tyyyy......",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kanishk-singh-a097a2117/",
      github: "https://github.com/Z35Tyyyy",
      email: "kanishksingh778@gmail.com",
    },
  },
  // {
  //   id: 301,
  //   name: "Shreyas",
  //   position: "Member",
  //   role: "Student",
  //   team: "Tech",
  //   year: "4th",
  //   imageUrl:
  //     "https://res.cloudinary.com/dyiohvauq/image/upload/v1769533680/aegis/Tech/4th/shreyas.jpg",
  //   bio: "Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it",
  //   socialLinks: {
  //     linkedin: "https://www.linkedin.com/in/shreyasreddyb",
  //     github: "https://github.com/shreyasreddyb",
  //     email: "shreyasreddyb@gmail.com",
  //     // twitter: "https://x.com/shreyasreddyb",
  //   },
  // },

  {
    id: 303,
    name: "Sanjay",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769533837/aegis/Tech/4th/sanjay.webp",
    bio: "Hey I'm H Sanjay. I'm a backend developer and open source contributor.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sanjay-h-6bat49/",
      github: "https://github.com/sanjayh-2022",
      email: "sanjaybolt9.58@gmail.com",
      // portfolio: "https://sanjayh.xyz",
    },
  },
  {
    id: 304,
    name: "Riyaaaa",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769533915/aegis/Tech/4th/riya.webp",
    bio: "Accidental cybersecurity developer. Full-time procastinator.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sinhariya",
      github: "https://github.com/sinha-riya",
      email: "riyasinha.ds@gmail.com",
    },
  },

  // 4th Year Members
  {
    id: 3,
    name: "Ifrah Ashraf",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "4th",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771164357/1734197038608_tnqwq9.jpg",
    bio: "Hello world 👋🏼",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ifrah-ashraf-6579a7278",
      github: "https://github.com/ifrah-ashraf",
      email: "ifrahashraf48@gmail.com",
    },
  },

  // 3rd Year Members
  {
    id: 4,
    name: "Hardik",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769286196/aegis/Tech/3rd/hardik.webp",
    bio: "Figuring out life.....",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/hardik-agarwal18",
      github: "https://www.github.com/hardik-agarwal18",
      email: "work18.hk19@gmail.com",
    },
  },
  {
    id: 5,
    name: "KARAN JAIN",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769286415/aegis/Tech/3rd/karanjain.webp",
    bio: 'Life is short, break the "production"',
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/karan-jain-2a36001b0",
      github: "https://github.com/karan2527",
      email: "karanjain2023@gmail.com",
    },
  },
  {
    id: 6,
    name: "Likhith",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769286563/aegis/Tech/2nd/likith.webp",
    bio: "Passionate competitive programmer",
    socialLinks: {
      email: "likhithedu98@gmail.com",
      linkedin: "https://www.linkedin.com/in/likhith-reddy-940554330/",
    },
  },
  {
    id: 7,
    name: "Nikita Kulshreshtha",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769286678/aegis/Tech/2nd/nikit.webp",
    bio: "A passionate Multimedia Designer and Cybersecurity Enthusiast, exploring creative storytelling and digital security solutions with curiosity and innovation",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nikita-kulshreshtha-",
      github: "https://github.com/Nikita-Kulshrestha",
      email: "kulnikita20@gmail.com",
    },
  },
  {
    id: 8,
    name: "Eshwar Sai ",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769287140/aegis/Tech/3rd/eshwar_sai.webp",
    bio: "Curious, reliable, and detail-oriented, with experience in cloud and Linux environments",
    socialLinks: {
      linkedin: "https://linkedin.com/in/eshwar-sai-39860529b",
      github: "https://github.com/Eshwarsai-07",
      email: "eshwarsaireddy07@gmail.com",
    },
  },
  // {
  //   id: 8,
  //   name: "Ritisha Bhattacharjee",
  //   position: "Member, Aegis",
  //   role: "Student",
  //   team: "Tech",
  //   year: "4th",
  //   imageUrl:
  //     "https://res.cloudinary.com/deu1pbsug/image/upload/v1771164356/download_3_n9erlm.jpg",
  //   bio: "Passionate member of Aegis Cyber Club's Tech team.",
  //   socialLinks: {
  //     linkedin: "https://www.linkedin.com/in/ritisha-bhattacharjee-17b888282",
  //     github: "https://www.github.com/ritishab0209",
  //     email: "ritishab2003@gmail.com",
  //   },
  // },
  // {
  //   id: 9,
  //   name: "Samruddha T H",
  //   position: "Member, Aegis",
  //   role: "Student",
  //   team: "Tech",
  //   year: "4th",
  //   imageUrl:
  //     "https://res.cloudinary.com/deu1pbsug/image/upload/v1771164357/Screenshot_2026-02-15_193428_noil4f.png",
  //   bio: "Cybersecurity enthusiast with a passion for building innovative tools",
  //   socialLinks: {
  //     linkedin: "https://www.linkedin.com/in/samruddhahonawade/",
  //     github: "https://github.com/SamruddhaHonawade",
  //     email: "samruddhahonawade@gmail.com",
  //   },
  // },

  // 2nd Year Members
  {
    id: 10,
    name: "Adithya B Shetty",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769287315/aegis/Tech/2nd/adithya.webp",
    bio: "Enthusiastic and responsible individual with an insane mindset. Committed to personal and professional growth.",
    socialLinks: { email: "adithyashetty39@gmail.com" },
  },
  {
    id: 11,
    name: "Devansh Pateriya",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769287436/aegis/Tech/2nd/devansh.webp",
    bio: "Second year Tech Enthusiast focused on learning Full stack Development and Cyber Security.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/devansh-pateriya-631481325",
      github: "https://github.com/dvshpat",
      email: "pateriyadevansh74@gmail.com",
    },
  },
  {
    id: 12,
    name: "Keshav Lath",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769288576/aegis/Tech/2nd/keshav.webp",
    bio: "Cooking...",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/keshav-lath/",
      github: "https://github.com/Klath123",
      email: "keshav.lath11@gmail.com",
    },
  },
  {
    id: 13,
    name: "Navaneethan R",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769288693/aegis/Tech/2nd/navneethan.jpg",
    bio: "I like building practical stuff and solving problems by actually trying things out.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/navaneethan-r-756130301",
      email: "Rnavaneethn@gmail.com",
    },
  },
  {
    id: 14,
    name: "Sadhwi Sargam",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769288829/aegis/Tech/2nd/saadhwi.webp",
    bio: "Sadhwi here, I code, I observe, I craft small worlds online where logic meets a hint of story. Mostly quiet, always curious, hiding a soul of an artist too. ",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sadhwi-sargam-846089381",
      email: "sadhwi.sargam20@gmail.com",
    },
  },
  {
    id: 15,
    name: "Shrestha",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091864/WhatsApp_Image_2026-02-13_at_9.47.44_PM_yjhgix.jpg",
    bio: "Awaiting the next tech horizon, where innovation meets its epitome",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shrestha-chandra-787452311",
      github: "https://github.com/Stxtics03",
      email: "shrstha.2005@gmail.com",
    },
  },
  {
    id: 16,
    name: "Vinay NM",
    position: "Member",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769289010/aegis/Tech/2nd/vinay.webp",
    bio: "I'm Vinay from 2nd year.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vinay-madival-ab9059320",
      github: "https://github.com/VINAYMADIVAL",
      email: "vinay1234madival@gmail.com",
    },
  },

  // ==================== OPERATIONS TEAM ====================
  // Lead & Co-Lead

  {
    id: 23,
    name: "Lochan",
    position: "Lead",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769289586/aegis/Operations/2nd/lochan.webp",
    bio: "Lost Wanderer..🚶🏽‍♂️‍➡️",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/lochan-arun-939120215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "alochan97@gmail.com",
      github: "https://github.com/lochanshetty",
    },
  },
  {
    id: 21,
    name: "Dhruthi",
    position: "co-lead",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769289719/aegis/Operations/3rd/dhruti.webp",
    bio: "Procrastinating Perfectionist:) ",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dhruthi-g-prashanth-b599a82a1/",
      email: "dhruthi1027@gmail.com",
      github: "https://www.github.com/WizardWatt",
    },
  },

  // 4th Year Members
  // {
  //   id: 19,
  //   name: "Amareshwar",
  //   position: "Member, Aegis",
  //   role: "Student",
  //   team: "Operations",
  //   year: "4th",
  //   imageUrl:
  //     "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091863/WhatsApp_Image_2026-02-13_at_9.36.29_PM_iuujgw.jpg",
  //   bio: "Just a 21-year-old figuring out life—one line of code (and one emcee script) at a time. Probably overthinking my next big idea while pretending I've got it all together!",
  //   socialLinks: {
  //     linkedin: "http://linkedin.com/in/amareshwar-sai-a42b5622b",
  //     github: "https://github.com/Amareshwar-Sai",
  //     email: "amareshwarsai3@gmail.com",
  //   },
  // },
  // {
  //   id: 20,
  //   name: "K Dharaneesh",
  //   position: "Member, Aegis",
  //   role: "Student",
  //   team: "Operations",
  //   year: "4th",
  //   imageUrl:
  //     "https://drive.google.com/uc?export=view&id=1p0zZMhLH3vhhCm8g8Ye2x_rlx5S74qBs",
  //   bio: "Hi, I'm Dharaneesh! I'm always excited to collaborate on events, projects, or any innovative ideas. Whether it's organizing, planning, or brainstorming, I'm passionate about creating impactful experiences. If you're looking for someone to team up with, feel free to connect with me—let's make something great together!",
  //   socialLinks: { email: "dharaneeshkuruba.2005@gmail.com" },
  // },
  // {
  //     id: 18,
  //     name: "Likitha Yogesh",
  //     position: "Co-Lead",
  //     role: "Student",
  //     team: "Operations",
  //     year: "3rd",
  //     imageUrl:
  //       "https://drive.google.com/uc?export=view&id=1TF1lYfnH_pMFUv-enMRNO_YJMn_ksWAH",
  //     bio: "Passionate about driving innovation, building strong teams, and turning ideas into impactful outcomes. Always eager to learn, collaborate, and take on new challenges.",
  //     socialLinks: {
  //       linkedin: "https://www.linkedin.com/in/likitha-yogesh-b61b25261",
  //       github: "https://github.com/LikithaYogesh",
  //       email: "likithayogesh17@gmail.com",
  //     },
  //   },
  // 3rd Year Members
  {
    id: 36,
    name: "Abhinav Pandey",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769537409/aegis/Operations/3rd/abhinav.jpg",
    bio: "Surviving on trauma and caffeine.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abhi017z",
      github: "https://github.com/abhi017z",
      email: "abhi17pandey10@gmail.com",
    },
  },
  {
    id: 37,
    name: "Adarshyogi Mathapati",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769537460/aegis/Operations/2nd/adrsh.webp",
    bio: "A dedicated operations team member with strong organizational and coordination skills.",
    socialLinks: {
      email: "adarshyogi.m.s@gmail.com",
    },
  },

  {
    id: 17,
    name: "Preeti",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769289922/aegis/Operations/3rd/preeti.webp",
    bio: "I’m 20… and my only superpower is overthinking like a true Muggle 😜",
    socialLinks: { email: "preetiiiii8843@gmail.com" },
  },
  {
    id: 22,
    name: "HARSHAL MANDLIYA",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769290144/aegis/Operations/3rd/harshal.webp",
    bio: "Cybersecurity-focused engineering student and operations team member with strong foundations in Java, Spring Boot, and backend system development.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/harshal-mandliya-9aaa54282",
      github: "https://github.com/harshalmandliya",
      email: "harshalmandliya3@gmail.com",
    },
  },

  // {
  //   id: 24,
  //   name: "Nidhi N",
  //   position: "Member, Aegis",
  //   role: "Student",
  //   team: "Operations",
  //   year: "3rd",
  //   imageUrl:
  //     "https://drive.google.com/uc?export=view&id=1VehYemxRhk7QELmau9eTi9NaZrfLjS4D",
  //   bio: "Efficiently juggling tasks with a smile and a bit of magic.",
  //   socialLinks: {
  //     linkedin: "https://www.linkedin.com/in/nidhi-n-652a692b0",
  //     email: "nidhinagesh01@gmail.com",
  //   },
  // },
// {
//   id: 25,
//   name: "Sachin I C",
//   position: "Member, Aegis",
//   role: "Student",
//   team: "Operations",
//   year: "4th",
//   imageUrl: "https://drive.google.com/uc?export=view&id=1-fte8jVPIFtxWFX_vqXFrZftaQRqOG5d",
//   bio: "Passionate member of Aegis Cyber Club's Operations team.",
//   socialLinks: { email: "sachinic2004@gmail.com" },
// },

//   {
//     id: 26,
//     name: "Satwik",
//     position: "Member, Aegis",
//     role: "Student",
//     team: "Operations",
//     year: "4th",
//     imageUrl:
//       "https://res.cloudinary.com/deu1pbsug/image/upload/v1771163995/1699198491369_kpyij5.jpg",
//     bio: "Passionate member of Aegis Cyber Club's Operations team.",
//     socialLinks: {
//       linkedin:
//         "https://www.linkedin.com/in/satwik-tomar-58112a215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//       email: "satwiktomar77@gmail.com",
//     },
//   },
//   {
//     id: 27,
//     name: "Vineeth S",
//     position: "Member, Aegis",
//     role: "Student",
//     team: "Operations",
//     year: "4th",
//     imageUrl:
//       "https://res.cloudinary.com/deu1pbsug/image/upload/v1771163997/download_2_tvchoc.jpg",
//     bio: "Passionate member of Aegis Cyber Club's Operations team.",
//     socialLinks: {
//       linkedin: "https://www.linkedin.com/in/vineeths23",
//       email: "vineeths2323@gmail.com",
//     },
//   },
//  {
//   id: 904,
//   name: "Pratheek",
//   position: "Member",
//   role: "Student",
//   team: "Operations",
//   year: "4th",
//   imageUrl: "",
//   bio: "",
//   socialLinks: {
//     linkedin: undefined,
//     github: undefined,
//     email: "pratheeks236@gmail.com",
//   },
// },

  // 2nd Year Members
  {
    id: 28,
    name: "Aakash M",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769290377/aegis/Operations/3rd/akash.webp",
    bio: "Hi, I am Aakash M. I am a cybersecurity enthusiast who enjoys working on hands-on projects. Sharp-minded and competitive, I balance tech with strategy and fitness through chess and football.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/aakash-m-58aa5833a",
      email: "aakash.marigeri@gmail.com",
    },
  },
  {
    id: 29,
    name: "Darshan Gupta",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769290457/aegis/Operations/2nd/darshan.webp",
    bio: "Observer and analyzer with a passion for music.",
    socialLinks: { email: "37.darshangupta@gmail.com" },
  },
  {
    id: 30,
    name: "Disha",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769290530/aegis/Operations/2nd/disha.webp",
    bio: "I’m a second-year student. I’m confident, curious, and always eager to learn and grow through new experiences. I enjoy taking on challenges, connecting with people, and making the most of my college journey.",
    socialLinks: { email: "dishas2195@gmail.com" },
  },
  {
    id: 31,
    name: "Sahas",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769290609/aegis/Operations/2nd/sahas.webp",
    bio: "Smooth operator.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sahastranshu-mishra-b48342351",
      email: "sahastranshu2305@gmail.com",
    },
  },
  {
    id: 32,
    name: "Siddhi Agarwal",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769290745/aegis/Operations/2nd/siddi.webp",
    bio: "Cybersecurity enthusiast and Computer Science undergraduate with experience in AI security projects, hackathons, and CTF competitions.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/siddhi-agarwal-2608bb385/",
      github: "https://github.com/siddhi1229",
      email: "siddhiagarwal1229@gmail.com",
    },
  },
  {
    id: 33,
    name: "Suraj Sandilya",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769290830/aegis/Operations/2nd/suraj.webp",
    bio: "As a CSE Cyber Security student, I am an active member of the AGIES Department Tech Club Operations Team, contributing to event management, coordination, and operational support for technical activities",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/suraj-sandilya-724252327",
      email: "sandilyasuraj101@gmail.com",
    },
  },
  {
    id: 34,
    name: "Yatish Balu",
    position: "Member",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769291011/aegis/Operations/2nd/yatish.webp",
    bio: "A computer science student who enjoys collaborating with peers, staying active through badminton and football, and supporting the club’s initiatives.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/yatishbalu",
      email: "Yatishb1980@gmail.com",
    },
  },

  // ==================== MEDIA TEAM ====================
  // Lead & Co-Lead
  {
    id: 43,
    name: "Nikita Kulshreshtha",
    position: "Lead",
    role: "Student",
    team: "Media",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769291549/aegis/Media/3rd/nikita.webp",
    bio: "A passionate Multimedia Designer and Cybersecurity Enthusiast, exploring creative storytelling and digital security solutions with curiosity and innovation",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nikita-kulshreshtha-",
      github: "https://github.com/Nikita-Kulshrestha",
      email: "kulnikita20@gmail.com",
    },
  },
  {
    id: 39,
    name: "Afraz Ahmed",
    position: "co-Lead",
    role: "Student",
    team: "Media",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769291281/aegis/Media/3rd/arfra.webp",
    bio: "An open-minded and energetic student who enjoys connecting with people and contributing positively to the club",
    socialLinks: { linkedin : "https://www.linkedin.com/in/afraz-ahmed-8821172a2/" , email: "afrazahmed058@gmail.com" },
  },

  // {
  //   id: 35,
  //   name: "Shyam S Bhatadwaj",
  //   position: "Lead, Aegis",
  //   role: "Student",
  //   team: "Media",
  //   year: "4th",
  //   imageUrl:
  //     "https://drive.google.com/uc?export=view&id=1i4x5aPms9rp7zrVuhMCK4TlI3I1Thbv9",
  //   bio: "A passionate cyber security and computer science enthusiast, I'm driven by curiosity and a love for innovation. Outside of tech, you can find me capturing life's moments through photography, exploring new destinations as a travel enthusiast, or hitting the trails on my bike, always seeking the next adventure.",
  //   socialLinks: {
  //     linkedin:
  //       "https://www.linkedin.com/in/shyam-s-bharadwaj-a87b4a336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     email: "mailshyamsb@gmail.com",
  //   },
  // },
  // {
  //   id: 36,
  //   name: "Sanjit",
  //   position: "Co-Lead, Aegis",
  //   role: "Student",
  //   team: "Media",
  //   year: "4th",
  //   imageUrl:
  //     "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091864/WhatsApp_Image_2026-02-13_at_9.36.20_PM_1_ib17ue.jpg",
  //   bio: "An enthusiastic individual with a passion for coding and a knack for creativity. Actively engaged in multiple events, bringing innovative ideas and dedication to every project.",
  //   socialLinks: {
  //     linkedin:
  //       "https://www.linkedin.com/in/sanjitkamath?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     github: "https://github.com/SanjitKamath",
  //     email: "sanjitkamathu@gmail com",
  //   },
  // },

  // 3rd Year Members
  // {
  //   id: 37,
  //   name: "Abhinav Varma",
  //   position: "Member, Aegis",
  //   role: "Student",
  //   team: "Media",
  //   year: "3rd",
  //   imageUrl:
  //     "https://drive.google.com/uc?export=view&id=1yvw325G7NAqPxGucb_EVzDSmlmULoCH8",
  //   bio: "I am an intuitive learner who takes pride in seeing tasks through to completion. I'm supportive and always ready to contribute, and as a member of the content team, I bring creativity and precision to everything I work on.",
  //   socialLinks: {
  //     linkedin: "https://www.linkedin.com/in/abhinav-varma-28132a27a",
  //     github: "https://github.com/Abhinav-Varma",
  //     email: "abhinavvarma03@gmail.com",
  //   },
  // },
  {
  id: 999,
  name: "Pranav N Hugar",
  position: "Member",
  role: "Student",
  team: "Media",
  year: "4th",
  imageUrl: "https://res.cloudinary.com/deu1pbsug/image/upload/v1771167969/download_4_t3fzii.jpg",
  bio: "",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/pranavhugar/",
    github: "https://github.com/pranavhugar25",
    email: "pranavhugar073@gmail.com",
  },
},

  {
    id: 38,
    name: "ADIL",
    position: "Member",
    role: "Student",
    team: "Media",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771163449/Screenshot_2026-02-15_192034_ogc1cp.png",
    bio: "A tech enthusiast with a creative eye for photography and visual storytelling",
    socialLinks: { email: "adilnh8317@gmail.com" },
  },

  // {
  //     id: 40,
  //     name: "Divyanshi",
  //     position: "Member, Aegis",
  //     role: "Student",
  //     team: "Media",
  //     year: "3rd",
  //     imageUrl:
  //       "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091863/WhatsApp_Image_2026-02-13_at_9.36.26_PM_h0zlb6.jpg",
  //     bio: "I might seem lazy at times, but when it matters, I go all in.",
  //     socialLinks: {
  //       linkedin: "https://www.linkedin.com/in/divyanshi-chaudhary-103851259/",
  //       github: "https://github.com/DivyanshiChau",
  //       email: "chaudharydivyanshi238@gmail.com",
  // },
  // },
  // {
  // id: 41,
  // name: "Janikaa Sureshkumar",
  // position: "Member, Aegis",
  // role: "Student",
  // team: "Media",
  // year: "3rd",
  // imageUrl:
  // "https://drive.google.com/uc?export=view&id=1DahvTn75nY3Oc6kEyEfUak5p2Cn4Xgpc",
  // bio: "I'm Janikaa – a cybersecurity enthusiast who enjoys solving problems and learning along the way. I like to keep things relaxed, take on challenges as they come, and always find a little joy in the process! When I'm not deep in tech, I'm probably making everyone laugh with my random thoughts and quirky sense of humor!",
  // socialLinks: {
  // linkedin: "https://www.linkedin.com/in/janikaa-sureshkumar",
  // github: "https://github.com/Janikaa17",
  // email: "janikaa.sureshkumar@gmail.com",
  // },
  // },
  // {
  // id: 42,
  // name: "Mohammed Jiyad Herial",
  // position: "Member, Aegis",
  // role: "Student",
  // team: "Media",
  // year: "3rd",
  // imageUrl:
  // "https://drive.google.com/uc?export=view&id=1jqR2qPSbQy6yMyjMf5_iZ9UO9KTqmLt4",
  // bio: '"Creative problem solver and visual narrative artist." combining creative coding with the skill of moment capture.',
  // socialLinks: {
  // linkedin:
  // "https://www.linkedin.com/in/mohammed-jiyad-herial?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  // github: "https://github.com/mohammed-jiyad?tab=repositories",
  // email: "mjiyad119@gmail.com",
  // },
  // },

  {
    id: 44,
    name: "Rishabh",
    position: "Member, Aegis",
    role: "Student",
    team: "Media",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769291877/aegis/Media/3rd/rishabh.webp",
    bio: "Hardworking and dedicated",
    socialLinks: { email: "vsrishabh23@gamil.com" },
  },
  {
    id: 45,
    name: "Varsha",
    position: "Member",
    role: "Student",
    team: "Media",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769291944/aegis/Media/3rd/varsha.webp",
    bio: "Turning everyday moments into joyful stories through playful shots and feel-good edits.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/varshasingh03",
      github: "https://github.com/varshasingh5556",
      email: "varshasingh5556@gmail.com",
    },
  },
  {
    id: 46,
    name: "Vishal",
    position: "Member",
    role: "Student",
    team: "Media",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769292022/aegis/Media/3rd/vishal.webp",
    bio: "Juat wanna have a good time",
    socialLinks: { email: "vishalv4725@gmail.com" },
  },
  // 2nd Year Members
  {
    id: 47,
    name: "Shrestha",
    position: "Member, Aegis",
    role: "Student",
    team: "Media",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091864/WhatsApp_Image_2026-02-13_at_9.47.44_PM_yjhgix.jpg",
    bio: "Trust the Smooth Operation in making the simply lovely edit",
    socialLinks: {linkedin : "https://www.linkedin.com/in/shrestha-chandra-787452311/" , email: "shrstha.2005@gmail.com" },
  },

  {
    id: 48,
    name: "Tej",
    position: "Member",
    role: "Student",
    team: "Media",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769291405/aegis/Media/3rd/teja.webp",
    bio: "Cybersecurity learner by day, creative thinker by passion.",
    socialLinks: { email: "teja.772007@gmail.com" },
  },

  // ==================== CULTURAL TEAM ====================
  // Lead & Co-Lead
  {
    id: 55,
    name: "Manyu",
    position: "Lead",
    role: "Student",
    team: "Cultural",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769535570/aegis/Cultural/3rd/manyu.jpg",
    bio: "I'm into music , travel and hacking (the ethical kind) !",
    socialLinks: {
      email: "msr74007@gmail.com",
      linkedin: "https://www.linkedin.com/in/manyu-simha-ravi-543742327/",
    },
  },
  {
    id: 58,
    name: "Srushti",
    position: "Co-lead",
    role: "Student",
    team: "Cultural",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769292601/aegis/Media/3rd/shrushti.webp",
    bio: "Still waiting for my life to make sense ⁠◔⁠‿⁠◔",
    socialLinks: {
      linkedin:
        "https://(Srushti Hugar)https://www.linkedin.com/in/srushti-hugar-996b142a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "hugarsrushti@gmail.com",
    },
  },
  // {
  // id: 49,
  // name: "T Harika",
  // position: "Lead, Aegis",
  // role: "Student",
  // team: "Cultural",
  // year: "4th",
  // imageUrl:
  // "https://drive.google.com/uc?export=view&id=1hV0vYBKqBiTrdCDRbCagTV054xMN8Rk5",
  // bio: "I am a creative and curious learner, always eager to explore new ideas and bring them to life. With a knack for innovation and storytelling, I excel at blending knowledge with imagination.",
  // socialLinks: { email: "hharikat@gmail.com" },
  // },
  {
  id: 101,
  name: "Adyuth V",
  position: "Member",
  role: "Student",
  team: undefined,
  year: "4th",
  imageUrl: "https://res.cloudinary.com/deu1pbsug/image/upload/v1771139963/WhatsApp_Image_2026-02-15_at_11.41.50_AM_yrmgx1.jpg",
  bio: "I am very enthusiastic and fun loving",
  socialLinks: undefined,
},
  // {
  // id: 50,
  // name: "UMME AAMINA",
  // position: "Co-Lead, Aegis",
  // role: "Student",
  // team: "Cultural",
  // year: "4th",
  // imageUrl:
  // "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091875/Aamina.jpg_vsfy0u.jpg",
  // bio: "Co-lead of the Cultural Team. Just a girl who loves fashion and dance.",
  // socialLinks: { email: "ummeaamina19@gmail.com" },
  // },
  // 3rd Year Members
  {
    id: 51,
    name: "Ananya singh",
    position: "Member",
    role: "Student",
    team: "Cultural",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769293016/aegis/Cultural/3rd/ananya.webp",
    bio: "I like to turn ordinary into creative",
    socialLinks: {
      email: "ananyasingh7776@gmail.com",
      linkedin: "https://www.linkedin.com/in/ananya-singh-118a54294/",
    },
  },
  // {
  // id: 52,
  // name: "Anubhuti jain",
  // position: "Member, Aegis",
  // role: "Student",
  // team: "Cultural",
  // year: "3rd",
  // imageUrl:
  // "https://drive.google.com/uc?export=view&id=1eRX8hbWqy8gUD0iSvLDjGHambPf6NmAZ",
  // bio: "I am very enthusiastic and fun loving",
  // socialLinks: { email: "anubhutijain.20d@gmail.com" },
  // },
  {
    id: 53,
    name: "Bhoomi Prabhu ",
    position: "Member",
    role: "Student",
    team: "Cultural",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769292815/aegis/Cultural/3rd/bhoomi.webp",
    bio: "Cyber security student | Cultural club member | Passionate about tech and music ",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/bhoomi-prabhu-6199b12a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "bhoomiprabhu82@gmail.com",
      github: " https://github.com/bhoomiprabhu",
    },
  },
  {
  id: 901,
  name: "Pragathi BS",
  position: "Member",
  role: "Student",
  team: "Cultural",
  year: "3rd",
  imageUrl: "https://res.cloudinary.com/deu1pbsug/image/upload/v1771163568/download_nt4ld3.jpg",
  bio: "I’m Pragathi — a curious mind with a soft heart and creative dreams.",
  socialLinks: {
    linkedin: undefined,
    github: undefined,
    email: "pragathireddy105@gmail.com",
  },
},

{
  id: 902,
  name: "Reshma Kotabal",
  position: "Member",
  role: "Student",
  team: "Cultural",
  year: "3rd",
  imageUrl: "https://res.cloudinary.com/deu1pbsug/image/upload/v1771163608/download_1_ukyplu.jpg",
  bio: "A good listener who loves music and travel. Most confused animal. Cultural team member.",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/reshma-kotabal-632781290",
    github: "https://github.com/80500reshma",
    email: "reshmamkotabal@gmail.com",
  },
},
  {
    id: 54,
    name: "Mulakaledu Reddy Poojitha ",
    position: "Member",
    role: "Student",
    team: "Cultural",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1770024034/uploads/qbrey2atxpwb5cicmjlb.webp",
    bio: "Taking part in cultural activities, showing creativity and teamwork while supporting club programs ",
    socialLinks: { email: "reddypoojitha875@gmail.com" },
  },
  // {
  // id: 56,
  // name: "Rakshith N Virat",
  // position: "Member, Aegis",
  // role: "Student",
  // team: "Cultural",
  // year: "3rd",
  // imageUrl:
  // "https://res.cloudinary.com/deu1pbsug/image/upload/v1771094539/rakshith_fmwadf.jpg",
  // bio: "Awkwardly extroverted who mingles with everyone",
  // socialLinks: { email: "lohitharadhya164@gmail.com" },
  // },
  {
    id: 57,
    name: "Sourajit",
    position: "Member",
    role: "Student",
    team: "Cultural",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769293176/aegis/Cultural/2nd/sourajit.webp",
    bio: "life is lowk Shibal 💔",
    socialLinks: {
      github: "https://github.com/Sourajit1120",
      email: "sourajitsengupta1@gmail.com",
    },
  },

  // {
  // id: 59,
  // name: "Tanu",
  // position: "Member, Aegis",
  // role: "Student",
  // team: "Cultural",
  // year: "3rd",
  // imageUrl:
  // "https://res.cloudinary.com/deu1pbsug/image/upload/v1771091863/WhatsApp_Image_2026-02-13_at_9.36.32_PM_d1g5dx.jpg",
  // bio: "Passionate member of Aegis Cyber Club's Cultural team.",
  // socialLinks: { email: "ttanurajput2568@gmail.com" },
  // },
  // 2nd Year Members
  {
    id: 60,
    name: "Kazim Raza",
    position: "Member",
    role: "Student",
    team: "Cultural",
    year: "2nd",
    imageUrl:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1769293306/aegis/Cultural/2nd/kazim.jpg",
    bio: "Chill dude who likes to stay active through badminton and wants to learn everything about cybersecurity.",
    socialLinks: {  email: "syedkazimraza2205@gmail.com" },
  },
];
