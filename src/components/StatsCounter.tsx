 import { useEffect, useState, useRef } from "react";
 import { motion, useInView } from "framer-motion";
 import { Briefcase, Calendar, Users, Award } from "lucide-react";
 
 interface StatItemProps {
   value: number;
   suffix: string;
   label: string;
   icon: React.ReactNode;
   delay: number;
 }
 
 const StatItem = ({ value, suffix, label, icon, delay }: StatItemProps) => {
   const [count, setCount] = useState(0);
   const ref = useRef<HTMLDivElement>(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   useEffect(() => {
     if (isInView) {
       const duration = 2000;
       const steps = 60;
       const increment = value / steps;
       let current = 0;
       
       const timer = setTimeout(() => {
         const interval = setInterval(() => {
           current += increment;
           if (current >= value) {
             setCount(value);
             clearInterval(interval);
           } else {
             setCount(Math.floor(current));
           }
         }, duration / steps);
         
         return () => clearInterval(interval);
       }, delay);
       
       return () => clearTimeout(timer);
     }
   }, [isInView, value, delay]);
 
   return (
     <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 20 }}
       animate={isInView ? { opacity: 1, y: 0 } : {}}
       transition={{ duration: 0.5, delay: delay / 1000 }}
       className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-mtechGray-100 hover:shadow-xl transition-shadow duration-300"
     >
       <div className="w-14 h-14 flex items-center justify-center bg-mtechOrange/10 text-mtechOrange rounded-full mb-4">
         {icon}
       </div>
       <div className="text-4xl md:text-5xl font-bold text-mtechNavy mb-2">
         {count}{suffix}
       </div>
       <div className="text-mtechGray-600 font-medium text-center">{label}</div>
     </motion.div>
   );
 };
 
 const StatsCounter = () => {
   const stats = [
     { value: 20, suffix: "+", label: "Projects Completed", icon: <Briefcase className="h-7 w-7" />, delay: 0 },
     { value: 4, suffix: "+", label: "Years Experience", icon: <Calendar className="h-7 w-7" />, delay: 100 },
     { value: 10, suffix: "+", label: "Happy Clients", icon: <Users className="h-7 w-7" />, delay: 200 },
     { value: 100, suffix: "%", label: "Client Satisfaction", icon: <Award className="h-7 w-7" />, delay: 300 },
   ];
 
   return (
     <section className="py-16 bg-gradient-to-b from-white to-mtechGray-50">
       <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
         <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-mtechNavy mb-4">
             Our Track Record
           </h2>
           <p className="text-xl text-mtechGray-600 max-w-2xl mx-auto">
             Numbers that reflect our commitment to excellence and client success.
           </p>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
           {stats.map((stat) => (
             <StatItem key={stat.label} {...stat} />
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default StatsCounter;