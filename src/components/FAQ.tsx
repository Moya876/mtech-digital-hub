import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does M Tech Corp offer?",
    answer:
      "We offer Web Development (custom websites and web applications), Web Hosting (reliable and secure hosting solutions), Software Testing (comprehensive QA services), Graphic Design (logos, branding, marketing materials), and Social Media Content (Instagram posts and visual content for your business).",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Website costs vary based on complexity and requirements. A standard website starts at $350 USD, while custom web applications range from $600 to $2,000. We provide free quotes tailored to your specific needs—just reach out!",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Timelines depend on project scope. A basic website typically takes 1-2 weeks, while more complex projects with custom features can take 4-8 weeks. We'll provide a clear timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes! We offer hosting packages that include regular updates, security monitoring, backups, and technical support. We're here to ensure your website stays secure and performs optimally.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our process includes: 1) Discovery & Planning - understanding your goals, 2) Design & Prototyping - creating mockups for approval, 3) Development - building your solution, 4) Testing & QA - ensuring everything works perfectly, and 5) Launch & Support - deploying and providing ongoing assistance.",
  },
  {
    question: "Can you help with an existing website?",
    answer:
      "Absolutely! We can redesign, update, or enhance your existing website. We also offer software testing services to identify and fix issues with your current applications.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mtechNavy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-mtechGray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are some common questions about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-mtechNavy hover:text-mtechOrange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-mtechGray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
