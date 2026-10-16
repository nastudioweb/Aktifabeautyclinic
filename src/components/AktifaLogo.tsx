import React from 'react';

interface AktifaLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'circle' | 'transparent';
}

export const AktifaLogo: React.FC<AktifaLogoProps> = ({
  className = '',
  size = 48,
  showText = true,
  variant = 'circle',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className="relative shrink-0 rounded-full flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105"
        style={{
          width: size,
          height: size,
          backgroundColor: variant === 'circle' ? '#DE6F9F' : 'transparent',
          boxShadow: variant === 'circle' ? '0 4px 12px rgba(222, 111, 159, 0.28)' : 'none',
        }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle gradient overlay on pink background */}
          {variant === 'circle' && (
            <>
              <circle cx="100" cy="100" r="100" fill="url(#pinkGrad)" />
              <defs>
                <linearGradient id="pinkGrad" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E982B0" />
                  <stop offset="1" stopColor="#D45D8E" />
                </linearGradient>
              </defs>
            </>
          )}

          {/* Group for White Silhouette and Floral Flourish Monogram 'A' */}
          <g fill="#FFFFFF" stroke="#FFFFFF">
            {/* The right leg of the A */}
            <path
              d="M102 38 C 114 42, 128 70, 140 102 C 146 118, 152 135, 155 142 C 152 143, 140 143, 134 142 C 128 128, 121 110, 115 95 C 105 73, 98 56, 102 38 Z"
              fill="#FFFFFF"
              strokeWidth="0.5"
            />

            {/* The woman's silhouette forming the left side & apex of 'A' */}
            <path
              d="M78 40 
                 C 86 38, 97 38, 104 40
                 C 101 49, 97 60, 93 70
                 C 88 70, 83 71, 79 73
                 C 74 76, 70 80, 71 85
                 C 73 88, 76 90, 81 92
                 C 82 95, 78 98, 76 100
                 C 78 102, 82 102, 85 104
                 C 80 108, 77 114, 80 120
                 C 83 124, 88 126, 92 127
                 C 84 133, 75 137, 65 142
                 C 58 142, 51 142, 47 141
                 C 55 133, 64 122, 69 110
                 C 74 97, 76 83, 73 70
                 C 71 61, 73 48, 78 40 Z"
              fill="#FFFFFF"
            />

            {/* Floral vine branch sprouting from the crossbar */}
            <path
              d="M90 88 
                 C 105 84, 120 74, 126 62
                 C 130 54, 132 46, 129 44
                 C 126 42, 120 48, 118 55
                 C 116 62, 108 72, 94 77 Z"
              fill="#FFFFFF"
            />
            {/* Flower bud 1 */}
            <circle cx="128" cy="46" r="4.5" fill="#FFFFFF" stroke="none" />
            {/* Flower petal / leaf small */}
            <path
              d="M136 54 C 142 50, 146 54, 143 60 C 139 64, 134 60, 136 54 Z"
              fill="#FFFFFF"
              stroke="none"
            />
            {/* Flower leaf 2 */}
            <path
              d="M118 48 C 114 43, 116 38, 121 40 C 124 43, 123 48, 118 48 Z"
              fill="#FFFFFF"
              stroke="none"
            />
            <circle cx="140" cy="62" r="3" fill="#FFFFFF" stroke="none" />

            {/* Horizontal elegant crossbar bridge connecting profile and right leg */}
            <path
              d="M80 94 C 88 93, 102 93, 117 93 C 119 96, 115 97, 104 97 C 92 97, 83 96, 80 94 Z"
              fill="#FFFFFF"
              stroke="none"
            />
          </g>

          {/* Typography below monogram */}
          <text
            x="100"
            y="160"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="18"
            fontWeight="700"
            letterSpacing="3"
          >
            AKTIFA
          </text>
          <text
            x="100"
            y="178"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="10"
            fontWeight="600"
            letterSpacing="5"
          >
            BEAUTY
          </text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              AKTIFA
            </span>
            <span className="font-serif text-xl sm:text-2xl font-medium text-pink-600">
              BEAUTY
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-pink-500">
            Aesthetic & Skin Clinic
          </span>
        </div>
      )}
    </div>
  );
};
