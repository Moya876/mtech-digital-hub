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
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters - make sure the key names match your EmailJS template variables
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        phone_number: data.phone || "Not provided", // Changed from "phone" to "phone_number"
        message: data.message
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
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-mtechGray-800">
          Phone Number
        </Label>
        <Input
          id="phone"
          placeholder="876-123-4567"
          {...register("phone")}
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
