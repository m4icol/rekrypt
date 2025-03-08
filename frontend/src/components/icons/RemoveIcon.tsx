import React from "react";

const RemoveIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="w-5 h-5 text-gray-800 dark:text-subtext"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18 17.94 6M18 18 6.06 6"
    />
  </svg>
);

export default RemoveIcon;
