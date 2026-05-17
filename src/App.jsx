
import Navigation from './components/Navigation'
import ExecutiveOverview from './components/ExecutiveOverview'
import ProductPortfolio from './components/ProductPortfolio'
import MarketGrowth from './components/MarketGrowth'
import BCGMatrix from './components/BCGMatrix'
import FutureOutlook from './components/FutureOutlook'

export default function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navigation />

      <main className="lg:ml-56 pt-16">
        <ExecutiveOverview />
        <ProductPortfolio />
        <MarketGrowth />
        <BCGMatrix />
        <FutureOutlook />
      </main>
    </div>
  )
}
