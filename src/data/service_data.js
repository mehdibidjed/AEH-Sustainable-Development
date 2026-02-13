import { Assets } from "../assets/Asset";

export const aiDeliveryProcessData = {
  sectionTitle: "OUR PROCESS",
  mainTitle: {
    before: "Our AI Delivery Process at ",
    highlighted: "Techno",
  },
  subtitle:
    "A structured, data-driven approach that turns complex AI challenges into scalable, production-ready solutions.",

  steps: [
    {
      title: "Strategic Discovery",
      description:
        "We begin by fully understanding your business goals, use-cases, and desired outcomes to ensure AI solutions deliver real impact.",
    },
    {
      title: "Data Preparation",
      description:
        "We collect, clean, label, and preprocess your data so it's ready for accurate modeling and analytics.",
    },
    {
      title: "Model Building & Training",
      description:
        "Our experts design and train custom machine learning and AI models using the right algorithms and tools for your use-case.",
    },
    {
      title: "Testing & Validation",
      description:
        "We evaluate performance with rigorous testing and iterate until your models meet reliability and accuracy standards.",
    },
    {
      title: "Deployment & Integration",
      description:
        "We seamlessly integrate your AI solution into your systems or cloud environment with clear APIs and workflows.",
    },
    {
      title: "Monitoring & Support",
      description:
        "Post-deployment, we monitor results, retrain models as needed, and continuously optimize performance to ensure ongoing value.",
    },
  ],
};
export const creativeDesignProcessData = {
  sectionTitle: "OUR PROCESS",
  mainTitle: {
    before: "Full-Cycle Mobile App Development Process at Techno ",
    highlighted: "Techno",
  },
  subtitle:
    "From audience research, design, and development to ongoing support and maintenance - our team offers full-cycle mobile app development services.",

  steps: [
    {
      title: "Discovery and planning",
      description:
        "You define your product idea, and we start researching your target market. We outline key features, project roadmap, and budget.",
    },
    {
      title: "Design And Prototyping",
      description:
        "After we develop user personas, our designers start drafting UI/UX elements, and we build an interactive prototype.",
    },
    {
      title: "Development and API integration",
      description:
        "At this step, we begin your mobile app development. Our developers implement core functionalities and features and integrate APIs.",
    },
    {
      title: "Testing & QA",
      description:
        "Once we have your mobile app ready, we begin testing, debugging, fixing identified issues, and optimizing the app's performance. .",
    },
    {
      title: "Launch and support",
      description:
        "Once we submit your mobile app to app stores, we monitor its performance and gather user feedback to provide suitable support.",
    },
  ],
};
export const SoftwareDevProcessData = {
  sectionTitle: "OUR PROCESS",
  mainTitle: {
    before: "Our Software Development Approach at",
    highlighted: "Techno",
  },
  subtitle:
    "We follow a structured yet flexible process to deliver high-quality custom software solutions tailored to your business needs. This ensures efficiency, scalability, and alignment with your goals from concept to ongoing support.",

  steps: [
    {
      title: "Business Planning Stage",
      description:
        "This phase, often starting with consultations, evaluates company operations, tools, and culture to align designs with genuine value. It defines objectives, vision, and specs, especially when internal skills are limited.",
    },
    {
      title: "Interface and Experience Design",
      description:
        "Emphasizes crafting user-friendly interfaces and scalable products, integrating advanced tech like data analytics or AI to match specific goals.",
    },
    {
      title: "Core Building Phase",
      description:
        "Involves creating tailored systems, mobile apps for various platforms, web solutions, and cloud setups. Also includes rapid prototyping for idea validation.",
    },
    {
      title: "Assurance and Validation",
      description:
        "Applies thorough checks across the project to secure systems, resolve issues, and uphold standards during ongoing updates.",
    },
    {
      title: "Launch and Upgrades",
      description:
        "Handles modernization of old systems while keeping essential logic, manages full rollout, and ensures adaptability for growth with new integrations.",
    },
  ],
};
export const services = [
  {
    name: "Machine Learning & AI",
    image: Assets.Images.Common.MachineLearningLG,
    subServices: [
      "Machine Learning Models",
      "AI-Powered Applications",
      "Predictive Analytics",
      "Data-Driven Decision Systems",
      "AI Integration in Digital Products",
    ],
    link:"/services/machine-learning"
  },
  {
    name: "Software Development",
    image: Assets.Images.Common.SoftwareDevLG,
    subServices: [
      "Web Application Development",
      "Mobile Application Development",
      "Custom Software Solutions",
      "API Development & Integration",
      "System Architecture & Maintenance",
    ],
    link:"services/software-development"
  },
  {
    name: "E-Commerce Solutions",
    image: Assets.Images.Common.EcomerceLG,
    subServices: [
      "E-Commerce Website Design",
      "Online Store Development",
      "Payment Gateway Integration",
      "Product & Order Management Systems",
      "Performance & Conversion Optimization",
    ],
    link:"/services/e-commerce"
  },
  {
    name: "Creative Design",
    subServices: [
      "UI/UX Design",
      "Web & Mobile App Design",
      "User Research & Wireframing",
      "Prototyping & Design Systems",
      "Visual & Interactive Design",
      "Branding",
    ],
    image: Assets.Images.Common.CreativeDesignLG,
    link:"/services/creative-design"
  },
  {
    name: "IT managed services providers (MSP)",
    subServices: [
      "24/7 Proactive Monitoring & Support",
      "Cloud Infrastructure Management",
      "Cybersecurity & Threat Protection",
      "Data Backup & Disaster Recovery",
      "Network & IT Strategy Consulting",
    ],
    image: Assets.Images.Common.CreativeDesignLG,
    link:"/services/it-msprovider"
  },
];

export const mlServiceData = {
  title: "Machine Learning & AI",
  subtitle: "AI that Grows Your Business",
  description:
    "Empower operations with end-to-end AI services. From consulting to custom apps, " +
    "we optimize workflows for sectors like agriculture, healthcare, and finance.",
  serviceImage: Assets.Images.Services.ML.AiImage,
  cardsType: "2-2",
  icons: [
    {
      label: "Microsoft ",
      icon: Assets.Icons.Services.ML.Microsoft,
    },
    {
      label: "Metaai ",
      icon: Assets.Icons.Services.ML.MetaAi,
    },
    {
      label: "Leptonai ",
      icon: Assets.Icons.Services.ML.Leptonia,
    },
    {
      label: "AWS ",
      icon: Assets.Icons.Services.ML.AWS,
    },
    {
      label: "Apache ",
      icon: Assets.Icons.Services.ML.Apache,
    },
    {
      label: "oepani ",
      icon: Assets.Icons.Services.ML.OpenAI,
    },
    {
      label: "Hugging Face ",
      icon: Assets.Icons.Services.ML.HaggingFace,
    },
  ],
  heroTitle: "Intelligent AI & Machine Learning Solutions",
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
        "We collect, clean, label, and preprocess your data so it's ready for accurate modeling and analytics.",
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
export const creativeDesignData = {
  title: "Creative Design",
  subtitle: "Crafting Engaging UI/UX for Algerian Innovation",
  description:
    "Research-driven designs that balance aesthetics with usability," +
    "creating engaging experiences that drive conversions and delight users.",
  serviceImage: Assets.Images.Services.CreativeDesign.CreativeDesignImg,
  cardsType: "2-2",
  icons: [
    {
      label: "Adobe Xd ",
      icon: Assets.Icons.Services.CD.Xd,
    },
    {
      label: "Farmer",
      icon: Assets.Icons.Services.CD.Farmer,
    },
    {
      label: "Vscode",
      icon: Assets.Icons.Services.CD.VsCode,
    },
    {
      label: "Photoshop",
      icon: Assets.Icons.Services.CD.Phtoshop,
    },
    {
      label: "Notion",
      icon: Assets.Icons.Services.CD.Notion,
    },
    {
      label: "Figma",
      icon: Assets.Icons.Services.CD.Figma,
    },
    {
      label: "Sketch",
      icon: Assets.Icons.Services.CD.Sketch,
    },
    {
      label: "Webflow",
      icon: Assets.Icons.Services.CD.WebFlow,
    },
  ],
  heroTitle: "Creative, Design & Production Services Expert",
  heroDescription:
    "We ideate and strategize digital design concepts for web and mobile, blending the right technologies, impactful design, and content to build strong, recognizable brands",
  cards: [
    {
      title: "UI/UX Design",
      description:
        "Responsive, user-centered web interfaces designed to convert visitors into customers while ensuring clarity, usability, and performance across all devices.",
    },
    {
      title: "Mobile App Design",
      description:
        "Intuitive and engaging mobile experiences crafted for both iOS and Android, focusing on usability, accessibility, and seamless user journeys.",
    },
    {
      title: "Brand Identity",
      description:
        "Strategic logos, color palettes, and visual systems built to express your brand’s personality, values, and story with consistency and impact.",
    },

    {
      title: "Design Systems",
      description:
        "Scalable, well-documented component libraries that ensure visual consistency, faster development, and long-term design alignment across products.",
    },
  ],
};
export const SoftwareDevData = {
  title: "Software Development",
  subtitle:
    "Growth-Driven & Custom Software Development Solutions for all Businesses",
  description:
    "Transform with comprehensive development for web, mobile, and custom solutions. Built with modern technologies and agile methodologies for rapid delivery.",
  serviceImage: Assets.Images.Services.SoftDev.SoftwareDevImage,
  cardsType: "2-3",
  icons: [
    {
      label: "Microsoft ",
      icon: Assets.Icons.Services.ML.Microsoft,
    },
    {
      label: "Metaai ",
      icon: Assets.Icons.Services.ML.MetaAi,
    },
    {
      label: "Leptonai ",
      icon: Assets.Icons.Services.ML.Leptonia,
    },
    {
      label: "AWS ",
      icon: Assets.Icons.Services.ML.AWS,
    },
    {
      label: "Apache ",
      icon: Assets.Icons.Services.ML.Apache,
    },
    {
      label: "oepani ",
      icon: Assets.Icons.Services.ML.OpenAI,
    },
    {
      label: "Hugging Face ",
      icon: Assets.Icons.Services.ML.HaggingFace,
    },
  ],
  heroTitle:
    "Growth-Driven & Custom Software Development Solutions for all Businesses",
  heroDescription:
    "We ideate and strategize digital design concepts for web and mobile, blending the right technologies, impactful design, and content to build strong, recognizable brands",
  cards: [
    {
      title: "Web Application Development",
      description:
        "Scalable, responsive web apps with modern frameworks like React, Next.js, and Vue",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile solutions for iOS and Android",
    },
    {
      title: "Custom Software Solutions",
      description:
        "Tailored enterprise software built to your exact specifications",
    },

    {
      title: "Cloud Development",
      description: "Cloud-native applications on AWS, Azure, and Google Cloud",
    },
    {
      title: "API Development",
      description: "Robust REST and GraphQL APIs for seamless integrations",
    },
  ],
};
export const EcomerceSolData = {
  title: "E-Commerce Solutions",
  subtitle: "Launch, Grow & Expand Your Online Business",
  description:
    "World-class e-commerce services from strategy to innovation. We help bussiness and brands build, optimize, and scale their online presence.",
  serviceImage: Assets.Images.Services.EcomerceSol.EcomerceSolImage,
  cardsType: "3-3",
  icons: [
    {
      label: "WooCommerce ",
      icon: Assets.Icons.Services.EC.Woo_Commerce,
    },
    {
      label: "BigCommerce ",
      icon: Assets.Icons.Services.EC.Big_Commerce,
    },
    {
      label: "Shopify",
      icon: Assets.Icons.Services.EC.Shopify,
    },
    {
      label: "SalesForce",
      icon: Assets.Icons.Services.EC.SalesForce,
    },
    {
      label: "Magneto",
      icon: Assets.Icons.Services.EC.Magneto,
    }
  ],
  heroTitle: "Our E-Commerce Solutions",
  heroDescription:
    "Elevate your online business with our end-to-end services tailored for seamless digital retail experiences.",
  cards: [
    {
      title: "E-Commerce Website Design",
      description:
        "Beautiful, conversion-optimized storefronts that captivate customers and drive sales.",
    },
    {
      title: "Store Development",
      description:
        "Custom Shopify, WooCommerce, and Magento builds designed to fit your unique business needs.",
    },
    {
      title: "Payment Integration",
      description:
        "Secure payment gateways and smooth checkout flows to ensure safe and efficient transactions.",
    },

    {
      title: "Analytics & Insights",
      description:
        "Detailed sales tracking and customer behavior analysis to inform strategic decisions.",
    },
    {
      title: "SEO Optimization",
      description:
        "Targeted search engine strategies to improve visibility, attract organic traffic, and boost your store's rankings on major platforms.",
    },
    {
      title: "Customer Experience",
      description:
        "Engaging loyalty programs and personalization features to build lasting relationships and encourage repeat business.",
    },
  ],
};
export const ItManagedServiceProviderData = {
  title: "IT managed services providers (MSP)",
  subtitle: "Elevate Your Tech Infrastructure",
  description:
    "Techno helps growing businesses adapt and thrive amidst ever-changing technology. With 24/7 access to more than 700 IT experts, we solve your biggest IT challenges to keep your business running.",
  serviceImage: Assets.Images.Services.ItMSP.ItMSP,
  cardsType: "2-2",
  icons: [
    {
      label: "Autotask",
      icon: Assets.Icons.Services.ITMSP.Autotask,
    },
    {
      label: "Autotask",
      icon: Assets.Icons.Services.ITMSP.Autotask2,
    },
    {
      label: "NinjaOne",
      icon: Assets.Icons.Services.ITMSP.NinjaOne,
    },
    {
      label: "Veam",
      icon: Assets.Icons.Services.ITMSP.Veam,
    },
    {
      label: "ConnectWise",
      icon: Assets.Icons.Services.ITMSP.ConnectWise,
    },
  ],
  heroTitle: "What’s included in Dataprise Fully Managed IT Services?",
  heroDescription:
    "Our fully managed business IT services include 24/7 monitoring, help desk support, proactive patching, endpoint security, backups, onsite support, and IT strategy planning, all designed to reduce downtime and keep your business secure.",
  cards: [
    {
      title: "Managed IT Support",
      description:
        "Proactive monitoring, 24/7 helpdesk assistance, and on-demand troubleshooting to keep your systems running smoothly and minimize downtime for uninterrupted operations.",
    },
    {
      title: "Cybersecurity Management",
      description:
        "Advanced threat detection, vulnerability assessments, firewall management, and compliance services to protect your data and networks from evolving cyber risks.",
    },
    {
      title: "Backup & Disaster Recovery",
      description:
        "Automated data backups, rapid recovery planning, and business continuity strategies to safeguard against data loss and ensure quick restoration after disruptions.",
    },

    {
      title: "Cloud Services",
      description:
        "Seamless cloud migration, infrastructure management, and optimization for platforms like AWS, Azure, or Google Cloud, enabling flexible scaling and cost efficiency.",
    },

  ],
};
