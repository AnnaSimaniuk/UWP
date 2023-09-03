import { z } from "@builder.io/qwik-city";

export const FeedbackValidationSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(50, {
      message: "Name must be at most 50 characters long",
    }),
  email: z.string({ required_error: "Email is required" }).email({
    message: "Email is invalid",
  }),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(10, {
      message: "Phone must be at least 10 characters long",
    })
    .max(15, {
      message: "Phone must be at most 15 characters long",
    }),
  company: z
    .string({ required_error: "Company is required" })
    .min(3, {
      message: "Company must be at least 3 characters long",
    })
    .max(50, {
      message: "Company must be at most 50 characters long",
    }),
  message: z.string().optional(),
  services: z.array(z.string()).optional(),
});
