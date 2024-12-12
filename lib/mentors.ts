import { z } from "zod";

const MentorSchema = z.object({
  id: z.string().uuid(),
  name: z
    .string({
      required_error: "Name is required.",
    })
    .trim()
    .min(1, "Name cannot be empty.")
    .max(100, "Name cannot contain more than 100 characters.")
    .regex(
      /[a-zA-Z][a-zA-Z .,-]+[a-zA-Z.]$/,
      "Name cannot contain numbers or special characters other than hyphens, commas or periods.",
    ),
  slackUsername: z.string(),
  slackId: z.string().optional(),
  slackAvatarURL: z.string().url().optional(),
  title: z
    .string()
    .max(100, "Title cannot contain more than 100 characters.")
    .optional(),
  about: z
    .string()
    .max(400, "About cannot contain more than 400 characters.")
    .optional(),
  tags: z
    .array(
      z
        .string()
        .min(1, "Tag cannot be empty.")
        .max(50, "Tag cannot contain more than 50 characters."),
    )
    .min(1, "A minimum of one tag is required.")
    .max(10, "A maximum of ten tags is allowed."),
  guidelinesAccepted: z.boolean({
    required_error:
      "User must accept mentorship guidelines to submit a request to become a mentor.",
  }),
  isApproved: z.boolean(),
  isActive: z.boolean(),
});
export type Mentor = z.infer<typeof MentorSchema>;
