export interface Member {
  id: number;
  name: string;
  position?: string;
  imageUrl?: string;
  bio?: string;
  resumeUrl?: string;
  role?: "Faculty" | "Student";
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
  // Lead & Co-Lead
  {
    id: 1,
    name: "Samarth BC",
    position: "Lead, Aegis",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://res.cloudinary.com/dhaj5jjcc/image/upload/v1769205820/aegis/Tech/2nd/samarth_bc.webp",
    bio: '"Waiting for AGI to take over...."',
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/samarthbc",
      github: "https://github.com/samarthbc",
      email: "samarthbellam@gmail.com",
    },
  },
  {
    id: 2,
    name: "kan.i.shk",
    position: "Co-Lead, Aegis",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1bJXKL303V330KXUzG6mzpUK78nUkFucU",
    bio: "Hey people,Kanishk here,I am one of the Web Devs in Aegis with keen interest in Java,Spring Framework and part time Full Stack Developer :)",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kanishk-singh-a097a2117/",
      github: "https://github.com/EzHavoc",
      email: "kanishksingh778@gmail.com",
    },
  },

  // 4th Year Members
  {
    id: 3,
    name: "Ifrah Ashraf",
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "4th",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-vJeI4NhCK6ShfkczakNglXONlosN73d",
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
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1F6hq1fSKVptIsav-kwwVw_Rmp2PMC-ma",
    bio: "Passionate member of Aegis Cyber Club's Tech team.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/hardik-agarwal18",
      github: "https://www.github.com/hardik-agarwal18",
      email: "hardikagarwal9308@gmail.com",
    },
  },
  {
    id: 5,
    name: "KARAN JAIN",
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1GijraXpHL4FvoDmD5Qu7ggq5yWwaQLES",
    bio: "I am Karan Jain Flutter developer, Tech blog writer, cybersecurity enthusiast and district level swimmer with public speaking and leadership skills.",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/karan-jain-2a36001b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andro",
      github: "https://github.com/karan2527",
      email: "karanjain2527@gmail.com",
    },
  },
  {
    id: 6,
    name: "Likhith",
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1uob42SBVz9Xh7aNr8sj0mMqscsxH9mKb",
    bio: "I am good at problem solving",
    socialLinks: { email: "likhithedu98@gmail.com" },
  },
  {
    id: 7,
    name: "Nikita Kulshreshtha",
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1hKeYzWtH-qPmXCj9J_Qg0e2mTzoQZ2qI",
    bio: "A passionate Multimedia Designer and Cybersecurity Enthusiast, exploring creative storytelling and digital security solutions with curiosity and innovation",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nikita-kulshreshtha-",
      github: "https://github.com/Nikita-Kulshrestha",
      email: "kulnikita20@gmail.com",
    },
  },
  {
    id: 8,
    name: "Ritisha Bhattacharjee",
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1tN_b7My9NKGHfoefk9l1Mal47fYYU4ee",
    bio: "Passionate member of Aegis Cyber Club's Tech team.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ritisha-bhattacharjee-17b888282",
      github: "https://www.github.com/ritishab0209",
      email: "ritishab2003@gmail.com",
    },
  },
  {
    id: 9,
    name: "Samruddha T H",
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=15aSuWSjvQ9vmQVv8GN0my_PXtDd2Sk3C",
    bio: "Cybersecurity enthusiast with a passion for building innovative tools",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/samruddhahonawade/",
      github: "https://github.com/SamruddhaHonawade",
      email: "samruddhahonawade@gmail.com",
    },
  },

  // 2nd Year Members
  {
    id: 10,
    name: "Adithya B Shetty",
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=11YZev_TGjl2o4P_m6jneOGuTnB89z9vb",
    bio: "Enthusiastic and responsible individual with an insane mindset. Committed to personal and professional growth.",
    socialLinks: { email: "adithyashetty39@gmail.com" },
  },
  {
    id: 11,
    name: "Devansh Pateriya",
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1LR4mB3SGl6ecdv9seT6MRCZ6aC8rLRN1",
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
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1r3N4Kgx24VGZjw09aIRIDjEIM1ZYpmC1",
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
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1qhS-SrSnlqc0t4zW9CEnp_M3t_2yAB98",
    bio: "I like building practical stuff and solving problems by actually trying things out.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/navaneethan-r-756130301",
      email: "Rnavaneethn@gmail.com",
    },
  },
  {
    id: 14,
    name: "Sadhwi Sargam",
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1KhPg3TrQezIB8n5b5uXUWccRqnjQEw8R",
    bio: "I code, I observe, I craft small worlds online where logic meets a hint of story. Mostly quiet, always curious.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sadhwi-sargam-846089381",
      email: "sadhwi.sargam20@gmail.com",
    },
  },
  {
    id: 15,
    name: "Shrestha",
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1UF6OQe65yVbHD0I39I4pZYY_917DgxZg",
    bio: "Cybersec and developer enthusiast.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shrestha-chandra-787452311",
      github: "https://github.com/Stxtics03",
      email: "shrstha.2005@gmail.com",
    },
  },
  {
    id: 16,
    name: "Vinay NM",
    position: "Member, Aegis",
    role: "Student",
    team: "Tech",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1N7rmiG-cEfhlBhqAoSZ4yvHl12kcbEuM",
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
    id: 17,
    name: "Preeti",
    position: "Lead, Aegis",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1hg2mkwRpg0-hXvS89U93qnrEcNjsCs1L",
    bio: "Passionate member of Aegis Cyber Club's Operations team.",
    socialLinks: { email: "preetiiiii8843@gmail.com" },
  },
  {
    id: 18,
    name: "Likitha Yogesh",
    position: "Co-Lead, Aegis",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1TF1lYfnH_pMFUv-enMRNO_YJMn_ksWAH",
    bio: "Passionate about driving innovation, building strong teams, and turning ideas into impactful outcomes. Always eager to learn, collaborate, and take on new challenges.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/likitha-yogesh-b61b25261",
      github: "https://github.com/LikithaYogesh",
      email: "likithayogesh17@gmail.com",
    },
  },

  // 4th Year Members
  {
    id: 19,
    name: "Amareshwar",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "4th",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1GxewdFt0AHxCWIsR14PVSkPusXW1iMZk",
    bio: "Just a 21-year-old figuring out life—one line of code (and one emcee script) at a time. Probably overthinking my next big idea while pretending I've got it all together!",
    socialLinks: {
      linkedin: "http://linkedin.com/in/amareshwar-sai-a42b5622b",
      github: "https://github.com/Amareshwar-Sai",
      email: "amareshwarsai3@gmail.com",
    },
  },
  {
    id: 20,
    name: "K Dharaneesh",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "4th",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1p0zZMhLH3vhhCm8g8Ye2x_rlx5S74qBs",
    bio: "Hi, I'm Dharaneesh! I'm always excited to collaborate on events, projects, or any innovative ideas. Whether it's organizing, planning, or brainstorming, I'm passionate about creating impactful experiences. If you're looking for someone to team up with, feel free to connect with me—let's make something great together!",
    socialLinks: { email: "dharaneeshkuruba.2005@gmail.com" },
  },

  // 3rd Year Members
  {
    id: 21,
    name: "Dhruthi",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1dmpDcryBNtOpCENemHiumEN5J5bCayWl",
    bio: '" All she wanted to do was sit on the porch, stick her nose in a ridiculously thick book, and forget about the world."',
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dhruthi-g-prashanth-b599a82a1/",
      email: "dhruthi1027@gmail.com",
    },
  },
  {
    id: 22,
    name: "HARSHAL MANDLIYA",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-EOktjEY8UXQOnKUBP31rxfpe-4dPkIH",
    bio: 'Harshal Mandliya, from Shamgarh, MP, is an enthusiastic learner with skills in Java, web development, MERN stack, and cybersecurity. He blends his technical expertise with a love for traveling and exploring innovative technologies."',
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/harshal-mandliya-9aaa54282",
      github: "https://github.com/harshalmandliya",
      email: "harshalmandliya3@gmail.com",
    },
  },
  {
    id: 23,
    name: "Lochan",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1SFJggXxtoDxJsYZwoP7a572CP1zo_oAz",
    bio: "I am an ambitious ambivert who thrives on meeting new people, mastering new skills, and creating unforgettable memories through travels with friends.",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/lochan-arun-939120215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "alochan97@gmail.com",
    },
  },
  {
    id: 24,
    name: "Nidhi N",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1VehYemxRhk7QELmau9eTi9NaZrfLjS4D",
    bio: "Efficiently juggling tasks with a smile and a bit of magic.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nidhi-n-652a692b0",
      email: "nidhinagesh01@gmail.com",
    },
  },
  {
    id: 25,
    name: "Sachin I C",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-fte8jVPIFtxWFX_vqXFrZftaQRqOG5d",
    bio: "Passionate member of Aegis Cyber Club's Operations team.",
    socialLinks: { email: "sachinic2004@gmail.com" },
  },
  {
    id: 26,
    name: "Satwik",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=16iNzEGpLUZWLg3t4udtLW6eg-CA1rdea",
    bio: "Passionate member of Aegis Cyber Club's Operations team.",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/satwik-tomar-58112a215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "satwiktomar77@gmail.com",
    },
  },
  {
    id: 27,
    name: "Vineeth S",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1DnWiW597fmg314ouyGJ2RgRTvUDejL2B",
    bio: "Passionate member of Aegis Cyber Club's Operations team.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vineeths23",
      email: "vineeths2323@gmail.com",
    },
  },

  // 2nd Year Members
  {
    id: 28,
    name: "Aakash M",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Cn1eJvdehp5Yl5e5dGptXD0vtAn-eNQq",
    bio: "Cybersecurity enthusiast who enjoys hands-on projects. Sharp-minded and competitive, balancing tech with chess and football.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/aakash-m-58aa5833a",
      email: "aakash.marigeri@gmail.com",
    },
  },
  {
    id: 29,
    name: "Darshan Gupta",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1vNzPMzDfIr3Zlfi06HF7HZMKDoWpm_ZX",
    bio: "Observer and analyzer with a passion for music.",
    socialLinks: { email: "37.darshangupta@gmail.com" },
  },
  {
    id: 30,
    name: "Disha",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1WZob0Gme4I4Wph0SySNNowC2tW9zmldp",
    bio: "I'm a second-year student. I'm confident, curious, and always eager to learn and grow through new experiences.",
    socialLinks: { email: "dishas2195@gmail.com" },
  },
  {
    id: 31,
    name: "Sahas",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1BaWWuGPw3DkSSNmP-wLb_JQquuXe3aVa",
    bio: "Smooth operator.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sahastranshu-mishra-b48342351",
      email: "sahastranshu2305@gmail.com",
    },
  },
  {
    id: 32,
    name: "Siddhi Agarwal",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1V3DN1pDBB88cNCLXS2dthImKqnQdzHmm",
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
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1S4a-o6qwJ-fCh2kd3YXLttbs1Nn-uqnw",
    bio: "CSE Cyber Security student contributing to event management, coordination, and operational support.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/suraj-sandilya-724252327",
      email: "sandilyasuraj101@gmail.com",
    },
  },
  {
    id: 34,
    name: "Yatish Balu",
    position: "Member, Aegis",
    role: "Student",
    team: "Operations",
    year: "2nd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=10Z8JxFjRM56FI2cKqdfarlbnzl5aYg8q",
    bio: "A computer science student who enjoys collaborating with peers, staying active through badminton and football.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/yatishbalu",
      email: "Yatishb1980@gmail.com",
    },
  },

  // ==================== MEDIA TEAM ====================
  // Lead & Co-Lead
  {
    id: 35,
    name: "Shyam S Bhatadwaj",
    position: "Lead, Aegis",
    role: "Student",
    team: "Media",
    year: "4th",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1i4x5aPms9rp7zrVuhMCK4TlI3I1Thbv9",
    bio: "A passionate cyber security and computer science enthusiast, I'm driven by curiosity and a love for innovation. Outside of tech, you can find me capturing life's moments through photography, exploring new destinations as a travel enthusiast, or hitting the trails on my bike, always seeking the next adventure.",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/shyam-s-bharadwaj-a87b4a336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailshyamsb@gmail.com",
    },
  },
  {
    id: 36,
    name: "Sanjit",
    position: "Co-Lead, Aegis",
    role: "Student",
    team: "Media",
    year: "4th",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1OwbBUhcOVVbe7qXyqRsJ2XnZT3Ok27Rs",
    bio: "An enthusiastic individual with a passion for coding and a knack for creativity. Actively engaged in multiple events, bringing innovative ideas and dedication to every project.",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/sanjitkamath?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/SanjitKamath",
      email: "sanjitkamathu@gmail com",
    },
  },

  // 3rd Year Members
  {
    id: 37,
    name: "Abhinav Varma",
    position: "Member, Aegis",
    role: "Student",
    team: "Media",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1yvw325G7NAqPxGucb_EVzDSmlmULoCH8",
    bio: "I am an intuitive learner who takes pride in seeing tasks through to completion. I'm supportive and always ready to contribute, and as a member of the content team, I bring creativity and precision to everything I work on.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abhinav-varma-28132a27a",
      github: "https://github.com/Abhinav-Varma",
      email: "abhinavvarma03@gmail.com",
    },
  },
  {
    id: 38,
    name: "ADIL",
    position: "Member, Aegis",
    role: "Student",
    team: "Media",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1hKeYzWtH-qPmXCj9J_Qg0e2mTzoQZ2qI",
    bio: "A tech enthusiast with a creative eye for photography and visual storytelling",
    socialLinks: { email: "adilnh8317@gmail.com" },
  },
  {
    id: 39,
    name: "Afraz Ahmed",
    position: "Member, Aegis",
    role: "Student",
    team: "Media",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Q0t_SBTlaveLzB1whHuf0aIQjORkoJka",
    bio: "Passionate member of Aegis Cyber Club's Media team.",
    socialLinks: { email: "afrazahmed058@gmail.com" },
  },
  {
    id: 40,
    name: "Divyanshi",
    position: "Member, Aegis",
    role: "Student",
    team: "Media",
    year: "3rd",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1g4QESPDVSL0oW9DlBBayIo7qBBwhE8An",
    bio: "I might seem lazy at times, but when it matters, I go all in.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/divyanshi-chaudhary-103851259/",
      github: "https://github.com/DivyanshiChau",
      email: "chaudharydivyanshi238@gmail.com",
},
},
{
id: 41,
name: "Janikaa Sureshkumar",
position: "Member, Aegis",
role: "Student",
team: "Media",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1DahvTn75nY3Oc6kEyEfUak5p2Cn4Xgpc",
bio: "I'm Janikaa – a cybersecurity enthusiast who enjoys solving problems and learning along the way. I like to keep things relaxed, take on challenges as they come, and always find a little joy in the process! When I'm not deep in tech, I'm probably making everyone laugh with my random thoughts and quirky sense of humor!",
socialLinks: {
linkedin: "https://www.linkedin.com/in/janikaa-sureshkumar",
github: "https://github.com/Janikaa17",
email: "janikaa.sureshkumar@gmail.com",
},
},
{
id: 42,
name: "Mohammed Jiyad Herial",
position: "Member, Aegis",
role: "Student",
team: "Media",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1jqR2qPSbQy6yMyjMf5_iZ9UO9KTqmLt4",
bio: '"Creative problem solver and visual narrative artist." combining creative coding with the skill of moment capture.',
socialLinks: {
linkedin:
"https://www.linkedin.com/in/mohammed-jiyad-herial?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
github: "https://github.com/mohammed-jiyad?tab=repositories",
email: "mjiyad119@gmail.com",
},
},
{
id: 43,
name: "Nikita Kulshreshtha",
position: "Member, Aegis",
role: "Student",
team: "Media",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1hKeYzWtH-qPmXCj9J_Qg0e2mTzoQZ2qI",
bio: "A passionate Multimedia Designer and Cybersecurity Enthusiast, exploring creative storytelling and digital security solutions with curiosity and innovation",
socialLinks: {
linkedin: "https://www.linkedin.com/in/nikita-kulshreshtha-",
github: "https://github.com/Nikita-Kulshrestha",
email: "kulnikita20@gmail.com",
},
},
{
id: 44,
name: "Rishabh",
position: "Member, Aegis",
role: "Student",
team: "Media",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1bJLrwe5sviQnB_6U1BOOgrl7vDZ7dHcY",
bio: "I am interested in motorcycles and automobiles.",
socialLinks: { email: "vsrishabh23@gamil.com" },
},
{
id: 45,
name: "Varsha",
position: "Member, Aegis",
role: "Student",
team: "Media",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1hKeYzWtH-qPmXCj9J_Qg0e2mTzoQZ2qI",
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
position: "Member, Aegis",
role: "Student",
team: "Media",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1hKeYzWtH-qPmXCj9J_Qg0e2mTzoQZ2qI",
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
"https://drive.google.com/uc?export=view&id=1Ov4NbSHG8btW7xjBQPPqbw5YL8qpgT76",
bio: "Video Editor with a passion for creative content.",
socialLinks: { email: "shrstha.2005@gmail.com" },
},
{
id: 48,
name: "Tej",
position: "Member, Aegis",
role: "Student",
team: "Media",
year: "2nd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1r4h3y_-xNo1KVVkIiWYuNTzB-9Z7h1e1",
bio: "Cybersecurity learner by day, creative thinker by passion.",
socialLinks: { email: "teja.772007@gmail.com" },
},
// ==================== CULTURAL TEAM ====================
// Lead & Co-Lead
{
id: 49,
name: "T Harika",
position: "Lead, Aegis",
role: "Student",
team: "Cultural",
year: "4th",
imageUrl:
"https://drive.google.com/uc?export=view&id=1hV0vYBKqBiTrdCDRbCagTV054xMN8Rk5",
bio: "I am a creative and curious learner, always eager to explore new ideas and bring them to life. With a knack for innovation and storytelling, I excel at blending knowledge with imagination.",
socialLinks: { email: "hharikat@gmail.com" },
},
{
id: 50,
name: "UMME AAMINA",
position: "Co-Lead, Aegis",
role: "Student",
team: "Cultural",
year: "4th",
imageUrl:
"https://drive.google.com/uc?export=view&id=1ov1y0xyV3j1oN__fmqxL6KDGMitsK-Yd",
bio: "Co-lead of the Cultural Team. Just a girl who loves fashion and dance.",
socialLinks: { email: "ummeaamina19@gmail.com" },
},
// 3rd Year Members
{
id: 51,
name: "Ananya singh",
position: "Member, Aegis",
role: "Student",
team: "Cultural",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1DNgtDwWgR-dAs1WzW1dSYRn1JgG4CNQ2",
bio: "I like to turn ordinary into creative",
socialLinks: { email: "ananyasingh7776@gmail.com" },
},
{
id: 52,
name: "Anubhuti jain",
position: "Member, Aegis",
role: "Student",
team: "Cultural",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1eRX8hbWqy8gUD0iSvLDjGHambPf6NmAZ",
bio: "I am very enthusiastic and fun loving",
socialLinks: { email: "anubhutijain.20d@gmail.com" },
},
{
id: 53,
name: "Bhoomi",
position: "Member, Aegis",
role: "Student",
team: "Cultural",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1Bj0RTHabRKG4xC2SSuTOGYXalzhkAwdf",
bio: "Vocalist by passion, coder by curiosity. Based in Siddapur, singing soulful melodies and exploring Web Development & Cyber Security to strike the perfect tech-music chord.",
socialLinks: {
linkedin:
"https://www.linkedin.com/in/bhoomi-prabhu-6199b12a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
email: "bhoomiprabhu82@gmail.com",
},
},
{
id: 54,
name: "M.R.Poojitha",
position: "Member, Aegis",
role: "Student",
team: "Cultural",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1SZAolMZkfJ25bkDz6CW3wuQ4e3JTZK2n",
bio: "Passionate member of Aegis Cyber Club's Cultural team.",
socialLinks: { email: "reddypoojitha875@gmail.com" },
},
{
id: 55,
name: "Manyu",
position: "Member, Aegis",
role: "Student",
team: "Cultural",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1uN4BNLWOVcXUXa8CI2gwKImQupfgQ58w",
bio: "Living for music, surviving on 'I'll practice tomorrow.'",
socialLinks: { email: "msr74007@gmail.com" },
},
{
id: 56,
name: "Rakshith N Virat",
position: "Member, Aegis",
role: "Student",
team: "Cultural",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1q8_fddR8Xod9Ap2UgrZRAljsjKML4V3A",
bio: "Awkwardly extroverted who mingles with everyone",
socialLinks: { email: "lohitharadhya164@gmail.com" },
},
{
id: 57,
name: "Sourajit",
position: "Member, Aegis",
role: "Student",
team: "Cultural",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1yValG9B6lBkoKz6tPJb28ujxkuNifLy8",
bio: "I'm soura for short and i love all kinds of music ;)",
socialLinks: {
github: "https://github.com/Sourajit1120",
email: "sourajitsengupta1@gmail.com",
},
},
{
id: 58,
name: "Srushti",
position: "Member, Aegis",
role: "Student",
team: "Cultural",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=18f_miqiBVjkqQNLImoCkVA3zqLMv-f7U",
bio: "Hey! am Srushti Iam an adventure enthusiast who loves exploring the outdoors and embracing the unexpected twists along the way, while finding joy in appreciating the small things in life.",
socialLinks: {
linkedin:
"https://(Srushti Hugar)https://www.linkedin.com/in/srushti-hugar-996b142a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
email: "hugarsrushti@gmail.com",
},
},
{
id: 59,
name: "Tanu",
position: "Member, Aegis",
role: "Student",
team: "Cultural",
year: "3rd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1btSftpDOL3uas_PWMrOrLjJelhgagUl0",
bio: "Passionate member of Aegis Cyber Club's Cultural team.",
socialLinks: { email: "ttanurajput2568@gmail.com" },
},
// 2nd Year Members
{
id: 60,
name: "Kazim Raza",
position: "Member, Aegis",
role: "Student",
team: "Cultural",
year: "2nd",
imageUrl:
"https://drive.google.com/uc?export=view&id=1H4YV8htl2Ob-v6CT1ugLm10QaWno35sS",
bio: "Chill dude who likes to stay active through badminton and wants to learn everything about cybersecurity.",
socialLinks: { email: "syedkazimraza2205@gmail.com" },
},
];