export const site = {
  name: "Hudmeta",
  description:
    "An independent design and development studio. Distinctive websites, considered interfaces, and custom web applications — personally designed and engineered from first idea to launch.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hudsonmyung@gmail.com",
  founder: process.env.NEXT_PUBLIC_FOUNDER_NAME || "Hudson Myung",
  phone: "+19493030376",
  phoneDisplay: "(949) 303-0376",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
};
export const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Process", href: "/#process" },
  { label: "Studio", href: "/#studio" },
];
