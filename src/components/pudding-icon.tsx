import type { SVGProps } from "react";

export function PuddingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 15.5c-5 0-8-3.5-8-6.5h16c0 3-3 6.5-8 6.5Z" />
      <path d="M12 15.5V20a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2Z" />
      <path d="M12 15.5V20a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2Z" />
      <path d="M9 13.5c.5-1 2-1.5 3-1.5s2.5.5 3 1.5" />
      <path d="M8 9c0-1 .5-2-2-2" />
      <path d="M18 9c0-1-.5-2 2-2" />
    </svg>
  );
}
