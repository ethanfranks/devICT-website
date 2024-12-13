import { z } from "zod";
import { KV } from "./datastore.ts";

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
  slackId: z.string(),
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

export const Mentors = {
  /// Save a new mentor.
  ///
  /// @param mentor The mentor to save.
  /// @returns The saved mentor.
  /// @throws If the mentor could not be saved.
  async add(mentor: Mentor): Promise<Mentor> {
    const id = crypto.randomUUID();
    mentor.id = id;
    const key = ["mentors", id];
    await KV.set(key, mentor);
    return mentor;
  },

  /// Get a list of all mentors.
  ///
  /// @returns A list of all mentors.
  /// @throws If the mentors could not be listed.
  /// @example
  /// const mentors = await Mentors.list();
  /// console.log(mentors);
  /// => [{id: "ABC123",
  //   name: "Michael Scott",
  //   title: "Regional Manager",
  //   slackUsername: "Great Scott!",
  //   slackId: "AB123FGHS",
  //   slackAvatarURL:
  //     "https://ca.slack-edge.com/T02TAGHQQ-U02EG0MCNES-a15c591c3ec7-512",
  //   about:
  //     "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it's not like a compulsive need to be liked. Like my need to be praised.",
  //   tags: ["Microsoft Excel", "Management", "Sales", "Film Scripting"],
  //   guidelinesAccepted: true,
  //   isApproved: true,
  //   isActive: true,
  // }]
  async list(): Promise<Mentor[]> {
    const keys = KV.list({ prefix: ["mentors"] });

    const mentors: Mentor[] = [];
    for await (const { value } of keys) {
      mentors.push(value as Mentor);
    }

    return mentors;
  },
};
