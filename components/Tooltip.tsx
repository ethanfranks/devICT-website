import Help from "tabler_icons/help.tsx";

type TooltipProps = {
    text: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
}
// WORK IN PROGRESS
export default function Tooltip({text}: TooltipProps) {
  return (
    <div class="group relative">
      <Help class="h-4 w-4 hover:text-orange-500 transition-colors" />
      <div class="absolute flex justify-center items-center p-2 bg-white border-1 border-black rounded-sm shadow-sm opacity-0 transition-opacity group-hover:opacity-100">
        <p class="text-sm lg:text-md">
          {text}
        </p>
      </div>
    </div>
  );
}
