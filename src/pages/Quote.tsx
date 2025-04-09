
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ArrowLeft, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from 'emailjs-com';

const EMAILJS_SERVICE_ID = "service_7bdry77"; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_quote_request"; // Your Quote-specific EmailJS template ID
const EMAILJS_USER_ID = "ug9V9cuZF2sIN3Otp"; // Your EmailJS user ID

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const Quote = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Ensure all template parameter keys exactly match what's in the EmailJS template
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        phone_number: data.phone,
        company_name: data.company || 'Not provided',
        project_type: data.projectType,
        message: data.message,
        name: data.name,
        time: new Date().toLocaleString()
      };
      
      console.log("Sending quote request via email:", templateParams);
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      console.log("Quote request email sent successfully:", response);
      
      toast({
        title: "Quote Request Submitted",
        description: "Thank you! We'll get back to you within 24 hours.",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending quote request:", error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your quote request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mtechBlue-800 to-mtechBlue-950 text-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Button 
              variant="ghost" 
              className="bg-white/10 hover:bg-white/20 text-white mb-6"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Free Quote</h1>
            <p className="text-xl opacity-90">
              Tell us about your project and we'll provide you with a competitive quote
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-mtechGray-100 shadow-sm p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-mtechOrange/10 flex items-center justify-center text-mtechOrange">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-mtechGray-900">Request a Quote</h2>
                  <p className="text-mtechGray-600">We'll get back to you within 24 hours</p>
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name*</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address*</FormLabel>
                          <FormControl>
                            <Input placeholder="johndoe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number*</FormLabel>
                          <FormControl>
                            <Input placeholder="(876) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Ltd." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type*</FormLabel>
                        <FormControl>
                          <select 
                            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...field}
                          >
                            <option value="">Select a project type</option>
                            <option value="web-development">Web Development</option>
                            <option value="web-hosting">Web Hosting</option>
                            <option value="software-testing">Software Testing</option>
                            <option value="other">Other (Specify in Message)</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details*</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5}
                            placeholder="Please provide details about your project requirements..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="bg-mtechOrange hover:bg-mtechOrange-dark w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Submit Quote Request <Check className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-mtechGray-900 mb-4">Why Choose M Tech Corp</h2>
            <p className="text-mtechGray-700">
              We pride ourselves on delivering high-quality services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-mtechGray-100">
              <div className="h-12 w-12 rounded-full bg-mtechOrange/10 flex items-center justify-center text-mtechOrange mb-4 mx-auto">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold text-mtechGray-900 mb-3 text-center">Experienced Team</h3>
              <p className="text-mtechGray-700 text-center">
                Our skilled professionals bring years of expertise to every project
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-mtechGray-100">
              <div className="h-12 w-12 rounded-full bg-mtechOrange/10 flex items-center justify-center text-mtechOrange mb-4 mx-auto">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold text-mtechGray-900 mb-3 text-center">Competitive Pricing</h3>
              <p className="text-mtechGray-700 text-center">
                Quality services at reasonable rates with no hidden fees
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-mtechGray-100">
              <div className="h-12 w-12 rounded-full bg-mtechOrange/10 flex items-center justify-center text-mtechOrange mb-4 mx-auto">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold text-mtechGray-900 mb-3 text-center">Timely Delivery</h3>
              <p className="text-mtechGray-700 text-center">
                We respect deadlines and ensure your project is completed on time
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
