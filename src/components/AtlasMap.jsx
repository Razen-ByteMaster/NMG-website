import useInView from '../hooks/useInView'

const markers = [
  { x: 150, y: 150, label: 'EGYPT HQ', sub: 'Alexandria', hq: true },
  { x: 330, y: 105, label: 'KUWAIT', sub: '' },
  { x: 300, y: 190, label: 'KSA', sub: '' },
  { x: 365, y: 210, label: 'UAE', sub: '' },
]

export default function AtlasMap() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="0 0 460 300" className="w-full h-auto">
        <defs>
          <radialGradient id="atlasGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A227" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* graticule */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={20 + i * 52}
            y1={10}
            x2={20 + i * 52}
            y2={290}
            stroke="#C9A227"
            strokeOpacity="0.08"
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={10}
            y1={20 + i * 52}
            x2={450}
            y2={20 + i * 52}
            stroke="#C9A227"
            strokeOpacity="0.08"
          />
        ))}

        {/* stylised landmass */}
        <path
          d="M60 90 L140 60 L210 80 L250 130 L230 200 L170 240 L100 220 L50 170 Z"
          fill="#1C1C1C"
          stroke="#C9A227"
          strokeOpacity="0.35"
        />
        <path
          d="M260 90 L360 70 L410 120 L390 210 L300 230 L260 170 Z"
          fill="#1C1C1C"
          stroke="#C9A227"
          strokeOpacity="0.35"
        />
        {/* sea route */}
        <path
          d="M150 150 Q 220 120 300 190 Q 340 205 365 210"
          fill="none"
          stroke="#C9A227"
          strokeOpacity="0.5"
          strokeDasharray="5 6"
        />

        {/* markers */}
        {markers.map((m, i) => (
          <g key={m.label} opacity={inView ? 1 : 0} style={{ transition: `opacity 0.6s ease-out ${i * 200}ms` }}>
            <circle cx={m.x} cy={m.y} r={m.hq ? 26 : 16} fill="url(#atlasGlow)" />
            <circle
              cx={m.x}
              cy={m.y}
              r={m.hq ? 5 : 3.5}
              fill="#C9A227"
            >
              {m.hq && (
                <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
              )}
            </circle>
            <text
              x={m.x}
              y={m.y - 14}
              textAnchor="middle"
              fill="#F5F1E8"
              fontSize="11"
              fontWeight="700"
              letterSpacing="2"
            >
              {m.label}
            </text>
            {m.sub && (
              <text
                x={m.x}
                y={m.y + 18}
                textAnchor="middle"
                fill="#F5F1E8"
                fillOpacity="0.5"
                fontSize="10"
                letterSpacing="1.5"
              >
                {m.sub.toUpperCase()}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}