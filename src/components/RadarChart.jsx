import useInView from '../hooks/useInView'

const axes = ['VISIBILITY', 'BRAND', 'CONTENT', 'ADVERTISING', 'LOYALTY', 'TECHNOLOGY']
// Scores out of 100 — shape of the filled radar
const scores = [62, 78, 55, 70, 66, 48]

const CX = 200
const CY = 170
const R = 120

function point(i, value, radius = R) {
  const angle = (Math.PI / 3) * i - Math.PI / 2
  const r = (radius * value) / 100
  return [CX + r * Math.cos(angle), CY + r * Math.sin(angle)]
}

export default function RadarChart() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  const gridLevels = [25, 50, 75, 100]
  const dataPoints = scores.map((s, i) => point(i, s).join(',')).join(' ')

  return (
    <div ref={ref} className="w-full max-w-[440px] mx-auto">
      <svg viewBox="0 0 400 340" className="w-full h-auto">
        {/* grid rings */}
        {gridLevels.map((lvl) => (
          <polygon
            key={lvl}
            points={axes.map((_, i) => point(i, lvl).join(',')).join(' ')}
            fill="none"
            stroke="#C9A227"
            strokeOpacity={lvl === 100 ? 0.5 : 0.18}
            strokeWidth="1"
          />
        ))}
        {/* spokes */}
        {axes.map((_, i) => {
          const [x, y] = point(i, 100)
          return (
            <line key={i} x1={CX} y1={CY} x2={x} y2={y} stroke="#C9A227" strokeOpacity="0.18" />
          )
        })}
        {/* data fill */}
        <polygon
          points={dataPoints}
          fill="#C9A227"
          fillOpacity={inView ? 0.28 : 0}
          stroke="#C9A227"
          strokeWidth="2"
          style={{ transition: 'fill-opacity 1.2s ease-out' }}
        />
        {/* data vertices */}
        {scores.map((s, i) => {
          const [x, y] = point(i, s)
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="#0A0A0A"
              stroke="#E5C558"
              strokeWidth="2"
              opacity={inView ? 1 : 0}
              style={{ transition: `opacity 0.4s ease-out ${i * 120}ms` }}
            />
          )
        })}
        {/* axis labels */}
        {axes.map((label, i) => {
          const [x, y] = point(i, 128)
          return (
            <text
              key={label}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#F5F1E8"
              fillOpacity="0.75"
              fontSize="11"
              fontWeight="600"
              letterSpacing="1.5"
            >
              {label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}