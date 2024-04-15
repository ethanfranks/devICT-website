import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

/*
Details include:
- first name
- last name
- Slack user name
- Slack id with tooltip displaying how to find it
- Title (e.g. Software Developer, UI/UX Designer, etc.)
- Description (Up to 400 characters)
- tags (languages, platforms, skillsets, etc.)
  - topics they are comfortable mentoring on
    - searchable drop down list which accepts new inputs (adds new inputs only to the user's list of tags)
      - takes one topic at a time and adds to a list
  - how they are willing to engage (slack DMs, in person, weekly zooms, etc)
    - channels: Slack DMs, in person, video calls (Zoom, Google Meet, Slack Huddle etc.)
    - meeting frequency: weekly, biweekly, monthly, flexible, other (input field)
  - and what sort of frequency / time commitment they’re open to
    - expected meeting duration: 30 minutes or less (<= 30 minutes), up to an hour (<= 60 minutes), flexible
- Guidelines acceptance toggle
*/
function MentorSignUp() {
  return (
    <div>
      <form class="bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <section class="flex flex-row gap-4">
          <div class="flex flex-col gap-1">
            <label for="first-name">First Name</label>
            <input id="first-name" type="text" name="first-name" required />
          </div>
          <div class="flex flex-col gap-1">
            <label for="last-name">Last Name</label>
            <input id="last-name" type="text" name="last-name" required />
          </div>
        </section>
      </form>
      <footer>
        <p>
          *Mentor status will not become active until approved by the devICT
          board of directors.
        </p>
      </footer>
    </div>
  );
}

function CurrentMentors() {
  return (
    <div>
      <h2>
        list of mentors here with: avatar (from slack), mentor info, and a
        "reach out on slack" CTA which takes the user to devICT slack DM to the
        mentor
      </h2>
      <div>
        {/* {mentors.map(mentor => <MentorCard key={mentor.id} mentor={mentor} />)} */}
      </div>
    </div>
  );
}

export default function MentorshipEngagement() {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

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
      <div id="current-mentors-panel" role="tabpanel" tabIndex={0} aria-labelledby="current-mentors-tab" hidden={selectedTabIndex !== 0}>
        <CurrentMentors />
      </div>
      <div id="mentor-sign-up-panel" role="tabpanel" tabIndex={1} aria-labelledby="mentor-sign-up-tab" hidden={selectedTabIndex !== 1}>
        <MentorSignUp />
      </div>
    </div>
  );
}