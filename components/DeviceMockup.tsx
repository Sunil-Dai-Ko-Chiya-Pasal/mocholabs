import { ReactNode } from "react";

export default function DeviceMockup({
  children,
  rotate = "0",
  className = "",
}: {
  children: ReactNode;
  rotate?: string;
  className?: string;
}) {
  return (
    <div
      className={`sticker-border w-56 overflow-hidden bg-white ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
