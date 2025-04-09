
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  website?: string; // Honeypot field
}

const EMAILJS_SERVICE_ID = "service_7bdry77"; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_v54qvg9"; // Your EmailJS template ID
const EMAILJS_USER_ID = "ug9V9cuZF2sIN3Otp"; // Your EmailJS user ID

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    // Bot detection - if honeypot field is filled, silently reject the submission
    if (data.website) {
      console.log("Bot submission detected and blocked");
      // Simulate success but don't actually send the email
      setTimeout(() => {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you soon!",
        });
        reset();
        setIsSubmitting(false);
      }, 1000);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Add a timestamp to track when the form was submitted
      const submissionTime = new Date().getTime();
      const pageLoadTime = window.performance ? 
        window.performance.timing.navigationStart : 
        Date.now() - 60000; // Fallback if performance API not available
      
      // If form was submitted too quickly (less than 3 seconds), likely a bot
      if (submissionTime - pageLoadTime < 3000) {
        console.log("Suspiciously fast submission detected - potential bot");
        throw new Error("Submission rejected");
      }
      
      // Ensure all template parameter keys exactly match what's in the EmailJS template
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        phone_number: data.phone, // This must match the template's {{phone_number}}
        message: data.message,
        name: data.name, // Adding this since it's used in the template
        time: new Date().toLocaleString() // Adding time since it appears in the template
      };
      
      console.log("Sending email with params:", templateParams);
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      console.log("Email sent successfully:", response);
      
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-mtechGray-800">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("name", { required: "Name is required" })}
          className={errors.name ? "border-red-500" : ""}
          autoComplete="name"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-mtechGray-800">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className={errors.email ? "border-red-500" : ""}
          autoComplete="email"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-mtechGray-800">
          Phone Number <span className="text-red-500">*</span>
        </Label>
        <Input
          id="phone"
          placeholder="876-123-4567"
          {...register("phone", { required: "Phone number is required" })}
          className={errors.phone ? "border-red-500" : ""}
          autoComplete="tel"
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Honeypot field - hidden from users but bots will fill it out */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website" className="text-mtechGray-800">
          Website
        </Label>
        <Input
          id="website"
          placeholder="Please leave this blank"
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-mtechGray-800">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="How can we help you?"
          {...register("message", { required: "Message is required" })}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full bg-mtechBlue-600 hover:bg-mtechOrange"
        disabled={isSubmitting}
        data-action="submit-contact-form"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
