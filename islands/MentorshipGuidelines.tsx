import CaretUp from "tabler_icons/caret-up.tsx";
import CaretDown from "tabler_icons/caret-down.tsx";
import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

export default function MentorshipGuidelines() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleIsOpen(e: JSX.TargetedEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsOpen((current) => !current);
  }

  return (
    <div
      class={`w-full pt-2
      ${isOpen ? "border-b-1 lg:pb-3" : null}`}
    >
      <button
        class="flex flex-row gap-1 mb-2"
        onClick={handleIsOpen}
      >
        {isOpen
          ? <CaretUp color="#F97316" size={30} />
          : <CaretDown color="#F97316" size={30} />}
        <p class="text-lg font-semibold text-orange-500">Guidelines</p>
      </button>
      <p class={isOpen ? "flex" : "hidden"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sed
        nisi harum unde qui est nam quas ipsum. Magnam ipsam, sequi ducimus sit
        expedita quod provident! Nesciunt maiores veritatis dicta, culpa
        voluptatibus repudiandae, doloribus tempore quisquam aspernatur magnam
        iure, tenetur quas sed eos minima voluptatum pariatur fuga eligendi. In
        a, id eius numquam dicta quod libero iusto veniam aliquam eum ex qui
        adipisci reiciendis at similique molestias molestiae deserunt quisquam
        harum tempore? Commodi incidunt ut similique unde neque nisi explicabo
        eius tempore corporis accusamus doloribus a, magnam, natus sed provident
        nulla exercitationem quis saepe, nam repellat dolorem aut eveniet porro!
        Omnis dolorum veritatis ipsum alias aut, nemo facere enim necessitatibus
        amet repellat nostrum tempora odio officiis voluptatum aperiam soluta
        ipsam consectetur, culpa ad. Magnam quas, cupiditate quibusdam labore
        nisi error quam quidem distinctio laborum, inventore quasi deserunt
        alias dolorem eveniet iste perferendis laudantium blanditiis? Pariatur,
        dolores culpa adipisci nobis aut iure iste laudantium dolorum
        accusantium praesentium cupiditate facilis ipsum saepe sapiente
        obcaecati tempore nesciunt temporibus ducimus corporis earum et ea
        blanditiis nisi qui. Porro atque fugiat laborum, in iure enim quae esse
        iste. Esse harum sequi sapiente similique tenetur libero assumenda,
        corporis quasi tempore doloremque, corrupti aperiam impedit cumque
        distinctio, minus voluptatem maxime neque quod sunt recusandae odio.
        Quis, facere quasi maiores provident est odit, eum libero tenetur
        eligendi qui rerum magni dicta a deleniti autem. Nihil iusto, ratione
        harum consequatur in natus cumque sunt explicabo blanditiis vel
        reiciendis omnis eos possimus delectus ipsa culpa id. Itaque ex quo
        libero!
      </p>
      {isOpen
        ? (
          <div class="w-full grid justify-items-end">
            <button
              class="flex flex-row mt-2 mb-2 lg:mb-0"
              onClick={handleIsOpen}
            >
              <CaretUp color="#F97316" size={30} />
              <p class="text-orange-500 font-semibold">Collapse</p>
            </button>
          </div>
        )
        : null}
    </div>
  );
}
