import Help from "tabler_icons/help.tsx";

type TooltipProps = {
    text: string;
    position?: 'top' | 'bottom';
}
// WORK IN PROGRESS
export default function Tooltip({text, position = 'top'}: TooltipProps) {
  const positionStyling = position === 'top' ? "bottom-7" : "top-5";

  return (
    <div class="group relative">
      <Help class="h-4 w-4 hover:text-orange-500 transition-colors" />
      <div class={`absolute hidden group-hover:flex ${positionStyling} justify-center items-center p-2 bg-white border border-black rounded-md shadow-sm`}>
        <p class="text-sm lg:text-md">
          {text}
        </p>
      </div>
    </div>
  );
}
