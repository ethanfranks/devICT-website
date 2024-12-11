import { z } from "zod";

const MentorSchema = z.object({
  id: z.string().uuid(),
  name: z
    .string({
      required_error: "Name is required.",
    })
    .trim()
    .min(1, "Name cannot be empty.")
    .max(256, "Name cannot contain more than 256 characters.")
    .regex(
      /^[A-Za-z\x{00C0}-\x{00FF}][A-Za-z\x{00C0}-\x{00FF}\'\-]+([\ A-Za-z\x{00C0}-\x{00FF}][A-Za-z\x{00C0}-\x{00FF}\'\-]+)*/u,
      "Name cannot contain numbers or special characters other than hyphens."
    ),
  slackUsername: z.string(),
  slackId: z.string().optional(),
  slackAvatarURL: z.string().url().optional(),
  title: z.string(),
  about: z.string().max(400),
  tags: z
    .array(z.string())
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
