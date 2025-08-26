import WebDevelopment from "@/assets/WebDevelopment.avif";
import AppDevelopment from "@/assets/AppDevelopment.avif";
import GraphicDesign from "@/assets/GraphicDesign.avif";
import DigitalMarketing from "@/assets/DigitalMarketing.avif";
import VideoEditing from "@/assets/VideoEditing.avif";
import BusinessDevelopment from "@/assets/BusinessDevelopment.avif";

export const services = [
  {
    id: "WebDevelopment",
    heroSection: {
      title: "Professional Web Development",
      dec: "Full-cycle web development services using modern technologies to build scalable, secure, and high-performance web applications.",
      buttonLabel: "Start Project",
      heroImage: WebDevelopment,
    },
    expertise: {
      title: "Our Web Development Expertise",
      dec: "We specialize in creating custom web solutions using cutting-edge technologies:",
      skills: [
        "MERN Stack Development (MongoDB, Express, React, Node.js)",
        "Responsive Web Design",
        "REST API Development",
        "E-commerce Solutions",
      ],
      processTitle: "Development Process",
      process: [
        {
          name: "Requirement Analysis",
          task: "Understanding your business needs and technical requirements",
        },
      ],
    },
  },
  {
    id: "AppDevelopment",
    heroSection: {
      title: "Mobile App Development",
      dec: "Cross-platform mobile app solutions using Flutter and React Native for iOS and Android.",
      buttonLabel: "Start Project",
      heroImage: AppDevelopment,
    },
    expertise: {
      title: "App Development Expertise",
      dec: "Full-cycle mobile app development services:",
      skills: [
        "Cross-platform Development (Flutter/React Native)",
        "Native iOS & Android Development",
        "API Integration & Backend Services",
        "App Store Optimization",
      ],
      processTitle: "Development Process",
      process: [
        {
          name: "Requirement Analysis",
          task: "Understanding your mobile app needs",
        },
      ],
    },
  },
  {
    id: "GraphicDesign",
    heroSection: {
      title: "Creative Graphic Design",
      dec: "Professional graphic design services that bring your brand to life with stunning visuals and compelling aesthetics.",
      buttonLabel: "Start Project",
      heroImage: GraphicDesign,
    },
    expertise: {
      title: "Design Expertise",
      dec: "We create visual solutions that make lasting impressions:",
      skills: [
        "Brand Identity & Logo Design",
        "Print & Digital Marketing Materials",
        "UI/UX Design & Prototyping",
        "Packaging & Merchandise Design",
      ],
      processTitle: "Design Process",
      process: [
        {
          name: "Discovery & Research",
          task: "Understanding your brand and target audience",
        },
      ],
    },
  },
  {
    id: "DigitalMarketing",
    heroSection: {
      title: "Digital Marketing Solutions",
      dec: "Comprehensive digital marketing strategies to grow your online presence and reach your target audience.",
      buttonLabel: "Start Project",
      heroImage: DigitalMarketing,
    },
    expertise: {
      title: "Marketing Expertise",
      dec: "Full-service digital marketing solutions:",
      skills: [
        "SEO & Content Marketing",
        "Social Media Management",
        "PPC Advertising",
        "Email Marketing Automation",
      ],
      processTitle: "Marketing Process",
      process: [
        {
          name: "Strategy Development",
          task: "Creating data-driven marketing strategies",
        },
      ],
    },
  },
  {
    id: "VideoEditing",
    heroSection: {
      title: "Professional Video Editing",
      dec: "High-quality video editing services for YouTube, social media, commercials, and corporate videos.",
      buttonLabel: "Start Project",
      heroImage: VideoEditing,
    },
    expertise: {
      title: "Editing Capabilities",
      dec: "Comprehensive video production services:",
      skills: [
        "4K Video Editing & Color Grading",
        "Motion Graphics & Animation",
        "Audio Mixing & Sound Design",
        "YouTube Optimization & SEO",
      ],
      processTitle: "Editing Process",
      process: [
        {
          name: "Footage Review",
          task: "Analyzing raw footage and planning edits",
        },
      ],
    },
  },
  {
    id: "BusinessDevelopment",
    heroSection: {
      title: "Business Growth Solutions",
      dec: "Strategic business development services to help startups and enterprises scale effectively.",
      buttonLabel: "Start Project",
      heroImage: BusinessDevelopment,
    },
    expertise: {
      title: "Business Expertise",
      dec: "Comprehensive business development services:",
      skills: [
        "Market Research & Analysis",
        "Business Strategy Planning",
        "Partnership Development",
        "Revenue Growth Strategies",
      ],
      processTitle: "Development Process",
      process: [
        {
          name: "Business Assessment",
          task: "Comprehensive analysis of current operations",
        },
      ],
    },
  },
];
