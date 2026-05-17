const items = [
  { name: 'Executive Overview', href: '#overview' },
  { name: 'Product Portfolio', href: '#portfolio' },
  { name: 'Market Growth', href: '#growth' },
  { name: 'BCG Matrix', href: '#bcg' },
  { name: 'Future Outlook', href: '#future' },
]

export default function Navigation() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#2f2aa8] text-white z-50 flex items-center shadow-lg">
        <div className="flex items-center justify-between w-full px-8">
          <div></div>

          <h1 className="text-3xl font-bold tracking-wide">
            RENESAS
          </h1>

          <a
            href="/developer.html"
            target="_blank"
            className="bg-white text-[#2f2aa8] px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Developer Information
          </a>
        </div>
      </header>

      <aside className="hidden lg:flex fixed left-0 top-16 h-screen w-56 bg-[#001f5b] text-white p-5 flex-col">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            Dashboard
          </h2>

          <p className="text-blue-200 text-sm mt-1">
            Strategic Intelligence
          </p>
        </div>

        <nav className="space-y-2">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 rounded-xl hover:bg-blue-800 transition text-sm"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto text-xs text-blue-200">
          Semiconductor Market Intelligence • 2026
        </div>
      </aside>
    </>
  )
}