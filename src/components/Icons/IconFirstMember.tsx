import React, { CSSProperties } from "react";

type IconType = {
  style?: CSSProperties | undefined;
  className?: string | undefined;
};

const IconFirstMember: React.FC<IconType> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <circle r={60} fill="#ffd8c9" cy={64} cx={64} />
    <circle r={48} opacity=".3" fill="#fff" cy={64} cx={64} />
    <path
      fill="#393c54"
      d="m64 14a31 31 0 0 1 31 31v41.07a9.93 9.93 0 0 1 -9.93 9.93h-42.14a9.93 9.93 0 0 1 -9.93-9.93v-41.07a31 31 0 0 1 31-31z"
    />
    <circle r={7} fill="#fbc0aa" cy={60} cx={89} />
    <path
      fill="#00adfe"
      d="m64 124a59.7 59.7 0 0 0 34.7-11.07l-3.33-10.29a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.33 10.29a59.7 59.7 0 0 0 34.7 11.07z"
    />
    <path
      fill="#ff8475"
      d="m46.54 121.45a59.93 59.93 0 0 0 34.92 0l-2.46-25.45h-30z"
    />
    <path fill="#f85565" d="m48.13 105h31.74l-.39-4h-30.96z" />
    <path fill="#ffd8c9" d="m76 96a12 12 0 0 1 -24 0z" />
    <path
      strokeWidth={14}
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="#fbc0aa"
      fill="none"
      d="m64 83v12"
    />
    <circle r={7} fill="#fbc0aa" cy={60} cx={39} />
    <path
      fill="#ffd8c9"
      d="m64 90a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z"
    />
    <path
      strokeWidth={5}
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="#fbc0aa"
      fill="none"
      d="m64 64.75v6.5"
    />
    <path
      fill="#515570"
      d="m64.83 18.35a27.51 27.51 0 0 0 -28.32 27.47v4.76a2 2 0 0 0 2 2h.58a1 1 0 0 0 .86-.49l4.05-7.09 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 4 7.09a1 1 0 0 0 .86.49h.58a2 2 0 0 0 2-2v-4.18c.05-14.95-11.66-27.61-26.61-28.05z"
    />
    <path fill="#f85565" d="m47.35 113h33.29l-.38-4h-32.52z" />
    <path fill="#f85565" d="m46.58 121h34.84l-.39-4h-34.06z" />
    <path
      opacity=".7"
      fill="#ff8475"
      d="m58.52 79.39c0-.84 11-.84 11 0 0 1.79-2.45 3.25-5.48 3.25s-5.52-1.46-5.52-3.25z"
    />
    <path
      opacity=".7"
      fill="#f85565"
      d="m69.48 79.29c0 .78-11 .78-11 0 .04-1.79 2.52-3.29 5.52-3.29s5.48 1.5 5.48 3.29z"
    />
    <circle r={3} fill="#515570" cy="58.75" cx="76.25" />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="#515570"
      fill="none"
      d="m70.75 59.84a6.61 6.61 0 0 1 11.5-1.31"
    />
    <path
      style={{
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: "#515570",
        strokeWidth: 2,
        opacity: ".2",
      }}
      d="m72.11 51.46 5.68-.4a4.62 4.62 0 0 1 4.21 2.1l.77 1.21"
    />
    <circle r={3} fill="#515570" cy="58.75" cx="51.75" />
    <g strokeLinecap="round" fill="none">
      <path
        strokeLinejoin="round"
        stroke="#515570"
        d="m57.25 59.84a6.61 6.61 0 0 0 -11.5-1.31"
      />
      <path
        strokeWidth={2}
        strokeLinejoin="round"
        stroke="#515570"
        opacity=".2"
        d="m55.89 51.45-5.68-.39a4.59 4.59 0 0 0 -4.21 2.11l-.77 1.21"
      />
      <path
        strokeMiterlimit={10}
        stroke="#f85565"
        d="m57.25 78.76a17.4 17.4 0 0 0 6.75 1.12 17.4 17.4 0 0 0 6.75-1.12"
      />
    </g>
  </svg>
);

export default IconFirstMember;
