import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;
export function Sprout(props: Props) {
  return (
    <svg
      viewBox="0 0 48 58"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M24 53c-2-15 0-29 8-43M25 38C11 40 9 29 7 23c12 1 18 5 18 15ZM27 29C23 16 30 8 39 5c0 11-4 20-12 24ZM23 47C33 47 37 39 40 34c-11-1-15 5-17 13Z" />
      <path d="m13 29 12 9M33 13l-6 16m8 11-12 7" />
    </svg>
  );
}
export function BrandLeaf(props: Props) {
  return (
    <svg
      viewBox="0 0 32 38"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m15 35 3-22M17 26C7 28 3 23 4 16l9 3C8 13 9 7 12 4l6 11c0-9 5-12 10-12 2 8-3 13-7 16l8-2c0 7-5 12-12 9Z" />
      <path d="m11 23 6 3 6-5" />
    </svg>
  );
}
export function Mountains(props: Props) {
  return (
    <svg
      viewBox="0 0 190 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <g stroke="#eaaa45">
        <path d="M103 40a15 15 0 1 1 27 12M113 13l-2-7m22 16 6-5m-39 7-5-4m43 38 9 1m-18-46 3-7m11 34 9-2" />
      </g>
      <path d="m4 105 38-43 13 14 29-45 45 62 29 20M17 107l29-32-7 22m-6-15 8-20 8 11M54 112l30-81 16 44-12-9-4-20m-24 51 15-28-8 29m28-20 17 27m-29-5 12 14m-67-10-13 12m104-24 17 9 16 14m-38-26 8 23m-67-1-9 9M9 110l-6 6" />
    </svg>
  );
}
export function Sun(props: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="#eaa73c"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="24" cy="24" r="10" />
      <path d="M24 3v6m0 30v6M3 24h6m30 0h6M9 9l4 4m22 22 4 4M9 39l4-4m22-22 4-4" />
    </svg>
  );
}
export function Smile(props: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="13" cy="15" r="1" fill="currentColor" />
      <circle cx="27" cy="15" r="1" fill="currentColor" />
      <path d="M12 24c4 7 12 7 16 0" />
    </svg>
  );
}
export function Heart(props: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="#ae514b"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="#ed8c82"
        d="M20 32C5 23 6 14 10 11c4-3 8-1 10 3 3-5 9-5 12-1 5 7-4 15-12 19Z"
      />
      <path d="M13 14c-3 2-2 5-1 6m14-6 2 2" />
    </svg>
  );
}
