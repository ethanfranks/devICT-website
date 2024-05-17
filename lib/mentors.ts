import { z } from "zod";

const MentorSchema = z.object({
  id: z.string().uuid(),
  name: z.string({
    required_error: "Name is required.",
  }).trim()
    .min(1, "First Name cannot be empty.")
    .max(256, "Name cannot contain more than 256 characters.")
    .regex(
      /^[A-Za-z\x{00C0}-\x{00FF}][A-Za-z\x{00C0}-\x{00FF}\'\-]+([\ A-Za-z\x{00C0}-\x{00FF}][A-Za-z\x{00C0}-\x{00FF}\'\-]+)*/u,
      "Name cannot contain numbers or special characters other than hyphens.",
    ),
  slackUsername: z.string(),
  slackId: z.string().optional(),
  title: z.string(),
  description: z.string().max(400),
  tags: z.string({
    required_error: "Tags cannot be empty.",
  })
    .trim()
    .min(1, "Tags cannot be empty.")
    .max(400, "Tags cannot contain more than 400 characters.")
    .regex(/\w+(,\w+)*/g, "Tags must be comma-delimited."),
  guidelinesAccepted: z.boolean({
    required_error:
      "User must accept mentorship guidelines to submit a request to become a mentor.",
  }),
  isApproved: z.boolean(),
});
export type Mentor = z.infer<typeof MentorSchema>;
