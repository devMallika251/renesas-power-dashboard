const products = [
  {
    title: 'PMICs',
    desc: 'Power Management ICs enabling voltage regulation for AI servers, EV systems, and embedded devices.',
    url: 'https://www.renesas.com/en/products/power-management'
  },
  {
    title: 'GaN Devices',
    desc: 'High-efficiency Gallium Nitride semiconductors enabling faster switching and thermal efficiency.',
    url: 'https://www.renesas.com/en/key-technologies/gallium-nitride-gan-power-solutions?srsltid=AfmBOopyN8TpzHcO6hcAMxv8P1CuOpOPZddGbr9WYrJY6hVFSUZWlI61'
  },
  {
    title: 'MCUs',
    desc: 'Automotive-grade microcontrollers powering ADAS, EV architectures, and industrial systems.',
    url: 'https://www.renesas.com/en/products/microcontrollers-microprocessors'
  },
  {
    title: 'Connectivity ICs',
    desc: 'Integrated connectivity ecosystem supporting industrial IoT and intelligent automotive systems.',
    url: 'https://www.renesas.com/en/products/interface-connectivity'
  }
]

export default function ProductPortfolio() {
  return (
    <section id="portfolio" className="p-8">
      <div className="mb-6">
        <h2 className="text-4xl font-bold">
          Product Portfolio Intelligence
        </h2>

        <p className="text-slate-500 mt-2">
          Strategic semiconductor ecosystem aligned with EVs, AI infrastructure,
          industrial automation, and hyperscaler growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-3xl p-6 shadow-xl border hover:border-blue-700 hover:-translate-y-1 transition"
          >
            <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold mb-5 text-xl">
              {p.title[0]}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {p.title}
            </h3>

            <p className="text-slate-600 leading-relaxed text-sm min-h-[110px]">
              {p.desc}
            </p>

            <a
              href={p.url}
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition"
            >
              Explore Product →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}