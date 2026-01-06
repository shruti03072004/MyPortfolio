import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const personalData = {
  name: "Shruti Dakhode",
  initials: "SD",
  url: "https://www.benrogers.dev/",
  location: "Brisbane, Australia",
  locationLink: "https://www.google.com/maps/place/brisbane",
  description:
    "Java Full-Stack Developer. I build high-performance web applications with Spring Boot, React, and clean, scalable architectures.",
  summary:
    "**My journey started in India**, where my fascination with technology began early. While pursuing my degree in **Electronics & Communication** Engineering, I discovered the world of **software**—and it quickly became my **passion**.Since then, I’ve built **full-stack applications** using **Java, Spring Boot, React, and modern UI frameworks**. Projects like **Infinite StudioX and ClimatePilot** helped me sharpen my skills in **architecture, performance optimization**, and real-world **problem solving**. I’m driven by **clarity, creativity**, and the desire to build **solutions** that genuinely make an impact.",
  avatarUrl: "/me.png",
} as const;

export const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Java", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "Spring Security", icon: "logos:spring" },
      { name: "JWT", icon: "material-symbols:token" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "REST APIs", icon: "lucide:cloud-cog" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "SQL", icon: "ph:file-sql" },
      { name: "Microservices", icon: "carbon:microservices-1" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Single Page Applications", icon: "material-symbols:web" },
      { name: "Responsive Design", icon: "material-symbols:responsive-layout" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "SQL", icon: "ph:file-sql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      // { name: "PostgreSQL", icon: "logos:postgresql" },
      // { name: "Redis", icon: "logos:redis" }
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Database design", icon: "material-symbols:database" },
      { name: "Event‑driven architecture", icon: "lucide:share-2" },
      { name: "Agile", icon: "lucide:repeat" },
      { name: "Scrum", icon: "material-symbols:group" },
      {
        name: "OOP",
        icon: "material-symbols:code",
      },
      {
        name: "TDD",
        icon: "lucide:flask-conical",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "IntelliJ IDEA", icon: "logos:intellij-idea" },
      { name: "Eclipse", icon: "logos:eclipse-icon" },

      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Git", icon: "logos:git-icon" },

      { name: "Netlify", icon: "logos:netlify" },
      { name: "Postman", icon: "logos:postman-icon" },

      // Java full-stack relevant tools
      // { name: "Maven", icon: "logos:maven" },
      // { name: "Gradle", icon: "logos:gradle" },
      // { name: "Docker", icon: "logos:docker-icon" },
      // { name: "Kubernetes", icon: "logos:kubernetes" },
      // { name: "Jenkins", icon: "logos:jenkins" },
      // { name: "Figma", icon: "logos:figma" },
    ],
  },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  {
    href: "https://drive.google.com/file/d/19JxSAGt2f9txytzDEQ31cLZ_r8ZNkApK/view?usp=sharing",
    icon: NotebookIcon,
    label: "Resume",
  },
] as const;

export const contactData = {
  email: "hello@example.com",
  tel: "+123456789",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/shruti03072004",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shruti-dakhode-66aaa3357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: "Email",
      url: "/#contact",
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "Humanforce",
    href: "https://humanforce.com",
    location: "Brisbane",
    title: "Software Engineer",
    logoUrl: "/humanforce.png",
    start: "Jan 2024",
    end: "Present",
    description: [
      "Worked on web applications serving 600,000+ users with a modern tech stack including a Laravel backend (PHP) with GraphQL endpoints, a React SPA frontend (TypeScript), event‑driven Node.js (TypeScript) microservices, and also AWS Lambda backends (TypeScript).",
      "Enhanced the email log in intelliHR by integrating AWS SES and a microservice to track bounce, complaint, and delivery status, allowing users to retry failed messages.",
      "Built user management features for a multi-tenant infrastructure management system, enabling administrators to create users, assign companies, and define permissions (TypeScript, Angular, Lambda, API Gateway, DynamoDB).",
      "Developed backend APIs for the intelliHR‑Thrive mobile app integration, streamlining in‑app form completion and boosting task completion rates.",
      "Automated pruning of large database tables to reduce data growth and lower long‑term storage costs.",
      "Setup Sumo Logic in Node.js and .NET lambdas to standardise logging format across codebases.",
      "Improved job data download performance by implementing a streaming mechanism, making downloads significantly faster and more memory-efficient.",
      "Implemented comprehensive testing across the stack using Playwright, PHPUnit, Jest and Cypress.",
      "Migrated legacy REST endpoints to GraphQL.",
      "Led smooth PHP and Laravel version upgrades.",
      "Setup ESLint and Prettier in CI/CD pipelines to enforce coding standards and consistent code quality across teams.",
    ],
  },
  {
    company: "The University of Queensland",
    href: "https://uq.edu.au",
    location: "Brisbane",
    title: "Software Engineer",
    logoUrl: "/uq.png",
    start: "Nov 2022",
    end: "Jan 2024",
    description: [
      "Worked on various web applications for the university such as CAHP (Casual Academic Hire and Payment), UQ Maps, Programs and Courses, my.UQ.",
      "Developed a system for staff to validate their timesheets in CAHP.",
      "Developed an events feed microservice using Node.js, AWS Lambda, Docker, and DynamoDB.",
      "Worked on an automated pipeline for UQ Donations using AWS, CDK, Code Pipeline and Docker.",
      "Developed React components for the UQ design system to reuse across different applications.",
      "Used many different technologies including TypeScript, React, Node.js, PHP, Symfony, MySQL, AWS, DynamoDB, Lambda, Jenkins and Oracle.",
      "Developed an automated access control system to ensure students completed the mandatory UQ Respect module before accessing Blackboard, using Node.js, TypeScript, Express.js, MySQL, Jenkins, and the Blackboard API to grant or revoke access based on completion status.",
    ],
  },
  {
    company: "YouPay",
    href: "https://youpay.me",
    badges: [],
    location: "Brisbane",
    title: "Software Developer",
    logoUrl: "/youpay.png",
    start: "Feb 2022",
    end: "Nov 2022",
    description: [
      "Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs.",
      "Developed an email notification system for merchants to subscribe to weekly/monthly summaries of YouPay carts created, paid and cancelled on their store. The emails would also compare the current week/month with the previous.",
      "Worked on signup and login flows using Vue.js and Laravel.",
      "Built a one-click feature to automatically generate a branded 'About YouPay' page on merchants' Shopify stores, streamlining onboarding and boosting merchant adoption.",
      "Maintenance of Laravel Nova merchant dashboard.",
      "Integrated YouPay into dozens of Shopify stores.",
      "Reviewed code for colleagues.",
    ],
  },
  {
    company: "M3 Digital",
    href: "https://m3digital.com.au",
    location: "Brisbane",
    title: "Web Developer",
    logoUrl: "/m3digital.jpg",
    start: "Sep 2021",
    end: "Feb 2022",
    description: [
      "Worked on variety of Shopify stores such as FitazFK, Rider Collective, Masseuse Massage, Francesca Jewellery and Salty Captain.",
      "Developed custom front end features and sections using HTML, CSS, SCSS, JavaScript, and Liquid.",
      "Developed high quality landing pages from scratch with modular CSS and JS practices for maintainability.",
      "Integrated many third party plugins within existing stores, e.g. Calendly for customer bookings and Preezie for product recommendations.",
    ],
  },
] as const;

export const educationData = [
  {
    school: "Walchand Institute of Technology, Solapur",
    href: "https://witsolapur.org/",
    degree: "Bachelor of Technology (B.Tech)",
    logoUrl: "logo.png",
    start: "Nov 2022",
    end: "May 2026",
    description: [
      "GPA 8.25/10",
      "Major in electronics and telecommunication",
      "Minor in Artificial Intelligence and Machine Learning",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "RideBee",
    href: "http://ridebee-angular-app.s3-website.ap-south-1.amazonaws.com/",
    dates: "2025",
    active: true,
    description:
      "A full-stack car rental platform with Angular and Spring Boot, enabling customers to browse cars, search listings, and book rentals with separate admin and customer dashboards secured by JWT authentication.",
    detailedDescription: `RideBee is a comprehensive car rental management system built using Spring Boot and Angular. The platform provides secure authentication using Spring Security + JWT, efficient data handling with Spring Data JPA, and a MySQL database. The frontend is developed with Angular 17, ng-zorro-antd, and TailwindCSS, offering a smooth and modern user experience. Developed RESTful APIs for user authentication, car listing, and booking management with MySQL database schema design optimized for efficient data retrieval.`,
    keyFeatures: [
      "Secure Login using Spring Security & JWT",
      "Separate admin and customer dashboards with role-based access control",
      "Car Management – add, update, delete, and view cars",
      "Car Search & Filters for quick availability checks",
      "Booking System with real-time validation and approval workflows",
      "REST APIs for seamless frontend–backend communication",
      "MySQL Database with clean JPA-based data handling and optimized schema",
      "Comprehensive API testing using Postman and unit testing with JUnit",
    ],
    technologies: [
      { name: "Java 17", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "Spring Security", icon: "logos:spring" },
      { name: "JWT", icon: "material-symbols:token" },
      { name: "Spring Data JPA", icon: "logos:spring" },
      { name: "Angular 17", icon: "logos:angular-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
      { name: "ng-zorro-antd", icon: "logos:ant-design" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "Maven", icon: "logos:apache-maven" },
      { name: "Postman", icon: "logos:postman-icon" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shruti03072004/Ridebee.git",
        icon: "github",
      },
      {
        type: "Demo",
        href: "http://ridebee-angular-app.s3-website.ap-south-1.amazonaws.com/",
        icon: "globe",
      },
    ],
    image: "/Ridebee.jpg",
    images: ["/Ridebee.jpg"],
    video: "",
  },
  {
    title: "HairAndBeauty Salon",
    href: "https://github.com/shruti03072004/Hairandbeauty",
    dates: "2024",
    active: true,
    description:
      "A comprehensive salon booking platform with secure Razorpay payment integration, admin authentication, service management dashboard, and MySQL data persistence using REST APIs.",
    detailedDescription: `Developed a full-featured salon booking system with React.js, Java, and Spring Boot. The platform includes secure Razorpay payment integration for seamless transactions, admin authentication for service management, and MySQL data persistence. Implemented automated email confirmation system for customers and salon owners, enabling real-time booking notifications and customer communication. Designed CSV-based customer data management system for marketing campaigns and festival promotions, enabling salon owners to target repeat bookings and drive customer retention strategies.`,
    keyFeatures: [
      "Secure Razorpay payment integration for seamless transactions",
      "Admin authentication and service management dashboard",
      "MySQL data persistence with REST APIs",
      "Automated email confirmation system for bookings",
      "Real-time booking notifications for customers and owners",
      "CSV-based customer data management for marketing",
      "Festival promotion tools and customer retention strategies",
      "User-friendly interface for browsing and booking services",
    ],
    technologies: [
      { name: "React.js", icon: "logos:react" },
      { name: "Java", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "Razorpay", icon: "material-symbols:payment" },
      { name: "REST API", icon: "lucide:cloud-cog" },
      { name: "Email Integration", icon: "material-symbols:mail" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shruti03072004/Hairandbeauty",
        icon: "github",
      },
    ],
    image: "/greencardude.png",
    images: ["/greencardude.png"],
    video: "",
  },
  {
    title: "GreenCart E-Commerce",
    href: "https://github.com/shruti03072004/GreenCart",
    dates: "2024",
    active: true,
    description:
      "Engineered full-stack e-commerce platform with user authentication, product catalog management, shopping cart functionality, and order processing using RESTful APIs and MongoDB.",
    detailedDescription: `A complete e-commerce solution built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform features user authentication, comprehensive product catalog management, shopping cart functionality, and complete order processing. Implemented responsive UI with React featuring product search filters, category navigation, and user account management with order history tracking for enhanced shopping experience. Optimized MongoDB queries and implemented caching strategies to achieve faster data retrieval and improved application performance for concurrent users.`,
    keyFeatures: [
      "User authentication and secure account management",
      "Product catalog with advanced search filters",
      "Category-based navigation system",
      "Shopping cart functionality with real-time updates",
      "Complete order processing and checkout system",
      "Order history tracking for users",
      "Optimized MongoDB queries with caching for performance",
      "RESTful APIs for scalable data operations",
      "Responsive UI for seamless shopping experience",
    ],
    technologies: [
      { name: "React.js", icon: "logos:react" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express.js", icon: "logos:express" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "REST API", icon: "lucide:cloud-cog" },
      { name: "JavaScript", icon: "logos:javascript" },
    ],
    links: [
      {
        type: "Github",
        href: "",
        icon: "github",
      },
    ],
    image: "/green2.png",
    images: ["/green2.png"],
    video: "",
  },
  {
    title: "ScaleForm Studio",
    href: "https://github.com/shruti03072004/Agency-website-",
    dates: "2025",
    active: true,
    description:
      "A modern agency website featuring multiple sections including Home, About, Services, Projects, Pricing, Team, Contact, and a Demo Booking form with Formspree integration for real-time email delivery.",
    detailedDescription: `A fully responsive modern agency website designed with a clean UI and smooth user experience. Built using mobile-first principles with React.js and TailwindCSS, ensuring flawless performance across devices. The site includes essential pages such as Home, About, Services, Projects, Pricing, Team, Contact, and a functional Demo Booking form integrated with Formspree for real-time email delivery without a custom backend. Optimized for speed, accessibility, and SEO to enhance online visibility. Deployed on Vercel for fast global delivery with continuous updates and version control managed through GitHub.`,
    keyFeatures: [
      "Multi-page Agency Website with essential sections",
      "Demo Booking Form integrated via Formspree for real-time email",
      "Mobile-First Responsive Design optimized for all devices",
      "High Performance with optimized assets and clean architecture",
      "SEO-Friendly Structure with proper meta tags and semantic HTML",
      "Live Deployment on Vercel with CI/CD pipeline",
      "Version Control through GitHub for collaboration",
      "Clean, modern UI with smooth user experience",
    ],
    technologies: [
      { name: "React.js", icon: "logos:react" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Formspree", icon: "material-symbols:mail" },
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shruti03072004/Agency-website-.git",
        icon: "github",
      },
      {
        type: "Demo",
        href: "https://scaleform-studio.vercel.app/",
        icon: "globe",
      },
    ],
    image: "/Agency.png",
    images: ["/Agency.png"],
    video: "",
  },
  {
    title: "ClimatePilot",
    href: "https://climatepilot.netlify.app/",
    dates: "2023",
    active: true,
    description:
      "A JavaScript-based weather application providing real-time weather updates using OpenWeather API, displaying temperature, humidity, wind speed, and dynamic weather icons with clean, responsive interface.",
    detailedDescription: `ClimatePilot is a lightweight, real-time weather application that fetches live weather data using the OpenWeather API. Built with vanilla JavaScript, HTML, and CSS, the app allows users to search any city and instantly view key details such as temperature, humidity, wind speed, and visual weather icons. Features city search functionality with error handling for invalid inputs, loading states for better UX, and optimized API integration. The application showcases skills in API consumption, responsive UI design, and frontend development with a focus on performance and user experience.`,
    keyFeatures: [
      "Real-time weather data using OpenWeather API",
      "City-based weather search with instant results",
      "Display of temperature, humidity, and wind speed",
      "Dynamic weather icons for better visual understanding",
      "Clean and responsive user interface",
      "Fast API integration with optimized JavaScript logic",
      "Error handling for invalid or unknown city inputs",
      "Loading states for improved user experience",
    ],
    technologies: [
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "OpenWeather API", icon: "material-symbols:cloud" },
      { name: "REST API", icon: "lucide:cloud-cog" },
      { name: "Netlify", icon: "logos:netlify" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shruti03072004/ClimatePilot-Weather-Project.git",
        icon: "github",
      },
      {
        type: "Demo",
        href: "https://climatepilot.netlify.app/",
        icon: "globe",
      },
    ],
    image: "/weather.png",
    images: ["/weather.png"],
    video: "",
  },
] as const;
