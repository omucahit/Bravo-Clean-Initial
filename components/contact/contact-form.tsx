"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Replace these with your EmailJS details
      const result = await emailjs.send(
        'service_k15xnk9', // e.g., 'service_xxxxxxx'
        'template_p6ox874', // e.g., 'template_xxxxxxx'
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
          to_email: 'contact@bravo-clean.com',
        },
        '-MWOfhENzMAZQEJuA' // e.g., 'user_xxxxxxxxxxxxxxxxxx'
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className="w-full"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          className="w-full"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Phone Number"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9-+()]*$/,
              message: "Invalid phone number"
            }
          })}
          className="w-full"
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Textarea
          placeholder="Your Message"
          {...register("message", { required: "Message is required" })}
          className="w-full min-h-[150px]"
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
