export const profile = {
  name: "Olly Styles",
  tagline: ["ai-engineer", "evals", "founder"],
  location: "London",
  links: {
    atlas: "https://artanis.substack.com/p/atlas-ai-part-1-everyones-got-a-gantt",
    artanis: "https://artanis.ai",
    workbench: "https://arxiv.org/abs/2405.00823",
    workbenchRevisited: "https://arxiv.org/abs/2606.13715",
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
  iconKey?: string;
};

export const work: WorkEntry[] = [
  {
    title: "Founding AI Engineer",
    description: "Artanis: AI alignment platform for keeping model behavior consistent in production",
    start: "2025",
    end: "now",
    href: "https://artanis.ai",
    iconKey: "artanis",
  },
  {
    title: "Senior ML Engineer",
    description: "Multiverse: Upskilling platform for AI adoption",
    start: "2024",
    end: "2025",
    href: "https://www.multiverse.io",
    iconKey: "multiverse",
  },
  {
    title: "Cofounder",
    description: "Atlas AI: Computer vision startup for personal training",
    start: "2019",
    end: "2023",
    href: "https://artanis.substack.com/p/atlas-ai-part-1-everyones-got-a-gantt",
    iconKey: "atlas",
  },
];

export type EducationEntry = {
  degree: string;
  institution: string;
  start: string;
  end: string;
  href?: string;
  iconKey?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "PhD, Machine Learning",
    institution: "University of Warwick",
    start: "2017",
    end: "2021",
    href: "https://wrap.warwick.ac.uk/171477/1/WRAP_Theses_Styles_2021.pdf",
    iconKey: "warwick",
  },
  {
    degree: "MEng Computer Science (1st)",
    institution: "University of Warwick",
    start: "2013",
    end: "2017",
    iconKey: "warwick",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  href?: string;
  code?: string;
  note?: string;
  image?: string;
  iconKey?: string;
};

export const publications: Publication[] = [
  {
    title: "WorkBench Revisited: Workplace Agents Two Years On",
    authors: "Styles",
    venue: "Preprint",
    year: "'26",
    href: "https://arxiv.org/abs/2606.13715",
    code: "https://github.com/olly-styles/WorkBench",
    iconKey: "workbench",
  },
  {
    title: "WorkBench: A Benchmark Dataset for Agents in a Realistic Workplace Setting",
    authors: "Styles, Miller, Cerda-Mardini, Guha, Sanchez, Vidgen",
    venue: "COLM",
    year: "'24",
    href: "https://arxiv.org/abs/2405.00823",
    code: "https://github.com/olly-styles/WorkBench",
    iconKey: "workbench",
  },
  {
    title: "Multiple Object Tracking and Forecasting: Jointly Predicting Current and Future Object Locations",
    authors: "Kesa, Styles, Sanchez",
    venue: "WACV-W",
    year: "'22",
    href: "https://openaccess.thecvf.com/content/WACV2022W/RWS/papers/Kesa_Multiple_Object_Tracking_and_Forecasting_Jointly_Predicting_Current_and_Future_WACVW_2022_paper.pdf",
    code: "https://github.com/FunmiKesa/JLA",
    iconKey: "mot",
  },
  {
    title: "Multi-Camera Trajectory Forecasting with Trajectory Tensors",
    authors: "Styles, Guha, Sanchez",
    venue: "PAMI",
    year: "'21",
    href: "https://arxiv.org/pdf/2108.04694.pdf",
    code: "https://github.com/olly-styles/Trajectory-Tensors",
    iconKey: "tensor",
  },
  {
    title: "Multi-Camera Trajectory Forecasting: Pedestrian Trajectory Prediction in a Network of Cameras",
    authors: "Styles, Guha, Sanchez, Kot",
    venue: "CVPR-W",
    year: "'20",
    note: "Best student paper",
    href: "https://openaccess.thecvf.com/content_CVPRW_2020/papers/w66/Styles_Multi-Camera_Trajectory_Forecasting_Pedestrian_Trajectory_Prediction_in_a_Network_of_CVPRW_2020_paper.pdf",
    code: "https://github.com/olly-styles/Multi-Camera-Trajectory-Forecasting",
    iconKey: "mctf",
  },
  {
    title: "Multiple Object Forecasting: Predicting Future Object Locations in Diverse Environments",
    authors: "Styles, Guha, Sanchez",
    venue: "WACV",
    year: "'20",
    href: "https://openaccess.thecvf.com/content_WACV_2020/papers/Styles_Multiple_Object_Forecasting_Predicting_Future_Object_Locations_in_Diverse_Environments_WACV_2020_paper.pdf",
    code: "https://github.com/olly-styles/Multiple-Object-Forecasting",
    iconKey: "mof",
  },
  {
    title: "Forecasting Pedestrian Trajectory with Machine-annotated Training Data",
    authors: "Styles, Ross, Sanchez",
    venue: "IV",
    year: "'19",
    href: "https://arxiv.org/pdf/1905.03681.pdf",
    code: "https://github.com/olly-styles/Dynamic-Trajectory-Predictor",
    iconKey: "iv",
  },
];

export const beliefs: string[] = ["Simplicity is worth the effort", "Trying makes it fun", "Honesty is faster"];

export type Post = {
  title: string;
  date: string;
  href: string;
  iconKey?: string;
};

// Posts on the Artanis Substack — co-authored company blog, mixed authorship.
export const posts: Post[] = [
  {
    title: "Alignment Will Be All That Matters",
    date: "Mar 2026",
    href: "https://artanis.substack.com/p/alignment-will-be-all-that-matters",
  },
  {
    title: "Why Bikeshedding Kills So Many AI Projects",
    date: "Jul 2025",
    href: "https://artanis.substack.com/p/why-bikeshedding-kills-so-many-ai",
  },
  {
    title: "Policy: The Missing Core of the AI Stack",
    date: "Jan 2025",
    href: "https://artanis.substack.com/p/policy-the-missing-core-of-the-ai",
  },
  {
    title: "Your Startup Shouldn't Be a Rocketship",
    date: "Nov 2023",
    href: "https://artanis.substack.com/p/your-startup-shouldnt-be-a-rocketship",
  },
  {
    title: "Atlas AI: Post-mortem",
    date: "Oct 2023",
    href: "https://artanis.substack.com/p/atlas-ai-part-1-everyones-got-a-gantt",
  },
];
