// ...existing code...
import solana from '../assets/solana.gif'
import Burn from '../assets/burn.gif'
import maxSuppyl from '../assets/max-supply.gif'
import tax from '../assets/tax.gif'
import Card from './Card'

const cards = [
  {
    img: maxSuppyl,
    title: 'Max Supply',
    desc: '1.000.000.000',
  },
  {
    img: tax,
    title: 'Tax',
    desc: '0%',
  },
  {
    img: Burn,
    title: 'Liquidity',
    desc: 'Burnt',
  },
  {
    img: solana,
    title: 'Network',
    desc: 'Solana',
  },
]

export default function Tokenomics() {
  return (
    <section className="w-full py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <header className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
            TOKENOMICS
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {cards.map((card, idx) => (
            <div key={idx} className="h-full">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// ...existing code...