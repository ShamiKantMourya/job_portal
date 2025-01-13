import {
  Megaphone,
  PenTool,
  Users,
  Briefcase,
  HandshakeIcon,
  BarChart,
} from "lucide-react";

import { JobCategory, FeaturedJob, BlogPost } from "./index";

export const categories: JobCategory[] = [
  {
    icon: "Megaphone",
    title: "Marketing & Communication",
    jobsAvailable: 237,
  },
  {
    icon: "PenTool",
    title: "Design & Development",
    jobsAvailable: 520,
  },
  {
    icon: "Users",
    title: "Human Research & Development",
    jobsAvailable: 107,
  },
  {
    icon: "Briefcase",
    title: "Finance Management",
    jobsAvailable: 89,
  },
  {
    icon: "HandshakeIcon",
    title: "Business & Consulting",
    jobsAvailable: 49,
  },
  {
    icon: "BarChart",
    title: "Project Management",
    jobsAvailable: 237,
  },
];

export const iconComponents = {
  Megaphone,
  PenTool,
  Users,
  Briefcase,
  HandshakeIcon,
  BarChart,
};

export const featuredJobs: FeaturedJob[] = [
  {
    title: "Senior User Interface Designer",
    company: {
      name: "Microsoft Inc.",
      logo: "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/microsoft-512.png?height=40&width=40",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
    location: "United States",
    salary: "$30k - $35k",
    postedTime: "05 hours ago",
    tags: ["Designer", "UI", "Figma"],
  },
  {
    title: "System Designer",
    company: {
      name: "Apple Inc.",
      logo: "https://w7.pngwing.com/pngs/589/546/png-transparent-apple-logo-new-york-city-brand-computer-apple-company-computer-logo.png?height=40&width=40",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
    location: "United Kingdom",
    salary: "$35k - $45k",
    postedTime: "05 hours ago",
    tags: ["Designer", "UI", "Figma"],
  },
  {
    title: "Data Manager and Analyst",
    company: {
      name: "Fiverr",
      logo: "https://logowik.com/content/uploads/images/fiverr-new3326.jpg?height=40&width=40",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
    location: "United States of America (USA)",
    salary: "$33k - $35k",
    postedTime: "05 hours ago",
    tags: ["Designer", "UI", "Figma"],
  },
  {
    title: "Web Application Designer",
    company: {
      name: "Figma",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IQCea8hSpiYjBajC-OQu3h1fXr4qesFAog&s?height=40&width=40",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
    location: "United Kingdom",
    salary: "$30k - $35k",
    postedTime: "05 hours ago",
    tags: ["Designer", "UI", "Figma"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "What's Apex Talent?",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscin elit. At morbi turpis sagittis amet donec mecenas. Ac sapien consequat sed.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blogs-SbpvNrcZy4it3tUwM36VziRXoyDjor.png"
  },
  {
    title: "Introducing Apex Engage",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscin elit. At morbi turpis sagittis amet donec mecenas. Ac sapien consequat sed.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blogs-SbpvNrcZy4it3tUwM36VziRXoyDjor.png"
  },
  {
    title: "Premium vs Enterprise plan",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscin elit. At morbi turpis sagittis amet donec mecenas. Ac sapien consequat sed.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blogs-SbpvNrcZy4it3tUwM36VziRXoyDjor.png"
  }
]