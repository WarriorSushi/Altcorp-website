import type { SVGProps } from "react";

// Lucide / Feather geometry. License retained in vendor/icons/LICENSE-lucide.txt.
const paths = {
  "up-right": ["M7 7h10v10", "M7 17 17 7"],
  right: ["M5 12h14", "m12 5 7 7-7 7"],
  left: ["m12 19-7-7 7-7", "M19 12H5"],
  "down-right": ["m7 7 10 10", "M17 7v10H7"],
  menu: ["M4 5h16", "M4 12h16", "M4 19h16"],
  close: ["M18 6 6 18", "m6 6 12 12"],
};

export function VectorIcon({ name = "up-right", ...props }: SVGProps<SVGSVGElement> & { name?: keyof typeof paths }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className="control-icon" {...props}>
      {paths[name].map((d) => <path d={d} key={d} />)}
    </svg>
  );
}
