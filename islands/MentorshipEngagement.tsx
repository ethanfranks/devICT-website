import { useRef, useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { Mentor } from "../lib/mentors.ts";
import IconSquarePlus from "tabler_icons/square-plus.tsx";
import IconCircleMinus from "tabler_icons/circle-minus.tsx";
import IconBrandSlack from "tabler_icons/brand-slack.tsx";
import Tooltip from "../components/Tooltip.tsx";

const mentors: Mentor[] = [
  {
    id: "ABC123",
    name: "Michael Scott",
    title: "Regional Manager",
    slackUsername: "Great Scott!",
    slackId: "AB123FGHS",
    slackAvatarURL:
      "https://ca.slack-edge.com/T02TAGHQQ-U02EG0MCNES-a15c591c3ec7-512",
    about:
      "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it's not like a compulsive need to be liked. Like my need to be praised.",
    tags: ["Microsoft Excel", "Management", "Sales", "Film Scripting"],
    guidelinesAccepted: true,
    isApproved: true,
    isActive: true,
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.",
    title:
      "Senior Vice President of Sales and Regional Operations for North America and Europe",
    slackUsername: "john_doe",
    slackId: "U02EG0MCNES",
    slackAvatarURL:
      "https://ca.slack-edge.com/T02TAGHQQ-U02EG0MCNES-a15c591c3ec7-512",
    about:
      "This is a description that is exactly four hundred characters long. It is intended to test the maximum length validation for the about field. This field should contain interesting information about the user. Make sure to not exceed the character limit. Testing limits helps ensure robust validations in the schema implementation.",
    tags: [
      "Algebraic Logic Functional programming language",
      "Algebraic Logic Functional programming language",
      "Algebraic Logic Functional programming language",
      "Algebraic Logic Functional programming language",
      "Algebraic Logic Functional programming language",
      "Algebraic Logic Functional programming language",
      "Algebraic Logic Functional programming language",
      "Algebraic Logic Functional programming language",
      "Algebraic Logic Functional programming language",
      "Algebraic Logic Functional programming language",
    ],
    guidelinesAccepted: true,
    isApproved: true,
    isActive: true,
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.",
    title:
      "Senior Vice President of Sales and Regional Operations for North America and Europe",
    slackUsername: "john_doe",
    slackId: "U02EG0MCNES",
    slackAvatarURL:
      "https://ca.slack-edge.com/T02TAGHQQ-U02EG0MCNES-a15c591c3ec7-512",
    about:
      "This is a description that is exactly four hundred characters long. It is intended to test the maximum length validation for the about field. This field should contain interesting information about the user. Make sure to not exceed the character limit. Testing limits helps ensure robust validations in the schema implementation.",
    tags: [
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
    ],
    guidelinesAccepted: true,
    isApproved: true,
    isActive: true,
  },
  {
    id: "DEF456",
    name: "Dwight K. Schrute",
    title: "Assistant to the Regional Manager",
    slackUsername: "Dwight K. Schrute",
    slackId: "CD456FGHS",
    slackAvatarURL:
      "https://ca.slack-edge.com/T02TAGHQQ-U02EG0MCNES-a15c591c3ec7-512",
    about:
      "Whenever I'm about to do something, I think, 'Would an idiot do that?', and if they would, I do not do that thing.",
    tags: ["Emacs", "Haskell", "Sales", "Beet Farming", "Management", "Karate"],
    guidelinesAccepted: true,
    isApproved: true,
    isActive: true,
  },
  {
    id: "GHI789",
    name: "Jim Halpert",
    slackUsername: "halpert",
    slackId: "EF789FGHS",
    slackAvatarURL:
      "https://ca.slack-edge.com/T02TAGHQQ-U02EG0MCNES-a15c591c3ec7-512",
    about:
      "I mean I've always subscribed to the idea that if you really want to impress your boss, you go in there and you do mediocre work, halfheartedly.",
    tags: ["JavaScript", "Sales", "Management", "Sports Marketing"],
    guidelinesAccepted: true,
    isApproved: true,
    isActive: true,
  },
];

function TagCard(props: {
  tag: string;
  index: number;
  handleRemoveTag?: (index: number) => void;
}) {
  return (
    <div
      class={`flex flex-row gap-2 max-w-fit items-center rounded-full pl-3 py-1 shadow-md bg-gradient-to-b from-orange-400 to-orange-500 ${
        props.handleRemoveTag ? "pr-2" : "pr-3"
      }`}
    >
      <p class="flex-1 text-white text-sm text-center">{props.tag}</p>
      {props.handleRemoveTag
        ? (
          <button onClick={() => props.handleRemoveTag!(props.index)}>
            <IconCircleMinus class="text-white hover:text-black transition-colors" />
          </button>
        )
        : null}
    </div>
  );
}

function TagCardContainer(props: {
  tags: string[];
  handleRemoveTag?: (index: number) => void;
}) {
  return (
    <div
      class={`flex flex-row flex-wrap items-center gap-2 pt-2 ${
        props.handleRemoveTag ? "justify-start" : "justify-center"
      }`}
    >
      {props.tags.map((tag, index) => (
        <TagCard
          key={tag}
          index={index}
          tag={tag}
          handleRemoveTag={props.handleRemoveTag}
        />
      ))}
    </div>
  );
}

function MentorCard(props: { mentor: Mentor }) {
  async function openSlackMessage(
    e: JSX.TargetedMouseEvent<HTMLButtonElement>,
  ) {
    // WORK IN PROGRESS
    e.preventDefault();

    const response = await fetch("https://slack.com/api/conversations.open", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Error opening Slack message:", error);
      // Optionally, you can show an error message to the user here
    }
  }

  return (
    <div class="flex flex-col items-center justify-center w-max md:w-80 border-1 bg-white shadow-md rounded-2xl">
      <div class="flex-1 flex flex-col pt-4 pb-2 px-2 gap-2 bg-gradient-to-b from-white to-gray-200 rounded-t-2xl justify-center items-center">
        <div class="flex-1 flex flex-col items-center">
          <img
            src={props.mentor.slackAvatarURL}
            alt="mentor profile picture"
            class="rounded-full h-40 w-40"
          />
          <div class="flex flex-col items-center px-2">
            <section class="flex flex-col items-center pt-2">
              <p class="text-md font-semibold text-center">
                {props.mentor.name}
              </p>
              <p class="text-sm font-normal text-center">
                {props.mentor.title
                  ? props.mentor.title
                  : "devICT Community Member"}
              </p>
            </section>
            <hr class="w-full my-3 border-gray-300" />
            <section class="flex flex-col items-center">
              <p class="text-justify text-sm">{props.mentor.about}</p>
            </section>
          </div>
        </div>
        <TagCardContainer tags={props.mentor.tags} />
      </div>
      <button
        onClick={openSlackMessage}
        class="flex flex-row gap-4 items-center justify-center w-full py-5 bg-gradient-to-t from-white to-gray-200 rounded-b-2xl hover:bg-gradient-to-b hover:from-gray-200 hover:to-gray-300 transition-all hover:font-semibold"
      >
        Connect on Slack
        <IconBrandSlack />
      </button>
    </div>
  );
}

function CurrentMentors() {
  function NoActiveMentors() {
    return (
      <div class="flex-1 flex flex-col justify-center items-center gap-4">
        <p class="text-2xl text-justify">
          Sorry, we currently don't have any active mentors.
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          class="flex flex-row gap-4 items-center justify-center p-5 bg-orange-400 rounded-lg hover:bg-orange-500 transition-colors font-bold text-white"
        >
          Reach out on Slack
          <IconBrandSlack />
        </button>
      </div>
    );
  }

  return (
    <div class="flex flex-wrap justify-center gap-4">
      {mentors.length
        ? (
          mentors.sort((a, b) => a.tags.length < b.tags.length ? -1 : 1).map((
            mentor,
          ) => <MentorCard key={mentor.id} mentor={mentor} />)
        )
        : <NoActiveMentors />}
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
    about: "",
    tags: [],
    guidelinesAccepted: false,
    isApproved: false,
    isActive: true,
  });
  const tagInputRef = useRef<HTMLInputElement>(null);

  function handleRemoveTag(index: number) {
    setFormData((formData) => {
      return {
        ...formData,
        tags: [
          ...formData.tags
            .slice(0, index)
            .concat(formData.tags.slice(index + 1)),
        ],
      };
    });
  }

  function handleInputChange(
    e:
      | JSX.TargetedEvent<HTMLInputElement>
      | JSX.TargetedEvent<HTMLTextAreaElement>,
  ) {
    e.preventDefault();
    setFormData((formData) => {
      return { ...formData, [e.currentTarget.name]: e.currentTarget.value };
    });
  }

  function handleTagButton(e: JSX.TargetedEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (tagInputRef.current && tagInputRef.current.value) {
      if (!formData.tags.includes(tagInputRef.current.value)) {
        setFormData((formData) => {
          return {
            ...formData,
            tags: [...formData.tags, tagInputRef.current!.value],
          };
        });
      }

      tagInputRef.current.value = "";
    }
  }

  function handleGuidelinesClick() {
    setFormData((formData) => {
      return {
        ...formData,
        guidelinesAccepted: !formData.guidelinesAccepted,
      };
    });
  }

  return (
    <div class="transition-all bg-white rounded-lg shadow-lg p-2 md:p-4 flex flex-col">
      <form class="flex flex-col gap-2 md:gap-4">
        <section class="flex flex-row flex-wrap gap-2 md:gap-4">
          <div class="flex-1 flex flex-col gap-1 min-w-">
            <label for="name" class="font-semibold pl-0.5">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="ex: Alan Turing"
              required
              class="appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow-orange-200"
              onChange={handleInputChange}
            />
          </div>
          <div class="flex-1 flex flex-col gap-1">
            <label for="title" class="font-semibold pl-0.5">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="ex: Senior Software Engineer"
              required
              class="appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow-orange-200"
              onChange={handleInputChange}
            />
          </div>
        </section>
        <section class="flex flex-row flex-wrap gap-2 md:gap-4">
          <div class="flex-1 flex flex-col gap-1">
            <label for="slackUsername" class="font-semibold pl-0.5">
              Slack Username
            </label>
            <input
              id="slackUsername"
              type="text"
              name="slackUsername"
              placeholder="ex: wichitaDev"
              required
              class="appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow-orange-200"
              onChange={handleInputChange}
            />
          </div>
          <div class="flex-1 flex flex-col gap-1">
            <div class="flex flex-row gap-1">
              <label for="slackId" class="font-semibold pl-0.5">
                Slack Member ID
              </label>
              <Tooltip text="It worked!" />
            </div>
            <input
              id="slackId"
              type="text"
              name="slackId"
              placeholder="ex: A01B2CDEFGH"
              class="appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow-orange-200"
              onChange={handleInputChange}
            />
          </div>
        </section>
        <div class="flex-1 flex flex-col gap-1">
          <label for="about" class="font-semibold pl-0.5">
            About
          </label>
          <textarea
            id="about"
            type="text"
            name="about"
            placeholder="ex: Hi! I'm a senior software engineer with over 10 years experience developing full-stack web apps. My focus for the past few years has been TypeScript, React, and Next.js. I've worked for small startups on greenfield projects, as well as within larger corporations on legacy codebases. I love to hike, play guitar, and read science fiction. Let's connect!"
            required
            rows={5}
            class="appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow-orange-200"
            onChange={handleInputChange}
          />
        </div>
        <section class="flex-1 flex flex-col gap-1">
          <label for="tags" class="font-semibold pl-0.5">
            Tags (10 max)
          </label>
          <div class="flex flex-row items-center gap-2">
            <input
              id="tags"
              type="text"
              name="tags"
              ref={tagInputRef}
              placeholder="ex: TypeScript, Python, React, etc..."
              class="flex-1 appearance-none shadow border rounded px-2 py-1 focus:outline-none focus:shadow focus:border-orange-500 focus:shadow-orange-200"
              required={!formData.tags.length}
            />
            <button onClick={handleTagButton}>
              <IconSquarePlus class="h-9 w-9 text-orange-400 hover:text-orange-600 active:text-black transition-colors" />
            </button>
          </div>
          {formData.tags.length
            ? (
              <TagCardContainer
                tags={formData.tags}
                handleRemoveTag={handleRemoveTag}
              />
            )
            : null}
        </section>
        <section class="flex-1 flex flex-col gap-1">
          <p class="font-semibold pl-0.5">Guidelines</p>
          <div class="flex flex-row items-center justify-between border-1 rounded shadow hover:bg-gray-50 transition-colors">
            <label
              for="guidelinesAccepted"
              class="flex-1 text-justify p-2 hover:cursor-pointer"
            >
              By checking this field I confirm that I have read the mentorship
              guidelines outlined on this page and agree with the terms and
              conditions.
            </label>
            <input
              id="guidelinesAccepted"
              type="checkbox"
              name="guidelinesAccepted"
              required
              class="h-4 w-4 mr-2 hover:cursor-pointer"
              onClick={handleGuidelinesClick}
            />
          </div>
        </section>
        <div class="flex justify-center sm:justify-end pt-2 md:pt-0">
          <button class="bg-orange-400 hover:bg-orange-500 transition-colors text-white font-bold rounded shadow-md py-2 px-6 min-w-full md:min-w-fit md:w-1/3 lg:w-1/4 xl:w-1/5">
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
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  function handleSelectedTabIndex(e: JSX.TargetedEvent<HTMLButtonElement>) {
    e.preventDefault();
    const index = e.currentTarget.tabIndex;
    if (globalThis.scrollY > 0) {
      document.body.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setSelectedTabIndex(index), 250);
    } else setSelectedTabIndex(index);
  }

  return (
    <div>
      <div role="tablist" class="flex flex-row w-full pb-2 mt-5 mb-3">
        <button
          role="tab"
          id="current-mentors-tab"
          tabindex={0}
          class={`flex-1 text-lg lg:text-xl font-semibold py-1 rounded-l-full border-1 border-orange-400 shadow-xl transition-colors
              ${
            selectedTabIndex === 0
              ? "text-white bg-gradient-to-l from-orange-400 to-orange-500"
              : "text-black-600 border-r-0"
          }`}
          onClick={handleSelectedTabIndex}
        >
          Find A Mentor
        </button>
        <button
          role="tab"
          id="mentor-sign-up-tab"
          tabindex={1}
          class={`flex-1 text-lg lg:text-xl font-semibold py-1 rounded-r-full border-1 border-orange-400 shadow-xl transition-colors +
              ${
            selectedTabIndex === 1
              ? "text-white bg-gradient-to-r from-orange-400 to-orange-500"
              : "text-black-600 border-l-0"
          }`}
          onClick={handleSelectedTabIndex}
        >
          Become A Mentor
        </button>
      </div>
      <div
        id="current-mentors-panel"
        role="tabpanel"
        tabIndex={0}
        hidden={selectedTabIndex !== 0}
      >
        <CurrentMentors />
      </div>
      <div
        id="mentor-sign-up-panel"
        role="tabpanel"
        tabIndex={1}
        hidden={selectedTabIndex !== 1}
      >
        <MentorSignUp />
      </div>
    </div>
  );
}
