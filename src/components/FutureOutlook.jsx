
const milestones = [
  ['2026', 'AI infrastructure partnerships scale globally'],
  ['2027', 'GaN commercial deployments accelerate'],
  ['2028', 'EV platform integration deepens'],
  ['2030', '$7B semiconductor power opportunity'],
  ['2032', 'Advanced AI power ecosystem leadership']
]

export default function FutureOutlook() {
  return (
    <section id="future" className="p-8 pb-20">
      <div className="mb-6">
        <h2 className="text-4xl font-bold">Future Outlook 2026–2032</h2>
        <p className="text-slate-500 mt-2">
          Strategic roadmap tracking semiconductor expansion across EVs, AI infrastructure, and industrial systems.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>

        <div className="space-y-8">
          {milestones.map(([year, text]) => (
            <div key={year} className="relative pl-20">
              <div className="absolute left-4 top-2 h-8 w-8 rounded-full bg-blue-700 border-4 border-white shadow"></div>

              <div className="bg-white rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-blue-900">{year}</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Strategic Milestone
                  </span>
                </div>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
