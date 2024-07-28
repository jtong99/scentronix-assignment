import React from "react";

interface PawIconProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}

const PawIcon: React.FC<PawIconProps> = ({
  width = 165,
  height = 163,
  color = "black",
  strokeWidth = 10,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 165 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M160 81.5C160 123.692 125.36 158 82.5 158C39.6403 158 5 123.692 5 81.5C5 39.3075 39.6403 5 82.5 5C125.36 5 160 39.3075 160 81.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M91 116.5C91 126.907 81.7508 136 69.5 136C57.2492 136 48 126.907 48 116.5C48 106.093 57.2492 97 69.5 97C81.7508 97 91 106.093 91 116.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M78 57.5C78 67.9073 68.7508 77 56.5 77C44.2492 77 35 67.9073 35 57.5C35 47.0927 44.2492 38 56.5 38C68.7508 38 78 47.0927 78 57.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M144 76.5C144 86.9073 134.751 96 122.5 96C110.249 96 101 86.9073 101 76.5C101 66.0927 110.249 57 122.5 57C134.751 57 144 66.0927 144 76.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default PawIcon;
