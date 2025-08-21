import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground() {
  return (
    <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          // "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "[background-image:linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] bg-black-100"></div>
    </div>
  );
}
