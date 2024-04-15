import MentorshipEngagement from "../islands/MentorshipEngagement.tsx";
import MentorshipGuidelines from "../islands/MentorshipGuidelines.tsx";

export default function Mentorship() {
  return (
    <div class="container mx-auto px-4 lg:px-8">
      <h1 class="mx-auto mb-4 text-4xl font-bold">Local Mentorship</h1>
      <p class="pb-3 mb-2 border-b-1">
        Basic overview of local mentorship. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Facilis ad, suscipit animi dignissimos
        assumenda atque aliquid quis tempore maiores magni reiciendis itaque
        accusantium, sit dolores praesentium saepe aspernatur, consectetur
        deleniti!
      </p>
      <MentorshipGuidelines />
      <MentorshipEngagement />
    </div>
  );
}
