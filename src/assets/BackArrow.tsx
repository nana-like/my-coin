import { SVGProps } from 'react';

export default function BackArrow(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20" {...props}>
      <g
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#444"
      >
        <path d="m8.9 1.811-7 8 7 8M1.9 9.811h22" />
      </g>
    </svg>
  );
}
