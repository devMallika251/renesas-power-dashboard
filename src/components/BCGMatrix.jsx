
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const pieData = [
  { name: 'Stars', value: 35 },
  { name: 'Cash Cows', value: 30 },
  { name: 'Question Marks', value: 20 },
  { name: 'Commoditizing', value: 15 },
]

const COLORS = ['#2563eb', '#16a34a', '#f59e0b', '#ef4444']

export default function BCGMatrix() {
  return (
    <section id="bcg" className="p-8">
      <div className="mb-6">
        <h2 className="text-4xl font-bold">Strategic BCG Matrix</h2>

        <p className="text-slate-500 mt-2">
          Portfolio prioritization framework evaluating growth potential, competitive positioning, and long-term profitability.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-3xl shadow-xl p-8">
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="bg-blue-100 rounded-3xl p-6 hover:scale-[1.01] transition">
              <h3 className="text-2xl font-bold text-blue-900">Stars</h3>

              <p className="mt-3 text-slate-700">
                GaN Power Devices and AI PMICs are positioned as Stars due to accelerating AI infrastructure demand,
                hyperscaler adoption, and superior growth trajectory.
              </p>
            </div>

            <div className="bg-emerald-100 rounded-3xl p-6 hover:scale-[1.01] transition">
              <h3 className="text-2xl font-bold text-emerald-900">Cash Cows</h3>

              <p className="mt-3 text-slate-700">
                Automotive MCUs continue generating stable high-margin revenue due to entrenched OEM relationships
                and switching barriers.
              </p>
            </div>

            <div className="bg-amber-100 rounded-3xl p-6 hover:scale-[1.01] transition">
              <h3 className="text-2xl font-bold text-amber-900">Question Marks</h3>

              <p className="mt-3 text-slate-700">
                Hyperscaler power platforms have massive growth potential but still require ecosystem scaling and market penetration.
              </p>
            </div>

            <div className="bg-rose-100 rounded-3xl p-6 hover:scale-[1.01] transition">
              <h3 className="text-2xl font-bold text-rose-900">Commoditizing</h3>

              <p className="mt-3 text-slate-700">
                Generic analog components face pricing pressure and limited strategic differentiation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#001f5b] text-white rounded-3xl shadow-xl p-6">
          <h3 className="text-2xl font-bold mb-6">Portfolio Allocation</h3>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={110}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <p className="text-blue-100 text-sm mt-4 leading-relaxed">
            The portfolio allocation highlights Renesas strategic emphasis on high-growth AI and EV semiconductor ecosystems.
          </p>
        </div>
      </div>
    </section>
  )
}
