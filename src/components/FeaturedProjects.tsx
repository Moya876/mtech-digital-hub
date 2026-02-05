 import { Link } from "react-router-dom";
 import { motion } from "framer-motion";
 import { ArrowRight, ExternalLink } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent } from "@/components/ui/card";
 import { Badge } from "@/components/ui/badge";
 
 const featuredProjects = [
   {
     id: 13,
     title: "Kemmax Sales & Distribution",
     description: "A B2B supplies distribution platform with Supabase-powered inventory management.",
     image: "/lovable-uploads/kemmax-website.png",
     projectUrl: "https://kemmaxsales.com/",
     technologies: ["PHP", "Supabase", "Responsive Design"],
   },
   {
     id: 12,
     title: "Marjita Watches",
     description: "A luxury watch e-commerce website with Shopify backend integration.",
     image: "/lovable-uploads/marjita-website.png",
     projectUrl: "https://marjitawatches.com/",
     technologies: ["JavaScript", "PHP", "Shopify"],
   },
   {
     id: 2,
     title: "OVB Hotel",
     description: "A modern hotel website featuring room booking and amenities showcase.",
     image: "/lovable-uploads/9dc113e3-a1db-467a-adb2-c32e53bd7677.png",
     projectUrl: "https://ovbhotel.com/",
     technologies: ["WordPress", "PHP", "Custom Theme"],
   },
   {
     id: 11,
     title: "GoCool Jamaica",
     description: "End-to-end testing for a courier platform with delivery tracking.",
     image: "/lovable-uploads/db2319ca-a5e6-4713-851e-cfbf46a2f7e7.png",
     projectUrl: "https://portal.gocooljm.com/",
     technologies: ["Cypress", "Playwright", "Test Complete"],
   },
 ];
 
 const FeaturedProjects = () => {
   return (
     <section className="py-20 bg-mtechGray-50">
       <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
         <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-mtechNavy mb-4">
             Featured Projects
           </h2>
           <p className="text-xl text-mtechGray-600 max-w-2xl mx-auto">
             Take a look at some of our recent work that showcases our expertise and dedication.
           </p>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {featuredProjects.map((project, index) => (
             <motion.div
               key={project.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
             >
               <Card className="group overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-mtechGray-200">
                 <div className="relative overflow-hidden">
                   <img
                     src={project.image}
                     alt={project.title}
                     className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                     <a
                       href={project.projectUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-white text-mtechNavy p-2 rounded-full hover:bg-mtechOrange hover:text-white transition-colors"
                     >
                       <ExternalLink className="h-5 w-5" />
                     </a>
                   </div>
                 </div>
                 <CardContent className="p-6">
                   <h3 className="text-xl font-bold text-mtechNavy mb-2 group-hover:text-mtechOrange transition-colors">
                     {project.title}
                   </h3>
                   <p className="text-mtechGray-600 mb-4 line-clamp-2">
                     {project.description}
                   </p>
                   <div className="flex flex-wrap gap-2">
                     {project.technologies.slice(0, 3).map((tech) => (
                       <Badge
                         key={tech}
                         variant="secondary"
                         className="bg-mtechOrange/10 text-mtechOrange hover:bg-mtechOrange/20"
                       >
                         {tech}
                       </Badge>
                     ))}
                   </div>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
         </div>
 
         <div className="text-center mt-12">
           <Button
             variant="outline"
             className="border-mtechOrange text-mtechOrange hover:bg-mtechOrange/10"
             asChild
           >
             <Link to="/portfolio">
               View All Projects <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
           </Button>
         </div>
       </div>
     </section>
   );
 };
 
 export default FeaturedProjects;