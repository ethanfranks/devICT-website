import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { Mentor } from "../lib/mentors.ts";
import Help from "tabler_icons/help.tsx";
import IconSquarePlus from "tabler_icons/square-plus.tsx";

function MentorCard(mentor: Mentor) {
  return (
    <div>
      <p>mentor card</p>
    </div>
  );
}

function CurrentMentors() {
  return (
    <div>
      {/* {mentors.map(mentor => <MentorCard key={mentor.id} mentor={mentor} />)} */}
    </div>
  );
}

function TagCard(tag: string) {
  return (
    <div>
      <p>{tag}</p>
    </div>
  );
}

function MentorSignUp() {
  const [formData, setFormData] = useState<Mentor>({
    id: crypto.randomUUID(),
    name: "",
    slackUsername: "",
    slackId: "",
    title: "",
    description: "",
    tags: [],
    guidelinesAccepted: false,
    isApproved: false,
  });

  return (
    <div class="transition-all bg-white rounded-lg shadow-lg p-2 md:p-4 flex flex-col gap-2 md:gap-4">
      <form class="flex flex-col gap-2 md:gap-4">
        <section class="flex flex-row flex-wrap gap-2 md:gap-4">
          <div class="flex-1 flex flex-col gap-1 min-w-">
            <label for="name" class="font-semibold pl-0.5">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="ex: Alan Turing"
              required
              class="appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow focus:shadow-orange-200"
            />
          </div>
          <div class="flex-1 flex flex-col gap-1">
            <label for="title" class="font-semibold pl-0.5">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="ex: Senior Software Engineer"
              required
              class="appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow focus:shadow-orange-200"
            />
          </div>
        </section>
        <section class="flex flex-row flex-wrap gap-2 md:gap-4">
          <div class="flex-1 flex flex-col gap-1">
            <label for="slack-username" class="font-semibold pl-0.5">
              Slack Username
            </label>
            <input
              id="slack-username"
              type="text"
              name="slack-username"
              placeholder="ex: wichitaDev"
              required
              class="appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow focus:shadow-orange-200"
            />
          </div>
          <div class="flex-1 flex flex-col gap-1">
            <div class="flex flex-row gap-1">
              <label for="slack-id" class="font-semibold pl-0.5">
                Slack Member ID
              </label>
              <Help class="h-4 w-4" />
            </div>
            <input
              id="slack-id"
              type="text"
              name="slack-id"
              placeholder="ex: A01B2CDEFGH"
              class="appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow focus:shadow-orange-200"
            />
          </div>
        </section>
        <div class="flex-1 flex flex-col gap-1">
          <label for="description" class="font-semibold pl-0.5">
            Description
          </label>
          <textarea
            id="description"
            type="text"
            name="description"
            placeholder="ex: Hi! I'm a senior software engineer with over 10 years experience developing full-stack web apps. My focus for the past few years has been TypeScript, React, and Next.js. I've worked for small startups on greenfield projects, as well as within larger corporations on legacy codebases. I love to hike, play guitar, and read science fiction. Let's connect!"
            required
            rows={5}
            class="appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow focus:shadow-orange-200"
          />
        </div>
        <section class="flex-1 flex flex-col gap-1">
          <label for="tags" class="font-semibold pl-0.5">
            Tags
          </label>
          <div class="flex flex-row items-center gap-2">
            <input
              id="tags"
              type="text"
              name="tags"
              placeholder="ex: TypeScript, Java, UI/UX, DevOps, etc..."
              class="flex-1 appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow focus:shadow-orange-200"
            />
            <button class="" onClick={(e) => {e.preventDefault()}}>
              <IconSquarePlus class="" />
            </button>
          </div>
          {/* {formData.tags.map((tag, index) => <TagCard key={index} tag={tag} />)} */}
        </section>
        <section class="flex-1 flex flex-col gap-1">
          <p class="font-semibold pl-0.5">Guidelines</p>
          <div class="flex flex-row items-center justify-between gap-4 p-2 border-1 rounded shadow">
            <label for="guidelines-accepted" class="text-justify">
              By checking this field I confirm that I have read the mentorship
              guidelines outlined on this page and agree with the terms and
              conditions.
            </label>
            <input
              id="guidelines-accepted"
              type="checkbox"
              name="guidelines-accepted"
              required
              class="h-4 w-4"
            />
          </div>
        </section>
        <div class="flex justify-center sm:justify-end pt-2 md:pt-0">
          <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded shadow-md py-2 px-6 min-w-full md:min-w-fit md:w-1/3 lg:w-1/4 xl:w-1/5">
            Submit Request
          </button>
        </div>
      </form>
      <footer class="border-t-1 pt-2 md:pt-4 mt-2 md:mt-0">
        <p class="italic">
          Mentors must be approved by the devICT board of directors. The board
          will be notified of new mentor requests upon form submittal. Approval
          may take several days or weeks. You will be notified via Slack once
          the board has reviewed your request.
        </p>
      </footer>
    </div>
  );
}

export default function MentorshipEngagement() {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(1);

  function handleSelectedTabIndex(e: JSX.TargetedEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSelectedTabIndex(e.currentTarget.tabIndex);
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Engagement Tabs"
        class="flex flex-row w-full pb-2 mt-5 mb-3"
      >
        <button
          role="tab"
          aria-selected={selectedTabIndex === 0}
          aria-controls="current-mentors-panel"
          id="current-mentors-tab"
          tabindex={0}
          class={`flex-1 text-lg lg:text-xl font-semibold py-1 rounded-l-full border-1 border-orange-500 transition-colors
              ${
            selectedTabIndex === 0
              ? "text-white bg-orange-500"
              : "text-black-600 border-r-0"
          }`}
          onClick={handleSelectedTabIndex}
        >
          findMentor()
        </button>
        <button
          role="tab"
          aria-selected={selectedTabIndex === 1}
          aria-controls="mentor-sign-up-panel"
          id="mentor-sign-up-tab"
          tabindex={1}
          class={`flex-1 text-lg lg:text-xl font-semibold py-1 rounded-r-full border-1 border-orange-500 transition-colors +
              ${
            selectedTabIndex === 1
              ? "text-white bg-orange-500"
              : "text-black-600 border-l-0"
          }`}
          onClick={handleSelectedTabIndex}
        >
          becomeMentor()
        </button>
      </div>
      <div
        id="current-mentors-panel"
        role="tabpanel"
        tabIndex={0}
        aria-labelledby="current-mentors-tab"
        hidden={selectedTabIndex !== 0}
      >
        <CurrentMentors />
      </div>
      <div
        id="mentor-sign-up-panel"
        role="tabpanel"
        tabIndex={1}
        aria-labelledby="mentor-sign-up-tab"
        hidden={selectedTabIndex !== 1}
      >
        <MentorSignUp />
      </div>
    </div>
  );
}
