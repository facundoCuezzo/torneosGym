interface Props {
  className?: string;
}

export const FacebookIcon: React.FC<Props> = ({ className }) => {
  return (
    <i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      </svg>
    </i>
  );
};

export const InstagramIcon: React.FC<Props> = ({ className }) => {
  return (
    <i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16.5 7.5v.001" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    </i>
  );
};
