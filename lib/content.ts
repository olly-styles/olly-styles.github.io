export const profile = {
  name: "Olly Styles",
  tagline: ["ml-engineer", "researcher", "ex-founder"],
  location: "London",
  links: {
    atlas: "https://artanis.substack.com/p/atlas-ai-part-1-everyones-got-a-gantt",
    artanis: "https://artanis.ai",
    substack: "https://artanis.substack.com",
    warwick: "https://warwick.ac.uk/fac/sci/dcs/",
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
    description: "AI alignment platform for keeping model behavior consistent as products evolve.",
    start: "2024",
    end: "now",
    href: "https://artanis.ai",
  },
  {
    title: "Atlas AI",
    description: "Cofounder & CTO. Computer vision startup for personal training. Wound down Dec 2023.",
    start: "2021",
    end: "2023",
    href: "https://artanis.substack.com/p/atlas-ai-part-1-everyones-got-a-gantt",
  },
  {
    title: "Defence and Security Accelerator",
    description: "Research Assistant during PhD. Applied computer vision research.",
    start: "2019",
    end: "2021",
    href: "https://www.gov.uk/government/organisations/defence-and-security-accelerator",
  },
  {
    title: "University of Warwick",
    description: "PhD in Computer Vision. Supervisors: Victor Sanchez & Tanaya Guha.",
    start: "2017",
    end: "2021",
  },
];

export type EducationEntry = {
  degree: string;
  institution: string;
  start: string;
  end: string;
};

export const education: EducationEntry[] = [
  { degree: "PhD, Computer Vision", institution: "University of Warwick", start: "2017", end: "2021" },
  { degree: "MSci Computer Science (1st)", institution: "University of Warwick", start: "2013", end: "2017" },
  { degree: "Intercalated year", institution: "HKUST, Hong Kong", start: "2015", end: "2016" },
];

export type VisitingStint = {
  institution: string;
  supervisor: string;
  start: string;
  end: string;
};

export const visiting: VisitingStint[] = [
  { institution: "Nanyang Technological University", supervisor: "Alex Kot", start: "Aug 2019", end: "Dec 2019" },
  { institution: "Michigan State University, iProbe Lab", supervisor: "Arun Ross", start: "Sep 2018", end: "Dec 2018" },
  { institution: "University of Sydney", supervisor: "Dong Xu", start: "Mar 2018", end: "Jul 2018" },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  href?: string;
  code?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    title: "Multi-Camera Trajectory Forecasting with Trajectory Tensors",
    authors: "Kesa, Styles, Sanchez",
    venue: "WACV-W",
    year: "'22",
    href: "https://openaccess.thecvf.com/content/WACV2022W/RWS/papers/Kesa_Multiple_Object_Tracking_and_Forecasting_Jointly_Predicting_Current_and_Future_WACVW_2022_paper.pdf",
    code: "https://github.com/FunmiKesa/JLA",
  },
  {
    title: "Multi-Camera Trajectory Forecasting with Trajectory Tensors",
    authors: "Styles, Guha, Sanchez",
    venue: "PAMI",
    year: "'21",
    href: "https://arxiv.org/pdf/2108.04694.pdf",
    code: "https://github.com/olly-styles/Trajectory-Tensors",
  },
  {
    title: "Multi-Camera Trajectory Forecasting: Pedestrian Trajectory Prediction in a Network of Cameras",
    authors: "Styles, Guha, Sanchez, Kot",
    venue: "CVPR-W",
    year: "'20",
    note: "Best student paper award",
    href: "https://openaccess.thecvf.com/content_CVPRW_2020/papers/w66/Styles_Multi-Camera_Trajectory_Forecasting_Pedestrian_Trajectory_Prediction_in_a_Network_of_CVPRW_2020_paper.pdf",
    code: "https://github.com/olly-styles/Multi-Camera-Trajectory-Forecasting",
  },
  {
    title: "Multiple Object Forecasting: Predicting Future Object Locations in Diverse Environments",
    authors: "Styles, Guha, Sanchez",
    venue: "WACV",
    year: "'20",
    href: "https://openaccess.thecvf.com/content_WACV_2020/papers/Styles_Multiple_Object_Forecasting_Predicting_Future_Object_Locations_in_Diverse_Environments_WACV_2020_paper.pdf",
    code: "https://github.com/olly-styles/Multiple-Object-Forecasting",
  },
  {
    title: "Forecasting Pedestrian Trajectory with Machine-annotated Training Data",
    authors: "Styles, Ross, Sanchez",
    venue: "IV",
    year: "'19",
    href: "https://arxiv.org/pdf/1905.03681.pdf",
    code: "https://github.com/olly-styles/Dynamic-Trajectory-Predictor",
  },
];

// Placeholders — replace with your own.
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
  href: string;
};

// Posts on the Artanis Substack — co-authored company blog, mixed authorship.
export const posts: Post[] = [
  {
    title: "Evals Without Engineering",
    date: "Apr 2026",
    href: "https://artanis.substack.com/p/evals-without-engineering",
  },
  {
    title: "Your AI is Only as Good as Your Policy",
    date: "Apr 2026",
    href: "https://artanis.substack.com/p/your-ai-is-only-as-good-as-your-policy",
  },
  {
    title: "Alignment Will Be All That Matters",
    date: "Mar 2026",
    href: "https://artanis.substack.com/p/alignment-will-be-all-that-matters",
  },
  {
    title: "Stop Evaluating Unstructured Text",
    date: "Oct 2025",
    href: "https://artanis.substack.com/p/stop-evaluating-unstructured-text",
  },
  {
    title: "Atlas AI: Everyone's Got a Gantt",
    date: "Dec 2023",
    href: "https://artanis.substack.com/p/atlas-ai-part-1-everyones-got-a-gantt",
  },
];
