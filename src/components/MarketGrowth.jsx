
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const data = [
  { year: '2026', EV: 28, AI: 25, GaN: 18 },
  { year: '2027', EV: 35, AI: 33, GaN: 25 },
  { year: '2028', EV: 44, AI: 41, GaN: 33 },
  { year: '2030', EV: 65, AI: 72, GaN: 58 },
  { year: '2032', EV: 82, AI: 91, GaN: 74 },
]

export default function MarketGrowth() {
  return (
    <section id="growth" className="p-8">
      <div className="mb-6">
        <h2 className="text-4xl font-bold">Market Growth Engine</h2>
        <p className="text-slate-500 mt-2">
          AI infrastructure and EV electrification are accelerating power semiconductor demand globally.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-xl h-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="EV" stroke="#2563eb" strokeWidth={4} />
              <Line type="monotone" dataKey="AI" stroke="#0f172a" strokeWidth={4} />
              <Line type="monotone" dataKey="GaN" stroke="#14b8a6" strokeWidth={4} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#001f5b] text-white rounded-3xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Analyst Insight</h3>
          <p className="leading-relaxed text-blue-100">
            Renesas is strategically positioned at the convergence of EV electrification, AI infrastructure scaling,
            and high-efficiency power management adoption.
          </p>

          <div className="mt-6 space-y-4">
            <div className="bg-blue-900/40 rounded-2xl p-4">
              <p className="text-sm text-blue-200">AI Infrastructure CAGR</p>
              <h4 className="text-3xl font-bold">31%</h4>
            </div>

            <div className="bg-blue-900/40 rounded-2xl p-4">
              <p className="text-sm text-blue-200">GaN Adoption Growth</p>
              <h4 className="text-3xl font-bold">4.1x</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
