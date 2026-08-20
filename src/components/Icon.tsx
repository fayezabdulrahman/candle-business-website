import type { ReactNode } from "react";

export type IconName =
  | "arrow-right"
  | "check"
  | "flame"
  | "leaf"
  | "mail"
  | "menu"
  | "plus"
  | "recycle"
  | "x";

const iconPaths: Record<IconName, ReactNode> = {
  "arrow-right": <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  check: <><path d="M22 11.1V12a10 10 0 1 1-5.9-9.1" /><path d="m9 11 3 3L22 4" /></>,
  flame: <path d="M12 22c4.4 0 7-3.1 7-7.4 0-2.5-1.2-5.4-3.6-8.6-.4 2.4-1.7 3.7-3.2 4.8.1-3.6-1.8-6.5-4.1-8.8.2 4.2-3.1 6.5-3.1 11.6C5 18.6 8 22 12 22Z" />,
  leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 4.8 19 2 19 2c1 6.5-1.3 12.7-8 14.8" /><path d="M2 21c0-3 1.85-5.36 5.08-6.94C9.7 12.78 12.4 12 16 12" /></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  menu: <><path d="M4 8h16" /><path d="M4 16h16" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  recycle: <><path d="m7.5 4.3 1.2-2.1 1.2 2.1" /><path d="M7.5 4.3h7a3.5 3.5 0 0 1 3 1.7l1.5 2.5" /><path d="m18.4 16.7 2.4.1-1.2 2.1" /><path d="m18.4 16.7-3.5-6.1" /><path d="M19.6 18.9a3.5 3.5 0 0 1-3 1.8H13" /><path d="m5.6 16.7-2.4.1 1.2 2.1" /><path d="m5.6 16.7 3.5-6.1" /><path d="M4.4 18.9A3.5 3.5 0 0 1 4.2 15L6 12" /></>,
  x: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
};

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "size-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}
