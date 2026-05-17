
const metrics = [
  {
    title: 'FY2026 Revenue',
    value: '$9B',
    desc: 'Driven primarily by automotive semiconductor expansion and AI infrastructure power management demand.'
  },
  {
    title: 'Automotive Exposure',
    value: '52%',
    desc: 'More than half of Renesas revenue comes from automotive applications and EV electronics.'
  },
  {
    title: 'GaN Opportunity',
    value: '$7B',
    desc: 'Projected long-term power semiconductor opportunity driven by hyperscalers and EV fast charging.'
  }
]

export default function ExecutiveOverview() {
  return (
    <section id="overview" className="p-8 pt-24">
      <div className="mb-8">
        <h2 className="text-5xl font-bold text-slate-900">
          Executive Overview
        </h2>

        <p className="text-slate-600 mt-4 text-lg max-w-4xl leading-relaxed">
          Renesas is strategically positioned at the center of the EV electrification,
          AI infrastructure, and industrial semiconductor transformation cycle.
          The dashboard evaluates growth acceleration, strategic positioning,
          and long-term semiconductor ecosystem opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((m) => (
          <div
            key={m.title}
            className="group bg-gradient-to-br from-[#001f5b] to-[#123c9c] text-white rounded-3xl p-7 shadow-xl hover:scale-[1.02] transition"
          >
            <p className="text-blue-200 text-sm">
              {m.title}
            </p>

            <h3 className="text-6xl font-bold mt-3">
              {m.value}
            </h3>

            <div className="mt-5 opacity-90">
              <p className="text-sm leading-relaxed">
                {m.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
