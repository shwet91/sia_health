"use client";

import React, { useState } from "react";
import { Merriweather } from "next/font/google";
import { useForm, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import "../../styles/landingPage.css";
import { useRouter } from "next/navigation";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Define form validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email format" })
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^[0-9]{10,15}$/, {
      message: "Please enter a valid phone number (10-15 digits only)",
    }),
  message: z.string().optional(),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Initialize form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // Validate on blur (when user leaves field)
    reValidateMode: "onChange", // Re-validate on change after first validation
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("✅ Form validation passed! Submitted values:", values);

    setIsSubmitting(true);

    try {
      // Call the API to save data to database
      const response = await fetch("/api/ContactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Show success toast notification
        toast.success(
          <span className="text-[#FF4B00] font-semibold">
            Form submitted successfully!
          </span>,
          {
            description: (
              <span className="text-[#FF4B00]">
                We&apos;ll get back to you soon. Thank you for contacting us!
              </span>
            ),
            duration: 5000,
          }
        );

        // Reset form after successful submission
        form.reset();
      } else {
        // Handle error response
        console.error("Error:", data);
        toast.error("Submission failed", {
          description:
            data.message || "Failed to submit form. Please try again.",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error", {
        description: "Please check your connection and try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form errors
  const onError = (errors: FieldErrors<z.infer<typeof formSchema>>) => {
    console.log("❌ Form validation failed! Errors:", errors);
  };

  return (
    <section
      id="contact"
      className="w-full Helvetica bg-gray-1001 bg-white p-0 my-5 flex justify-center px-4 sm:px-0"
    >
      <div className="max-w-2xl w-full bg-[#FFF4EB] rounded-md overflow-hidden">
        {/* Form */}
        <div className="bg-[#1a1a1a]1 flex items-center justify-center px-6 py-4 lg:px-12">
          <div className="w-full max-w-[500px]">
            {/* Subtitle with line */}
            <p className="text-[#FF4B00] text-xs font-medium tracking-wider mb-1 uppercase flex items-center">
              <span className="inline-block w-8 h-0.5 bg-[#FF4B00] mr-2"></span>
              {/* Reservation */}
            </p>

            {/* Title */}
            <h2
              className={`text-[#130e2e] text-2xl lg:text-3xl font-bold mb-2 leading-tight ${merriweather.className}`}
            >
              Book A Free{" "}
              <span className="text-[#FF4B00]">Expert Consultation!</span>
            </h2>

            {/* Description */}
            <p className="text-[#130e2e] text-sm leading-relaxed mb-4">
              Expert care is only few details away. Just share this information
              and our experts will reach out to you.
            </p>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, onError)}
                className="flex flex-col gap-3"
              >
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                      <FormItem className="space-y-0">
                        <FormControl>
                          <input
                            {...field}
                            type="text"
                            placeholder="Your Name"
                            className={`w-full py-2.5 px-3 bg-white border rounded-md text-[#130e2e] text-sm outline-none focus:ring-1 transition-colors placeholder:text-[#9ca3af] ${
                              fieldState.error
                                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                                : "border-[#e6e6e6] focus:border-[#FF4B00] focus:ring-[#FFE7D8]"
                            }`}
                          />
                        </FormControl>
                        <div className="h-5 mt-1">
                          <FormMessage className="text-xs text-red-600" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <FormItem className="space-y-0">
                        <FormControl>
                          <input
                            {...field}
                            type="email"
                            placeholder="Your Email"
                            className={`w-full py-2.5 px-3 bg-white border rounded-md text-[#130e2e] text-sm outline-none focus:ring-1 transition-colors placeholder:text-[#9ca3af] ${
                              fieldState.error
                                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                                : "border-[#e6e6e6] focus:border-[#FF4B00] focus:ring-[#FFE7D8]"
                            }`}
                          />
                        </FormControl>
                        <div className="h-5 mt-1">
                          <FormMessage className="text-xs text-red-600" />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Row 2: Phone */}
                <div className="grid grid-cols-1 gap-3">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field, fieldState }) => (
                      <FormItem className="space-y-0">
                        <FormControl>
                          <input
                            {...field}
                            type="tel"
                            placeholder="Contact Number"
                            className={`w-full py-2.5 px-3 bg-white border rounded-md text-[#130e2e] text-sm outline-none focus:ring-1 transition-colors placeholder:text-[#9ca3af] ${
                              fieldState.error
                                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                                : "border-[#e6e6e6] focus:border-[#FF4B00] focus:ring-[#FFE7D8]"
                            }`}
                          />
                        </FormControl>
                        <div className="h-5 mt-1">
                          <FormMessage className="text-xs text-red-600" />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Row 3: Message */}
                <div className="grid grid-cols-1 gap-3">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-0">
                        <FormControl>
                          <textarea
                            {...field}
                            placeholder="Your Message"
                            rows={3}
                            className="w-full py-2.5 px-3 bg-white border border-[#e6e6e6] rounded-md text-[#130e2e] text-sm outline-none focus:border-[#FF4B00] focus:ring-1 focus:ring-[#FFE7D8] transition-colors placeholder:text-[#9ca3af] resize-none"
                          />
                        </FormControl>
                        <div className="h-5 mt-1">
                          <FormMessage className="text-xs text-red-600" />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center gap-3 mt-0">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${merriweather.className} bg-[#FF4B00] text-white border-none py-3 px-24 text-xs font-bold tracking-wider transition-all duration-300 w-fit rounded hover:bg-[#dd4200] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(126,217,87,0.3)] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-[#FF4B00] flex items-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>

                <p
                  className={`text-xs tracking-wider mb-1 flex items-center uppercase ${merriweather.className}`}
                >
                  <span className="inline-block1 w-8 h-0.5 bg-[#FF4B00] mr-2 hidden"></span>
                  <span className="text-[#FF4B00] mr-2 font-bold uppercase hidden">
                    {" "}
                    Pick a Date
                  </span>
                  <span className="text-[#130e2e] font-bold hidden">
                    Of Your Choice
                  </span>
                </p>

                {/* Title */}

                <div className="flex1 items-center gap-10 hidden">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    className={`${merriweather.className} bg-white text-[#FF4B00]1 border border-[#FF4B00] py-3 px-17 text-xs font-bold tracking-wider transition-all duration-300 w-fit rounded hover:bg-[#fff2ec] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0`}
                    onClick={() =>
                      router.push(
                        "https://calendly.com/aditi-siahealth/30min?month=2025-10"
                      )
                    }
                  >
                    <span className="text-[#FF4B00]">Pick a Date Now</span>
                  </button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
