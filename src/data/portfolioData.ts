
import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "Moya Russell Portfolio",
    description: "A professional portfolio website showcasing web development projects, skills, and services with a clean, modern design.",
    image: "/lovable-uploads/3f601281-4f55-443e-acfc-c4c7e94c7a19.png",
    projectUrl: "https://moyarussell.com/",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Responsive Design"],
    category: "Web Development",
    codeSnippet: `// Responsive navigation toggle\nconst navToggle = document.querySelector('.nav-toggle');\nconst navLinks = document.querySelector('.nav-links');\n\nnavToggle.addEventListener('click', () => {\n  navLinks.classList.toggle('show-links');\n});`
  },
  {
    id: 2,
    title: "OVB Hotel",
    description: "A modern hotel website featuring room booking capabilities, amenities showcase, and responsive design built with WordPress for optimal user experience.",
    image: "/lovable-uploads/9dc113e3-a1db-467a-adb2-c32e53bd7677.png",
    projectUrl: "https://ovbhotel.com/",
    technologies: ["WordPress", "Custom Theme", "PHP", "CSS", "JavaScript"],
    category: "Web Development",
    codeSnippet: `// Room availability checker in theme functions.php\nfunction check_room_availability($room_type, $start_date, $end_date) {\n  global $wpdb;\n  $table_name = $wpdb->prefix . 'bookings';\n  \n  $query = $wpdb->prepare(\n    "SELECT COUNT(*) FROM $table_name \n     WHERE room_type = %s \n     AND ((start_date <= %s AND end_date >= %s) \n     OR (start_date <= %s AND end_date >= %s) \n     OR (start_date >= %s AND end_date <= %s))",\n    $room_type, $end_date, $start_date, $start_date, $start_date, $start_date, $end_date\n  );\n  \n  return $wpdb->get_var($query) == 0;\n}`
  },
  {
    id: 3,
    title: "WeShip Express Jamaica",
    description: "A shipping service website for Jamaica with tracking features, shipping calculator, and customer account management system.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://weshipexpressja.com/",
    technologies: ["Bootstrap", "CSS", "HTML", "JavaScript", "MySQL"],
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
    title: "Cool Cash Jamaica",
    description: "Security and regulatory compliance testing for a financial services platform operating across multiple countries.",
    image: "/lovable-uploads/64e0150e-c83f-42c2-a422-24040dede508.png",
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
    image: "/lovable-uploads/bce7577a-38b5-43c4-89b4-a4cff9d08449.png",
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
  },
  {
    id: 11,
    title: "GoCool Jamaica",
    description: "End-to-end functionality testing for a courier and logistics service platform with island-wide delivery tracking and booking systems.",
    image: "/lovable-uploads/db2319ca-a5e6-4713-851e-cfbf46a2f7e7.png",
    projectUrl: "https://portal.gocooljm.com/",
    technologies: ["Cypress", "TestCafe", "Postman", "LoadRunner"],
    category: "Software Testing"
  }
];

export const categories = [
  "All",
  "Web Development",
  "Software Testing",
];
