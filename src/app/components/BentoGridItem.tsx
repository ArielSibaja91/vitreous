import React from "react";

export default function BentoGridItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-2 rounded-3xl backdrop-blur-lg bg-black/10 border border-gray-300/60 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
