
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProjectCard from "@/components/ProjectCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample project data
const projects = [
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
    category: "Software Testing",
    codeSnippet: `// Test case for checkout process\n@Test\npublic void testCheckoutProcess() {\n  // Add item to cart\n  homePage.searchProduct("laptop");\n  productPage.addToCart();\n  \n  // Proceed to checkout\n  cartPage.proceedToCheckout();\n  \n  // Fill shipping details\n  checkoutPage.fillShippingDetails(customerData);\n  \n  // Verify order confirmation\n  assertTrue(checkoutPage.isOrderConfirmed());\n}`
  },
  {
    id: 5,
    title: "Headshots by AI",
    description: "Quality assurance testing for an AI-powered headshot generation platform, ensuring image quality, processing speed, and user experience.",
    image: "https://images.unsplash.com/photo-1525770041010-2a1233dd8152?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://headshotsbyai.com/",
    technologies: ["Cypress", "Mocha", "Chai", "API Testing"],
    category: "Software Testing",
    codeSnippet: `// Test image generation API\ndescribe('AI Image Generation', () => {\n  it('should generate headshot within acceptable time', async () => {\n    const startTime = Date.now();\n    const response = await imageAPI.generateHeadshot(testImage);\n    const endTime = Date.now();\n    \n    expect(response.status).to.equal(200);\n    expect(response.body.imageUrl).to.exist;\n    expect(endTime - startTime).to.be.lessThan(maxProcessingTime);\n  });\n});`
  },
  {
    id: 6,
    title: "Bamboo Blu Jamaica",
    description: "Performance and usability testing for a resort booking website, focusing on mobile responsiveness and payment processing security.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://bambooblujamaica.com/",
    technologies: ["JMeter", "Lighthouse", "BrowserStack", "OWASP ZAP"],
    category: "Software Testing",
    codeSnippet: `// Performance test for booking page\ntest('Booking page loads in acceptable time on mobile', async () => {\n  const mobile = devices['iPhone 12'];\n  await page.emulate(mobile);\n  \n  const startTime = Date.now();\n  await page.goto('/booking');\n  await page.waitForSelector('#booking-form');\n  const loadTime = Date.now() - startTime;\n  \n  expect(loadTime).toBeLessThan(3000);\n});`
  },
  {
    id: 7,
    title: "Cool Cash Platform",
    description: "Security and regulatory compliance testing for a financial services platform operating across multiple countries.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b2d80b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://www.coolcash.com/",
    technologies: ["Postman", "SonarQube", "Burp Suite", "Selenium"],
    category: "Software Testing",
    codeSnippet: `// Security test for transaction API\ndescribe('Transaction Security', () => {\n  test('should reject unauthorized access attempts', async () => {\n    const response = await api.post('/transactions/create', validPayload, invalidToken);\n    expect(response.status).toBe(401);\n    expect(response.body.error).toContain('unauthorized');\n    \n    // Verify no transaction was created\n    const transactions = await db.getTransactions(userId);\n    expect(transactions.length).toBe(initialTransactionCount);\n  });\n});`
  },
  {
    id: 8,
    title: "Cool Cash DR",
    description: "Localization and integration testing for a financial platform adapted for the Dominican Republic market.",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://www.coolcashdr.com/",
    technologies: ["TestComplete", "Jenkins", "RestAssured", "Applitools"],
    category: "Software Testing",
    codeSnippet: `// Localization test for DR market\ntest('Currency formatting follows DR standards', () => {\n  // Set location to Dominican Republic\n  page.setGeolocation({latitude: 18.735693, longitude: -70.162651});\n  page.reload();\n  \n  const amount = await page.$eval('.transaction-amount', el => el.textContent);\n  expect(amount).toMatch(/^RD\\$\\s\\d{1,3}(,\\d{3})*\\.\\d{2}$/);\n});`
  },
  {
    id: 9,
    title: "Cool Cash Canada",
    description: "Automated regression testing for a Canadian financial services platform with focus on bilingual support and compliance with Canadian regulations.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://www.coolcash.ca/",
    technologies: ["Robot Framework", "Docker", "AWS Device Farm", "TestRail"],
    category: "Software Testing",
    codeSnippet: `// Bilingual support test\ndescribe('Language Switching', () => {\n  it('should correctly display content in French', () => {\n    cy.visit('/');\n    cy.get('[data-test="language-toggle"]').click();\n    cy.get('[data-test="select-french"]').click();\n    \n    // Verify key elements are in French\n    cy.get('h1.hero-title').should('contain', 'Services Financiers');\n    cy.get('button.cta-button').should('contain', 'Commencer');\n  });\n});`
  },
  {
    id: 10,
    title: "Cool Loans",
    description: "Performance and security testing for a loan application processing system, with focus on data encryption and application response time.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://coolloans.com/",
    technologies: ["k6", "Gatling", "Charles Proxy", "Playwright"],
    category: "Software Testing",
    codeSnippet: `// Load test for loan application submission\nimport http from 'k6/http';\nimport { check, sleep } from 'k6';\n\nexport default function() {\n  const payload = JSON.stringify({\n    name: 'Test User',\n    income: 75000,\n    loanAmount: 25000,\n    term: 60\n  });\n  \n  const params = {\n    headers: { 'Content-Type': 'application/json' }\n  };\n  \n  const res = http.post('https://api.coolloans.com/applications', payload, params);\n  \n  check(res, {\n    'status is 200': (r) => r.status === 200,\n    'application ID returned': (r) => JSON.parse(r.body).applicationId !== undefined,\n    'response time < 1s': (r) => r.timings.duration < 1000\n  });\n  \n  sleep(1);\n}`
  }
];

const categories = [
  "All",
  "Web Development",
  "Software Testing",
  "Web Hosting",
];

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mtechBlue-800 to-mtechBlue-950 text-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl opacity-90">
              Showcasing our latest web development projects and software testing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-10 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mtechGray-500" size={18} />
              <Input 
                type="search" 
                placeholder="Search projects..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-mtechBlue-600 hover:bg-mtechBlue-700" 
                    : "border-mtechGray-300 text-mtechGray-700"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  projectUrl={project.projectUrl}
                  codeSnippet={project.codeSnippet}
                  technologies={project.technologies}
                  category={project.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-mtechGray-900 mb-4">No projects found</h3>
              <p className="text-mtechGray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Pagination */}
      <section className="pb-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
          <div className="bg-mtechBlue-700 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-mtechGray-100 mb-6 max-w-xl mx-auto">
              Let's discuss your project requirements and how our web development and software testing expertise can help bring your vision to life.
            </p>
            <Button className="bg-white text-mtechBlue-700 hover:bg-mtechGray-100" asChild>
              <a href="/quote">Get a Free Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
