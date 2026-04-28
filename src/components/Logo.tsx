export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="OperatorBoard">
      {/* Outer ring */}
      <circle cx="14" cy="14" r="12.5" stroke="#7c6dfa" strokeWidth="1.5" />
      {/* Inner segments — approval queue metaphor */}
      <path d="M14 4 L14 14 L21.5 8" stroke="#7c6dfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 14 L4 14" stroke="#5b4ee0" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="14" r="2.5" fill="#7c6dfa" />
      {/* Status dot */}
      <circle cx="22" cy="6" r="3" fill="#22c55e" />
    </svg>
  );
}

export function Wordmark({ height = 22 }: { height?: number }) {
  return (
    <svg height={height} viewBox="0 0 180 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="OperatorBoard">
      <text
        x="0" y="17"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="-0.04em"
        fill="white"
      >
        OperatorBoard
      </text>
    </svg>
  );
}
