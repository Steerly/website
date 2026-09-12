import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width={32} height={32} viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="#111111" />
        <circle cx="16" cy="16" r="9" fill="none" stroke="#FDD835" strokeWidth="2.3" />
        <circle cx="16" cy="16" r="2.8" fill="#FDD835" />
        <path
          d="M16 13.4V7M18.3 17.3L23.8 20.5M13.7 17.3L8.2 20.5"
          stroke="#FDD835"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
      </svg>
    ),
    { ...size }
  );
}
