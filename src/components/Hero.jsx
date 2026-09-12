import Button from './ui/Button'
import { images } from '../data/images'

export default function Hero() {
  const enterAtlas = () => {
    document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-ink text-cream overflow-hidden min-h-[92vh] flex items-center">
      <div className="absolute inset-0 bg-ink">
        <img
          src={images.heroMountain}
          alt=""
          className="w-full h-full object-cover opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-28 md:py-36 w-full">
        <div className="max-w-3xl">
          <h1 className="font-display font-bold uppercase leading-[0.95] tracking-wide animate-fadeUp text-[22vw] sm:text-[9rem] md:text-[11rem]">
            NMG
          </h1>

          <p
            className="mt-6 font-display font-medium uppercase tracking-[0.18em] text-gold-light text-sm md:text-lg leading-relaxed animate-fadeUp"
            style={{ animationDelay: '150ms' }}
          >
            Every business has a destination.
            <br />
            Most don&apos;t have a map.
          </p>

          <p
            className="mt-5 text-cream/60 max-w-xl leading-relaxed animate-fadeUp"
            style={{ animationDelay: '250ms' }}
          >
            Northwest Media Group turns attention into customers for clinics and ambitious
            businesses — strategy, content and growth, engineered as one system.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fadeUp"
            style={{ animationDelay: '350ms' }}
          >
            <Button variant="primary" icon onClick={enterAtlas}>
              Enter the Atlas
            </Button>
            <Button variant="outline" to="/contact">
              Book a Free Audit
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
        <span className="text-[10px] font-display uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}