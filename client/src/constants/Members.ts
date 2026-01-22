export interface Member {
  id: number;
  name: string;
  position?: string;
  imageUrl?: string;
  bio?: string; // kept for compatibility, not used
  resumeUrl?: string;
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

export const members: Member[] = [
  {
    id: 1,
    name: "Person 1",
    position: "Founder, Aegis",
    year: "4th",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
  {
    id: 2,
    name: "Person 2",
    position: "Co-Founder, Aegis",
    year: "4th",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
  {
    id: 3,
    name: "Person 3",
    position: "Tech Lead, Aegis",
    year: "3rd",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
  {
    id: 4,
    name: "Person 4",
    position: "Tech Co-Lead, Aegis",
    year: "3rd",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
  {
    id: 5,
    name: "Person 5",
    position: "Tech Member, Aegis",
    year: "3rd",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
  {
    id: 6,
    name: "Person 6",
    position: "Tech Member, Aegis",
    year: "3rd",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
  {
    id: 7,
    name: "Vinay Madival",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/vinay_madival.png",
    resumeUrl:
      "https://drive.google.com/file/d/10yBuR0mhTRiZ46y4Or7z7vXzBtYPz8Tb/view?usp=drive_link",
    socialLinks: {
      github: "https://github.com/VINAYMADIVAL",
      linkedin: "https://www.linkedin.com/in/vinay-madival-ab9059320/",
      email: "vinaymadivalcmp@gmail.com",
    },
  },
  {
    id: 8,
    name: "Person 8",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
  {
    id: 9,
    name: "Person 9",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
  {
    id: 10,
    name: "Person 10",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
  {
    id: 11,
    name: "Person 11",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
  {
    id: 12,
    name: "Person 12",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
  {
    id: 13,
    name: "Person 13",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/person.png",
    resumeUrl: undefined,

    socialLinks: {
      github: undefined,
      linkedin: undefined,
      email: undefined,
    },
  },
];
