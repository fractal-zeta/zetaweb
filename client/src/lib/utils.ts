import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Handle smooth scrolling
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Header height offset
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Partner logos for companies that trust Fractal
export const partnerLogos = [
  { name: "Google", icon: "fa-google", color: "text-blue-500" },
  { name: "Microsoft", icon: "fa-microsoft", color: "text-blue-500" },
  { name: "Amazon", icon: "fa-amazon", color: "text-blue-500" },
  { name: "IBM", icon: "fa-ibm", color: "text-blue-500" },
  { name: "Apple", icon: "fa-apple", color: "text-gray-500" },
  { name: "Facebook", icon: "fa-facebook", color: "text-blue-500" },
];

// Services offered by Fractal
export const services = [
  {
    icon: "fa-code",
    title: "Custom Software Development",
    description:
      "Bespoke solutions designed to address your specific business challenges and objectives.",
    features: [
      "Tailored to your business requirements",
      "Enterprise-grade architecture",
      "Scalable and maintainable code",
    ],
  },
  {
    icon: "fa-mobile-alt",
    title: "Web & Mobile App Development",
    description:
      "Engaging, user-friendly applications that deliver exceptional experiences across all devices.",
    features: [
      "Responsive web applications",
      "Native and cross-platform mobile apps",
      "Progressive Web Apps (PWAs)",
    ],
  },
  {
    icon: "fa-cloud",
    title: "Cloud Architecture & DevOps",
    description:
      "Modern infrastructure solutions that ensure reliability, security, and scalability.",
    features: [
      "Cloud migration strategies",
      "CI/CD pipeline implementation",
      "Infrastructure as Code (IaC)",
    ],
  },
  {
    icon: "fa-paint-brush",
    title: "UI/UX Design",
    description:
      "Beautiful interfaces and intuitive user experiences that delight your customers.",
    features: [
      "User research and testing",
      "Wireframing and prototyping",
      "Brand-aligned visual design",
    ],
  },
  {
    icon: "fa-lightbulb",
    title: "Technology Consulting",
    description:
      "Strategic guidance to help you make the right technology decisions for your business.",
    features: [
      "Technology stack assessment",
      "Digital transformation roadmaps",
      "Technical due diligence",
    ],
  },
];

// Portfolio/Case Studies
export const portfolioProjects = [
  {
    title: "FinTech Dashboard",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A comprehensive financial analytics dashboard for a leading investment firm, featuring real-time data visualization and AI-powered insights.",
    technologies: ["React", "Node.js", "AWS", "D3.js"],
    challenge: "Processing and visualizing large datasets in real-time",
  },
  {
    title: "Healthcare Patient Portal",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A secure, HIPAA-compliant patient portal that streamlines appointment scheduling, telemedicine, and medical record access.",
    technologies: ["Angular", "Python", "Azure", "MongoDB"],
    challenge: "Ensuring security and compliance while maintaining usability",
  },
  {
    title: "E-commerce Platform",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A high-performance e-commerce platform with advanced search, personalization, and multi-channel inventory management.",
    technologies: ["React", "Java", "Elasticsearch", "PostgreSQL"],
    challenge: "Scaling to handle peak season traffic with zero downtime",
  },
  {
    title: "Logistics Management System",
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "An integrated logistics platform that optimizes route planning, shipment tracking, and warehouse management.",
    technologies: ["Vue.js", ".NET Core", "Google Cloud", "SQL Server"],
    challenge: "Integrating with legacy systems and IoT devices",
  },
];

// Tech stack section data
export const techStackItems = [
  { name: "React", icon: "fa-react", category: "Frontend Framework" },
  { name: "Angular", icon: "fa-angular", category: "Frontend Framework" },
  { name: "Vue.js", icon: "fa-vuejs", category: "Frontend Framework" },
  { name: "Node.js", icon: "fa-node-js", category: "Backend Runtime" },
  { name: "Python", icon: "fa-python", category: "Backend Language" },
  { name: "Java", icon: "fa-java", category: "Enterprise Backend" },
  { name: "MongoDB", icon: "fa-database", category: "NoSQL Database" },
  { name: "PostgreSQL", icon: "fa-server", category: "SQL Database" },
  { name: "Redis", icon: "fa-server", category: "In-Memory Database" },
  { name: "AWS", icon: "fa-aws", category: "Cloud Platform" },
  { name: "Azure", icon: "fa-microsoft", category: "Cloud Platform" },
  { name: "GCP", icon: "fa-google", category: "Cloud Platform" },
];

// Testimonials data
export const testimonials = [
  {
    content:
      "Fractal transformed our outdated systems into a modern, scalable platform. Their team was professional and delivered beyond our expectations. Our new system has helped us reduce operational costs by 35%.",
    author: "Sarah Johnson",
    position: "CTO, FinTech Solutions Inc.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    content:
      "The team at Fractal developed a custom ERP solution that perfectly fit our unique business requirements. Their attention to detail and commitment to quality were evident throughout the project.",
    author: "Michael Reeves",
    position: "Operations Director, Global Manufacturing",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    content:
      "Our e-commerce platform built by Fractal has been a game-changer. The site is fast, secure, and conversion rates have increased by 28% since launch. Their ongoing support has been exceptional as well.",
    author: "Jennifer Chen",
    position: "CEO, Boutique Retailers",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

// Social media links
export const socialLinks = [
  { name: "LinkedIn", icon: "fa-linkedin-in", url: "https://linkedin.com" },
  { name: "Twitter", icon: "fa-twitter", url: "https://twitter.com" },
  { name: "GitHub", icon: "fa-github", url: "https://github.com" },
  { name: "Instagram", icon: "fa-instagram", url: "https://instagram.com" },
];

// Footer links
export const footerLinks = {
  services: [
    { name: "Custom Software Development", url: "#services" },
    { name: "Web & Mobile App Development", url: "#services" },
    { name: "Cloud Architecture & DevOps", url: "#services" },
    { name: "UI/UX Design", url: "#services" },
    { name: "Technology Consulting", url: "#services" },
  ],
  company: [
    { name: "About Us", url: "#about" },
    { name: "Portfolio", url: "#portfolio" },
    { name: "Testimonials", url: "#testimonials" },
    { name: "Careers", url: "#about" },
    { name: "Blog", url: "#about" },
  ],
  legal: [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Cookie Policy", url: "#" },
  ],
};
