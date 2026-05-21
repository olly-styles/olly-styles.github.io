export const profile = {
  name: "Olly Styles",
  tagline: ["ml-engineer", "researcher", "ex-founder"],
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Previously cofounded Atlas AI, a computer vision startup. Now building at Artanis. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  links: {
    atlas: "https://artanis.substack.com/p/atlas-ai-part-1-everyones-got-a-gantt",
    artanis: "https://artanis.ai",
  },
  social: {
    github: "https://github.com/olly-styles",
    linkedin: "https://www.linkedin.com/in/olly-styles-090437132/",
    scholar: "https://scholar.google.com/citations?user=nwYhVo0AAAAJ&hl=en",
    email: "ollystyles@gmail.com",
  },
};

export type WorkEntry = {
  title: string;
  description: string;
  start: string;
  end: string;
  href?: string;
};

export const work: WorkEntry[] = [
  {
    title: "Artanis",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    start: "2024",
    end: "now",
    href: "https://artanis.ai",
  },
  {
    title: "Atlas AI",
    description: "Cofounder, CTO. Lorem ipsum dolor sit amet consectetur.",
    start: "2021",
    end: "2023",
  },
  {
    title: "University of Warwick",
    description: "PhD in Computer Vision. Lorem ipsum dolor sit amet.",
    start: "2017",
    end: "2021",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  href?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    title: "Trajectory Tensors for Multi-Camera Trajectory Forecasting",
    authors: "Styles, Guha, Sanchez",
    venue: "PAMI",
    year: "'21",
    href: "https://arxiv.org/pdf/2108.04694.pdf",
  },
  {
    title: "Multi-Camera Trajectory Forecasting",
    authors: "Styles, Guha, Sanchez, Kot",
    venue: "CVPR-W",
    year: "'20",
    note: "Best student paper",
  },
  {
    title: "Multiple Object Forecasting",
    authors: "Styles, Sanchez, Guha",
    venue: "WACV",
    year: "'20",
  },
];

export const beliefs: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
];

export type Post = {
  title: string;
  date: string;
  slug: string;
};

export const posts: Post[] = [
  { title: "Lorem ipsum dolor sit amet", date: "Mar 2025", slug: "lorem-ipsum" },
  { title: "Sed do eiusmod tempor incididunt", date: "Nov 2024", slug: "sed-do-eiusmod" },
  { title: "Ut enim ad minim veniam quis", date: "Jul 2024", slug: "ut-enim-ad" },
];
