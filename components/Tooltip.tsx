import { useMemo } from "preact/hooks";
import Help from "tabler_icons/help.tsx";

type TooltipProps = {
  text: string;
  verticalPosition?: "top" | "bottom";
  horizontalPosition?: "left" | "center" | "right";
  pxWidth?: number;
};

export default function Tooltip(
  {
    text,
    verticalPosition = "top",
    horizontalPosition = "center",
    pxWidth = 200,
  }: TooltipProps,
) {
  const tooltipStyles = useMemo(() => {
    const styles: Record<string, string | number> = {
      width: `${pxWidth}px`,
    };

    if (verticalPosition === "top") {
      styles.bottom = "28px";
    } else {
      styles.top = "28px";
    }

    if (horizontalPosition === "left") {
      styles.left = `-${pxWidth - 10}px`;
    } else if (horizontalPosition === "center") {
      styles.left = `-${Math.floor(pxWidth / 2) - 10}px`;
    } else if (horizontalPosition === "right") {
      styles.left = "4px";
    }

    return styles;
  }, [verticalPosition, horizontalPosition, pxWidth]);

  return (
    <div class="group relative overflow-visible">
      <Help class="h-4 w-4 group-hover:text-orange-500 transition-colors" />
      <div
        class="absolute hidden group-hover:flex justify-center items-center text-center p-2 bg-gray-50 border border-gray-400 rounded-md shadow-md"
        style={tooltipStyles}
      >
        <p class="text-sm lg:text-md">
          {text}
        </p>
      </div>
    </div>
  );
}
