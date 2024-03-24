function MentorshipInfo() {
  return (
    <div>
      <h1>Mentorship Info</h1>
      <p>mentorship info and guidelines here...</p>
    </div>
  )
}

/*
Details include: 
  - topics they are comfortable mentoring on
  - how they are willing to engage (slack DMs, in person, weekly zooms, etc)
  - and what sort of frequency / time commitment they’re open to
*/
function MentorSignUp() {
  return (
    <div>
      <h1>Become a Mentor</h1>
      <p>form here...</p>
    </div>
  )
}

function CurrentMentors() {
  return (
    <div>
      <h1>Find A Mentor</h1>
      <h2>filter/search here?</h2>
      <h2>list of mentors here with: avatar (from slack), mentor info, and a "reach out on slack" CTA which takes the user to devICT slack DM to the mentor</h2>
      <div>
        {/* {mentors.map(mentor => <MentorCard key={mentor.id} mentor={mentor} />)} */}
      </div>
    </div>
  )
}

export default function Mentorship() {
  return (
    <div class="container mx-auto px-8">
      <MentorshipInfo />
      <MentorSignUp />
      <CurrentMentors />
    </div>
  );
}
