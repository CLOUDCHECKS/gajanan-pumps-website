import { z } from "zod";

const optionalText = (max: number, message: string) =>
  z.string().trim().max(max, message).optional();

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  company: optionalText(120, "Company name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .regex(/^[+()\d][\d\s\-().]{6,19}$/, "Enter a valid phone number."),
  product: optionalText(80, "Product name is too long."),
  industry: optionalText(100, "Industry name is too long."),
  application: optionalText(160, "Application description is too long."),
  city: optionalText(80, "City name is too long."),
  state: optionalText(80, "State name is too long."),
  flowRate: optionalText(60, "Flow rate is too long."),
  pressure: optionalText(60, "Pressure value is too long."),
  viscosity: optionalText(60, "Viscosity value is too long."),
  temperature: optionalText(60, "Temperature value is too long."),
  timeline: optionalText(80, "Timeline is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(2000, "Please keep your message under 2000 characters."),
  /** Hidden honeypot — must stay empty. */
  website: z.string().max(0).optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
