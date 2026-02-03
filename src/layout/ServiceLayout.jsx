import { Outlet } from "react-router-dom";

const mlServiceData = {
  title: "Machine Learning & AI",
  subtitle: "AI that Grows Your Business",
  description:
    "Empower operations with end-to-end AI services. From consulting to custom apps, " +
    "we optimize workflows for sectors like agriculture, healthcare, and finance.",
  icons: [
    {
      label: "Microsoft ",
      icon: "/test.svg",
    },
    {
      label: "Metaai ",
      icon: "/test.svg",
    },
    {
      label: "Leptonai ",
      icon: "/test.svg",
    },
    {
      label: "AWS ",
      icon: "/test.svg",
    },
    {
      label: "Apache ",
      icon: "/test.svg",
    },
    {
      label: "oepani ",
      icon: "/test.svg",
    },
    {
      label: "Hugging Face ",
      icon: "/test.svg",
    },
  ],
  heroTitle: "",
  heroDescription:
    "We help businesses unlock the power of artificial intelligence by designing and deploying scalable, data-driven solutions. From automation to advanced " +
    "analytics, our AI services are built to improve efficiency, enhance decision-making, and create measurable business impact.",

  cards: [
    {
      title: "Machine Learning Engineering",
      description:
        "We design and deploy intelligent AI solutions that help businesses automate processes, extract insights, and build smarter digital products.",
    },
    {
      title: "Data Science & Analytics",
      description:
        "We turn complex data into clear insights through data mining, analysis, business intelligence, and visualization for better decision-making.",
    },
    {
      title: "Machine Learning Engineering",
      description:
        "Custom ML models built for real-world use, including NLP, computer vision, predictive analytics, and recommendation systems that scale with your business",
    },

    {
      title: "AI-Powered Applications",
      description:
        "Intelligent applications such as chatbots, virtual assistants, fraud detection, and automation tools designed to improve efficiency and user experience.",
    },
  ],
  process: {
    title: "our process Our AI Delivery Process at Process at Techno",
    description:
      "A structured, data-driven approach that turns complex AI challenges into scalable, production-ready solutions.",
  },
  steps: [
    {
      name: "Strategic Discovery",
      description:
        "We begin by fully understanding your business goals, use-cases, and desired outcomes to ensure AI solutions deliver real impact.",
    },
    {
      name: "Data Preparation",
      description:
        "We collect, clean, label, and preprocess your data so it’s ready for accurate modeling and analytics.",
    },
    {
      name: "Model Building & Training",
      description:
        "Our experts design and train custom machine learning and AI models using the right algorithms and tools for your use-case.",
    },
    {
      name: "Testing & Validation",
      description:
        "We evaluate performance with rigorous testing and iterate until your models meet reliability and accuracy standards.",
    },

    {
      name: "Deployment & Integration",
      description:
        "We seamlessly integrate your AI solution into your systems or cloud environment with clear APIs and workflows.",
    },
    {
      name: "Monitoring & Support",
      description:
        "Post-deployment, we monitor results, retrain models as needed, and continuously optimize performance to ensure ongoing value.",
    },
  ],
};

const services = [
  {
    name: "Machine Learning & AI",
    subServices: [
      "Machine Learning Models",
      "AI-Powered Applications",
      "Predictive Analytics",
      "Data-Driven Decision Systems",
      "AI Integration in Digital Products",
    ],
  },
  {
    name: "Software Development",
    subServices: [
      "Web Application Development",
      "Mobile Application Development",
      "Custom Software Solutions",
      "API Development & Integration",
      "System Architecture & Maintenance",
    ],
  },
  {
    name: "E-Commerce Solutions",
    subServices: [
      "E-Commerce Website Design",
      "Online Store Development",
      "Payment Gateway Integration",
      "Product & Order Management Systems",
      "Performance & Conversion Optimization",
    ],
  },
];

const ServiceLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white ">
      <div className="pt-32 px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black  mb-8">
          Services
        </h1>
      </div>
      <div className="flex-1 px-6 md:px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default ServiceLayout;
