
import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "Moya Russell Portfolio",
    description: "A professional portfolio website showcasing web development projects, skills, and services with a clean, modern design.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://moyarussell.com/",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Web Development",
    codeSnippet: `// Responsive navigation toggle\nconst navToggle = document.querySelector('.nav-toggle');\nconst navLinks = document.querySelector('.nav-links');\n\nnavToggle.addEventListener('click', () => {\n  navLinks.classList.toggle('show-links');\n});`
  },
  {
    id: 2,
    title: "OVB Hotel Website",
    description: "A modern hotel website featuring room booking capabilities, amenities showcase, and responsive design for optimal user experience.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://ovbhotel.com/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    category: "Web Development",
    codeSnippet: `// Room availability checker\nfunction checkAvailability(roomType, startDate, endDate) {\n  return fetch('/api/availability', {\n    method: 'POST',\n    body: JSON.stringify({ roomType, startDate, endDate }),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  })\n  .then(response => response.json());\n}`
  },
  {
    id: 3,
    title: "WeShip Express Jamaica",
    description: "A shipping service website for Jamaica with tracking features, shipping calculator, and customer account management system.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://weshipexpressja.com/",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    category: "Web Development",
    codeSnippet: `// Shipping rate calculator\nconst calculateShipping = (weight, destination) => {\n  const baseRate = 10.50;\n  const weightFactor = weight * 0.75;\n  const destinationFee = destinationRates[destination] || 5;\n  \n  return baseRate + weightFactor + destinationFee;\n};`
  },
  {
    id: 4,
    title: "Cool Market",
    description: "End-to-end testing of an e-commerce platform, focusing on user journeys, payment processing, and inventory management.",
    image: "/lovable-uploads/56514a50-ca63-4804-8a85-dbebacde1da4.png",
    projectUrl: "https://coolmarket.com/",
    technologies: ["TestNG", "Selenium", "JUnit", "Appium"],
    category: "Software Testing"
  },
  {
    id: 5,
    title: "Headshots by AI",
    description: "Quality assurance testing for an AI-powered headshot generation platform, ensuring image quality, processing speed, and user experience.",
    image: "/lovable-uploads/8f1ba9cb-1ce3-4561-b6fc-45fc106b02f6.png",
    projectUrl: "https://headshotsbyai.com/",
    technologies: ["Cypress", "Mocha", "Chai", "API Testing"],
    category: "Software Testing"
  },
  {
    id: 6,
    title: "Bamboo Blu Jamaica",
    description: "Performance and usability testing for a resort booking website, focusing on mobile responsiveness and payment processing security.",
    image: "/lovable-uploads/e4a79ef3-4d64-4f9b-a018-34fd03f10889.png",
    projectUrl: "https://bambooblujamaica.com/",
    technologies: ["JMeter", "Lighthouse", "BrowserStack", "OWASP ZAP"],
    category: "Software Testing"
  },
  {
    id: 7,
    title: "Cool Cash Platform",
    description: "Security and regulatory compliance testing for a financial services platform operating across multiple countries.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b2d80b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://www.coolcash.com/",
    technologies: ["Postman", "SonarQube", "Burp Suite", "Selenium"],
    category: "Software Testing"
  },
  {
    id: 8,
    title: "Cool Cash DR",
    description: "Localization and integration testing for a financial platform adapted for the Dominican Republic market.",
    image: "/lovable-uploads/d8a9eaf8-e668-413f-8a76-b4b51da85437.png",
    projectUrl: "https://www.coolcashdr.com/",
    technologies: ["TestComplete", "Jenkins", "RestAssured", "Applitools"],
    category: "Software Testing"
  },
  {
    id: 9,
    title: "Cool Cash Canada",
    description: "Automated regression testing for a Canadian financial services platform with focus on bilingual support and compliance with Canadian regulations.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://www.coolcash.ca/",
    technologies: ["Robot Framework", "Docker", "AWS Device Farm", "TestRail"],
    category: "Software Testing"
  },
  {
    id: 10,
    title: "Cool Loans",
    description: "Performance and security testing for a loan application processing system, with focus on data encryption and application response time.",
    image: "/lovable-uploads/b45f36b8-3bc5-40d0-8a12-78c624dc177f.png",
    projectUrl: "https://coolloans.com/",
    technologies: ["k6", "Gatling", "Charles Proxy", "Playwright"],
    category: "Software Testing"
  }
];

export const categories = [
  "All",
  "Web Development",
  "Software Testing",
  "Web Hosting",
];
